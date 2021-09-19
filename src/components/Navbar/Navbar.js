import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#02233B' : 'transparent')};
    transition: 0.3s all ease;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px
`

export const NavLogo = styled(LinkR)`
    color: #FFF8EB;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    @media (hover: hover) {
        &:hover {
            color: #D36D4A;
            transition: 0.2s ease-in-out;
            transform: rotate(5deg);
        }
    }

`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #FFF8EB;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;



    &.active {
        border-bottom: 3px solid #D36D4A;
    }

    @media (hover: hover) {
        &:hover {
            color: #D36D4A;
            transition: 0.2s ease-in-out;
        }
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #D36D4A;
    white-space: nowrap;
    padding: 10px 22px;
    color: #011827;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    @media (hover: hover) {
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #DF957C;
            color: #011827;
        }
    }

`