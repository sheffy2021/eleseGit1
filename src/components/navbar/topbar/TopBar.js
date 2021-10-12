import React from 'react'
import { ArrowDown, Cover, Nav, NavBtn, NavBtnLink, NavContainer, NavIcon, NavLink, NavLinkLi, NavLinkLiLink, NavLinkUl, NavLogo, NavMenu, NavMenuLi, NavMenuUl } from './Styling'
import { FaBars } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div>
            <Cover></Cover>
            <Nav>
                <NavContainer>
                    <NavIcon><FaBars /></NavIcon>
                    <NavLogo>Boiler<span>plate</span></NavLogo>
                    <NavMenu>
                        <NavMenuUl>
                        <NavMenuLi><NavLink to='media'>Media</NavLink></NavMenuLi>
                    <NavMenuLi><NavLink to='it'>IT</NavLink></NavMenuLi>
                    <NavMenuLi>
                        <NavLink to='signup'>Others<ArrowDown /></NavLink>
                        <NavLinkUl>
                            <NavLinkLi> <NavLinkLiLink to='/python'>Python</NavLinkLiLink></NavLinkLi>
                            <NavLinkLi><NavLinkLiLink to='/computer-fundamentals'>Computer Fundamentals</NavLinkLiLink></NavLinkLi>
                            <NavLinkLi><NavLinkLiLink to='/peachtree'>PeachTree</NavLinkLiLink></NavLinkLi>
                            <NavLinkLi><NavLinkLiLink to='/spss'>SPSS</NavLinkLiLink></NavLinkLi>
                            <NavLinkLi><NavLinkLiLink to='/eview'>E-view</NavLinkLiLink></NavLinkLi>
                        </NavLinkUl>

                    </NavMenuLi>
                        </NavMenuUl>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </div>
    )
}

export default TopBar
