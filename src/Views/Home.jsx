import Slider from '../Components/Carousel/Slider'

const Home = () => {
    return (
        <div className='h-screen bg-orange-900 grid grid-rows-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1'>
                <div className="flex flex-col  items-center justify-center">
                    <span className='font-[nunito] text-[2rem] mb-4 text-color6 text-center m-2'>¡Conoce nuestros productos!</span>    
                    <div className='w-[15rem] flex justify-center'>

                        <Slider/>
                    </div>
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