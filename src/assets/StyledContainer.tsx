import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div<{cargado?:boolean}>`
    transition: opacity 0.8s linear 0.8s;
    opacity: ${({cargado}) => cargado ? 1 : 0};
    z-index: ${({cargado}) => cargado ? 1 : -1};
`;

export const StyledLayoutCargando = styled.div<{cargado?:boolean}>`
    ${tw`absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-white`};
    font-family: ${({theme})=> theme.fonts.main};
    font-size: ${({theme})=> theme.fontSize.main};
    color: #5b5b5b;
    transition: opacity 0.8s;
    opacity: ${({cargado}) => cargado ? 0 : 1};
    z-index: ${({cargado}) => cargado ? -1 : 1};
`;


