import cutoffs from '../assets/images/graphics/birthday things 1.png'
import cross from '../assets/images/graphics/cross.png'
import cake from '../assets/images/graphics/cake.png'
import baby from '../assets/images/graphics/baby.png'

const Hero = () => {

    return (
        <>
           <section className="min-h-[100vh] w-[100%] overflow-x-clip !py-0 flex flex-col justify-between relative">
                <div>
                    <div className="grid grid-cols-3 w-full justify-between">
                        <div className="col-span-2">
                            <img
                                src={cutoffs}
                                alt="Cutoffs"
                                className="bebu-topCuts h-[194px] object-cover ml-[-39px] mt-[-32px]"
                            />
                        </div>
                        <div className="w-full flex justify-end">
                            <img src={cross} alt="" className="w-[200px] me-[-20px]"/>
                        </div>
                    </div>
                    <div className="container">
                        <p className="mt-[-2rem]">Join us as we celebrate</p>
                        <h1 className="mt-5 text-5xl">Kirsten's</h1>
                        <h1 className="text-3xl">Baptism & 1st Birthday</h1>
                        <p className="mt-3 pe-5">
                            With hearts full of love and gratitude, we invite you to celebrate a very special day as our little girl receives her first blessing and turns ONE!
                        </p>
                        <a href="" className="btn btn-primary mt-5">RSVP HERE</a>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src={cake}
                        alt=""
                        className="absolute w-[150px] bottom-0 left-[-12px] z-1"
                    />
                    <img src={baby} alt="" className="w-full block relative"/>
                </div>
           </section>
      </>
    );
}

export default Hero;