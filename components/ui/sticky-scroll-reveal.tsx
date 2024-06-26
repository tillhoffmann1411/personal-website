"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Body } from './typography';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const tailwindBackgrounds = [
    "bg-background",
    "bg-secondary",
    "bg-card"
  ];

  const tailwindGradients = [
    "bg-gradient-to-br from-cyan-500 to-emerald-500",
    "bg-gradient-to-br from-pink-500 to-indigo-500",
    "bg-gradient-to-br from-orange-500 to-yellow-500",
    "bg-gradient-to-br from-purple-500 to-pink-500",
    "bg-gradient-to-br from-green-500 to-lime-500",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    tailwindGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(tailwindGradients[activeCard % tailwindGradients.length]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: tailwindBackgrounds[activeCard % tailwindBackgrounds.length],
      }}
      className="h-[30rem] w-full overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
              >
                <Body>
                  {item.description}
                </Body>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:flex h-60 w-80 rounded-md sticky top-10 overflow-hidden items-center justify-center text-white",
          contentClassName,
          backgroundGradient
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
