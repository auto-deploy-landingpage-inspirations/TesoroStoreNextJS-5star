import Card from '@components/common/card';
import SectionHeader from '@components/common/section-header';
import Carousel from '@components/ui/carousel/carousel';
import CardLoader from '@components/ui/loaders/card-loader';
import CardRoundedLoader from '@components/ui/loaders/card-rounded-loader';
import { useCategoriesQuery } from '@framework/category/get-all-categories';
import { ROUTES } from '@utils/routes';
import Alert from '@components/ui/alert';
import { SwiperSlide } from 'swiper/react';
import {Fade} from "react-reveal"

interface CategoriesProps {
  sectionHeading: string;
  className?: string;
  type?: 'rounded' | 'circle';
}

const breakpoints = {
  '1720': {
    slidesPerView: 8,
    spaceBetween: 28,
  },
  '1400': {
    slidesPerView: 7,
    spaceBetween: 28,
  },
  '1025': {
    slidesPerView: 6,
    spaceBetween: 28,
  },
  '768': {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  '500 ': {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  '0': {
    slidesPerView: 3,
    spaceBetween: 12,
  },
};

const breakpointsCircle = {
  '1720': {
    slidesPerView: 8,
    spaceBetween: 48,
  },
  '1400': {
    slidesPerView: 7,
    spaceBetween: 32,
  },
  '1025': {
    slidesPerView: 6,
    spaceBetween: 28,
  },
  '768': {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  '500 ': {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  '0': {
    slidesPerView: 3,
    spaceBetween: 12,
  },
};

const CategoryBlock: React.FC<CategoriesProps> = ({
  className = 'mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0 mx-0 w-full drop-shadow-lg',
  sectionHeading,
  type = 'circle',
}) => {
  const { data, isLoading, error } = useCategoriesQuery({});
  // console.log("DATa in category block:");
  // console.log(data)
  return (
    <div className={className+" bg-category-section"} style={
      {
        backgroundColor: '#efe3fc',
        borderRadius: '12px',
        padding: '10px'
      }
    }>
      <SectionHeader sectionHeading={sectionHeading} boxshadow={true}/>
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <Fade bottom>
        
          {isLoading && !data
            ? 
            (
              <Carousel
                breakpoints={type === 'rounded' ? breakpoints : breakpointsCircle}
                buttonClassName="-mt-8 md:-mt-10"
              >
                {Array.from({ length: 5 }).map((_, idx) => {
                if (type === 'rounded') {
                  return (
                    <SwiperSlide key={`card-rounded-${idx}`}>
                      <CardRoundedLoader uniqueKey={`card-rounded-${idx}`} />
                    </SwiperSlide>
                  );
                }
                return (
                  <SwiperSlide key={`card-circle-${idx}`}>
                    <CardLoader uniqueKey={`card-circle-${idx}`} />
                  </SwiperSlide>
                );
              })}
            </Carousel>
            ): 
            (
              <Carousel
                breakpoints={type === 'rounded' ? breakpoints : breakpointsCircle}
                buttonClassName="-mt-8 md:-mt-10"
              >
                {data?.categoryRef.map((category:any) => (
                  <SwiperSlide key={`category--key-${category._id}`}>
                    <Card
                      item={category}
                      href={`${ROUTES.CATEGORY}/${category.slug}`}
                      variant={type}
                      effectActive={true}
                      size={type === 'rounded' ? 'medium' : 'small'}
                    />
                  </SwiperSlide>
                ))}
              </Carousel>)
              }
        </Fade>
      )}
    </div>
  );
};

export default CategoryBlock;
