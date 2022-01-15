import styled from "styled-components";
import React, { forwardRef } from "react";

const HeaderUl = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 100px;
    border: 1px solid red;
    position: fixed;
    z-index: 99;
`;
const HeaderLi = styled.li`
cursor: pointer;
`;

function Header() {

    return (
        <div>
            <HeaderUl>
                <HeaderLi>Hello</HeaderLi>
                <HeaderLi>AboutMe</HeaderLi>
                <HeaderLi>Skills</HeaderLi>
                <HeaderLi>Works</HeaderLi>
            </HeaderUl>
        </div>
    );
}

export default Header;