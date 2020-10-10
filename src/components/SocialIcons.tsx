import React from "react";
import { StyledIcon, StyledContainer } from "../assets/StyledSocial";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "../assets/Icons";

const SocialIcons = () => {
  return (
    <StyledContainer>
      
      <StyledIcon href="#" target="_blank">
        <FacebookIcon className="text-black hover:text-blue-600" />
      </StyledIcon>
      <StyledIcon href="#" target="_blank">
        <InstagramIcon className="text-black hover:text-blue-600" />
      </StyledIcon>
      <StyledIcon href="#" target="_blank">
      <WhatsappIcon className="text-black hover:text-blue-600" />
      </StyledIcon>
    </StyledContainer>
  );
};

export default SocialIcons;
