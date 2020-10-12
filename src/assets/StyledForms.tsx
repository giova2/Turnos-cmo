import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import tw from "twin.macro";

export const StyledHeader = styled.div.attrs({
  className:
    "flex flex-col justify-start items-center",
})`
  font-family: ${({ theme }) => theme.fonts.main};
  & {
    h1 {
      ${tw`text-4xl mb-3`}    
      font-size: ${({ theme }) => theme.fontSize.main};
      margin-bottom:-1.5rem;
    }
    .subtitle{
      font-size: ${({ theme }) => theme.fontSize.secondary};
    }
  }
`;

export const StyledLayoutWait = styled.div<{sending:boolean}>`
  ${tw`absolute left-0 top-0 h-screen w-screen bg-blue-600 bg-opacity-75 flex justify-center items-center`}
  text-shadow: 1px 1px 2px black;
  font-size: ${({ theme }) => theme.fontSize.mobile};
  transition: all 500ms cubic-bezier(0.07, 0.64, 0.46, 0.87);
  visibility: ${({ sending }) => sending ? `visible` : `hidden`};
  opacity: ${({ sending }) => sending ? 1 : 0};
  z-index: ${({ sending }) => sending ? 10 : -1};
`;

export const StyledContainerInput = styled.div`
  ${tw`w-full`};
`;

export const StyledError = styled.span`
  ${tw`text-red-700 font-bold pb-2`};
`;

const StyledForm = styled.main.attrs({
  className:
    "flex flex-col h-screen justify-start items-center w-screen overflow-x-hidden",
})`
  background-image: url("./assets/images/recepcion.jpg");
  font-size: ${({ theme }) => theme.fontSize.secondary};
  ${breakpoint("mobile")`
    background-size: cover;
    background-position: center;
  `}
  ${breakpoint("tablet")`
    background-size: 100% 100%;
    background-position: top;
  `}
  
  & {
    form {
      ${tw`bg-white bg-opacity-50 text-center rounded py-8 px-5 shadow max-w-screen-md`}
      ${breakpoint("mobile")`
        width: 95%;
      `}
      ${breakpoint("tablet")`
        width: 50%;
      `}
    }
    input {
      ${tw`border-gray-300 mb-2 w-full border-solid border rounded py-2 px-1`}
    }
    select {
      ${tw`border-gray-300 mb-2 w-full border-solid border rounded py-2 px-1`}
    }
    button {
      ${tw`bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 mx-2 border border-blue-700 rounded`}
    }
  }
`;
export default StyledForm;



