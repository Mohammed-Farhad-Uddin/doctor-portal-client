import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavbarTop from '../Navbar/NavbarTop';
import './Header.css'

const Header = () => {
    return (
            <div className='headerContainer'>
                <NavbarTop></NavbarTop>
                <HeaderMain></HeaderMain>
                <BusinessInfo></BusinessInfo>
            </div>
    );
};

export default Header;