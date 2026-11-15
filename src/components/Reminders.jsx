import start1 from '../assets/images/graphics/start-1.png'
import reminder1 from '../assets/images/graphics/reminder-1.png'
import reminder2 from '../assets/images/graphics/reminder-2.png'
import reminder3 from '../assets/images/graphics/reminder-3.png'
// import reminder4 from '../assets/images/graphics/reminder-4.png'
import reminder5 from '../assets/images/graphics/reminder-5.png'
import feet from '../assets/images/graphics/feet.png'
import poolSign from '../assets/images/graphics/pool-sign.png'


const Reminders = () => {
    return (
        <>
        <section className='min-h-[100vh] !py-0'>
            <div>
                <div className='container'>
                    <div className="flex justify-end relative">
                        <img
                            src={start1}
                            alt=""
                            className="absolute right-0 w-[123px] h-[150px]"
                        />
                    </div>
                
                    <h1 className="text-4xl mt-5">
                        Reminders for <br /> the Big Day
                    </h1>
                </div>
                
                <div className="grid grid-cols-2 mt-10">
                    <div className='flex relative flex items-center'>
                        <img src={reminder1} alt="" className='relative mt-[-57px] scale-[1.8] ml-[-40px] h-[180px]' />
                    </div>
                    <div className='flex flex-col justify-center ms-3'>
                         <h3 className="text-2xl font-semibold">
                            Baptism Attendance
                        </h3>
                        <div className="mb-2">
                            <h4 className="text-lg font-semibold">Godparents & Sponsors:</h4>
                            <p>
                                Godparents and sponsors are required to attend the Baptism ceremony and should wear white attire.
                            </p>
                        </div>
                        <div className="mb-2">
                            <h4 className="text-lg font-semibold">Other Guests:</h4>
                            <p>
                                 Other guests are welcome to proceed directly to the reception venue.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 ">
                    <div className='flex flex-col justify-center ps-5 pe-1'>
                        <h3 className='text-2xl mt-5'>Gift Preferences</h3>
                        <p>Your presence is already a gift! However,  if you’d like to bless Kirsten with something extra, We welcome gifts in kind or monetary gifts.</p>
                    </div>
                    <div className='flex items-center relative'>
                        <img src={reminder2} alt="" className='relative h-[200px] scale-[1.2] ms-[25px] mt-7' />
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-7">
                    <div className='flex relative flex-col justify-between'>
                        <img src={reminder3} alt="" className='h-[200px] relative scale-[1.3] pt-5 ml-[-30px]'/>
                        <img src={poolSign} alt="" className="pb-3 relative"/>
                    </div>
                    <div className='flex flex-col justify-center ms-3'>
                        <div className="mt-0 me-5">
                            <h3 className="text-2xl font-semibold">
                                Party Dress Code
                            </h3>

                            <div className="mb-2">
                                <h4 className="text-lg font-semibold">Little Guests:</h4>
                                <p>
                                    Kiddie costumes! Come dressed as your favorite character.
                                </p>
                            </div>

                            <div className="mb-2">
                                <h4 className="text-lg font-semibold">Adult Guests:</h4>
                                <p>
                                    Anything pink and comfy! Dress comfortably and enjoy the celebration.
                                </p>
                            </div>

                            <div className="mb-2">
                                <h4 className="text-lg font-semibold">Pool Attire:</h4>
                                <p>
                                    Guests who wish to enjoy the pool are kindly requested to bring appropriate swimwear.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-2 mt-5">
                    <div className='flex flex-col justify-center pe-1 ms-5'>
                                               <h3 className='text-2xl'>Capture the Memories</h3>
                        <p>Take photos and videos throughout the celebration and share your precious moments with us through our shared photo album. </p>
                    </div>
                    <div className='flex'>
                         <img src={reminder5} alt="" className='h-[200px]'/>
                       
                    </div>
                </div>
                {/* <div className="grid grid-cols-2 pb-7">
                    <div className='flex'>
                         <img src={reminder4} alt="" className='h-[200px]'/>
                    </div>
                    <div className='flex flex-col justify-center ms-3'>

                    </div>
                </div> */}
                <div className="flex justify-end relative">
                    <img
                        src={feet}
                        alt=""
                        className="absolute bottom-3 right-0"
                    />
                </div>
            </div>
        </section>
     
        </>
    );
}

export default Reminders;