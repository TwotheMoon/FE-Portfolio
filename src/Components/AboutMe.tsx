import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import profileImg from "../img/profile.jpg";
import dialogA from "../img/dialogA.png";
import bottomImg from "../img/botImg.png";
import user from "../img/user-solid.svg";
import birth from "../img/birthday-cake-solid.svg";
import address from "../img/map-marker-alt-solid.svg";
import phone from "../img/mobile-android-alt-solid.svg";
import email from "../img/envelope-solid.svg";
import school from "../img/graduation-cap-solid.svg";
import certificate from "../img/file-certificate-solid.svg";
import moonPageQR from "../img/2theMoonPage.png";
import moonGit from "../img/moongit.png";
import coinIcon from "../img/pngwing.com.png";
import marioIcon from "../img/mario.gif";
import engelMushroom from "../img/engelMushroom.gif";
import propelMushroom from "../img/propelMushroom.gif";
import reactBrands from "../img/react-brands.svg";
import javaBrands from "../img/java-brands.svg";
import shield from "../img/shield-duotone.svg";
import youtube from "../img/youtube-brands.svg";
import pacman from "../img/pacmanIcon.png";

const Section = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
const Contents = styled.div`
    width: 100%;
    height: 900px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
 `;
const ProfileWrap = styled.div`
    display: flex;

`;
const ProfileImg = styled.div`
        position: relative;
        width: 400px;
        height: 400px;
        margin-top: 50px;
        background-image: url(${profileImg});
        background-repeat:no-repeat;
        background-size: cover;
        user-select: none;
        border-radius: 50%;
        margin-left: 20px;
        
    `;
const PropleMushroom = styled.img`
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50px;
    transform: rotateZ(-50deg);
    `;
const DialogA = styled.div`
        width: 500px;
        height: 500px;
        background-image: url(${dialogA});
        background-repeat:no-repeat;
        background-size: cover;
        user-select: none;
        margin-top: 50px;
        
    `;
const mushroomAnimation = keyframes`
        10%{
            transform: translateX(0px) rotateZ(20deg);
        }
        20%{
            transform: translateX(20px) rotateZ(-20deg);
        }
        30%{
            transform: translateX(40px) rotateZ(20deg) ;
        }
        40%{
            transform: translateX(60px) rotateZ(-20deg);
        }
        50%{
            transform: translateX(70px) rotateZ(20deg);
        }
        60%{
            transform: translateX(60px) rotateZ(-20deg);
        }
        70%{
            transform: translateX(40px) rotateZ(20deg);
        }
        80%{
            transform: translateX(20px) rotateZ(-20deg);
        }
        90%{
            transform: translateX(0px) rotateZ(20deg);
        }
        100%{
            transform: rotateZ(0deg);
        }

    `;
const EngelMushroom = styled.img`
    margin-top: 40px;
    margin-right: 30px;
    width: 50px;
    height: 40px;
    animation: ${mushroomAnimation} 10s ease-in-out infinite;
    `;
const About = styled.div`
    position: relative;
    width: 350px;
    height: 600px;
    margin-left: 45px;
    margin-top: 100px;
    div{
        margin-top: 15px;
    }
    div span{
        font-size: 18px;
        color: #F9EBDE;
    }
    font-family: 'GmarketSansLight';
    font-weight: bold;
    font-size: 13px;
`;
const IconImg = styled.img`
    width: 20px;
     height: 20px; 
     margin-right: 10px;
`;
const QrWrap = styled.div`
margin-left: 100px;
margin-top: -80px;
`;
const QrImgA = styled(motion.img)`
position: absolute;
    width: 200px;
    height: 200px;
    user-select: none;
    margin-left: 200px;

`;
const QrImgB = styled(motion.img)`
position: absolute;
    width: 200px;
    height: 200px;
    user-select: none;

`;
const QrImgAFloat = styled(motion.img)`
    user-select: none;

`;
const QrImgBFloat = styled(motion.img)`
    user-select: none;

`;
const CoinIconWrap = styled.div`
    position: absolute;
    bottom: 80px;
`;
const coinAAnimation = keyframes`
   12%{
        transform: translateY(0px);
    }
    22%{        
        transform: translateY(-40px);
    }
    32%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(0px);
    }
`;
const coinBAnimation = keyframes`
   72%{
        transform: translateY(0px);
    }
    82%{        
        transform: translateY(-40px);
    }
    92%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(0px);
    }
`;
const CoinIconA = styled.img`
 width: 40px;
 height: 40px;
 margin-bottom: 40px;
 animation: ${coinAAnimation} 5s infinite;
`;
const CoinIconB = styled.img`
 width: 40px;
 height: 40px;
 margin-bottom: 40px;
 animation: ${coinBAnimation} 5s infinite;
`;
const CoinIcon = styled.img`
 width: 40px;
 height: 40px;
 margin-bottom: 40px;
`;
const marioAnimation = keyframes`
    0%{
        transform: translateX(0px);
    }
    10%{
        transform: translateX(40px);
    }
    20%{        
        transform: translate(40px, -40px);
    }
    30%{
        transform: translate(40px, 0px);
    }
    40%{
        transform: translateX(120px);
    }
    50%{
        transform: translateX(120px) scaleX(-1); 
    }
    60%{
        transform: translateX(120px) scaleX(1);
    }
    70%{
        transform: translate(80px) scaleX(-1);
    }
    80%{
        transform: translate(80px, -40px) scaleX(-1);
    }
    90%{
        transform: translate(80px, 0px) scaleX(-1);
    }
    100%{
        transform: translateX(0px) scaleX(-1);
    }
`;
const MarioIcon = styled.img`
 width: 40px;
 height: 40px;
animation: ${marioAnimation} 5s infinite;
`;
const BottomImg = styled.div`
    width: 100%;
    height: 150px;
    background-image: url(${bottomImg});
    background-size: cover;
    user-select: none;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.8;
`;
const TapWrap = styled.div`
position: absolute;
top: 42px;
margin-left: 46px;
`;
const Tap = styled.button <{ active: boolean }> `
    font-family: "NeoDunggeunmo";
    font-size: 15px;
    height: 30px;
    width: 90px;
    border: none;
    background-color: ${(props) => props.active ? "rgba(95, 144, 196, 1)" : "rgba(50, 100, 150, 1)"};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-right: 5px;
    cursor: pointer;
    position: relative;

`;
const Circle = styled(motion.img)`
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    right: 0;
    top: -25px;
`;
const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const HugeText = styled.span`
    position: relative;
    top: 180px;
    z-index: -1;
`;

function AboutMe() {
    const [active, setActive] = useState(0);
    const activeTab1 = (() => {
        if (active === 0) return;
        if (active === 1) {
            setActive(0);
        }
    });
    const activeTab2 = (() => {
        if (active === 1) return;
        if (active === 0) {
            setActive(1);
        }
    });
    const [id, setId] = useState<null | string>(null);

    return (
        <Section>
            <Contents>
                <ProfileWrap>
                    <EngelMushroom src={engelMushroom} />
                    <DialogA>
                        <TapWrap>
                            <Tap onClick={activeTab1} active={active === 0}>
                                About Me
                                {active === 0 ? <Circle src={pacman} layoutId="circle" /> : null}
                            </Tap>
                            <Tap onClick={activeTab2} active={active === 1}>
                                Education
                                {active === 1 ? <Circle src={pacman} style={{ scaleX: -1 }} layoutId="circle" /> : null}
                            </Tap>
                        </TapWrap>
                        <About>
                            {active === 0 ?
                                (
                                    <>
                                        <div>
                                            <IconImg src={user} />
                                            <span>?????????</span>
                                        </div>
                                        <div>
                                            <IconImg src={birth} />
                                            <span>94.02.15</span>
                                        </div>
                                        <div>
                                            <IconImg src={address} />
                                            <span>????????? ????????? 16?????? 31</span>
                                        </div>
                                        <div>
                                            <IconImg src={phone} />
                                            <span>010-2324-6241</span>
                                        </div>
                                        <div>
                                            <IconImg src={email} />
                                            <span>dlaguddh1@gmail.com</span>
                                        </div>
                                        <div>
                                            <IconImg src={school} />
                                            <span>??????????????? ??????????????? ?????? ???</span>
                                        </div>
                                        <div>
                                            <IconImg src={certificate} />
                                            <span>
                                                ???????????? ?????????2??? <br />
                                                &nbsp;&nbsp;&nbsp;&nbsp;SQLD ?????????
                                            </span>
                                        </div>
                                    </>
                                )
                                : (
                                    <>
                                        <div>
                                            <span>2021.12 ~ 2021.02</span><br />
                                            <IconImg className="reactIcon" src={reactBrands} />
                                            <span>[??????????????? ??????] React JS</span>
                                        </div><br />
                                        <div>
                                            <span>2021.06 ~ 2021.11</span> <br />
                                            <IconImg src={javaBrands} />
                                            <span>[?????? ???????????? ??????] ???????????????</span>
                                        </div><br />
                                        <div>
                                            <span>2020.11 ~ </span> <br />
                                            <IconImg src={shield} />
                                            <span>??????????????? ?????? ?????? ???</span>
                                        </div><br />
                                        <div>
                                            <span>Always Studing with</span> <br />
                                            <IconImg src={youtube} />
                                            <span>Nomard Coder, Dream Coding Ellie</span>
                                        </div>

                                    </>
                                )
                            }
                            <CoinIconWrap>
                                <MarioIcon src={marioIcon} />
                                <CoinIconA src={coinIcon} />
                                <CoinIconB src={coinIcon} />
                                <CoinIcon src={coinIcon} />
                            </CoinIconWrap>
                        </About>
                    </DialogA>
                    <ProfileImg>
                        <PropleMushroom src={propelMushroom} />
                    </ProfileImg>
                </ProfileWrap>
                <AnimatePresence>
                    {id === "qr1" ?
                        <Overlay
                            onClick={() => setId(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <QrImgAFloat layoutId="qr1" style={{ width: 500, height: 500, zIndex: 1 }} src={moonPageQR} />
                        </Overlay> : null}
                    {id === "qr2" ?
                        <Overlay
                            onClick={() => setId(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <QrImgBFloat layoutId="qr2" style={{ width: 500, height: 500, zIndex: 0 }} src={moonGit} />
                        </Overlay> : null}
                </AnimatePresence>
                <QrWrap>
                    <HugeText>Click to make it huge. ???</HugeText>
                    <QrImgA layoutId="qr1" onClick={() => setId("qr1")} src={moonPageQR} />
                    <QrImgB layoutId="qr2" onClick={() => setId("qr2")} src={moonGit} />
                </QrWrap>
                <div>
                    <BottomImg />
                </div>
            </Contents>
        </Section >
    );
}

export default AboutMe;