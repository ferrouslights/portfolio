import React from 'react'
import { 
    CardContent, 
    ContactWrap, 
    Container, 
    ContentH1, 
    Text, 
    Icon, 
    Card, 
    ContainerBackground,
    Social, 
    SocialIconLink, 
    SocialIcons,  
    SocialMediaWrapper
} from './Contact'
import {BiLeftArrowCircle} from 'react-icons/bi'
import ReactTypingEffect from 'react-typing-effect'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

 

const Contact = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Container>
                <ContainerBackground />
                <ContactWrap>
                    <Icon to="/"><BiLeftArrowCircle /> go back</Icon>
                    <CardContent>
                        <Card>
                            <ContentH1><ReactTypingEffect
                        text={["Say Hi :)", "Talk Over Coffee" , "Talk Business", "Have a Zoom Meeting", "Hear a Knock-Knock Joke"]}
                        speed="150"
                        eraseSpeed="150"
                        eraseDelay="2000"
                        /></ContentH1>
                            {/* this email doesnt exist yet */}
                            {/* <Text href="mailto:hi@benjy.pro">hi@benjy.pro</Text> */}
                            <Social>
                    <SocialMediaWrapper>
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
                        </Card>
                    </CardContent>
                </ContactWrap>
            </Container>
        </>
    )
}

export default Contact
