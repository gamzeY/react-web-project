import React , {useState} from 'react'
import Content from '../components/Content';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
     setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Content />
            <InfoSection  {...homeObjOne} />
            <InfoSection  {...homeObjTwo} />
            <Services />
            <Footer/>
        </>
    );
};

export default Home;
