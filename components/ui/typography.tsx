
import React from 'react'
import { cn } from '../../lib/utils'



export function Headline1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-[2.5rem] font-extrabold tracking-tight md:text-[3rem] lg:text-[3rem] xl:text-[4rem]">{children}</h1>
  )
}

export function Headline2({ children, props, className }: { children: React.ReactNode, props?: React.HTMLAttributes<HTMLHeadingElement>, className?: string }) {
  return (
    <h2 className={cn(className, "scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0 lg:text-4xl")} {...props}>{children}</h2>
  )
}

export function Headline3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>
  )
}

export function Headline4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>
  )
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="scroll-m-20 text-2xl font-semibold tracking-tight text-muted-foreground">{children}</p>
  )
}

export function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="leading-7 [&:not(:first-child)]:mt-6 break-words">{children}</div>
  )
}

export function Muted({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm text-muted-foreground">{children}</div>
  )
}

