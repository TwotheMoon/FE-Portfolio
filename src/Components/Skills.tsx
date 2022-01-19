import styled from "styled-components";
import htmlLogo from "../img/html5.png";
import cssLogo from "../img/css3.png";
import jsLogo from "../img/javascript.png";
import reactLogo from "../img/reactLogo.png";
import ApexChart from "./ApexChart";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid green;
`;

const Contents = styled.div`
   height: 100%;
   display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const ChartWrap = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid red;
`;



function Skills() {

    return (
        <Section>
            <Contents>
                <ChartWrap>
                    <ApexChart logo={htmlLogo} percent={85} color={'#E44D26'} />
                </ChartWrap>
                <ChartWrap>
                    <ApexChart logo={cssLogo} percent={70} color={'#2A9EFA'} />
                </ChartWrap>
                <ChartWrap>
                    <ApexChart logo={jsLogo} percent={65} color={'#E6A329'} />
                </ChartWrap>
                <ChartWrap>
                    <ApexChart logo={reactLogo} percent={70} color={'#61DAFB'} />
                </ChartWrap>
                <ChartWrap>
                    <ApexChart logo={reactLogo} percent={70} color={'#61DAFB'} />
                </ChartWrap>

            </Contents>
        </Section >
    );
}

export default Skills;