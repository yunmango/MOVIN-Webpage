import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover - MOVIN",
  description: "Keep track of our remarkable journey of progress.",
};

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
