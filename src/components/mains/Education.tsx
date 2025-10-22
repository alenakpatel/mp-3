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
`;

export default function Education() {
    return (
        <StyledMain>
            <title>Education | Resume</title>
            <div id="sub-text">
                <h3> Education </h3>
                <p>
                    <b> Boston University </b> <br/>
                    Bachelor of Science in Data Science, Minor in Computer Science <br/>
                    2024-2027 <br/>
                </p>
                <p>
                    <b> University of Virginia </b> <br/>
                    2023-2024 <br/>
                </p>
                <p>
                    <b> Flint Hill School </b> <br/>
                    High School Diploma <br/>
                    2019-2023 <br/>
                </p>
            </div>
        </StyledMain>
    )
}