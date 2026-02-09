import Image from "next/image";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES } from "@/lib/constants";

const USE_CASES = [
  {
    title: "Film / VFX",
    description:
      "Bring believable motion to 3D characters for animation, previs, and VFX. TRACIN is made for indie studios and solo creators who want high-quality capture without the cost and complexity of traditional systems. Move faster from capture to production-ready motion.",
    image: IMAGES.applications05,
  },
  {
    title: "Games",
    description:
      "Capture character motion for gameplay and cinematics, then iterate directly in your engine workflow. MOVIN helps small teams prototype quickly and refine animation with less setup overhead. Great for indie studios working on tight timelines and budgets.",
    image: IMAGES.applications04,
  },
  {
    title: "VTubers",
    description:
      "Get cleaner, more expressive avatar performance in real time. TRACIN is for creators who want a step up from entry-level vision or inertial setups, and for agencies or studios supporting multiple talents. Built for reliable streaming and repeatable daily sessions.",
    image: IMAGES.applications03,
  },
  {
    title: "Live Shows / Exhibitions",
    description:
      "Power interactive stage visuals, theme parks, and outdoor installations with live motion. TRACIN stays consistent even in challenging lighting, giving crews more freedom on where and how they deploy.",
    image: IMAGES.applications02,
  },
  {
    title: "Robotics",
    description:
      "Generate motion data for learning, imitation, and control using real human movement. TRACIN fits tele-operation workflows that connect a robot with a 3D human in simulation for training and evaluation.",
    image: IMAGES.applications06,
  },
  {
    title: "Medical / Sports",
    description:
      "Capture and analyze movement for training, rehabilitation, and technique correction. TRACIN supports data-driven coaching and partnerships across fitness and sports tech, from training systems to screen golf.",
    image: IMAGES.applications01,
  },
];

export function UseCasesSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <h2 className="text-center font-ui text-[24px] md:text-[40px] font-normal text-[rgb(26,26,26)] tracking-[-0.8px]">
          Built for real-world applications
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center font-body text-base md:text-xl text-[rgb(102,102,102)]">
          MOVIN supports motion capture workflows across industries, from
          animation and streaming to large-scale venues and high-stakes
          deployment.
        </p>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {USE_CASES.map((useCase, i) => (
          <ScrollReveal key={useCase.title} delay={i * 0.1}>
            <div className="group relative h-[255px] overflow-hidden rounded-3xl">
              <Image
                src={useCase.image}
                alt={useCase.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20" />
              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-ui text-xl font-medium text-white md:text-2xl">
                  {useCase.title}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden font-body text-sm leading-relaxed text-white/90 transition-all duration-500 group-hover:max-h-40">
                  {useCase.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
