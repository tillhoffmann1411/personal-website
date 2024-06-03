"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { cn } from '../../lib/utils';
import { AnimatedTooltip } from './animated-tooltip';

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer font-bold hover:text-primary select-none"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-2"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative dark:border-white/[0.2] shadow-input flex justify-center space-x-8 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  disabled,
}: {
  title: string;
  description: string;
  href: string;
  src: string | StaticImageData;
  disabled?: boolean;
}) => {
  const link = (
    <Link href={disabled ? '' : href} onClick={(e) => disabled && e.preventDefault()} className={cn("flex space-x-2 group rounded-lg p-4", disabled ? "cursor-default" : "hover:bg-card transition-color")}>
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className={cn("flex-shrink-0 rounded-md shadow-2xl", !disabled && "group-hover:shadow-lg transition-shadow")}
      />
      <div>
        <h4 className={cn("text-xl font-bold mb-1 text-foreground", disabled ? "text-foreground/70" : "group-hover:text-primary")}>
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  )
  return disabled ? <AnimatedTooltip title="Coming soon" description="Stay tuned for updates!">{link}</AnimatedTooltip> : link;
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-foreground py-1 px-2 rounded-md hover:text-primary hover:bg-card transition-colors"
    >
      {children}
    </Link>
  );
};
