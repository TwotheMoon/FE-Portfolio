import styled from "styled-components";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid green;
`;

const Contents = styled.div`
    margin-top: 50px;
`;


function Skills() {

    return (
        <Section>
            <Contents>Skills</Contents>
        </Section>
    );
}

export default Skills;