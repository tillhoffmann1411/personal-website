import React from 'react'
import { Badge } from '@/components/ui/badge'

type Props = {
    fontSize?: string,
};

export default function StatusBadge({ fontSize = 'text-2xl' }: Props) {
    // at night sleeping, at day coding, at evening eating, at morning coffee
    const getStatus = () => {
        const hour = new Date().getHours();
        if (hour >= 22 || hour < 7) {
            return '💤 Sleeping';
        } else if (hour >= 7 && hour < 9) {
            return '☕️ Coffee';
        } else if (hour >= 18 && hour < 20) {
            return '🍽 Eating';
        } else if (hour >= 20 && hour < 22) {
            return '📖 Reading';
        } else {
            return '💻 Coding';
        }
    }
    return (
        <div className='relative'>
            <Badge variant="outline" className={`${fontSize} bg-card`}>{getStatus()}</Badge>
            <span className="absolute flex h-4 w-4 -top-2 -right-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
            </span>
        </div>
    )
}
