import { motion, useInView, type Variants } from "framer-motion";
import type { ElementType, ReactNode, RefObject } from "react";

type TimelineContentProps = {
  as?: ElementType;
  animationNum: number;
  timelineRef: RefObject<HTMLElement | null>;
  customVariants: Variants;
  className?: string;
  children?: ReactNode;
  once?: boolean;
  amount?: number;
};

export function TimelineContent({
  as = "div",
  animationNum,
  timelineRef,
  customVariants,
  className,
  children,
  once = true,
  amount = 0.1,
}: TimelineContentProps) {
  const isInView = useInView(timelineRef, { once, amount });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComp = (motion as any)[as as string] ?? motion.div;

  return (
    <MotionComp
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      className={className}
    >
      {children}
    </MotionComp>
  );
}
