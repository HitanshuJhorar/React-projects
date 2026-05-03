import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "../ui/OptimizedImage";
import {
  BalconyIcon,
  BathIcon,
  BedIcon,
  ButlerIcon,
  CocktailIcon,
  DiningIcon,
  GardenIcon,
  MiniBarIcon,
  PatioIcon,
  PianoIcon,
  PoolIcon,
  ScreenIcon,
  ShieldIcon,
  ShowerIcon,
  SnowIcon,
  ViewIcon,
  WifiIcon,
  WorkspaceIcon,
} from "../icons/LuxuryIcons";

const featureIconMap = {
  AC: SnowIcon,
  "High-speed WiFi": WifiIcon,
  "King Bed": BedIcon,
  "Mini Bar": MiniBarIcon,
  "Separate Living Area": PatioIcon,
  "Soaking Tub": BathIcon,
  "24/7 Butler Service": ButlerIcon,
  "Private Balcony": BalconyIcon,
  "Dedicated Workspace": WorkspaceIcon,
  "Espresso Machine": CocktailIcon,
  "Lounge Access": ScreenIcon,
  "Panoramic Views": ViewIcon,
  "Grand Piano": PianoIcon,
  "Private Pool Access": PoolIcon,
  "Dedicated Butler": ButlerIcon,
  "Private Patio": PatioIcon,
  "Outdoor Shower": ShowerIcon,
  "Direct Garden Access": GardenIcon,
  "Formal Dining Room": DiningIcon,
  "Grand Master Bath": BathIcon,
  "Private Security Access": ShieldIcon,
  "Premium Wet Bar": CocktailIcon,
};

function RoomCard({
  title,
  price,
  image,
  features = [],
  description,
  compact = false,
}) {
  if (compact) {
    return (
      <motion.article
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.985 }}
        className="interaction-surface group flex h-full flex-col overflow-hidden rounded-xl border border-[#f1e7e2] bg-white shadow-sm hover:shadow-xl"
      >
        <div className="interaction-image-wrap">
          <OptimizedImage
            src={image}
            alt={title}
            lazy
            sizes="(max-width: 768px) 80vw, (max-width: 1280px) 33vw, 400px"
            responsiveWidths={[360, 540, 720]}
            aspectRatio="5 / 4"
            imgClassName="interaction-image rounded-t-xl object-cover object-bottom"
          />
          <div className="interaction-image-overlay" />
        </div>
        <div className="flex h-full flex-col justify-between gap-5 px-5 pb-5 pt-5 text-left md:px-6 md:pb-6">
          <div>
            <h3 className="font-display text-[31px] font-semibold leading-none text-[#1d1716]">
              {title}
            </h3>
            <p className="mt-4 min-h-[52px] overflow-hidden text-[14px] leading-[1.75] text-[#7b7470] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
              {description}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="font-body text-[13px] text-[#d17d89]">
              <span className="text-[30px] font-semibold leading-none">{price}</span> /night
            </p>
            <span className="soft-link text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6f6562] group-hover:text-[#d98c8c]">
              Details <span className="ml-1">&gt;</span>
            </span>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.985 }}
      className="interaction-surface group flex h-full flex-col overflow-hidden rounded-xl border border-[#f1e7e2] bg-white shadow-sm hover:shadow-xl"
    >
      <div className="interaction-image-wrap">
        <OptimizedImage
          src={image}
          alt={title}
          lazy
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          responsiveWidths={[420, 640, 840]}
          className="h-52 sm:h-56 md:h-[270px]"
          imgClassName="interaction-image rounded-t-xl object-cover object-bottom"
        />
        <div className="interaction-image-overlay" />
      </div>

      <div className="flex h-full flex-col justify-between px-5 pb-5 pt-5 md:px-6">
        <div>
          <div className="flex items-start justify-between gap-5">
            <h3 className="font-display text-[35px] leading-none text-[#1A1A1A]">
              {title}
            </h3>
            <p className="shrink-0 pt-1 text-[14px] font-medium text-[#B76E79]">
              <span className="text-[30px] leading-none">{price}</span> /night
            </p>
          </div>

          <ul className="mt-5 min-h-[140px] space-y-3 border-b border-[#EFE8E3] pb-5">
            {features.slice(0, 4).map((feature) => {
              const Icon = featureIconMap[feature] ?? BedIcon;
              return (
                <li key={feature} className="flex items-center gap-3 text-[14px] text-[#6B6B6B]">
                  <Icon className="h-4 w-4 text-[#8A8A8A]" />
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <Link
          to="/contact"
          className="soft-link mt-5 flex items-center justify-between text-[16px] font-medium text-[#B76E79]"
        >
          <span>Book Now</span>
          <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
            &gt;
          </span>
        </Link>
      </div>
    </motion.article>
  );
}

export default RoomCard;

