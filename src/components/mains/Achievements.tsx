import styled from "styled-components";

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
        text-align: left;
    }
    
    h3 {
        color: #2C2A4A;
        font-family: lexend, serif;
        padding-top: 2vw;
        padding-left: 2vw;
        font-size: calc(3px + 2vw);
        text-align: left;
    }
    
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

export default function Achievements() {
    return (
        <StyledMain>
            <title>Achievements | Resume</title>
            <div id="sub-text">
                <h3> Achievements </h3>
                <p>
                    <b> BU Dean's List </b> <br/>
                    Fall 2024, Spring 2025 <br/>
                </p>
                <p>
                    <b> AWS Cloud Practitioner Essentials Certificate </b> <br/>
                    August 2024 <br/>
                </p>
                <p>
                    <b> Google Cloud Digital Leader Learning Path Certificate </b> <br/>
                    June 2024 <br/>
                </p>
                <p>
                    <b> UVA Dean’s List of Distinguished Students </b> <br/>
                    Fall 2023, Spring 2024 <br/>
                </p>
            </div>
        </StyledMain>
    )
}