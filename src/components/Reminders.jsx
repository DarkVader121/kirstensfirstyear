import start1 from '../assets/images/graphics/start-1.png'
import reminder1 from '../assets/images/graphics/reminder-1.png'
import reminder2 from '../assets/images/graphics/reminder-2.png'
import reminder3 from '../assets/images/graphics/reminder-3.png'
// import reminder4 from '../assets/images/graphics/reminder-4.png'
// import reminder5 from '../assets/images/graphics/reminder-5.png'
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
                {/* <div className="grid grid-cols-2 mt-5">
                    <div className='flex flex-col justify-center pe-1 ms-5'>
                    <h3 className='text-2xl'>Capture the Memories</h3>
                        <p>Take photos and videos throughout the celebration and share your precious moments with us through our shared photo album. </p>
                        <a href="https://drive.google.com/drive/folders/1lT6YAfC94FxI4QugMP9gvRdsJ4yMKftm?usp=sharing" className='flex text-primary gap-1 mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>
                            <h1>View Qr Code</h1>
                        </a>
                    </div>
                    <div className='flex'>
                         <img src={reminder5} alt="" className='h-[200px]'/>
                       
                    </div>
                </div> */}
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