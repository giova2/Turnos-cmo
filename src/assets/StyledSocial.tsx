import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import tw from "twin.macro";

export const StyledIcon = styled.a`
  ${tw`w-8 h-8 mb-4 cursor-pointer`};
`;

export const StyledContainer = styled.div`
  ${tw`absolute right-0 h-screen flex flex-col justify-center mr-4`};
`;
