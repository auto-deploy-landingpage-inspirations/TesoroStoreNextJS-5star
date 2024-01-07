// import Card from '@components/common/card';
import Carousel from '@components/ui/carousel/carousel';
// import CardLoader from '@components/ui/loaders/card-loader';
import CardRoundedLoader from '@components/ui/loaders/card-rounded-loader';
import { useCategoriesQuery } from '@framework/category/get-all-categories';
// import { ROUTES } from '@utils/routes';
import Alert from '@components/ui/alert';
import { SwiperSlide } from 'swiper/react';
import {Fade} from "react-reveal"
import SectionHeader2 from '@components/common/sectionHeader2';
import React from 'react';

const color = '#F6C0C9'
const stroke = 'border-gray-400'

interface CategoriesProps {
  sectionHeading?: string;
  className?: string;
  type?: 'rounded' | 'circle';
}

const breakpoints = {
  '1720': {
    slidesPerView: 5,
    spaceBetween: 28,
  },
  '1400': {
    slidesPerView: 5,
    spaceBetween: 28,
  },
  '1025': {
    slidesPerView: 5,
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
    slidesPerView: 4,
    spaceBetween: 36,
  },
  '1400': {
    slidesPerView: 4,
    spaceBetween: 28,
  },
  '1025': {
    slidesPerView: 3,
    spaceBetween: 24,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '500 ': {
    slidesPerView: 2,
    spaceBetween: 14,
  },
  '0': {
    slidesPerView: 1,
    spaceBetween: 8,
  },
};


const ProductCard: React.FC<{data?: any}> = ({
  data
}) => {
    return (
        <div key={data? data.item:'1'} className='drop-shadow-lg rounded-lg hover:drop-shadow-2xl w-full h-full'>
            <div className="pt-3 pb-5 md:pb-1 px-4 md:px-1 bg-gray-300 bg-opacity-40" style={{borderTopLeftRadius: '40px', borderTopRightRadius: '40px'}}>
                <div className="flex flex-wrap items-center">
                    <div className="bg-white items-center" style={{borderRadius: '20%', width: 'auto', boxShadow: '2px 2px 2px 2px rgba(100, 100, 100, 0.1)'}}>
                        <img className="mx-2" src="/assets/images/users/user1.jpg" height={50} width={50} alt="" style={{borderRadius: '50%'}}/>
                    </div>
                    <h4 className="font-josephine w-full md:w-auto text-sm font-heading font-semibold ml-3">Bradiee</h4>
                    <div className="font-josephine w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-400"></div>
                    <span className="font-josephine mr-4 text-sm font-heading font-semibold">5.0</span>
                    <div className="inline-flex">
                        <a className="inline-block mr-1" href="#">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                        </svg>
                        </a>
                        <a className="inline-block mr-1" href="#">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                        </svg>
                        </a>
                        <a className="inline-block mr-1" href="#">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                        </svg>
                        </a>
                        <a className="inline-block mr-1" href="#">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                        </svg>
                        </a>
                        <a className="inline-block mr-1" href="#">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-white flex flex-wrap overflow-hidden' style={{borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px'}}>
                <div className="w-full mb-6 md:mb-0 px-5 py-3">
                    <p className="font-josephine mb-8 max-w-2xl text-gray-800 leading-loose">My friend really loved this gift. One of the best gifting options ever! </p>
                    <div className=" mt-5">
                        <div className="inline-flex w-full md:w-auto md:mr-1 mb-1">
                            <div className={`flex items-center h-8 pl-1 pr-3 bg-[#FFF5F80] border-2 ${stroke} rounded-full`}>
                                <div className={`flex mr-2 w-4 h-4 items-center justify-center bg-white rounded-full text-[${color}]`}>
                                    <svg width="8" height="8" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            <span className={`font-josephine text-[${color}] text-xs font-normal`}>Aesthetics</span>
                            </div>
                        </div>
                        <div className="inline-flex w-full md:w-auto md:mr-1 mb-1">
                            <div className={`flex items-center h-8 pl-1 pr-3 bg-[#FFF5F80] border-2 ${stroke} rounded-full`}>
                                <div className={`flex mr-2 w-4 h-4 items-center justify-center bg-white rounded-full text-[${color}]`}>
                                    <svg width="8" height="8" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            <span className={`font-josephine text-[${color}] text-xs font-normal`}>Finishing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductsReviewCards: React.FC<CategoriesProps& {ReviewData?:any}> = ({
  className = 'mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-8 xl:pb-10 mx-0 w-full drop-shadow-lg',
  sectionHeading="Product Reviews",
  // ReviewData,
  
  type = 'circle',
}) => {
  const { data, isLoading, error } = useCategoriesQuery({
    limit: 10,
  });

  return (
    <div className={className+" bg-category-section"} style={
      {
        backgroundColor: '#FFF5F8',
        borderRadius: '12px',
        padding: '10px'
      }
    }>
      <SectionHeader2 className='text-gray-700 mb-5' sectionHeading={sectionHeading} boxshadow={true}/>
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <Fade bottom>
        <Carousel
          breakpoints={type === 'rounded' ? breakpoints : breakpointsCircle}
          buttonClassName="-mt-8 md:-mt-10"
          className='mb-6'
        >
          {isLoading && !data
            ? Array.from({ length: 10 }).map((_, idx) => {
                if (type === 'rounded') {
                  return (
                    <SwiperSlide key={`card-rounded-${idx}`}>
                      <CardRoundedLoader uniqueKey={`card-rounded-${idx}`} />
                    </SwiperSlide>
                  );
                }
                return (
                  <SwiperSlide key={`card-circle-${idx}`}>
                    <ProductCard data={data} />
                    {/* <CardLoader uniqueKey={`card-circle-${idx}`} /> */}
                  </SwiperSlide>
                );
              })
            : data?.categoryRef.map((category:any) => (
                
                  <SwiperSlide key={`category--key-${category.id}`}>
                    <ProductCard data={category}
                    //   item={category}
                    //   href={`${ROUTES.CATEGORY}/${category.slug}`}
                    //   variant={type}
                    //   effectActive={true}
                    //   size={type === 'rounded' ? 'medium' : 'small'}
                    />
                  </SwiperSlide>
              ))}
        </Carousel>
        </Fade>
      )}
    </div>
  );
};

export default ProductsReviewCards;
