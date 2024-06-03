import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
    link: string;
    title: string;
};

const OpenButton: React.FC<Props> = ({ link, title }) => {
    return (
        <Button asChild>
            <Link href={link}>
                {title}
            </Link>
        </Button>
    );
};

export default OpenButton;