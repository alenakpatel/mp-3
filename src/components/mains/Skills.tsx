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

export default function Skills() {
    return (
        <StyledMain>
            <title>Skills | Resume</title>
            <div id="sub-text">
                <h3> Tools and Applications </h3>
                <p>
                    Adobe Creative Cloud (Photoshop, Illustrator, InDesign, Lightroom), Figma, Visual Studio
                    Code, Scikit-learn, NumPy, Matplotlib, Tensor Flow
                </p>
                <h3> Programming Languages </h3>
                <p>
                    Python, HTML, Java, JavaScript, SQL
                </p>
            </div>
        </StyledMain>
    )
}