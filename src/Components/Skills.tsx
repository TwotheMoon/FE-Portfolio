import styled, { keyframes } from "styled-components";
import ApexChart from "./ApexChart";
import htmlLogo from "../img/html5.png";
import cssLogo from "../img/css3.png";
import jsLogo from "../img/javascript.png";
import reactLogo from "../img/reactLogo.png";
import nodeIcon from "../img/nodejsIcon.png";
import typescriptIcon from "../img/TypescriptLogo.png";
import { useState } from "react";
import SubSkillsChart from "./SubSkillsChart";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Contents = styled.div`
   width: 1100px;
   height: 750px;
   display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border: 4mm ridge mediumturquoise;
    position: relative;
`;

const Title = styled.div`
    width: 180px;
    height: 35px;
    padding-top: 5px;
    text-align: center;
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    color: black;
    top: -42px;
    left: 70px;
    background-color: silver;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const ChartWrap = styled.div`
    width: 350px;
    height: 290px;
`;
const SubChartWrap = styled.div`
    width: 1000px;
    height: 600px;
`;
const ChartText = styled.div`
    text-align: center;
    font-size: 20px;
`;


const clickBtnAnimation = keyframes`
  0% {
    opacity : 0.3;
    transform: translateX(0px);
  }
  50% {
    opacity : 1;
    transform: translateX(10px);
  }
  100%{
    opacity : 0.3;
    transform: translateX(0px);
  }
`;

const ArrowText = styled.div`
    position: absolute;
    top: 10px;
    right: 200px;
    animation: ${clickBtnAnimation} 2s ease-in-out infinite;
`;

const Button = styled.button`
    width: 180px;
    height: 35px;
    text-align: center;
    position: absolute;
    font-size: 25px;
    font-weight: bold;
    color: black;
    top: 0px;
    right: -2px;
    background-color: silver;
    cursor: pointer;
    font-family: "NeoDunggeunmo";
`;



function Skills() {
    const [click, setClick] = useState(true);
    const btnClick = (() => {
        setClick((prev) => !prev);
    });

    return (
        <Section>
            <Contents>
                {click === true ? (
                    <Title>Main Skills</Title>
                ) : (
                    <Title>Sub Skills</Title>
                )}

                <ArrowText>Do you want a see another skills? OK! Click!! ▶ </ArrowText>
                <Button onClick={btnClick}>
                    {click === true ? (
                        "Sub Skills"
                    ) : (
                        "Main Skills"
                    )}
                </Button>
                {click === true ?
                    (
                        <>
                            <ChartWrap>
                                <ApexChart logo={htmlLogo} percent={85} color={'#E44D26'} />
                                <ChartText>HTML5</ChartText>
                            </ChartWrap>
                            <ChartWrap>
                                <ApexChart logo={cssLogo} percent={70} color={'#2A9EFA'} />
                                <ChartText>CSS3</ChartText>
                            </ChartWrap>
                            <ChartWrap>
                                <ApexChart logo={jsLogo} percent={60} color={'#E6A329'} />
                                <ChartText>JavaScript(ES6)</ChartText>
                            </ChartWrap>
                            <ChartWrap>
                                <ApexChart logo={reactLogo} percent={55} color={'#61DAFB'} />
                                <ChartText>React JS</ChartText>
                            </ChartWrap>
                            <ChartWrap>
                                <ApexChart logo={typescriptIcon} percent={55} color={'#3178C5'} />
                                <ChartText>TypeScript</ChartText>
                            </ChartWrap>
                            <ChartWrap>
                                <ApexChart logo={nodeIcon} percent={20} color={'#88C043'} />
                                <ChartText>Node JS</ChartText>
                            </ChartWrap>
                        </>
                    )
                    :
                    <SubChartWrap>
                        <SubSkillsChart />
                    </SubChartWrap>
                }
            </Contents>
        </Section >
    );
}

export default Skills;