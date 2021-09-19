import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
`

export const ContainerBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #CF5C36;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1072' height='128.6' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%2302233B' stroke-width='23.1' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    background-position: 0 0;
    background-size: auto 100%;
    /*adjust s value for speed*/
    animation: animatedBackground 60s linear infinite;
    animation-direction: alternate;
}

@keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
/*use negative width if you want it to flow right to left else and positive for left to right*/
  to {
    background-position: -10000px 0;
  }
}
`

export const ContactWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    width: 150px;
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 32px;
    transition: all .5s ease-in-out;
    z-index: 10;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }

    @media (hover: hover) {
        &:hover {
            margin-top: 30px;
            transition: all .5s ease-in-out;
        }
    }
`
export const Card = styled.div`
    background: #FFF8EB;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`

export const CardContent = styled.div`
    height: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }

`

export const ContentH1 = styled.h1`
    margin-bottom: 40px;
    color: #02233B;
    font-size: 25px;
    /* font-weight: 400; */
    text-align: center;
`

export const Text = styled.a`
    text-align: center;
    margin-top: 24px;
    color: #CF5C36;
    font-size: 24px;
`

export const Social = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    flex-direction: column;
`

export const SocialLogo = styled(Link)`
    color: #02233B;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    
`

export const SocialIconLink = styled.a`
    color: #02233B;
    font-size: 24px;
    transition: 0.2s ease-in-out;

    @media (hover: hover) {
        &:hover {
            transition: 0.2s ease-in-out;
            transform: rotate(15deg);
        }
    }
`