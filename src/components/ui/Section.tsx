import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  soft?: boolean;
  as?: ElementType;
  id?: string;
  ariaLabelledby?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  soft = false,
  as: Tag = "section",
  id,
  ariaLabelledby,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("py-16 md:py-24", soft && "bg-bg-soft", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
