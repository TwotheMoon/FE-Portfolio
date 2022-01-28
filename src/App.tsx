import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import Hello from "./Components/Hello";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Works from "./Components/Works";
import React, { useEffect, useRef, useState } from "react";
import Dots from "./Components/Dots";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *{
    box-sizing: border-box;
  }
  body{
    font-family: 'NeoDunggeunmo';
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    overflow-y: auto;

  }
  a{
    text-decoration:none;
    color: inherit; // 부모로부터 속성 가져오기
  }
  p{
    line-height: 20px;
  }
`;

const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;


const DIVIDER_HEIGHT = 5;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const outerDivRef = useRef<HTMLDivElement | any>();
  const [scrollIndex, setScrollIndex] = useState(1);

  const helloRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wheelHandler = (e: any) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });

        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        }
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    }
  }, []);

  const onHomeClick = () => {
    helloRef.current?.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(1);
  };
  const onAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(2);
  };
  const onSkillsClick = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(3);
  };
  const onWorksClick = () => {
    worksRef.current?.scrollIntoView({ behavior: 'smooth' });
    setScrollIndex(4);
  };

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Outer ref={outerDivRef}>
          <div ref={helloRef}>
            <Hello />
          </div>
          <Divider />
          <div ref={aboutRef}>
            <AboutMe />
          </div>
          <Divider />
          <div ref={skillsRef}>
            <Skills />
          </div>
          <Divider />
          <div ref={worksRef}>
            <Works />
          </div>
          <Dots onDotClick={{ onHomeClick, onAboutClick, onSkillsClick, onWorksClick }} scrollIndex={scrollIndex}></Dots>
        </Outer>
      </ThemeProvider>
    </>
  );
}



export default App;
