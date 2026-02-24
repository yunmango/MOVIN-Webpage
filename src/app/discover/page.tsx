import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discover - MOVIN",
  description:
    "Keep track of our remarkable journey of progress.",
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const DISCOVER_CDN =
  "https://cdn.prod.website-files.com/698ab251345fc9ebbe049243";

interface Article {
  category: string;
  categoryColor: string;
  title: string;
  date: string;
  image: string;
  href: string;
}

const ARTICLES: Article[] = [
  {
    category: "Announcements",
    categoryColor: "hsla(184.5, 100%, 68.63%, 0.50)",
    title: "MOVIN TRACIN Makes Its Debut at GDC 2024",
    date: "March 20, 2024",
    image: `${DISCOVER_CDN}/698acecdbe7db696ff70aec2_MOVIN%20TRACIN%20Makes%20Its%20Debut%20at%20GDC%202024.png`,
    href: "/discover/movin-tracin-makes-its-debut-at-gdc-2024",
  },
  {
    category: "News",
    categoryColor: "hsla(280.81, 91.49%, 63.14%, 0.50)",
    title:
      "MOVIN and CUZ Launch Real-Time Motion Capture Photo Zone at Lotte World Adventure",
    date: "March 5, 2024",
    image: `${DISCOVER_CDN}/698ac4e3819c075936f3f26c_MOVIN%20and%20CUZ%20Launch%20Real-Time%20Motion%20Capture%20Photo%20Zone%20at%20Lotte%20World%20Adventure.JPG`,
    href: "/discover/movin-and-cuz-launch-real-time-motion-capture-photo-zone-at-lotte-world-adventure",
  },
  {
    category: "News",
    categoryColor: "hsla(280.81, 91.49%, 63.14%, 0.50)",
    title:
      "Real-Time Markerless Motion Capture Startup MOVIN Secures Seed Funding from NAVER D2SF, Bluepoint Partners, and Krew Capital",
    date: "December 13, 2023",
    image: `${DISCOVER_CDN}/698abbf8d8763780c55f38f0_seed%20funding.jpg`,
    href: "/discover/real-time-markerless-motion-capture-startup-movin-secures-seed-funding-from-naver-d2sf-bluepoint-partners-and-krew-capital",
  },
  {
    category: "Insights",
    categoryColor: "hsla(75.08, 100%, 63.33%, 0.50)",
    title:
      "Research Spotlight: MOVIN, Real-time Motion Capture with a Single LiDAR",
    date: "September 17, 2023",
    image: `${DISCOVER_CDN}/698ab74252e8866d9fb8cd76_Research%20Spotlight_%20MOVIN%2C%20Real-time%20Motion%20Capture%20with%20a%20Single%20LiDAR.png`,
    href: "/discover/research-spotlight-movin-real-time-motion-capture-with-a-single-lidar",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function DiscoverPage() {
  return (
    <section className="bg-white pt-24 pb-20">
      {/* Hero / Header */}
      <div className="mx-auto max-w-[1100px] px-5 pt-12 pb-[144px] text-center md:pb-[144px]">
        <h1 className="font-ui text-[44px] font-bold leading-[1] text-black">
          Discover
        </h1>
        <p className="mt-5 font-ui text-[16px] font-normal leading-[1] text-[#333] md:text-[20px]">
          Keep track of our remarkable journey of progress.
        </p>
        <p className="mt-3 font-ui text-[16px] font-normal leading-[1.25] text-[#333]">
          Please click the{" "}
          <Link
            href="https://discover.movin3d.com/kr"
            target="_blank"
            className="underline"
          >
            link
          </Link>{" "}
          for the Korean version.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="mx-auto max-w-[1100px] px-1 md:px-0">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <article key={article.href} className="px-5">
              {/* Category Tag */}
              <div className="mb-3">
                <span
                  className="inline-block rounded-[5px] px-[15px] py-[9px] font-ui text-[14px] font-normal leading-[12px] text-black md:text-[16px]"
                  style={{ backgroundColor: article.categoryColor }}
                >
                  {article.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative mb-0 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 330px"
                />
              </div>

              {/* Title */}
              <h4 className="mt-[10px] font-ui text-[16px] font-medium leading-[24px] text-[#1a1a1a] md:text-[18px]">
                {article.title}
              </h4>

              {/* Date */}
              <p className="mt-4 font-ui text-[14px] font-normal text-[#1a1a1a]">
                {article.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
