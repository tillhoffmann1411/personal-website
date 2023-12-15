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
        <div className='flex justify-center items-center flex-wrap'>
            <button
                key={'all'}
                onClick={() => onClick(undefined)}
                className={classNames(
                    "inline-flex items-center rounded-full mb-4 text-white px-4 py-4 border-none mr-2 hover:bg-purple-900 dark:text-black dark:hover:bg-purple-300",
                    selected === undefined ? 'bg-purple-800 dark:bg-purple-200' : 'bg-black dark:bg-white'
                )}
            >
                <MdFilterListOff />
            </button>
            {options.map(e => (
                <button
                    key={e}
                    onClick={() => onClick(e)}
                    className={classNames(
                        "inline-flex items-center mb-4 rounded-full text-white px-4 py-2 border-none mr-2 hover:bg-purple-900 dark:text-black dark:hover:bg-purple-300",
                        selected === e ? 'bg-purple-800 dark:bg-purple-200' : 'bg-black dark:bg-white'
                    )}
                >
                    <span className="mr-2 text-xl">
                        {getIcon(e)}
                    </span>
                    {e}
                </button>
            ))}
        </div>
    )
}

export default Filter;