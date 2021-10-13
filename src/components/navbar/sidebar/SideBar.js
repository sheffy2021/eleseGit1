import React, { useState } from 'react'
import {
    ArrowIcon,
    ArrowRight,
    Info, Logo, OtherLi, OtherLiLink, OtherUl, SidebarBtnWrap, SidebarContainer, SidebarLink,
    SidebarLinks,
    SidebarMenu, SidebarMenuList, SidebarRoute, SidebarWrapper,
} from './Styling'


const Sidebar = ({ isOpen, toggle}) => {

    const [click, setClick] = useState(false);
    const toggleEvent = () => {
        setClick(!click)
    }

    return (
        <SidebarContainer isOpen={isOpen}>
            <Info>
                <Logo to='/' onClick={toggle}>ELESE<span>ACAD</span></Logo>
            </Info>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarMenuList>
                        <SidebarLink to='media' onClick={toggle} offset={-190}>Media</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLink to='it' onClick={toggle} offset={-190}>IT</SidebarLink>
                    </SidebarMenuList>
                    <SidebarMenuList>
                        <SidebarLinks onClick={toggleEvent}>Others<ArrowIcon click={click}><ArrowRight /></ArrowIcon></SidebarLinks>
                        <OtherUl click={click}>
                            <OtherLi><OtherLiLink to='python'>Python</OtherLiLink></OtherLi>
                            <OtherLi><OtherLiLink to='computer-fundamentals'>Computer Fundamentals</OtherLiLink></OtherLi>
                            <OtherLi><OtherLiLink to='peachtree'>PeachTree</OtherLiLink></OtherLi>
                            <OtherLi><OtherLiLink to='spss'>SPSS</OtherLiLink></OtherLi>
                            <OtherLi><OtherLiLink to='eview'>E-view</OtherLiLink></OtherLi>
                        </OtherUl>
                    </SidebarMenuList>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to='/signin' onClick={toggle}>Sign In</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
