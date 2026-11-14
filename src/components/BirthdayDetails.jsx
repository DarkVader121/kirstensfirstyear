import trumpet from '../assets/images/graphics/trumpet.png'
import church from '../assets/images/graphics/church.png'
import stars from '../assets/images/graphics/stars.png'
import baby from '../assets/images/graphics/baby-2.png'
import balloon from '../assets/images/graphics/balloon.png'
import smallCircle from '../assets/images/graphics/small-circle.png'


const BirthdayDetails = () => {



    return (
        <>
        <section className="block min-h-[100vh]">
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <h1 className="ms-5 text-4xl">Save the Date</h1>
                    <p className='ms-5'>January 22, 2027</p>
                    <p className='ms-5'>Friday at 2:00pm</p>
                </div>
                <div className="w-full flex justify-end">
                    <img src={trumpet} alt="" className='me-[-2rem] mt-[-.7rem]'/>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="w-full flex justify-start">
                    <img
                        src={church}
                        alt=""
                        className="ms-[-1rem] scale-[2] mt-[70px] ml-[-45px] max-h-[170px]"
                    />
                </div>
                <div className="col-span-2">
                    <h3 className='text-2xl mt-5'>Church Location</h3>
                    <p>Archdiocesan Shrine of St. Thérèse of the Child Jesus</p>
                    <a href=""className='btn btn-primary mt-3'>Get Gooogle Maps Location</a>
                    <div className='w-full flex justify-end'>
                        <img src={stars} alt="" className='mt-10 me-[-50px]' />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3">
                <div className="w-full flex justify-start">
                    <img
                        src={baby}
                        alt=""
                        className="ms-[-1rem] scale-[1.7] mt-[40px] ml-[-45px] max-h-[170px]"
                    />
                </div>
                <div className="col-span-2 ps-5">
                    <div className='flex items-center gap-2 ms-[-10px]'>
                        <img src={balloon} alt="" className='h-[63px] ms-[-4px]' />
                        <h3 className='text-2xl'>Birthday <br /> Celebration</h3>
                    </div>
                    <p>The Privè by the Sea in  Vistamar Beach & Residential Estates</p>
                    <a href=""className='btn btn-primary mt-3'>Get Gooogle Maps Location</a>
                    <div className='w-full flex justify-end'>
                        <img src={smallCircle} alt="" className='mt-10' />
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}

export default BirthdayDetails;