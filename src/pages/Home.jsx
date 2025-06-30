import About from '../component/About';
import Banner from '../component/Banner';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import MySkills from '../component/MySkills';
import Navber from '../component/Navber';
import WorkProcess from '../component/WorkProcess';

const Home = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <div className=''>
                <Banner></Banner>
                <MySkills></MySkills>
                <About></About>
                <WorkProcess></WorkProcess>
                <Contact></Contact>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;