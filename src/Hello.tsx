import styled from "styled-components";
import bgimg from "./img/helloBg.gif";
import { Typing } from "typing-effect-reactjs";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid green;
    background-image: url(${bgimg});
    background-repeat:no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Title = styled.div`
    font-size: 40px;
    position: absolute;
    `;


function Hello() {
    const textArry = ['퍼블리싱', 'UI & UX', '리소스 관리', 'API 데이터 다루기', '디자이너 백엔드 소통', '다 할 수 있는!'];
    const myName = ['................', '임형오 입니다!'];
    return (
        <Section>
            <Title>
                프론트엔드 개발자란?

                <Typing
                    text={textArry}
                    typeSpeed={300}
                    deleteSpeed={200}
                    disablebBlinkingOnEnd={false}
                    blinkingSpeed={530}
                    letterSpacing={0}
                    cursorPadding={0.15}
                    cursorColor={"red"}
                />
                <Typing
                    text={myName}
                    ignoreInitialDelay={true}
                    typeSpeed={800}
                    deleteSpeed={200}
                    disablebBlinkingOnEnd={true}
                />
            </Title>
        </Section >
    );
}

export default Hello;