import React from 'react'
import Icon1 from '../../images/projects/portfolio.png'
import Icon2 from '../../images/projects/shopping-bag.png'
import Icon3 from '../../images/projects/umbrella.png'
import Icon4 from '../../images/projects/japanese-castle.png'
import { 
    ProjectsContainer, 
    ProjectsH1, 
    ProjectsCard, 
    ProjectsH2, 
    ProjectsIcon, 
    ProjectsP, 
    ProjectsWrapper 
} from './Projects'
import { ButtonExternal } from '../Button'

const Projects = () => {
    return (
        <ProjectsContainer id="work">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>This Website</ProjectsH2>
                    <ProjectsP>This porfolio is open sourced on my Github portfolio. Built with React and Styled Components.</ProjectsP>
                    <ButtonExternal href="//github.com/ferrouslights/portfolio" target="_blank">View on Github</ButtonExternal>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Shopping Cart With React and Typescript</ProjectsH2>
                    <ProjectsP>This project utilizes React, TS, Material-UI, and Styled Components to create a shopping cart experience.</ProjectsP>
                    <ButtonExternal href="//github.com/ferrouslights/react-and-typescript-shopping-cart" target="_blank">View on Github</ButtonExternal>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Simplified Weather App</ProjectsH2>
                    <ProjectsP>A simple weather app designed only to tell you the temperature, whether you need a jacket, and whether you should bring an umbrella.</ProjectsP>
                    <ButtonExternal href="//github.com/ferrouslights/weather" target="_blank">View on Github</ButtonExternal>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon4}/>
                    <ProjectsH2>JLPT N5 Kanji Guide</ProjectsH2>
                    <ProjectsP>This project used react and styled components to create a list of Japanese kanji recommended to study for the JLPT N5 exam.</ProjectsP>
                    <ButtonExternal href="//github.com/ferrouslights/JLPT-N5-Kanji" target="_blank">View on Github</ButtonExternal>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects
