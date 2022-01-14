import styled from "styled-components";
import bgimg from "./img/helloBg.gif";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid green;
    background-image: url(${bgimg});
    background-repeat:no-repeat;
    background-size: cover;
    position: relative;
`;

const Title = styled.div`
    font-size: 40px;
    top: 50%;
    left: 45%;
    position: absolute;
`;


function Hello() {

    return (
        <Section>
            <Title>안녕하세요</Title>
        </Section >
    );
}

export default Hello;