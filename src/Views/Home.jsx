import Slider from "../Components/Carousel/Slider"

const Home = () => {
    return (
        <div className='h-screen bg-orange-900 grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1'>
                <div className="bg-green-300 ">
            
                </div>
                
                <div className='w-[100%] h-[100%] relative flex items-center justify-center'>
                    <img src='/assests/homeImg1.png' className='w-[85%] h-[90%] absolute bottom-0' />
                </div>
                



            {/* <div className=' md:w-[100%] md:h-[100%] row-span-1 md:col-span-1'>
                <div className="w-full h-full  flex pt-[6rem]
                justify-center">
                    <Slider/>
                </div>
            </div>
            <div className='w-[100%] h-[100%] relative flex items-center justify-center'>
                <img src='/assests/homeImg1.png' className='w-[85%] h-[90%] absolute bottom-0' />
            </div> */}
        </div>
    )
}

export default Home