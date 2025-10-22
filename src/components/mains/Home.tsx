import styled from "styled-components";

const StyledImg = styled.img`
    align-self: center;
    padding-top: 2vw;
    max-width: 25%;
`;

const StyledMain = styled.main`
    background-color: #b3e5fc;
    height: 225vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    
    p {
        color: #2C2A4A;
        font-family: lexend, serif;
        font-size: calc(1px + 1.5vw);
        padding: 2vw;
    }
`;


export default function Home() {
    return (
        <StyledMain>
        <title>Home | Resume</title>
            <StyledImg src="src/alenaPic.jpeg" alt="Alena Patel"/>
            <p>My name is Alena Patel, and I am a junior at Boston University majoring in Data Science and minoring in
                Computer Science. This is my online resume to showcase my education, experiences, achievements, references, and
                projects.</p>
        </StyledMain>
    )
}