
import React from 'react'



export function Headline1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="scroll-m-20 text-[2.5rem] font-extrabold tracking-tight md:text-[3rem] lg:text-[3rem] xl:text-[4rem]">{children}</h1>
  )
}

export function Headline2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0 lg:text-4xl">{children}</h2>
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

export function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 break-words">{children}</p>
  )
}

export function Muted({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-muted-foreground">{children}</p>
  )
}

