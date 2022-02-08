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
    justify-content: center;
    align-items: center;
`;
const WorkTitle = styled.h1`
    font-weight: bold;
    font-size: 23px;
`;
const WorkImg = styled(motion.img)`
    width: 350px;
    border-radius: 20px;
`;
const BorderLine = styled(motion.div)`
    width: 320px;
    height: 590px;
    border: 2px dashed brown;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const SpeakMaker = styled(motion.div)`
    margin-top: 30px;
    width: 50px;
    height: 15px;
    background-color: black;
    border-radius: 20px;
`;
const InnerDescript = styled(motion.div)`
    text-align: center;
    position: relative;
    width: 100%;
    height: 100%;

    h2{
        font-size: 20px;
        font-family: "GmarketSansMedium";
        font-weight: bold;
    }
    p{
        font-size: 15px;
        margin-top: 20px;
        font-family: "GmarketSansMedium";
        text-align: left;
        margin-left: 15px;
        line-height: 1.8;
    }
`;
const SkillLogoWrap = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: absolute;
    bottom: 30px;
img{
    width: 50px;
}
`;

const Descript = styled(motion.div)`
    width: 350px;
    height: 620px;
    border-radius: 20px;
    border: 5px solid #2f3640;
    background-color: burlywood;
    transform-origin: center left;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LinkCircle = styled(motion.div)`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    margin: 0 auto;
    margin-top: 50px;
    &:hover{
        background: rgba(255, 255, 255, 0.8);
    }
`;
const LinkInfo = styled(motion.div)`
    height: 100%;
`;

function Works() {
    const [index, setIndex] = useState(0);
    const [back, setBack] = useState(false);
    const [hover, setHover] = useState(false);
    const whileHover = () => setHover(true);
    const whileHoverEnd = () => setHover(false);
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
                                <WorkBoxDescriptWrap>
                                    <WorkImg
                                        src={findSrc}
                                    />
                                    <Descript
                                        initial={{ rotateY: 180 }}
                                        animate={{ rotateY: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <BorderLine>
                                            <SpeakMaker
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: 0 }}
                                                transition={{ delay: 1, duration: 0.3 }}
                                            />
                                            <InnerDescript
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.2, duration: 0.5 }}
                                            >
                                                <h2>요소수 재고 확인</h2>
                                                <p>
                                                    공공 데이터 api와 카카오맵을 이용해 제작 <br /><br />
                                                    - 상태관리 Recoil을 이용한 데이터 관리 <br />
                                                    - 타입스크립트를 이용해 데이터 타입 정의 <br />
                                                    - UseQuery를 이용해 데이터 패치<br />
                                                    - 카카오맵 마커에 모든 주유소 반복문 출력<br />
                                                    - 마커 클릭시 해당 주유소 코드를 조회, <br />
                                                    일치하는 주유소 데이터만 하단에 출력<br />
                                                    - 스타일 컴포넌트를 이용 동적으로 css 변경
                                                </p>
                                                <a href={"https://twothemoon.github.io/React_FindScr/"} target="_blank">
                                                    <LinkCircle onHoverStart={whileHover} onHoverEnd={whileHoverEnd}>
                                                        <i className="fas fa-home fa-lg"></i>
                                                    </LinkCircle>
                                                    <AnimatePresence>
                                                        {hover ?
                                                            <LinkInfo key={2} initial={{ y: 5, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }}>Hompage</LinkInfo>
                                                            : null
                                                        }
                                                    </AnimatePresence>
                                                </a>
                                                <SkillLogoWrap>
                                                    <img src={html}></img>
                                                    <img src={css}></img>
                                                    <img src={javaScriopt}></img>
                                                    <img src={react}></img>
                                                    <img src={typeScript}></img>
                                                </SkillLogoWrap>
                                            </InnerDescript>
                                        </BorderLine>
                                    </Descript>
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
                                <WorkBoxDescriptWrap>
                                    <WorkImg
                                        src={findSrc}
                                    />
                                    <Descript
                                        initial={{ rotateY: 180 }}
                                        animate={{ rotateY: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <BorderLine>
                                            <SpeakMaker
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: 0 }}
                                                transition={{ delay: 1, duration: 0.3 }}
                                            />
                                            <InnerDescript
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.2, duration: 0.5 }}
                                            >
                                                <h2>이더문 톡</h2>
                                                <p>
                                                    바닐라 html, css를 이용해 카카오톡 제작 <br /><br />
                                                    - 상태관리 Recoil을 이용한 데이터 관리 <br />
                                                    - 타입스크립트를 이용해 데이터 타입 정의 <br />
                                                    - UseQuery를 이용해 데이터 패치<br />
                                                    - 카카오맵 마커에 모든 주유소 반복문 출력<br />
                                                    - 마커 클릭시 해당 주유소 코드를 조회, <br />
                                                    일치하는 주유소 데이터만 하단에 출력<br />
                                                    - 스타일 컴포넌트를 이용 동적으로 css 변경
                                                </p>
                                                <a href={"https://twothemoon.github.io/React_FindScr/"} target="_blank">
                                                    <LinkCircle onHoverStart={whileHover} onHoverEnd={whileHoverEnd}>
                                                        <i className="fas fa-home fa-lg"></i>
                                                    </LinkCircle>
                                                    <AnimatePresence>
                                                        {hover ?
                                                            <LinkInfo key={2} initial={{ y: 5, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }}>Hompage</LinkInfo>
                                                            : null
                                                        }
                                                    </AnimatePresence>
                                                </a>
                                                <SkillLogoWrap>
                                                    <img src={html}></img>
                                                    <img src={css}></img>
                                                    <img src={javaScriopt}></img>
                                                    <img src={react}></img>
                                                    <img src={typeScript}></img>
                                                </SkillLogoWrap>
                                            </InnerDescript>
                                        </BorderLine>
                                    </Descript>
                                </WorkBoxDescriptWrap>
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