import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  mp4Src: string;
  webmSrc?: string;
  className?: string;
  overlayClassName?: string;
  preload?: "auto" | "metadata" | "none";
}

export function VideoBackground({
  mp4Src,
  webmSrc,
  className,
  overlayClassName,
  preload = "metadata",
}: VideoBackgroundProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload={preload}
        className="h-full w-full object-cover"
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={mp4Src} type="video/mp4" />
      </video>
      {overlayClassName && (
        <div className={cn("absolute inset-0", overlayClassName)} />
      )}
    </div>
  );
}
