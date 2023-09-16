import Link from '@components/ui/link';
// import Image from 'next/image';
import type { FC } from 'react';
// import { useWindowSize } from '@utils/use-window-size';
import cn from 'classnames';
import { LinkProps } from 'next/link';
import {Fade} from 'react-reveal'


const colors:string[] = [
  'bg-[#f786be]', //pink
  'bg-blue-400', //lavendar
  'bg-yellow-300', //light yellow
  'bg-[#50c79b]', // mint
  'bg-[orange]',
  'bg-green-500'
]

interface BannerProps {
  idx: number,
  banner: any;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps['href'];
}

// function getImage(deviceWidth: number, imgObj: any) {
//   return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
// }

const BannerCard2: FC<BannerProps> = ({
  idx,
  // banner, 
  className, 
  // variant='rounded',
  // effectActive=false,
  classNameInner,
  href
}) => {
  // const {width} = useWindowSize();
  // const {title, image} = banner;
  // const selectedImage = getImage(width, image);
  return (
    <Fade right delay={1000}>
      <div className={cn('mx-auto', className)}>
        <Link
          href={href}
          className={cn(
            'h-[30vh] group flex justify-center relative overflow-hidden rounded-xl hover:drop-shadow-md',
            classNameInner
          )}
        >
          <div className={colors[idx]+' w-full h-full justify-center'}>
              <p className='text-xl font-semibold text-white relative left-10 top-10 justify-center' 
              style={{fontFamily: 'Hap'}}
              >Get 50% OFF <br/> on Stationary<br/></p>
              <img src="/assets/images/new-images/9bf3a904-574a-487d-b7aa-37aa48d04fb0.jpg" className='rounded-xl absolute w-[40%] right-5 top-5 border-8 border-solid border-white' alt="" />
              <button type='button' className='rounded-md drop-shadow-lg border-0 cursor-pointer absolute left-[17%] bottom-[10%] bg-gray-300 hover:bg-gray-150 text-[black]  px-5 py-2 text-lg font-semibold align-bottom' 
					style={{fontFamily: 'Hap'}}>
                Shop Now
              </button>
          </div>
        </Link>
      </div>
    </Fade>
  )
}

export default BannerCard2;