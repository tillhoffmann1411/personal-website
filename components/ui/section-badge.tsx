import React from 'react'

type Props = {
    children: React.ReactNode;
};

export default function SectionBadge({ children }: Props) {
  return (
    <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm mx-auto">{ children }</div>
  )
}
