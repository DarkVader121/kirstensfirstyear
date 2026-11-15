// import trumpet from '../assets/images/graphics/trumpet.png'
import church from '../assets/images/graphics/church.png'
import stars from '../assets/images/graphics/stars.png'
import baby from '../assets/images/graphics/baby-2.png'
import balloon from '../assets/images/graphics/balloon.png'
import smallCircle from '../assets/images/graphics/small-circle.png'


const BirthdayDetails = () => {



    return (
        <>
        <section className="block min-h-[80vh]">
            
            <div className="grid grid-cols-3 mt-5">
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
                    <a
                        href="https://maps.app.goo.gl/3XhTn46iuSzNBEzW8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-3 w-max"
                    >
                        Get Google Maps Location
                    </a>
                    <div className='w-full flex justify-end'>
                        <img src={stars} alt="" className='mt-10 me-[-50px]' />
                    </div>
                </div>
                <div className="col-span-3">
                    
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
                    <p className='me-1'>The Privè by the Sea in  Vistamar Beach & Residential Estates</p>
                     <a
                        href="https://maps.app.goo.gl/hWZRCUvzURDy4P2A7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-3 w-max"
                    >
                        Get Google Maps Location
                    </a>
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