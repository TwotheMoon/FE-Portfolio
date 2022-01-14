import styled from "styled-components";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    border: 2px solid blue;
`;

const Contents = styled.div`
    margin-top: 50px;
`;


function AboutMe() {

    return (
        <Section>
            <Contents>AboutMe</Contents>
        </Section>
    );
}

export default AboutMe;