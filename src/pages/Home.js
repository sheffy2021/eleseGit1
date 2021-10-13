import React, {useState} from 'react'
import Headline from '../components/headline/Headline';
import HeroSection from '../components/heroSection/HeroSection';
import HiddenBar from '../components/navbar/hiddenbar/HiddenBar'
import Sidebar from '../components/navbar/sidebar/SideBar';
import TopBar from '../components/navbar/topbar/TopBar'
import ScopeBase from '../components/scope/ScopeBase';
import MediaScopeBase from "../components/media/ScopeBase";
import NewsLetter from '../components/newsLetter/NewsLetter';
import Footer from "../components/footer/Footer";
import ITScopeBase from "../components/IT/ScopeBase";


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        if (isOpen === true) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }

    return (
        <div>
            <HiddenBar isOpen={isOpen} toggle={toggle}/>
            <TopBar isOpen={isOpen} toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            <Headline heading='PATHWAY' />
            <ScopeBase />
            <Headline heading='MEDIA' />
            <MediaScopeBase />
            <Headline heading='WEB DEVELOPMENT' />
            <ITScopeBase />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home
