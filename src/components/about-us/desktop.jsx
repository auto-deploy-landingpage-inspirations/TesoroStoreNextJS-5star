import Container from "@components/ui/container";
import { Fade, Zoom } from 'react-reveal';

const lefTextBoxCss = 'ml-[15%] col-span-2 w-[70%]';
const rightTextBoxCss = 'ml-[15%] w-[75%] px-5 col-span-2'
const boxHeading = 'font-josephine text-center justify-center mt-[7%] text-[#515156] items-center font-bold text-lg'
const boxPara = 'font-josephine text-center justify-center mt-5 text-[#6a6a70] items-center font-normal'
const boxCss = 'h-[40vh] mt-10 mb-10 pb-10 rounded-lg grid grid-cols-3'
const subheadingCss = 'italic text-[1.3rem] font-semibold';


export default function AboutUsDesktop() {
    return (
        <div className="for-desktop">
            <div className='mx-auto my-[14vh] bg-[#fcbfd0] grid grid-cols-2 w-full h-[35vh]'>  
                <div className='ml-[30%] pt-1 '>
                <Fade bottom>
                    <h1 className='font-josephine text-center justify-center mt-28 text-[#393942] items-center flex font-semibold' style={{fontSize: '2.25rem', lineHeight: '2.5rem'}}>
                        WE ARE TESORO STORE
                    </h1>
                    {/* <h2 className='font-josephine text-center justify-center mt-5  text-[#515156] items-center flex font-normal' style={{fontSize: '1.25rem', lineHeight: '1.75rem'}}>
                        Crafting Moments, Sharing Joy: Our Story at Tesoro Store
                    </h2> */}
                    </Fade>
                </div>
                <div className='flex justify-center' style={{transform: 'translateY(-2.5vh)'}}>
                <Fade bottom>
                    <img src="/assets/images/about-us/hero.jpg" className='w-[64%] my-auto mt-10 rounded-md ' style={{outline: '10px white solid'}} alt="" />
                </Fade>
                </div>
            </div>
            <Container>
            <div className='text-center justify-center my-[17vh] w-[70%] ml-[15%]'>
                <Fade bottom delay={1000}>
                <h1 className='font-josephine font-semibold text-xl text-black'>About Us</h1>
                <p className='font-josephine font-normal text-sm mt-5 text-[#6a6a70]' style={{fontSize: '1rem', lineHeight: '1.75rem'}}>At Tesoro Store, we're not just an online marketplace – we're your gateway to a world of creativity, carefully curated by passionate small business owners. Our platform celebrates the magic that happens when passionate and creative minds come together. Here's why joining the Tesoro Tribe is a choice you won't regret:</p>
                </Fade>
            </div>


            <div className={'bg-[#FFE583]   '+boxCss}>
                <div className={lefTextBoxCss}>
                <Fade bottom delay={1500}>
                    <h1 className={boxHeading} style={{fontSize: '1.75rem', lineHeight: '2.25rem'}}>One Stop Wonderland<br/><span className={subheadingCss}>All Things Small Business, All in One Place</span> </h1>
                    <p className={boxPara} style={{fontSize: '1rem', lineHeight: '1.75rem'}}>Tired of sliding into DMs like a secret agent? Say goodbye to the hassle! Welcome to Tesoro Store – your ultimate destination for verified small businesses. No more chasing shadows; shop conveniently and explore an artful world without the stress!</p>
                </Fade>
                </div>
                <div className='flex justify-center' style={{transform: 'translate(-4vw, -8vh)'}}>
                <Zoom delay={1000}>
                    <img src="/assets/images/about-us/2nd.jpg" className='w-[95%] my-auto rounded-md mb-10' style={{outline: '10px white solid'}} alt="" />
                </Zoom>
                </div>
            </div>

            
            <div className='bg-[#fbd3e6]  h-[40vh] my-20 rounded-lg grid grid-cols-3'>
            <div className='flex justify-center' style={{transform: 'translate(3vw, -5vh)'}}>
                <Zoom delay={700}>
                <img src="/assets/images/about-us/4th.jpg" className='w-[100%] my-auto rounded-md' style={{outline: '10px white solid'}} alt="" />
                </Zoom>
                </div>
                <div className={rightTextBoxCss}>
                <Fade bottom delay={1000}>
                <h1 className={boxHeading} style={{fontSize: '1.75rem', lineHeight: '2.25rem'}}>Treasures Handpicked with Heart<br/><span className={subheadingCss}>  Dive into Diversity</span></h1>
                <p className={boxPara} style={{fontSize: '1rem', lineHeight: '1.75rem'}}>Ever wish for a rainbow in your shopping cart? Tesoro Store has you covered! Our treasures are handpicked with more heart than a heartfelt hug. From whimsical to wondrous, our diverse collection celebrates the artistry of small businesses. Because life is too short for ordinary!</p>
                </Fade>
                </div>
            </div>


            <div className='bg-[#FFE583]  h-[40vh] my-20 rounded-lg grid grid-cols-3'>
                <div className={lefTextBoxCss}>
                <Fade bottom delay={700}>
                <h1 className={boxHeading} style={{fontSize: '1.75rem', lineHeight: '2.25rem'}}>Supporting Small Businesses<br/><span className={subheadingCss}> Where Dreams Find Their Wings</span></h1>
                <p className={boxPara} style={{fontSize: '1rem', lineHeight: '1.75rem'}}>Dreams come in all sizes – including small! At Tesoro Store, every purchase is a vote of confidence for the dreamers, the makers, and the creators. Your choice to shop unique fuels passions and empowers small business journeys. Let's turn dreams into reality, one treasure at a time!</p>
                </Fade>
                </div>
                <div className='flex justify-center' style={{transform: 'translate(-4vw, -5vh)'}}>
                <Zoom delay={1000}>
                <img src="/assets/images/about-us/3rd.jpg" className='w-[100%] my-auto rounded-md' style={{outline: '10px white solid'}} alt="" />
                </Zoom>
                </div>
            </div>



            <div className='bg-[#fbd3e6] h-[40vh] my-10 rounded-lg grid grid-cols-3'>
                <div className='flex justify-center' style={{transform: 'translate(3vw, -5vh)'}}> 
                <Zoom delay={1000}>
                <img src="/assets/images/about-us/5th.jpg" className='w-[95%] my-auto rounded-md' style={{outline: '10px white solid'}} alt="" />
                </Zoom>
                </div>
                <div className={rightTextBoxCss}>
                <Fade bottom delay={700}>
                <h1 className={boxHeading} style={{fontSize: '1.75rem', lineHeight: '2.25rem'}}>Unveil Hidden Treasures<br/><span className={subheadingCss}>  Explore Tesoro Today!</span></h1>
                <p className={boxPara} style={{fontSize: '1rem', lineHeight: '1.75rem'}}>Unleash your inner explorer and embark on a journey where every treasure you uncover is a masterpiece of passion. Tesoro Store is where dreams meet reality, where artisans find their spotlight, and where you find a world of creativity at your fingertips.</p>
                </Fade>
                </div>
            </div>
            </Container>
            <>
            <div className='w-[90%] mb-[2vh] mt-[7vh] ml-[5%] h-[15vh]'>
                <h1 className='text-[3.5rem] text-center text-[#F4769F] font-normal font-playfair' style={{fontStyle: 'italic'}}>Meet Our Founders</h1>
            </div>
            <div className='w-[90%] ml-[5%] mb-[10vh] grid grid-cols-2 rounded-3xl bg-[#FFF5F8]'>
                <div className='p-20'>
                    <h1 className='text-[#F4769F] text-2xl text-center mb-7 font-josephine'>Saumya & Shalini </h1>
                    <p className='text-center font-josephine'>
                    Hey there, lovely souls! We're Saumya and Shalini, your friendly neighborhood co-founders of Tesoro Store. Back in the day, we embarked on a journey together at the National Institute of Fashion Technology, where we not only acquired degrees in fashion management but also discovered a friendship that's more precious than a pot of gold.
                    </p>
                    <p className='text-center font-josephine'>
                    With our small businesses in tow, we've danced to the entrepreneurial beat and understood the hustle like no other. 
                    </p>
                    <p className='text-center font-josephine'>
                    So, after much brainstorming, giggles, and a whole lot of caffeine, we birthed Tesoro Store into existence. Our common ground? A deep-rooted desire to make a difference, to provide a platform where small businesses can shine like stars, and to curate a community that celebrates uniqueness.
                    </p>
                    <p className='text-center font-josephine'>
                    Together, we're not just co-founders; we're the dynamic duo determined to sprinkle a little bit of magic into your shopping experience. Join us on this whimsical journey where every purchase is a nod to creativity and every treasure you uncover is a testament to the dreams we're chasing together.
                    </p>
                </div>
                <div className='pt-16 pr-20'>
                    <img src="/assets/images/about-us/us1.jpg" style={{borderRadius: '100%', height: '50vh', margin: 'auto', transform: 'translateX(-10vw)'}} className='' alt="" />
                    <img src="/assets/images/about-us/us2.jpg" style={{borderRadius: '100%', height: '50vh', margin: 'auto', transform: 'translate(10vw, -10vh)'}} className='' alt="" />
                </div>
            </div>
            </>
        </div>
    )
}