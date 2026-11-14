import start1 from '../assets/images/graphics/start-1.png'
import reminder1 from '../assets/images/graphics/reminder-1.png'
import reminder2 from '../assets/images/graphics/reminder-2.png'
import reminder3 from '../assets/images/graphics/reminder-3.png'
import reminder4 from '../assets/images/graphics/reminder-4.png'
import reminder5 from '../assets/images/graphics/reminder-5.png'
import feet from '../assets/images/graphics/feet.png'


const Reminders = () => {
    return (
        <>
        <section className='min-h-[100vh] !py-0'>
            <div className="container">
                <div className="flex justify-end relative">
                    <img
                        src={start1}
                        alt=""
                        className="absolute right-0 w-[123px] h-[170px]"
                    />
                </div>
               
                <h1 className="text-4xl mt-5">
                    Reminders for <br /> the Big Day
                </h1>
                <div className="grid grid-cols-2 mt-10">
                    <div className='flex'>
                        <img src={reminder1} alt="" />
                    </div>
                    <div className='flex flex-col justify-center ms-3'>
                        <h3 className='text-2xl'>Church Attire</h3>
                        <p>Bring a modest outfit for the church ceremony.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-[-20px]">
                    <div className='flex flex-col justify-center pe-1'>
                        <h3 className='text-2xl'>Baby Essentials</h3>
                        <p>Prepare practical baby essentials.</p>
                    </div>
                    <div className='flex'>
                        <img src={reminder2} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-[-10px]">
                    <div className='flex'>
                        <img src={reminder3} alt="" />
                    </div>
                    <div className='flex flex-col justify-center ms-3'>
                        <h3 className='text-2xl'>Be On Time</h3>
                        <p>Arrive on time for the baptism itself.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-[-5px]">
                    <div className='flex flex-col justify-center pe-1'>
                        <h3 className='text-2xl'>Be Present</h3>
                        <p>Keep hands, bottles, and baby items clean at all times.</p>
                    </div>
                    <div className='flex'>
                        <img src={reminder4} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-2 pb-7">
                    <div className='flex'>
                        <img src={reminder5} alt="" />
                    </div>
                    <div className='flex flex-col justify-center ms-3'>
                        <h3 className='text-2xl'>Capture the Memories</h3>
                        <p>Take lots of pictures.</p>
                    </div>
                </div>
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