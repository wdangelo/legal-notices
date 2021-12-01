import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    label {
        margin-top: 1.5rem;
        font-size: 1.5rem;
        font-family: 'asap';
    }

`;

export const Box = styled.div`
    width: 700px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    table tr td {
        padding: 20px;
        display: inline-flex;
    }

    table tr td img {
        height: 5rem;
    }
    
`;

export const Input = styled.input`
    padding: 10px;
    margin-top: 0.5rem;
    border-radius: 3px;
    border: 0 none;
    width: 40rem;
    height: 2.3rem;
    font-size: 1.5rem;
    color: #3f3f3f;
    font-family: 'asap';
`;

export const InputFile = styled.div`
    label {
        cursor: pointer;
        border: solid;
        border-radius: 4px;
        padding: 10px;
    }

    #icon {
        opacity: 0;
        position: absolute;
        z-index: -1;
    }
`;
