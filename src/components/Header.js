import React, { Fragment } from "react";
import styled from "styled-components";

import Logo from "./image/logo.webp";

export const Container = styled.div`
    display: flex;
    align-items: center;
`;
const WrapperLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: column;
`;
const WrapperRight = styled.div`
    /*  */
`;

const HeaderParagraph = styled.h1`
    margin:2.0rem;
    font-size: 1.3rem;
    color: whitesmoke;
`;



const Header = () => {
    return (
        <Fragment>
            <Container>
                <WrapperLeft>
                    <img style={{margin:"20px"}} src={Logo} alt="Image1"></img>
                    <HeaderParagraph>
                        2 CHEFS CIRCULAIR RESTAURANT
                    </HeaderParagraph>
                </WrapperLeft>

                <WrapperRight>
                    <p>Logo</p>
                    <p>Logo</p>
                    <p>Tel: +316 21966195</p>
                </WrapperRight>
            </Container>
        </Fragment>
    );
};
export default Header;
