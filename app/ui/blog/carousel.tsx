import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import BlogCard from './blog-card';
import { BlogPost } from '../../lib/definitions';

type Props = {
    articles: BlogPost[];
};

const Carousel: React.FC<Props> = ({ articles = [] }) => {
    const getSlidesPerView = (nr: number) => articles.length > nr ? nr : articles.length;

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
            className="articles-carousel"
        >
            {articles.length > 0 && articles.map(a => (
                <SwiperSlide key={a.guid}>
                    <BlogCard {...a} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;