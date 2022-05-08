import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink,SidebarWrapper} from './SidebarElements' ;
const Sidebar = ( {isOpen, toggle}) => {
    return (
            <SidebarContainer isOpen={isOpen} onClick={toggle} >
                <Icon onClick={toggle}>
                   <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={toggle}>
                            About
                        </SidebarLink>
                        <SidebarLink to="product" onClick={toggle}>
                            Product
                        </SidebarLink>
                        <SidebarLink to="services" onClick={toggle}> 
                            Services
                        </SidebarLink>
                        <SidebarLink to="footer" onClick={toggle}>
                            Contact Us
                        </SidebarLink>
                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
    );
}

export default Sidebar;
