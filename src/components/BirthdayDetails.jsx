import trumpet from '../assets/images/graphics/trumpet.png'
import church from '../assets/images/graphics/church.png'


const BirthdayDetails = () => {

    return (
        <>
        <section className="block">
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
            <div className="grid grid-cols-2">
                <div className="w-full flex justify-start">
                    <img src={church} alt="" className="ms-[-1rem]"/>
                </div>
                {/* <div className="w-full flex justify-end">
                    <img src={trumpet} alt="" className=''/>
                </div> */}
            </div>
        </section>
       
      </>
    );
}

export default BirthdayDetails;