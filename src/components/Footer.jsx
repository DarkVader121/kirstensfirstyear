// import topClouds from '../assets/images/graphics/top-clouds.png'
import footerImage from '../assets/images/graphics/footer-image.png'
import bottomClouds from '../assets/images/graphics/bottom-clouds.png'


const Footer = () => {
    return (
        <>
            <section className='!py-0 min-h-[100vh]'>
        
                <div className='container'>
                    <img src={footerImage} alt="" className='mt-5' />
                    <h1 className='text-4xl mt-5'>Come Celebrate <br /> With Us</h1>
                    <p>A blessed baptism, a joyful first birthday, and memories to cherish forever. We’d love to celebrate with you!</p>
                    <br />
                    <div className='flex items-center gap-3'>
                        <a href="" className='btn btn-sm btn-primary'>RSVP Here</a>
                        <p>or Confirm your attendance  </p>
                    </div>
                    <p>to attendance to the parents.</p>

                    <h1 className='text-lg mt-5'>Let us know before December 15. </h1>

                </div>
             <img src={bottomClouds} alt="" className="scale-[1.3] mt-5" style={{ marginLeft: "-17px" }} />
            </section>

        </>
    );
}

export default Footer;