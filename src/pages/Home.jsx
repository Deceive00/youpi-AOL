import backgroundVideo from '../assets/images/mainVideo.png'
import logoYoupi from '../assets/images/youpi-logo.png'
import ReasonsCard from '../components/reasons-card/reasonsCard'
import Reviewed from '../assets/images/home/first-reason.png'
export default function Home(){
  return(
    <div className='md:mt-[11.4vh] xl:mt-[8.4vh] h-auto'>
      <div className="relative w-screen">
        <img src={backgroundVideo} alt="background video" className="w-full h-[85%]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={logoYoupi} alt="youpi logo" className='h-60%'/>
          <p className='text-white text-center sm:text-4xl tracking-widest font-serif text-xl mt-5'>effortlessly delicious</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='m-[5%]'>
          <h1 className='flex justify-center text-5xl font-extrabold'>Why order from YouPi?</h1>
        </div>
        <div className="m-auto w-[90%]">
          <div className="flex flex-row justify-center">
            <ReasonsCard img={Reviewed}
                        description={"Reviewed by nearby comunity"}
                        color={"bg-gradient-to-br from-red-600 to-red-900"}
                        colorInside={"bg-white bg-opacity-25"}/>
            <ReasonsCard img={Reviewed}
                        description={"Schedule your delivery to save your time"}
                        color={"bg-gradient-to-br from-teal-400 to-blue-900"}
                        colorInside={"bg-white bg-opacity-25"}/>
            <ReasonsCard img={Reviewed}
                        description={"Detail & trusted delivery"}
                        color={"bg-gradient-to-br from-orange-400 via-orange-600 to-black"}
                        colorInside={"bg-white bg-opacity-25"}/>
          </div>
        </div>
      </div>
    </div>
  )
}