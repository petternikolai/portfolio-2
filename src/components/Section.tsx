import { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section({
  id,
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`custom-height mx-auto flex max-w-7xl flex-col px-4 pt-16 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}
