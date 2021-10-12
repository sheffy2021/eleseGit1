import React, {useState} from 'react'
import HiddenBar from '../components/navbar/hiddenbar/HiddenBar'
import Sidebar from '../components/navbar/sidebar/SideBar';
import TopBar from '../components/navbar/topbar/TopBar'

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
        </div>
    )
}

export default Home
