import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  fullWidth = false,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-14 md:py-20 lg:py-28", className)}>
      {fullWidth ? (
        children
      ) : (
        <div className="mx-auto max-w-[1200px] px-5 md:px-6">{children}</div>
      )}
    </section>
  );
}
