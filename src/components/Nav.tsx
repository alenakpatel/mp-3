import {Link} from "react-router";
import styled from "styled-components";


const StyledNav = styled.nav`
    background-color: #2C2A4A;
    font-family: lexend, serif;
    width: 30%;
    
    @media screen and (max-width: 750px){
            width: 100%;
    }
`;

const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    justify-content: space-evenly;
    
    @media screen and (max-width: 750px){
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const StyledLi = styled.li`
    margin: 1vh 1vw;
    text-align: center;
    border: 1px #59A5D8 solid;
    background-color: white;
    text-decoration: none;
    font-size: calc(2px + 2vw);
    color: #2C2A4A;
    
    a {
        text-decoration: none;
        font-size: calc(2px + 2vw);
        color: #2C2A4A;
    }
    
    @media screen and (max-width: 750px){
        margin: 0;
    }
`;


export default function Nav(){
    return (
         <StyledNav>
                <StyledUl>
                    <StyledLi><Link to={`/`}>Home</Link></StyledLi>
                    <StyledLi><Link to={`/education`}>Education</Link></StyledLi>
                    <StyledLi><Link to={`/experience`}>Experience</Link></StyledLi>
                    <StyledLi><Link to={`/achievements`}>Achievements</Link></StyledLi>
                    <StyledLi><Link to={`/skills`}>Skills</Link></StyledLi>
                    <StyledLi><Link to={`/projects`}>Projects</Link></StyledLi>
                </StyledUl>
         </StyledNav>
    )
}