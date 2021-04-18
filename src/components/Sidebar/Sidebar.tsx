import React from 'react';
import { faSearch, faPlus, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

const LogoStyle = {
    fontSize: '1.5em',
    marginTop: '15px',
}

const Sidebar = () => {
    return (
        <div>
            <SideNav
                onSelect={() => {
                // Add your code here
                }} style={{background:'rgb(7, 71, 166)'}}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FontAwesomeIcon icon={faSearch} style={LogoStyle} />
                        </NavIcon>
                        <NavText>
                            Search Issue
                        </NavText>
                        
                    </NavItem>
                    
                    <NavItem eventKey="Add">
                        <NavIcon>
                            <FontAwesomeIcon icon={faPlus} style={LogoStyle} />
                        </NavIcon>
                        <NavText>
                            Add Issue
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="About" style={{top:'50vh'}}>
                        <NavIcon>
                        <FontAwesomeIcon icon={faInfoCircle} style={LogoStyle} />
                        </NavIcon>
                        <NavText>
                            About
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
        </div>
    )
}

export default Sidebar
