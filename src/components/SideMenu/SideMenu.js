import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll"
import {FaTimes} from 'react-icons/fa'

export const SideMenuContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #D36D4A;
    display: grid;
    align-items: center;
    top: 0;
    left: 0%;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SideMenuWrapper = styled.div`
    color: #fff;
`

export const SideMenuMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideMenuLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    @media (hover: hover) {
        &:hover {
            color: #02233B;
            transition: 0.2s ease-in-out;
        }
    }
`

export const SideMenuBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const SideMenuRouter = styled(LinkR)`
    border-radius: 50px;
    background: #FFF8EB;
    white-space: nowrap;
    padding: 16px 16px;
    color: #02233B;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media (hover: hover) {
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }
    }
`