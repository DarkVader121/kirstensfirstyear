import { Hero,  BirthdayDetails} from '../components';


const Home = () => {

    return (
        <>

        <div className='flex flex-col overflow-x-clip'>
            <Hero />
            <BirthdayDetails />
        </div>
      </>
    );
}

export default Home;