import styled from "styled-components";
import ApexChart from "react-apexcharts";

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
            <ApexChart
                type="radialBar"
                series={[60]}
                options={{
                    chart: {
                        height: 350,
                    },

                }}

            >

            </ApexChart>
        </Section >
    );
}

export default Skills;