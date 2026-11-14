import { Hero,  BirthdayDetails, Gallery, Reminders, Footer} from '../components';


const Home = () => {

    return (
        <>

        <div className='flex flex-col overflow-x-clip clouds-bg'>
            <Hero />
            <BirthdayDetails />
            <Gallery />
            <Reminders/>
            <Footer/>
        </div>
      </>
    );
}

export default Home;