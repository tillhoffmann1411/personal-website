import { useState } from 'react';

import { MdFilterListOff } from 'react-icons/md';
import {
    BiLogoAngular,
    BiLogoReact,
    BiLogoNodejs,
    BiLogoDjango,
    BiLogoTypescript,
    BiLogoPython,
} from "react-icons/bi";
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const TECH_TO_ICON: { [name: string]: React.ReactElement } = {
    typescript: <BiLogoTypescript />,
    react: <BiLogoReact />,
    nodejs: <BiLogoNodejs />,
    angular: <BiLogoAngular />,
    python: <BiLogoPython />,
    django: <BiLogoDjango />,
}

const getIcon = (tech: string) => {
    return TECH_TO_ICON[tech.toLowerCase().replace('.', '')];
}

type Props = {
    options: string[];
    onChange: (filter: string | undefined) => void;
};

const Filter: React.FC<Props> = ({ options = [], onChange }) => {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const onClick = (e: string | undefined) => {
        setSelected(e);
        onChange(e);
    };

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='flex justify-center items-center'>
            <ToggleGroup type="single" className='flex-wrap gap-2'>
                <ToggleGroupItem
                    variant="outline"
                    value="all"
                    size="lg"
                    aria-label={'all'}
                    key={'all'}
                    onClick={() => onClick(undefined)}
                >
                    <MdFilterListOff />
                </ToggleGroupItem>
                {options.map(e => (
                    <ToggleGroupItem
                        variant="outline"
                        aria-label={e}
                        key={e}
                        value={e}
                        onClick={() => onClick(e)}
                    >
                        <span className="mr-2 text-xl">
                            {getIcon(e)}
                        </span>
                        {e}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
        </div>
    )
}

export default Filter;