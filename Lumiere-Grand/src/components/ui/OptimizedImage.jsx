import { useEffect, useMemo, useRef, useState } from "react";
import {
  getResponsiveImageSet,
  getTransparentPixel,
} from "../../utils/imageHelpers";

function OptimizedImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  sizes = "100vw",
  responsiveWidths,
  quality,
  priority = false,
  className = "",
  imgClassName = "",
  blurSrc,
  lazy = true,
  onLoad,
}) {
  const rootRef = useRef(null);
  const [isInView, setIsInView] = useState(priority || !lazy);
  const [isLoaded, setIsLoaded] = useState(false);

  const responsiveImage = useMemo(
    () =>
      getResponsiveImageSet(src, {
        widths: responsiveWidths,
        quality,
      }),
    [src, responsiveWidths, quality],
  );

  useEffect(() => {
    if (priority || !lazy || isInView) return undefined;

    const node = rootRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "180px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView, lazy, priority]);

  const activeSrc = isInView || priority ? responsiveImage.src : getTransparentPixel();
  const activeSrcSet =
    isInView || priority ? responsiveImage.fallbackSrcSet : undefined;
  const activeWebpSrcSet =
    isInView || priority ? responsiveImage.webpSrcSet : undefined;
  const activeBlurSrc = blurSrc ?? responsiveImage.blurSrc;

  const wrapperStyle = aspectRatio
    ? { aspectRatio }
    : width && height
      ? { aspectRatio: `${width} / ${height}` }
      : undefined;

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden ${className}`.trim()}
      style={wrapperStyle}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        {activeBlurSrc ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
              style={{ backgroundImage: `url("${activeBlurSrc}")` }}
            />
            <div className="absolute inset-0 bg-[rgba(248,246,243,0.28)]" />
          </>
        ) : (
          <div className="absolute inset-0 animate-pulse bg-[#efe9e4]" />
        )}
      </div>

      <picture>
        {activeWebpSrcSet ? (
          <source type="image/webp" srcSet={activeWebpSrcSet} sizes={sizes} />
        ) : null}
        <img
          src={activeSrc}
          srcSet={activeSrcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority || !lazy ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding={priority ? "sync" : "async"}
          onLoad={(event) => {
            setIsLoaded(true);
            onLoad?.(event);
          }}
          className={`h-full w-full ${imgClassName}`.trim()}
        />
      </picture>
    </div>
  );
}

export default OptimizedImage;
