import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import ProjectCard from './project-card';
import { Project } from '../../lib/definitions';

type Props = {
    projects: Project[];
};

const Carousel: React.FC<Props> = ({ projects = [] }) => {
    const getSlidesPerView = (nr: number) => projects.length > nr ? nr : projects.length;
    return (
        <Swiper
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: getSlidesPerView(2),
                },
                1280: {
                    slidesPerView: getSlidesPerView(3),
                },
            }}
            spaceBetween={30}
            centeredSlides={false}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="projects-carousel"
        >
            {projects.length > 0 && projects.map(e => (
                <SwiperSlide key={e.title}>
                    <ProjectCard {...e} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;