import React, { Fragment, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

import styled from "styled-components";

const Nav = styled.nav`
    position: relative;
    top: 0;
    width: 100%;
    height: 50px;
`;


const List = styled.div`
    list-style-type: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width: 500px) {
            background-color:transparent;
            flex-direction: column;
            height: auto;
    }
`;

const Button = styled.button`
    margin-right: 20px;
    font-size: 20px;
    text-transform: uppercase;
    color: whitesmoke;
    cursor: pointer;
    border: 3px solid whitesmoke;
    padding: 20px 20px;
    &:hover {
        background-color: gray;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.555);
        text-align: center;
        margin-right: 0px;
        padding: 20px 20px;
        :nth-child(1) {
            border: 3px solid whitesmoke;
            margin-top: 10px;
        }
    }
`;

const NavBarBtn = styled.nav`
    .btn {
        display: none;
        position: absolute;
        right: 10px;
        top: 7px;
        padding: 5px;
        color: #000;
        font-size: 18px;
    }
    @media screen and (max-width: 500px) {
        .btn {
            display: block;
        }
    }
`;

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <Fragment>
            <NavBarBtn>
                <Nav>
                    {(toggleMenu || screenWidth > 500) && (
                        <List>
                            <li>
                                <Button style={{ backgroundColor: "#f2bd1e"}}>
                                    THUIS
                                </Button>
                            </li>
                            <li>
                                <Button style={{ backgroundColor: "#138f0e" }}>
                                    OVER ONS
                                </Button>
                            </li>
                            <li>
                                <Button style={{ backgroundColor: "#d41f15" }}>
                                    MENU
                                </Button>
                            </li>
                            <li>
                                <Button style={{ backgroundColor: "#f500a3" }}>
                                    RESERVEREN
                                </Button>
                            </li>
                            <li>
                                <Button style={{ backgroundColor: "#ff9900" }}>
                                    AGENDA
                                </Button>
                            </li>
                            <li>
                                <Button style={{ backgroundColor: "#0000ee" }}>
                                    GROEPEN
                                </Button>
                            </li>
                            <li>
                                <Button style={{ backgroundColor: "#d41f15" }}>
                                    (BUURT)PROJECTEN
                                </Button>
                            </li>
                            <li>
                                <Button style={{ backgroundColor: "#000000" }}>
                                    CONTACT
                                </Button>
                            </li>
                        </List>
                    )}

                    <button onClick={toggleNav} className="btn">
                        <FaBars />
                    </button>
                </Nav>
            </NavBarBtn>
        </Fragment>
    );
}

