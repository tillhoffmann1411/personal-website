import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
// import required modules
import BlogCard from './blog-card';
import { BlogPost } from '@/types/definitions';

type Props = {
    articles: BlogPost[];
};

const BlogCarousel: React.FC<Props> = ({ articles = [] }) => {
    return (
        <div className="max-w-vw overflow-hidden md:overflow-visible">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {articles.map((article) => (
                        <CarouselItem key={article.title} className="basis-11/12 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
                                <BlogCard {...article} />
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

export default BlogCarousel;