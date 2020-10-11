import React from "react";
import { StyledIcon, StyledContainer } from "../assets/StyledSocial";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "../assets/Icons";

const SocialIcons = () => {
  return (
    <StyledContainer >
      <StyledIcon className="flex-grow flex justify-center" href="https://www.facebook.com/CMO-Consultorios-M%C3%A9dico-Odontol%C3%B3gicos-111522620586449" target="_blank">
        <FacebookIcon className="text-black hover:text-blue-600" />
      </StyledIcon>
      <StyledIcon className="flex-grow flex justify-center" href="https://instagram.com/cmo_consultorios?igshid=ypasc5z0t85o" target="_blank">
        <InstagramIcon className="text-black hover:text-blue-600" />
      </StyledIcon>
      <StyledIcon className="flex-grow flex justify-center" href="https://wa.me/5493413077912" target="_blank">
        <WhatsappIcon className="text-black hover:text-blue-600" />
      </StyledIcon>
    </StyledContainer>
  );
};

export default SocialIcons;
