import styled, { css } from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    list-style-type: none;
    padding: 0; 

    @media(max-width:767px){
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledButtonsButton = styled.button`
    cursor: pointer;
    padding-left: 20px;
    background-color: transparent;
    border: none;
    color: hsl(180, 100%, 25%);
    transition: color 0.3s;

    @media(max-width:767px){
        padding-left: 0;
        padding-bottom: 15px;
    }

    ${({ hidden }) => hidden && css`
        display: none;
    `}

    &:hover{
        color: hsl(180, 100%, 35%);
    }

    &:active{
        color: hsl(180, 100%, 20%);
    }

    &:disabled{
        color: #999;
    }
`;