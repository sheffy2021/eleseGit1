import React from 'react'
import { Nav, NavBtn, NavBtnLink, NavContainer, NavIcon, NavLogo } from './Styling'
import { FaBars } from 'react-icons/fa';


const HiddenBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavIcon onClick={toggle}><FaBars /></NavIcon>
                    <NavLogo>Boiler<span>plate</span></NavLogo>

                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default HiddenBar
