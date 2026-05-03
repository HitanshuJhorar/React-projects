const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

function isUnsplashSource(src) {
  return typeof src === "string" && src.includes("images.unsplash.com");
}

function buildUnsplashUrl(src, width, { quality = 72, format } = {}) {
  const url = new URL(src);

  url.searchParams.set("fit", "crop");
  url.searchParams.set("q", String(quality));
  url.searchParams.set("w", String(width));

  if (format) {
    url.searchParams.set("fm", format);
  } else {
    url.searchParams.set("auto", "format");
  }

  return url.toString();
}

export function getResponsiveImageSet(
  src,
  { widths = [480, 768, 1024, 1440], quality = 72 } = {},
) {
  if (!isUnsplashSource(src)) {
    return {
      src,
      fallbackSrcSet: undefined,
      webpSrcSet: undefined,
      blurSrc: undefined,
    };
  }

  const uniqueWidths = [...new Set(widths)].sort((a, b) => a - b);
  const largestWidth = uniqueWidths[uniqueWidths.length - 1];

  return {
    src: buildUnsplashUrl(src, largestWidth, { quality }),
    fallbackSrcSet: uniqueWidths
      .map((width) => `${buildUnsplashUrl(src, width, { quality })} ${width}w`)
      .join(", "),
    webpSrcSet: uniqueWidths
      .map(
        (width) =>
          `${buildUnsplashUrl(src, width, { quality, format: "webp" })} ${width}w`,
      )
      .join(", "),
    blurSrc: buildUnsplashUrl(src, 32, { quality: 28, format: "webp" }),
  };
}

export function getTransparentPixel() {
  return TRANSPARENT_PIXEL;
}
