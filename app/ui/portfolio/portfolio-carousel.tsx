import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import ProjectCard from './project-card';
import { Project } from '../../lib/definitions';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type Props = {
    projects: Project[];
};

const PortfolioCarousel: React.FC<Props> = ({ projects = [] }) => {
    return (
        <div className="max-w-vw overflow-hidden md:overflow-visible">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem key={project.title} className="basis-11/12 lg:basis-1/2">
                            <div className="p-1 h-full">
                                <ProjectCard {...project} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default PortfolioCarousel;