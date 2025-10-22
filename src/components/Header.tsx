import styled from 'styled-components';

const StyledP = styled.p `
    color: #2C2A4A;
    font-family: lexend, serif;
    font-size: calc(2px + 2vw);
`;

const StyledHeader = styled.header`
    background-color: #59A5D8;
    font-family: lexend, serif;
    font-size: calc(5px + 2vw);
    color: white;
    padding-bottom: 1vw;
`;

export default function Header() {
    return (
        <StyledHeader>
            <h1>Alena's Resume</h1>
            <StyledP>An online resume showcasing Alena's accomplishments</StyledP>
        </StyledHeader>
    )
}