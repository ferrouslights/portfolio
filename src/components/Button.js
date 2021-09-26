//this is default a react scroll link
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#D36D4A' : '#D36D4A')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px')};
    color: ${({dark}) => (dark ? '#011827' : '#FFF8EB')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media (hover: hover) {
        &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#DF957C' : '#DF957C')};
        transform: scale(1.1);
    }
}
`

export const ButtonExternal = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#D36D4A' : '#FFF8EB')};
    border: 3px solid #0776C5;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px')};
    color: ${({dark}) => (dark ? '#011827' : '#0776C5')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    @media (hover: hover) {
        &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#DF957C' : '#0776C5')};
        color: ${({dark}) => (dark ? '#011827' : '#FFF8EB')};
        }
}
`