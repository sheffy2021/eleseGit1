import React, { useEffect, useState, useRef } from 'react'
import { Nav, NavBtn, NavBtnLink, NavContainer, NavIcon, NavLogo } from './Styling'
import { FaBars } from 'react-icons/fa';


const HiddenBar = ({toggle}) => {

    const [prevScrollpos, setprevScrollpos] = useState(window.pageYOffset);
    const inputRef = useRef()

    const hiddenNavEffect = () => {
        const currentScrollpos = window.pageYOffset;
        // console.log(inputRef.current)
        if (prevScrollpos <= 80) {
            inputRef.current.style.top = '0'
        }
        else if (prevScrollpos > currentScrollpos) {
            inputRef.current.style.top = '0'
        } else {
            inputRef.current.style.top = '-80px'
        }

        setprevScrollpos(currentScrollpos);
    }

    useEffect(() => {
        window.addEventListener('scroll', hiddenNavEffect)

        return () => {
            window.removeEventListener('scroll', hiddenNavEffect)
        }
    })

    return (
        <>
            <Nav ref={inputRef}>
                <NavContainer>
                    <NavIcon onClick={toggle}><FaBars /></NavIcon>
                    <NavLogo to='home' offset={-140}>Boiler<span>plate</span></NavLogo>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default HiddenBar
