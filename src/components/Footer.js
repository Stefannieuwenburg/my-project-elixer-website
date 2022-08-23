import React, { Fragment } from "react";
import styled from "styled-components";

export const FooterContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
`;

export const Image = styled.img`
    border-radius: 9999px;
    width: 1.5rem;
    height: 1.5rem;
    padding-right: 0.2rem;
`;



const Footer = () => {
    return (
        <Fragment>
            <FooterContainer>
                <p>Egeldonk 50, 1103 AK Amsterdam</p>
            </FooterContainer>
        </Fragment>
    );
};
export default Footer;
