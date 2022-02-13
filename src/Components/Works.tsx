import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

import monView from "../img/monViewGif.gif";
import findSrc from "../img/findScr.gif";
import repairMoon from "../img/repairMoon.gif";
import teamMoon from "../img/teamMoon.gif";
import moonTalk from "../img/moonTalk.gif";
import momentum from "../img/momentum.gif";
import shopMoon from "../img/shopMoonHome.png";
import retroWindow from "../img/retroWindow.png";
import html from "../img/html5.png";
import css from "../img/css3.png";
import javaScriopt from "../img/javascript.png";
import react from "../img/reactLogo.png";
import typeScript from "../img/TypescriptLogo.png";
import nodeJs from "../img/nodejsIcon.png";
import jquery from "../img/jquery.png";
import myBtis from "../img/myBtis.png";
import spring from "../img/spring.png";
import oracle from "../img/oracle.png";
import aJax from "../img/aJax.png";
import jsp from "../img/jspicon.png";
import java from "../img/java.png";
import eclipse from "../img/eclipse.png";

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
const WorkImg = styled(motion.img)`
    width: 350px;
    height: 620px;
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
    margin-top: 50px;
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
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
    position: absolute;
    bottom: 0;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background: rgba(255, 255, 255, 0.5);
    &:hover{
        background: rgba(255, 255, 255, 0.8);
    }
`;
const LinkInfo = styled(motion.div)`
    height: 100%;
`;
const WorkBoxDescriptWrapVer2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const WorkImgWrap = styled(motion.div)`
    width: 700px;
    height: 340px;
    border-radius: 20px;
    background: black;
    display: flex;
    justify-content: center;
`;
const WorkImgVer2 = styled(motion.img)`
    width: auto;
    height: 340px;
`;
const DescriptVer2 = styled(motion.div)`
    border: 1px solid red;
    width: 700px;
    height: 345px;
    border-radius: 20px;
    border: 5px solid #2f3640;
    background-color: burlywood;
    transform-origin: center top;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BorderLineVer2 = styled(motion.div)`
    width: 670px;
    height: 320px;
    border: 2px dashed brown;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;
const Camera = styled(motion.div)`
    width: 60px;
    height: 25px;
    background: black;
    border-radius: 20px;
    position: absolute;
    left: 0px;
    bottom: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const Lens = styled(motion.div)`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #555;
    
`;
const Flash = styled(motion.div)`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: yellow;
`;
const InnerDescriptVer2 = styled(motion.div)`
    text-align: center;
    position: relative;
    width: 100%;
    height: 100%;

    h2{
        font-size: 20px;
        font-family: "GmarketSansMedium";
        font-weight: bold;
        margin-top: 20px;
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
const Partition = styled(motion.div)`
    height: 270px;
    display: flex;
    
    `;
const Partition1 = styled(motion.div)`
    width: 400px;
`;
const Partition2 = styled(motion.div)`
   width: 350px;
`;
const SkillLogoWrapVer2 = styled(motion.div)`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    img{
        width: 50px;
    }
`;
const LinkCircleVer2 = styled(motion.div)`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    margin: 0 auto;
    margin-top: 30px;
    &:hover{
        background: rgba(255, 255, 255, 1);
    }
`;
const HookInfo = styled.div`

    h6{
        margin-top: 40px;
        margin-bottom: 15px;
        font-size: 17px;
        font-family: "GmarketSansMedium";
        font-weight: bold;
    }
    span{
        font-size: 13px;
        font-family: "GmarketSansMedium";
        line-height: 15px;
    }
`;
const SkillLogoWrapForJava = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 5fr);
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    img{
        width: 50px;
        margin: 0 auto;
    };
    img:nth-child(4){
        height: 40px;
    }
`;

function Works() {
    const [index, setIndex] = useState(0);
    const [back, setBack] = useState(false);
    const [hover, setHover] = useState(false);
    const whileHover = () => setHover(true);
    const whileHoverEnd = () => setHover(false);
    const incrementIndex = () => {
        if (index === 7) {
            setIndex(0);
        }
        setBack(false);
        setIndex((prev) => prev + 1)
    }
    const decrementIndex = () => {
        if (index === 0) {
            setIndex(7);
        }
        setBack(true);
        setIndex((prev) => prev - 1)
    }
    useEffect(() => {
        if (index === 7) {
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
                        {/* MonView */}
                        {index === 0 &&
                            <WorkBox custom={back} key="0" variants={box} initial="invisible" animate="visible" exit="exit">
                                <WorkBoxDescriptWrapVer2>
                                    <WorkImgWrap>
                                        <WorkImgVer2
                                            src={monView}
                                        />
                                    </WorkImgWrap>
                                    <DescriptVer2
                                        initial={{ rotateX: 180 }}
                                        animate={{ rotateX: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <BorderLineVer2>
                                            <Camera
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: 0 }}
                                                transition={{ delay: 1, duration: 0.3 }}
                                            >
                                                <Lens />
                                                <Flash />
                                            </Camera>
                                            <InnerDescriptVer2
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.2, duration: 0.5 }}
                                            >
                                                <h2>MonView - 영상 스트리밍 페이지</h2>
                                                <Partition>
                                                    <Partition1>

                                                        <p>
                                                            React와 motion을 이용한 영상 스트리밍 사이트 <br /><br />
                                                            - motion을 이용한 애니메이션 로직 고민 및 구현 <br />
                                                            - Recoil을 이용한 상태 관리 <br />
                                                            - api를 이용한 검색 기능 구현 <br />
                                                            - slider를 컴포넌트화 시켜 props를 <br />
                                                            이용해 여러 종류 slider 구현 <br />
                                                            - 약관동의 모두선택 state를 통해 구현<br />
                                                        </p>
                                                    </Partition1>
                                                    <Partition2>
                                                        <SkillLogoWrapVer2>
                                                            <img src={html}></img>
                                                            <img src={css}></img>
                                                            <img src={javaScriopt}></img>
                                                            <img src={react}></img>
                                                            <img src={typeScript}></img>
                                                            <img src={nodeJs}></img>
                                                        </SkillLogoWrapVer2>
                                                        <HookInfo>
                                                            <h6>Hooks & Library</h6>
                                                            <span>
                                                                ReactQuery, StyledComponent, Recoil, ReactRouter, ReactPlayer, FramerMotion
                                                            </span>
                                                        </HookInfo>
                                                        <LinkCircleVer2 onHoverStart={whileHover} onHoverEnd={whileHoverEnd}>
                                                            <a href={"https://twothemoon.github.io/react-MonView/"} target="_blank">
                                                                <i className="fas fa-home fa-lg"></i>
                                                            </a>
                                                        </LinkCircleVer2>
                                                        <AnimatePresence>
                                                            {hover ?
                                                                <LinkInfo key={2} initial={{ y: 5, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }}>Hompage</LinkInfo>
                                                                : null
                                                            }
                                                        </AnimatePresence>
                                                    </Partition2>
                                                </Partition>
                                            </InnerDescriptVer2>
                                        </BorderLineVer2>
                                    </DescriptVer2>
                                </WorkBoxDescriptWrapVer2>
                            </WorkBox>
                        }

                        {/* 요소수 */}
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
                                                <SkillLogoWrap>
                                                    <img src={html}></img>
                                                    <img src={css}></img>
                                                    <img src={javaScriopt}></img>
                                                    <img src={react}></img>
                                                    <img src={typeScript}></img>
                                                </SkillLogoWrap>
                                                <a href={"https://twothemoon.github.io/React_FindScr/"} target="_blank">
                                                    <LinkCircle>
                                                        <i className="fas fa-home fa-lg"></i>
                                                    </LinkCircle>
                                                </a>
                                            </InnerDescript>
                                        </BorderLine>
                                    </Descript>
                                </WorkBoxDescriptWrap>
                            </WorkBox>
                        }

                        {/* Repair Moon */}
                        {index === 2 &&
                            <WorkBox custom={back} key="2" variants={box} initial="invisible" animate="visible" exit="exit">
                                <WorkBoxDescriptWrapVer2>
                                    <WorkImgWrap>
                                        <WorkImgVer2
                                            src={repairMoon}
                                        />
                                    </WorkImgWrap>
                                    <DescriptVer2
                                        initial={{ rotateX: 180 }}
                                        animate={{ rotateX: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <BorderLineVer2>
                                            <Camera
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: 0 }}
                                                transition={{ delay: 1, duration: 0.3 }}
                                            >
                                                <Lens />
                                                <Flash />
                                            </Camera>
                                            <InnerDescriptVer2
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.2, duration: 0.5 }}
                                            >
                                                <h2>Repair Moon - 악기 리페어 샵</h2>
                                                <Partition>
                                                    <Partition1>
                                                        <p>
                                                            React를 활용한 렌딩 페이지 입니다. <br /><br />
                                                            - background-attachment 배경 레이어<br />
                                                            - scrollY 감지를 이용한 메뉴버튼 애니메이션<br />
                                                            - 바닐라 js execCommand()메소드 활용 <br />
                                                            버튼 클릭시 클립보드 복사 기능 구현 <br />
                                                            - Router 기능 없이 레이어를 통한 SPA <br />
                                                            - svg를 이용하여 아이콘에 동적인 효과
                                                        </p>
                                                    </Partition1>
                                                    <Partition2>
                                                        <SkillLogoWrapVer2>
                                                            <img src={html}></img>
                                                            <img src={css}></img>
                                                            <img src={javaScriopt}></img>
                                                            <img src={react}></img>
                                                        </SkillLogoWrapVer2>
                                                        <HookInfo>
                                                            <h6>Hooks & Library</h6>
                                                            <span>
                                                                Recoil, FramerMotion, StyledComponent
                                                            </span>
                                                        </HookInfo>
                                                        <LinkCircleVer2 onHoverStart={whileHover} onHoverEnd={whileHoverEnd}>
                                                            <a href={"https://twothemoon.github.io/randingPage-ReapaireMoon/"} target="_blank">
                                                                <i className="fas fa-home fa-lg"></i>
                                                            </a>
                                                        </LinkCircleVer2>
                                                        <AnimatePresence>
                                                            {hover ?
                                                                <LinkInfo key={2} initial={{ y: 5, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }}>Hompage</LinkInfo>
                                                                : null
                                                            }
                                                        </AnimatePresence>
                                                    </Partition2>
                                                </Partition>
                                            </InnerDescriptVer2>
                                        </BorderLineVer2>
                                    </DescriptVer2>
                                </WorkBoxDescriptWrapVer2>
                            </WorkBox>
                        }

                        {/* Team Moon */}
                        {index === 3 &&
                            <WorkBox custom={back} key="3" variants={box} initial="invisible" animate="visible" exit="exit">
                                <WorkBoxDescriptWrapVer2>
                                    <WorkImgWrap>
                                        <WorkImgVer2
                                            src={teamMoon}
                                        />
                                    </WorkImgWrap>
                                    <DescriptVer2
                                        initial={{ rotateX: 180 }}
                                        animate={{ rotateX: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <BorderLineVer2>
                                            <Camera
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: 0 }}
                                                transition={{ delay: 1, duration: 0.3 }}
                                            >
                                                <Lens />
                                                <Flash />
                                            </Camera>
                                            <InnerDescriptVer2
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.2, duration: 0.5 }}
                                            >
                                                <h2>Repair Moon - 악기 리페어 샵</h2>
                                                <Partition>
                                                    <Partition1>
                                                        <p>
                                                            React를 활용한 렌딩 페이지 입니다. <br /><br />
                                                            - Css mediaQuery를 이용한 반응형<br />
                                                            - 500px 모바일, 800px 태블릿, pc등 호환 <br />
                                                            - ref와 scrollY , X 축 정보를 이용한 애니메이션 <br />
                                                            - 유지보수를 위한 컴포넌트 Title, Nav,  <br />
                                                            AboutUs, ContenctUs, Footer 등으로 모듈화 <br />
                                                            - a mailto를 이용한 메일 링크 생성
                                                        </p>
                                                    </Partition1>
                                                    <Partition2>
                                                        <SkillLogoWrapVer2>
                                                            <img src={html}></img>
                                                            <img src={css}></img>
                                                            <img src={javaScriopt}></img>
                                                            <img src={react}></img>
                                                        </SkillLogoWrapVer2>
                                                        <HookInfo>
                                                            <h6>Hooks & Library</h6>
                                                            <span>
                                                                Recoil, FramerMotion, StyledComponent, reactPlayer
                                                            </span>
                                                        </HookInfo>
                                                        <LinkCircleVer2 onHoverStart={whileHover} onHoverEnd={whileHoverEnd}>
                                                            <a href={"https://twothemoon.github.io/randingPage-CycleTeam/"} target="_blank">
                                                                <i className="fas fa-home fa-lg"></i>
                                                            </a>
                                                        </LinkCircleVer2>
                                                        <AnimatePresence>
                                                            {hover ?
                                                                <LinkInfo key={2} initial={{ y: 5, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }}>Hompage</LinkInfo>
                                                                : null
                                                            }
                                                        </AnimatePresence>
                                                    </Partition2>
                                                </Partition>
                                            </InnerDescriptVer2>
                                        </BorderLineVer2>
                                    </DescriptVer2>
                                </WorkBoxDescriptWrapVer2>
                            </WorkBox>
                        }

                        {/* Momentum */}
                        {index === 4 &&
                            <WorkBox custom={back} key="4" variants={box} initial="invisible" animate="visible" exit="exit">
                                <WorkBoxDescriptWrapVer2>
                                    <WorkImgWrap>
                                        <WorkImgVer2
                                            src={momentum}
                                        />
                                    </WorkImgWrap>
                                    <DescriptVer2
                                        initial={{ rotateX: 180 }}
                                        animate={{ rotateX: 0 }}
                                        transition={{ delay: 1, duration: 0.5 }}
                                    >
                                        <BorderLineVer2>
                                            <Camera
                                                initial={{ opacity: 1 }}
                                                animate={{ opacity: 0 }}
                                                transition={{ delay: 1, duration: 0.3 }}
                                            >
                                                <Lens />
                                                <Flash />
                                            </Camera>
                                            <InnerDescriptVer2
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.2, duration: 0.5 }}
                                            >
                                                <h2>MomentumApp</h2>
                                                <Partition>
                                                    <Partition1>

                                                        <p>
                                                            크롬 모멘텀 앱 구현 <br /><br />
                                                            - motion을 이용한 애니메이션 로직 고민 및 구현 <br />
                                                            - Recoil을 이용한 상태 관리 <br />
                                                            - api를 이용한 검색 기능 구현 <br />
                                                            - slider를 컴포넌트화 시켜 props를 <br />
                                                            이용해 여러 종류 slider 구현 <br />
                                                            - 약관동의 모두선택 state를 통해 구현<br />
                                                            - 노마드코더 챌린지 최우수 당선작
                                                        </p>
                                                    </Partition1>
                                                    <Partition2>
                                                        <SkillLogoWrapVer2>
                                                            <img src={html}></img>
                                                            <img src={css}></img>
                                                            <img src={javaScriopt}></img>
                                                        </SkillLogoWrapVer2>
                                                        <HookInfo>
                                                            <h6>Hooks & Library</h6>
                                                            <span>
                                                                useState, ReactQuery, Recoil, ReactRouter, ReactPlayer, FramerMotion
                                                            </span>
                                                        </HookInfo>
                                                        <LinkCircleVer2 onHoverStart={whileHover} onHoverEnd={whileHoverEnd}>
                                                            <a href={"https://twothemoon.github.io/react-MonView/"} target="_blank">
                                                                <i className="fas fa-home fa-lg"></i>
                                                            </a>
                                                        </LinkCircleVer2>
                                                        <AnimatePresence>
                                                            {hover ?
                                                                <LinkInfo key={2} initial={{ y: 5, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }}>Hompage</LinkInfo>
                                                                : null
                                                            }
                                                        </AnimatePresence>
                                                    </Partition2>
                                                </Partition>
                                            </InnerDescriptVer2>
                                        </BorderLineVer2>
                                    </DescriptVer2>
                                </WorkBoxDescriptWrapVer2>
                            </WorkBox>
                        }

                        {/* 2theMoon Talk */}
                        {index === 5 &&
                            <WorkBox custom={back} key="5" variants={box} initial="invisible" animate="visible" exit="exit">
                                <WorkBoxDescriptWrap>
                                    <WorkImg
                                        src={moonTalk}
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
                                                    - 라이브러리 사용 X <br />
                                                    - css mediaQuery, keyFrames를<br />
                                                    이용한 동적 애니메이션 구현 <br />
                                                    - root css 파일에 각각 페이지의<br />
                                                    css파일 임포트 하여 모듈화<br />
                                                    - 브라우저의 디폴트 css를 제거하기위해<br />
                                                    reset 코드 작성<br />
                                                    - 이후 작업물의 기초를 이 프로젝트를 통해<br />
                                                    기반을 다져 놓았습니다.

                                                </p>
                                                <a href={"https://twothemoon.github.io/2theMoontalk/"} target="_blank">
                                                    <LinkCircle onHoverStart={whileHover} onHoverEnd={whileHoverEnd}>
                                                        <i className="fas fa-home fa-lg"></i>
                                                    </LinkCircle>
                                                </a>
                                                <SkillLogoWrap>
                                                    <img src={html}></img>
                                                    <img src={css}></img>
                                                </SkillLogoWrap>
                                            </InnerDescript>
                                        </BorderLine>
                                    </Descript>
                                </WorkBoxDescriptWrap>
                            </WorkBox>
                        }

                        {/* 문 스몰 샾 */}
                        {index === 6 &&
                            <WorkBox custom={back} key="3" variants={box} initial="invisible" animate="visible" exit="exit">
                                <WorkBoxDescriptWrap>
                                    <WorkImg
                                        src={shopMoon}
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
                                                <h2>스몰샵 문</h2>
                                                <p>
                                                    Spring MVC + myBtis + OracleDB  <br /><br />
                                                    - Spring MVC 패턴으로 제작 <br />
                                                    - Iframe을 통한 유튜브 Api 사용 <br />
                                                    - aJax를 통해 실사간 아이디 중복 확인<br />
                                                    - 페이징 클래스를 만들어 번호 페이징 구현 <br />
                                                    - 로그인시 세션에 회원정보 등록 <br />
                                                    - Intercepter을 이용해 세션 값을 확인해 관리자 페이지 접근 제한 <br />
                                                    - BCryptPasswordEncoder을 이용한 회원 비밀번호 인코딩 후 DB 저장 <br />
                                                    - 1인 개발로 프론트부터 백엔드 서버, <br />
                                                    ERD구조, 테이블모두 제작 하였습니다.

                                                </p>
                                                <a href={"https://twothemoon.github.io/2theMoontalk/"} target="_blank">
                                                    <LinkCircle onHoverStart={whileHover} onHoverEnd={whileHoverEnd}>
                                                        <i className="fas fa-home fa-lg"></i>
                                                    </LinkCircle>
                                                </a>
                                                <SkillLogoWrapForJava>
                                                    <img src={html} />
                                                    <img src={css} />
                                                    <img src={jquery} />
                                                    <img src={aJax} />
                                                    <img src={java} />
                                                    <img src={jsp} />
                                                    <img src={spring} />
                                                    <img src={myBtis} />
                                                    <img src={oracle} />
                                                    <img src={eclipse} />
                                                </SkillLogoWrapForJava>
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