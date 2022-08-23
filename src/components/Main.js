import React, { Fragment } from "react";
import styled from "styled-components";

import Mainpic from "./image/Mainpic.jpg"

const Container = styled.div`
    display: grid;
    grid-gap: 2rem;
    margin: 10px;
    padding: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const MainLeft = styled.div`
    padding: 2rem;
    border: 3px solid whitesmoke;
    text-align: center;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
    background-color: yellowgreen;

    text-align: center;
`;
const Middel = styled.div`
    padding: 2rem;
    border: 3px solid whitesmoke;
    text-align: center;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
    background-color: lightblue;
`;
const MainRight = styled.div`
    padding: 2rem;
    border: 3px solid whitesmoke;
    text-align: center;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.5);
    background-color: blueviolet;
    img {
        border-radius: 20px;
        width: 20rem;
        height: 20rem;
    }
`;
const HeaderParagraph = styled.div`
font-size:1.3rem;
color:whitesmoke;
`;
const Paragraph = styled.div`
    font-size: 0.9rem;
    color: whitesmoke;
`;




const MainBox = () => {
    return (
        <Fragment>
            <Container>
                <MainLeft>
                    <HeaderParagraph>ELIXER IN EEN NOTENDOP</HeaderParagraph>
                    <Paragraph>
                        Elixer is een 2 chefs circulair restaurant. Chefs
                        Valentijn en Eva koken bourgondisch en met lokale
                        producten op houtvuur. Elixer is een groene oase met
                        zonnig terras te midden van de Bijlmerflats. Bij Elixer
                        geloven we dat alles een tweede leven verdient. Het pand
                        waar wij ons in huizen dient na jaren van leegstand weer
                        als broedplaats. Meubels, potten en pannen die elders
                        stonden te verstoffen worden bij ons weer volop
                        gebruikt. Het grootste deel van het geld dat binnenkomt
                        zetten wij direct in om duurzaam te ondernemen, en
                        sociale en culturele buurtinitiatieven te faciliteren.
                        Zo organiseren wij regelmatig een 'Heel Bijlmer Bakt'
                        kooksessie en een 'Circulaire Ruilmarkt' met wisselend
                        thema. Ben jij een tuinder of balkonboer met
                        oogst-overschot of wil je jouw kunst exposeren in ruil
                        voor een diner voor twee? Neem dan contact op met:
                        post@restaurantelixer.com{" "}
                    </Paragraph>
                </MainLeft>
                <Middel>
                    <HeaderParagraph> OPENINGSTIJDEN</HeaderParagraph>
                    <Paragraph>
                        maandag GESLOTEN dinsdag GESLOTEN
                        woensdag 12.00u-00.00u donderdag 12.00u-00.00u vrijdag
                        12.00u-01.00u zaterdag 12.00u-00.00u zondag
                        12.00u-22.00u
                    </Paragraph>
                </Middel>
                <MainRight>
                    <img src={Mainpic} alt="Image1"></img>
                </MainRight>
            </Container>
        </Fragment>
    );
};
export default MainBox;
