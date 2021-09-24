import React, {useState} from 'react'
import { 
    HeroContainer, 
    HeroBg, 
    HeroImage, 
    HeroContent, 
    HeroP, 
    HeroH1, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight, 
    Typewriter 
} from './HeroSection';
// banner foundation placed just in case I want one later
// import BannerImage from '../../images/banner.png';
import { Button } from '../Button';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                {/* <HeroImage src={BannerImage}/> */}
            </HeroBg>
            <HeroContent>
                <HeroP>Howdy!<br /></HeroP>
                <HeroH1>
                I'm <Typewriter
                        text={["Benjamin Bridges", "a Web Developer" , "a Creative Thinker" , "Always Learning"]}
                        speed="150"
                        eraseSpeed="150"
                        eraseDelay="2000"
                        />
                </HeroH1>
                <HeroBtnWrapper>
                    <Button to="contact" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                        Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
