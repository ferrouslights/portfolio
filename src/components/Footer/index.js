import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { 
    FooterContainer,
    FooterWrapper,
    Social,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMediaWrapper
 } from './Footer'
 import { RedText } from '../RedText';



const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrapper>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                            <FooterLink to="/contact">Email</FooterLink>
                            <FooterLink to="/contact">Contact</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Portfolio</FooterLinkTitle>
                            <FooterLink to="/contact">Contact</FooterLink>
                            <FooterLink to="/contact">Source Code</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social</FooterLinkTitle>
                            <FooterLink to="/contact">Github</FooterLink>
                            <FooterLink to="/contact">Codepen</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Links</FooterLinkTitle>
                            <FooterLink to="/contact">Contact</FooterLink>
                            <FooterLink to="/contact">Source Code</FooterLink>
                        </FooterLinkItems>  
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}
                <Social>
                    <SocialMediaWrapper>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <RedText>&#123;</RedText>
                            bridges
                            <RedText>&#125;</RedText>
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink 
                            href="//github.com/ferrouslights" 
                            target="_blank"
                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="//www.linkedin.com/in/benjamin-bridges-294ab0115" 
                            target="_blank"
                            aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="//mobile.twitter.com/bridges_bw" 
                            target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </Social>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
