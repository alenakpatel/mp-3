import styled from "styled-components";
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Achievements from "./mains/Achievements.tsx";
import Experience from "./mains/Experience.tsx";
import Skills from "./mains/Skills.tsx";
import Projects from "./mains/Projects.tsx";

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    text-align: center;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export default function Root() {
    return (
        <>
            <PageWrapper>
                <Header/>
                <StyledContainer>
                    <Nav/>
                    <Routes>
                        <Route path={`/`} element={<Home/>}></Route>
                        <Route path={`/education`} element={<Education/>}></Route>
                        <Route path={`/experience`} element={<Experience/>}></Route>
                        <Route path={`/achievements`} element={<Achievements/>}></Route>
                        <Route path={`/skills`} element={<Skills/>}></Route>
                        <Route path={`/projects`} element={<Projects/>}></Route>
                    </Routes>
                </StyledContainer>
                <Footer/>
            </PageWrapper>
        </>
    )
}