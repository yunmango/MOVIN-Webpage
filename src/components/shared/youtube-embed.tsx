"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  src: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ src, title, className }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative w-full", className)} style={{ paddingTop: "56.25%" }}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center rounded-[inherit] bg-gray-100">
          <div className="animate-pulse">
            <svg
              className="h-16 w-16 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "absolute inset-0 h-full w-full transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
