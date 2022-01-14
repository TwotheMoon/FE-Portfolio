import { Link } from "react-scroll";
import styled from "styled-components";

const HeaderUl = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 100px;
    border: 1px solid red;
    position: fixed;
`;
const HeaderLi = styled.li`
cursor: pointer;
`;

interface IScrollProps {
    scrollIndex: number;
}

function Header({ scrollIndex }: IScrollProps) {
    console.log(scrollIndex);


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