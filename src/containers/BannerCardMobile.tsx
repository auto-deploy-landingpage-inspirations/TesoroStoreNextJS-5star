import Link from '@components/ui/link';
// import Image from 'next/image';
import type { FC } from 'react';
// import { useWindowSize } from '@utils/use-window-size';
import cn from 'classnames';
import { LinkProps } from 'next/link';
import {Fade} from 'react-reveal'


// const colors:string[] = [
//   '#f786be', //pink
//   '#60a5fa', //lavendar
//   '#fde047', //light yellow
//   '#50c79b', // mint
//   'orange',
//   '#22c55e'
// ];

// const bgColors:string[] = [
//   'bg-[#f786be]', //pink
//   'bg-blue-400', //lavendar
//   'bg-yellow-300', //light yellow
//   'bg-[#50c79b]', // mint
//   'bg-[orange]',
//   'bg-green-500'
// ]


interface BannerProps {
  idx?: number;
  color: string;
  title: string;
  image: string;
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

const BannerCard2Mobile: FC<BannerProps> = ({
  // idx,
  color,
  image,
  title,
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
      <div className={cn('mx-auto for-mobile', className)}>
        <Link
          href={href}
          className={cn(
            'h-[40vh] group flex justify-center relative overflow-hidden rounded-xl hover:drop-shadow-md',
            classNameInner
          )}
        >
          <div className={`justify-center`}
            style={{
              width: '50vw',
              // height: '35vh',
              display: 'inline-flex',
              flexDirection: 'column',
              border: `15px ${color} solid`, 
              borderRadius: '20%', 
              backgroundColor: `${color}`
            }}
          >
            <img src={image} className='rounded-xl max-w-[35vw] max-h-[28vh] mx-auto border-8 border-solid border-white' alt="" />
              <p className='text-base  font-semibold text-black my-1 justify-center text-center' 
              style={{fontFamily: 'Hap', color: 'white', wordWrap: "break-word", overflowWrap: 'break-word', whiteSpace: "pre-wrap"}}
              >{title}<br/></p>
              {/* <button type='button' className={`absolute bottom-10 left-[25%] rounded-md drop-shadow-lg border-0 cursor-pointer mx-auto ${bgColors[idx]} opacity-90 hover:opacity-100 hover:bg-gray-150 text-[black]  px-5 py-2 text-lg font-semibold align-bottom`} 
					style={{fontFamily: 'Hap'}}>
                Shop Now
              </button> */}
          </div>
        </Link>
      </div>
    </Fade>
  )
}

export default BannerCard2Mobile;