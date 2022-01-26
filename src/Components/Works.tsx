import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import retroWindow from "../img/retroWindow.png";
import findSrc from "../img/srcImg.png";
import html from "../img/html5.png";
import css from "../img/css3.png";
import javaScriopt from "../img/javascript.png";
import react from "../img/reactLogo.png";
import typeScript from "../img/TypescriptLogo.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const WindowBg = styled.img`
    position: absolute;
    width: 1100px;
    height: 850px;
    z-index: -1;

`;
const WorkWrap = styled.div`
    margin-top: 80px;
    width: 1085px;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

`;
const ButtonWrap = styled.button`
    position: absolute;
    width: 40px;
    height: 100%;
    transition: 0.5s;
    background-color: rgba(255, 255, 255, 0.5);
    &:hover{
        background-color: rgba(255, 255, 255, 1);
    }
    &:first-child{
        left: 0px;
    }
    &:last-child{
        right: 0px;
    }
`;
const box = {
    invisible: (back: boolean) => ({
        x: back ? -window.innerWidth : window.innerWidth,
        opacity: 0,
        scale: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        },
    },
    exit: (back: boolean) => ({
        x: back ? window.innerWidth : -window.innerWidth,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 1,
        },
    }),
}
const WorkBox = styled(motion.div)`
    width: 1000px;
    height: 750px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
  `;
const WorkBoxDescriptWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const WorkTitle = styled.h1`
    font-weight: bold;
    font-size: 23px;
`;
const WorkImg = styled.img`
    width: 350px;
    border-radius: 20px;
    margin-left: 100px;
`;
const WorkDescript = styled.div`
    width: 400px;
    border: 1px solid red;
    position: relative;
    margin-right: 100px;
    `;
const WorkSkill = styled.div`
    border: 1px solid green;
    position: absolute;
    bottom: 80px;
    display: flex;
`;
const WorkSubSkill = styled.p`
 position: absolute;
    bottom: 40px;
`;
const SkillLogo = styled.img`   
    width: 50px;
    height: 50px;
    margin: 0px 5px;
`;
function Works() {
    const [index, setIndex] = useState(0);
    const [back, setBack] = useState(false);
    const incrementIndex = () => {
        if (index === 6) {
            setIndex(0);
        }
        setBack(false);
        setIndex((prev) => prev + 1)
    }
    const decrementIndex = () => {
        if (index === 0) {
            setIndex(6);
        }
        setBack(true);
        setIndex((prev) => prev - 1)
    }
    useEffect(() => {
        if (index === 6) {
            setIndex(0);
        }
    }, [index])

    return (
        <>
            <Section>
                <WindowBg src={retroWindow} />
                <WorkWrap>
                    <ButtonWrap onClick={decrementIndex}>
                        <i className="fas fa-chevron-left fa-2x" />
                    </ButtonWrap>
                    <AnimatePresence custom={back}>
                        {index === 0 &&
                            <WorkBox custom={back} key="0" variants={box} initial="invisible" animate="visible" exit="exit">
                                <WorkTitle>MonView - 영화 스트리밍 서비스</WorkTitle>
                            </WorkBox>
                        }
                        {index === 1 &&
                            <WorkBox custom={back} key="1" variants={box} initial="invisible" animate="visible" exit="exit">
                                <WorkTitle>요소수 재고 </WorkTitle>
                                <WorkBoxDescriptWrap>
                                    <WorkImg src={findSrc} />
                                    <WorkDescript>
                                        설명설명.......
                                        <WorkSkill>
                                            <SkillLogo src={html} />
                                            <SkillLogo src={css} />
                                            <SkillLogo src={javaScriopt} />
                                            <SkillLogo src={react} />
                                            <SkillLogo src={typeScript} /> <br />
                                        </WorkSkill>
                                        <WorkSubSkill>
                                            추가 라이브러리, Hooks <br />
                                            useQuery
                                        </WorkSubSkill>
                                    </WorkDescript>
                                </WorkBoxDescriptWrap>
                            </WorkBox>
                        }
                        {index === 2 &&
                            <WorkBox custom={back} key="2" variants={box} initial="invisible" animate="visible" exit="exit">
                                랜딩페이지1
                            </WorkBox>
                        }
                        {index === 3 &&
                            <WorkBox custom={back} key="3" variants={box} initial="invisible" animate="visible" exit="exit">
                                랜딩페이지2
                            </WorkBox>
                        }
                        {index === 4 &&
                            <WorkBox custom={back} key="4" variants={box} initial="invisible" animate="visible" exit="exit">
                                모멘텀
                            </WorkBox>
                        }
                        {index === 5 &&
                            <WorkBox custom={back} key="5" variants={box} initial="invisible" animate="visible" exit="exit">
                                카카오톡
                            </WorkBox>
                        }
                    </AnimatePresence>
                    <ButtonWrap onClick={incrementIndex}>
                        <i className="fas fa-chevron-right fa-2x" />
                    </ButtonWrap>
                </WorkWrap>
            </Section>
        </>
    );
}

export default Works;