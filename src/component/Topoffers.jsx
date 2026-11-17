import {
  FiArrowRight,
  FiTruck,
  FiHeadphones,
  FiShoppingBag,
  FiPackage,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const IMAGES = {
  main: "",
  summer: "",
  dealBg: "",
};

export const features = [
  { icon: FiTruck, title: "Free Shipping", text: "Free shipping on all your order" },
  { icon: FiHeadphones, title: "Customer Support 24/7", text: "Instant access to Support" },
  { icon: FiShoppingBag, title: "100% Secure Payment", text: "We ensure your money is save" },
  { icon: FiPackage, title: "Money-Back Guarantee", text: "30 Days Money-Back Guarantee" },
];

export default function Topoffers({ banner }) {
  const navigate = useNavigate();

  const goproduct = () => {
    navigate('/30product');
  };

  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 py-5 font-sans sm:px-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {/* ===================== Main Green Banner ===================== */}
        <div className="group relative min-h-[260px] overflow-hidden rounded-lg bg-gradient-to-br from-[#006e1c] via-[#009a2b] to-[#00c24a] sm:min-h-[300px] lg:col-span-2 lg:min-h-[336px]">
          {/* soft glow circles */}
          <span className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />
          <span className="pointer-events-none absolute -bottom-20 right-1/4 h-56 w-56 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

          {/* Image */}
          {banner?.image && (
            <img
              src={banner.image}
              alt={banner.title || "Fresh organic food"}
              className="pointer-events-none absolute bottom-0 right-0 h-[75%] sm:h-[85%] lg:h-[95%] w-auto max-w-[45%] sm:max-w-[48%] lg:max-w-[48%] object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}

          {/* Content */}
          <div className="relative z-10 flex h-full min-h-[260px] w-full max-w-[55%] sm:max-w-[52%] lg:max-w-[50%] flex-col justify-center gap-2.5 sm:gap-3.5 p-4 sm:p-7 lg:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-white line-clamp-2">
              {banner?.subtitle || banner?.title || "Fresh & Healthy Organic Food"}
            </h2>

            <div className="flex items-stretch gap-2.5 sm:gap-3">
              <span className="w-px bg-white/40 shrink-0" />
              <div className="space-y-1">
                <p className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-white">
                  Sale up to
                  <span className="rounded-md bg-[#FF8A00] px-2 py-0.5 text-xs sm:text-sm font-semibold uppercase text-white transition-transform duration-300 group-hover:scale-110">
                    30% OFF
                  </span>
                </p>
                <p className="text-[11px] sm:text-xs text-white/80">
                  Free shipping on all your order.
                </p>
                {banner?.description && (
                  <p className="text-xs sm:text-sm font-medium text-white/90 max-w-[220px] sm:max-w-[280px] lg:max-w-[320px] break-words line-clamp-3">
                    {banner.description}
                  </p>
                )}
              </div>
            </div>

            {/* Button */}
            <button
              onClick={goproduct}
              className="group/btn relative mt-1 flex w-fit items-center gap-2 overflow-hidden rounded-full bg-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#00B207] shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-xl active:scale-95"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#00B207] transition-transform duration-500 group-hover/btn:scale-x-100" />
              <span className="relative">Shop now</span>
              <FiArrowRight className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
            </button>
          </div>
        </div>

        {/* ===================== Side Banners ===================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 lg:gap-5">
          {/* Summer sale */}
          <div className="group relative min-h-[170px] overflow-hidden rounded-lg bg-[#f3f3f3] transition-shadow duration-300 hover:shadow-xl sm:min-h-[180px] lg:min-h-0">
            {IMAGES.summer && (
              <img
                src={IMAGES.summer}
                alt="Summer sale"
                className="absolute bottom-0 right-0 h-full w-auto max-w-[60%] object-contain object-right-bottom transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
              />
            )}

            <div className="relative z-10 flex h-full flex-col justify-center gap-1.5 p-5">
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-800">
                Summer Sale
              </span>
              <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                75% OFF
              </h3>
              <p className="text-xs text-gray-500">Only Fruit &amp; Vegetable</p>

              <button className="group/link mt-1.5 flex w-fit items-center gap-2 text-sm font-semibold text-[#00B207] transition-colors duration-300 hover:text-[#2C742F]">
                <span className="relative">
                  Shop Now
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
                </span>
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
              </button>
            </div>
          </div>

          {/* Best deal */}
          <div className="group relative flex min-h-[170px] items-center justify-center overflow-hidden rounded-lg bg-[#0d3b12] transition-shadow duration-300 hover:shadow-xl sm:min-h-[180px] lg:min-h-0">
            {IMAGES.dealBg && (
              <img
                src={IMAGES.dealBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-110"
              />
            )}
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d3b12]/60 to-black/40" />

            <div className="relative z-10 flex flex-col items-center gap-1.5 p-5 text-center">
              <span className="text-[11px] font-medium uppercase tracking-wider text-white">
                Best Deal
              </span>
              <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">
                Special Products
                <br />
                Deal of the Month
              </h3>

              <button className="group/link mt-1.5 flex items-center gap-2 text-sm font-semibold text-[#00B207] transition-colors duration-300 hover:text-white">
                <span className="relative">
                  Shop Now
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-current transition-all duration-300 group-hover/link:w-full" />
                </span>
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Info strip ===================== */}
      <div className="mt-4 grid grid-cols-1 gap-1 rounded-lg bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:grid-cols-2 lg:mt-5 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group flex cursor-pointer items-center gap-3 rounded-md p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00B207]/5 sm:p-4"
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full text-[#00B207] transition-all duration-300 group-hover:bg-[#00B207] group-hover:text-white group-hover:shadow-lg">
              <Icon className="relative h-6 w-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[360deg]" />
            </span>
            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#00B207]">
                {title}
              </h4>
              <p className="text-xs text-gray-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
