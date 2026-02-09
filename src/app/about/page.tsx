import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About MOVIN - Company History & Mission",
  description:
    "From Human Motion to Physical AI. MOVIN makes high-fidelity motion capture effortless and ubiquitous.",
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

interface TimelineEvent {
  month: string;
  title: string;
  description?: string;
  image?: string;
  isHighlight?: boolean; // purple "MOVIN Founded"
}

interface TimelineYear {
  year: string;
  events: TimelineEvent[];
}

const TIMELINE_DATA: TimelineYear[] = [
  {
    year: "2025",
    events: [
      {
        month: "11.",
        title: "DAN 25 & G-STAR 25",
        description: "COEX, 6-7 November / BEXCO, 13-15 November",
      },
      {
        month: "10.",
        title: "MOVIN\u00A0Studio v2.0 Released",
        description:
          "Native Hand Tracking & Advanced FK, IK Retargeting Supported",
      },
      {
        month: "08.",
        title: "SIGGRAPH 25",
        description: "Vancouver, 10-14 August",
        image: IMAGES.historySig25,
      },
      {
        month: "08.",
        title: "Launch of New MOVIN\u00A0TRACIN",
        description:
          "Smaller, yet Smarter; Bring studio-quality mocap anywhere in a carry-on bag",
        image: IMAGES.historyNewMovin,
      },
      {
        month: "03.",
        title: "GDC 2025",
        description: "Live Dance Party Booth\u2014Come and Enjoy!",
        image: IMAGES.historyGdc25,
      },
      {
        month: "03.",
        title: "Investment Secured",
        description:
          "Atinum Investment, DSC Investment & Schmidt, Naver D2SF, and Krew Capital",
        image: IMAGES.historyInvestment2,
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        month: "09.",
        title: "Daejeon Arts Center & KAIST",
        description: "Science and Art Week Project",
      },
      {
        month: "07.",
        title: "SIGGRAPH 24",
        description: "Real-Time LIVE Presenter",
        image: IMAGES.historySig24,
      },
      {
        month: "05.",
        title: "GDC 2024",
        description: "Launch of MOVIN TRACIN - the first",
        image: IMAGES.historyGdc24,
      },
      {
        month: "02.",
        title: "Lotte World Adventure",
        description: "35th Anniversary Facade Interactive Photo Zone",
        image: IMAGES.historyLotte,
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        month: "12.",
        title: "Content Accelerating Program",
        description: "<Blockbuster> 1st Prize Awarded",
      },
      {
        month: "11.",
        title: "Investment Secured",
        description: "Bluepoint Partners, Naver D2SF, and Krew Capital",
        image: IMAGES.historyInvestment,
      },
      {
        month: "10.",
        title: "2023 Data Voucher Program",
      },
      {
        month: "10.",
        title: "Naver D2SF Campus Tech Startup Contest",
        image: IMAGES.historyD2sf,
      },
      {
        month: "10.",
        title: "MOVIN Founded",
        isHighlight: true,
      },
      {
        month: "06.",
        title: "KAIST E*5 Startup Competition",
        description: "Grand Prize",
        image: IMAGES.historyKaist,
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Hero Section                                                               */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="bg-white pt-24 pb-8">
      <div className="mx-auto max-w-[1400px] px-5 md:px-[116px] md:ml-5">
        <div className="max-w-[780px]">
          <ScrollReveal>
            <h1 className="font-body text-[36px] leading-[54px] font-normal text-[#333] md:text-[48px] md:leading-[72px]">
              Every person moves like they write, with rhythm, intention, and
              personality. MOVIN turns motion into immersion, on an endless
              canvas of unbounded movement and creativity, all brought to life
              by technology.
            </h1>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  History / Timeline Section                                                 */
/* -------------------------------------------------------------------------- */

function HistorySection() {
  return (
    <section className="bg-white px-5 py-12 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Title */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="text-[14px] font-extrabold text-[#c04bf7]">
              MOVIN HISTORY
            </span>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="space-y-16">
          {TIMELINE_DATA.map((yearData) => (
            <div key={yearData.year}>
              {/* Year Header */}
              <ScrollReveal>
                <div className="mb-8">
                  <h2 className="text-[22px] md:text-[28px] font-bold text-[#333]">
                    {yearData.year}
                  </h2>
                </div>
              </ScrollReveal>

              {/* Events */}
              <div className="space-y-0">
                {yearData.events.map((event, i) => (
                  <ScrollReveal key={`${yearData.year}-${i}`} delay={0.03 * i}>
                    <div className="flex gap-5">
                      {/* Month */}
                      <div className="shrink-0 pt-0">
                        <span className="text-[16px] md:text-[24px] font-normal text-[#333]">
                          {event.month}
                        </span>
                      </div>

                      {/* Event Info */}
                      <div className="flex-1 min-w-0">
                        <div className="pb-6 md:pb-10">
                          <h3
                            className={`text-[16px] md:text-[24px] font-bold ${
                              event.isHighlight
                                ? "text-[#c04bf7]"
                                : "text-[#333]"
                            }`}
                          >
                            {event.title}
                          </h3>
                          {event.description && (
                            <p className="mt-1 text-[16px] md:text-[24px] font-normal text-[#333]">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Image (if any) */}
                      {event.image && (
                        <div className="hidden md:block shrink-0">
                          <Image
                            src={event.image}
                            alt={event.title}
                            width={400}
                            height={200}
                            className="h-auto w-[300px] lg:w-[400px] object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <HistorySection />
    </>
  );
}
