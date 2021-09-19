import React from 'react'
import { 
    SideMenuContainer, 
    Icon, 
    CloseIcon, 
    SideMenuWrapper, 
    SideMenuMenu, 
    SideMenuBtnWrapper, 
    SideMenuRouter, 
    SideMenuLink } from './SideMenu'

const SideMenu = ({isOpen, toggle}) => {
    return (
        <SideMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideMenuWrapper>
                <SideMenuMenu>
                    <SideMenuLink onClick={toggle} to="about">
                        A b o u t
                    </SideMenuLink>
                    <SideMenuLink onClick={toggle} to="skills">
                        S k i l l s
                    </SideMenuLink>
                    <SideMenuLink onClick={toggle} to="work">
                        W o r k
                    </SideMenuLink>
                </SideMenuMenu>
                <SideMenuBtnWrapper>
                    <SideMenuRouter to="/contact">
                        C o n t a c t
                    </SideMenuRouter>
                </SideMenuBtnWrapper>
            </SideMenuWrapper>
        </SideMenuContainer>
    )
}

export default SideMenu;
