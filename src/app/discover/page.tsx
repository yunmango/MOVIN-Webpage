"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const DISCOVER_CDN =
  "https://cdn.prod.website-files.com/698ab251345fc9ebbe049243";

interface Article {
  category: string;
  title: string;
  date: string;
  image: string;
  href: string;
}

const CATEGORY_STYLES: Record<string, string> = {
  Announcements: "bg-cyan-200/50",
  News: "bg-purple-300/50",
  Insights: "bg-lime-200/50",
};

const ARTICLES: Article[] = [
  {
    category: "Announcements",
    title: "MOVIN TRACIN Makes Its Debut at GDC 2024",
    date: "March 20, 2024",
    image: `${DISCOVER_CDN}/698acecdbe7db696ff70aec2_MOVIN%20TRACIN%20Makes%20Its%20Debut%20at%20GDC%202024.png`,
    href: "/discover/movin-tracin-makes-its-debut-at-gdc-2024",
  },
  {
    category: "News",
    title:
      "MOVIN and CUZ Launch Real-Time Motion Capture Photo Zone at Lotte World Adventure",
    date: "March 5, 2024",
    image: `${DISCOVER_CDN}/698ac4e3819c075936f3f26c_MOVIN%20and%20CUZ%20Launch%20Real-Time%20Motion%20Capture%20Photo%20Zone%20at%20Lotte%20World%20Adventure.JPG`,
    href: "/discover/movin-and-cuz-launch-real-time-motion-capture-photo-zone-at-lotte-world-adventure",
  },
  {
    category: "News",
    title:
      "Real-Time Markerless Motion Capture Startup MOVIN Secures Seed Funding from NAVER D2SF, Bluepoint Partners, and Krew Capital",
    date: "December 13, 2023",
    image: `${DISCOVER_CDN}/698abbf8d8763780c55f38f0_seed%20funding.jpg`,
    href: "/discover/real-time-markerless-motion-capture-startup-movin-secures-seed-funding-from-naver-d2sf-bluepoint-partners-and-krew-capital",
  },
  {
    category: "Insights",
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
    <section className="bg-white pb-24 pt-32">
      {/* Hero / Header */}
      <div className="mx-auto max-w-[1200px] px-6 pb-20 pt-16 text-center md:pb-28 md:pt-20">
        <ScrollReveal>
          <h1 className="font-heading text-[56px] font-bold leading-[0.95] tracking-[-0.02em] text-[#1a1a1a] md:text-[72px]">
            Discover
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-5 font-body text-base leading-[1.5] text-[#666] md:text-xl">
            Keep track of our remarkable journey of progress.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-3 font-body text-base leading-[1.5] text-[#666]">
            Please click the{" "}
            <Link
              href="https://discover.movin3d.com/kr"
              target="_blank"
              className="underline transition-opacity hover:opacity-70"
            >
              link
            </Link>{" "}
            for the Korean version.
          </p>
        </ScrollReveal>
      </div>

      {/* Articles Grid */}
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <ScrollReveal key={article.href} delay={0.1 * (i + 1)}>
              <m.article
                className="group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Category Tag */}
                <div className="mb-4">
                  <span
                    className={`inline-block rounded-full px-4 py-1.5 font-ui text-[13px] font-medium leading-[1] text-[#1a1a1a] transition-transform duration-200 group-hover:scale-105 ${CATEGORY_STYLES[article.category] ?? "bg-gray-200/50"}`}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Image with overlay */}
                <div className="relative mb-0 aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Title */}
                <h4 className="mt-3 font-body text-[16px] font-semibold leading-[24px] text-[#1a1a1a] transition-colors duration-200 group-hover:text-[#555] md:text-[17px]">
                  {article.title}
                </h4>

                {/* Date */}
                <p className="mt-3 font-body text-[14px] font-normal text-[#999] transition-opacity duration-200 group-hover:opacity-70">
                  {article.date}
                </p>
              </m.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
