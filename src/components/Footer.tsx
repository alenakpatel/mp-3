import styled from "styled-components";
import {Link} from "react-router";

const StyledFooter = styled.main`
    background-color: #59A5D8;
    font-family: lexend, serif;
    color: white;
    padding: 1vw;
    
    p {
        text-align: center;
    }
`;
export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Alena Patel <Link to ={``}>Credits&#169;</Link> </p>
        </StyledFooter>
    )
}