import React, { Fragment } from "react";
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-gap: 2rem;
    margin:10px;
    padding:3rem;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
`;
const SectionOne = styled.div`
    padding: 2rem;
    border: 3px solid whitesmoke;
    text-align: center;
    box-shadow:10px 10px 30px rgba(0,0,0,0.5);
    background-color: blue;
`;
const SectionTwo = styled.div`
    padding: 2rem;
    border: 3px solid whitesmoke;
    text-align: center;
    box-shadow:10px 10px 30px rgba(0,0,0,0.5);
    background-color: lightblue;
`;
const SectionTree = styled.div`
    padding: 2rem;
    border: 3px solid whitesmoke;
    background-color: lightblue;
    border: 2px solid black;
    box-shadow:10px 10px 30px rgba(0,0,0,0.5);
    text-align: center;
`;
const HeaderParagraph = styled.div`
    font-size: 1.3rem;
    color: whitesmoke;
`;
const Paragraph = styled.div`
    font-size: 0.9rem;
    color: whitesmoke;
    text-decoration:bold;
`;




const Section = () => {
    return (
        <Fragment>
            <Container>
                <SectionOne>
                    <HeaderParagraph>VIS VAN JAN WOORD</HeaderParagraph>
                    <Paragraph>
                        Een lekker visje voor het weekend? Jan Woord komt elke
                        vrijdag verse Nederlandse vis brengen, zodat jij niet
                        helemaal naar Urk hoeft. Meld je aan via de onderstaande
                        knop!
                    </Paragraph>{" "}
                </SectionOne>
                <SectionTwo>
                    <HeaderParagraph>BROOD VAN IAMBE</HeaderParagraph>
                    <Paragraph>
                        Elke zaterdag vers brood? Elke zaterdag halen wij brood
                        bij Iambe, een Amsterdamse bakkerij. Hun producten
                        worden bereid door mensen met een verstandelijke
                        beperking. Brood gemaakt met liefde voor het product en
                        zorg voor de mens erachter. Dit alles onder begeleiding
                        van professionele bakkers. Bestel je brood uiterlijk
                        woensdag en kom het zaterdag ophalen door een berichtje
                        naar Elixer te sturen
                    </Paragraph>
                </SectionTwo>
                <SectionTree>
                    <HeaderParagraph>BIJLMERBIOS</HeaderParagraph>
                    <Paragraph>
                        Elke donderdag- en zaterdagavond is er om
                        19:00 en om 21:00 een filmvertoning bij ons in het
                        gebouw. Voor het programma en tickets kan je terecht op
                        de website van de Bijlmerbios. Bij ons kun je terecht
                        voor een menu, hapje of drankje voor of na de film.
                        Bekijk hier het programma:
                    </Paragraph>
                </SectionTree>
            </Container>
        </Fragment>
    );
};
export default Section;
