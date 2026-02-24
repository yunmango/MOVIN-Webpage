import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-gray-200",
        className
      )}
    />
  );
}

export function VideoSkeleton({ className }: SkeletonProps) {
  return (
    <div className={cn("relative flex items-center justify-center bg-gray-100", className)}>
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
  );
}
