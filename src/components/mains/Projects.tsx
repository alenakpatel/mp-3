import styled from "styled-components";
import { useState } from 'react';
import { useHook } from '../hooks/useHook.ts';


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

    h3 {
        color: #2C2A4A;
        font-family: lexend, serif;
        padding-top: 2vw;
        padding-left: 2vw;
        font-size: calc(3px + 2vw);
    }

    #calculator-text {
        margin: 2vh 2vw;
        padding: 20px;
        background: #ffffff;
        border-radius: 15px;
    }

    #calculator-text p{
        font-family: lexend, serif;
        font-size: calc(3px + 2vw);
        color: #2C2A4A;
    }

    #output {
        width: 200px;
        height: 50px;
        margin: 10px auto;
        display: block;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-family: lexend, serif;
        font-size: calc(2px + 2vw);
        text-align: center;
        background: #f8f9fa;
    }

    #calculator-text h2{
        font-family: lexend, serif;
        font-size: calc(3px + 2vw);
    }

    #calculator-text input {
        width: 200px;
        height: 50px;
        margin: 10px auto;
        display: block;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-family: lexend, serif;
        font-size: calc(2px + 2vw);
        color: #2C2A4A;
        text-align: center;
        background: #f8f9fa;
    }

    #calculator-text label {
        font-family: lexend, serif;
        font-size: calc(2px + 2vw);
        color: #2C2A4A;
    }
    
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;
const StyledButton = styled.button`
    background: #2C2A4A;
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: calc(2px + 2vw);
    font-family: lexend, serif;
    justify-self: center;
`;

const StyledClear = styled.button`
    background: #f0f0f0;
    color: #2C2A4A;
    border: 2px solid #2C2A4A;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    font-size: 14px;
    font-family: lexend, serif;
    margin: 20px auto;
    display: block;
`;


export default function Projects() {
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [result, setResult] = useState<number | null>(null);

    const color = useHook(result);

    const doAdd = () => {
        const res = Number(one) + Number(two);
        setResult(res);
    };

    const doSubtract = () => {
        const res = Number(one) - Number(two);
        setResult(res);
    };

    const doMultiply = () => {
        const res = Number(one) * Number(two);
        setResult(res);
    };

    const doDivide = () => {
        const res = Number(one) / Number(two);
        setResult(res);
    };

    const doPower = () => {
        let res = 1;
        for (let i = 0; i < Number(two); i++) {
            res = Number(one) * res;
        }
        setResult(res);
    };

    const doClear = () => {
        setOne("");
        setTwo("");
        setResult(null);
    };

    return (
        <StyledMain>
            <h3> Projects </h3>
                <div id="calculator-text">
                <p>
                    <b> JavaScript Calculator </b> <br/>
                </p>
                    <label htmlFor="one">Give a number:</label><input id="one" type="text" value={one} onChange={(e) => setOne(e.target.value)}/>
                    <label htmlFor="two">Give a number:</label><input id="two" type="text" value={two} onChange={(e) => setTwo(e.target.value)}/>

                <div id="buttons">
                    <StyledButton onClick={doAdd}>+</StyledButton>
                    <StyledButton onClick={doSubtract}>-</StyledButton>
                    <StyledButton onClick={doMultiply}>*</StyledButton>
                    <StyledButton onClick={doDivide}>/</StyledButton>
                    <StyledButton onClick={doPower}>^</StyledButton>

                </div>

                <h2 id="output" style={{ color: color }}>{result !== null && result}</h2>
                <StyledClear onClick={doClear}>Clear</StyledClear>
            </div>

        </StyledMain>
    )

}