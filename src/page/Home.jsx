import { Hero,  BirthdayDetails, Gallery} from '../components';


const Home = () => {

    return (
        <>

        <div className='flex flex-col overflow-x-clip'>
            <Hero />
            <BirthdayDetails />
            <Gallery />
        </div>
      </>
    );
}

export default Home;