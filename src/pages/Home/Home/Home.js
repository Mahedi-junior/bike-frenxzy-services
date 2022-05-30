import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {

    return (
        <div className=''>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Footer></Footer>
        </div>
    );
};

export default Home;