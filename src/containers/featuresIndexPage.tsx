import {Fade} from "react-reveal"
const data = [
	{
		id: 1,
		icon: "/assets/images/features/free-delivery.png",
		title: "Free Delivery",
		description: "Get Hassle Free Fast Delivery on every product. Buy Now!",
    color: 'bg-blue-100',
    textColor: 'text-blue-400'
	},
	{
		id: 2,
		icon: "/assets/images/features/made-with-love.png",
		title: "Made With Love",
		description: "Made with Love Description",
    color: 'bg-pink-100',
    textColor: 'text-pink-400'
	},
	{
		id: 3,
		icon: "/assets/images/features/handpicked.png",
		title: "Handpicked Brands",
		description: "Handpicked Brands",
    color: 'bg-green-100',
    textColor: 'text-green-400'
	},
	{
		id: 4,
		icon: "/assets/images/features/multiple-brands.png",
		title: "1000+ Products",
		description: "More than 1000+ Products to Shop from ",
    color: 'bg-[#fef9c3]',
    textColor: 'text-[orange]'
	},
];
export const Feature = () => {
    return (
        <div className="h-full pb-4 sm:max-w-xl md:max-w-full  lg:py-5 my-5">

          <div className="grid grid-cols-2 sm:grid-cols-4">
            
              {data&&data.map((item, idx) => (
                <Fade key={idx}>
                  <div className={ "cursor-pointer items-center max-w-md text-center align-center py-4 justify-center hover:-translate-y-[2px] hover:drop-shadow-md " + item.color } key={idx} style={{
                      // border: '1px solid gray',
                      // borderRadius: '12px',
                      // boxShadow: '1px 1px 1px 1px rgba(90, 90, 90, 0.2)'
                  }}>
                      <div className="px-1 flex items-center justify-center m-auto mb-4 rounded-full">
                        <img src={item.icon} className="w-[70%] m-auto" style={{backgroundBlendMode: 'multiply'}}/>
                          {/* <svg
                              className="w-12 h-12 text-deep-purple-accent-400"
                              stroke="currentColor"
                              viewBox="0 0 52 52"
                          >
                              <polygon
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                              />
                          </svg> */}
                      </div>
                      <h6 className={"mb-2 font-semibold xs:text-lg lg:text-xl leading-5 "+item.textColor}>{item.title}</h6>
                      {/* <p className="mb-3 text-sm text-gray-900">
                      {item.description}
                      </p> */}
                      {/* <a
                      href={"/"}
                      aria-label=""
                      className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                      >
                      Learn more
                      </a> */}
                  </div>
                </Fade>   
              ))}
            
          </div>
        </div>
    );
  };