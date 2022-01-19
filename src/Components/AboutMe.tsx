import styled, { keyframes } from "styled-components";
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

const Section = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    border: 1px solid green;
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
        background-image: url(${profileImg});
        background-repeat:no-repeat;
        background-size: cover;
        user-select: none;
        border-radius: 50%;
        margin-top: 50px;
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
    width: 50px;
    height: 40px;
    animation: ${mushroomAnimation} 10s ease-in-out infinite;
    `;

const About = styled.div`
position: relative;
            width: 300px;
            height: 600px;
            margin-left: 45px;
            margin-top: 100px;
            div{
                margin-top: 15px;
            }
            div span{
                font-size: 18px;
            }
            
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

const QrImgA = styled.img`
position: absolute;
    width: 200px;
    height: 200px;
    user-select: none;
    margin-left: 200px;

`;
const QrImgB = styled.img`
position: absolute;
    width: 200px;
    height: 200px;
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



function AboutMe() {

    return (
        <Section>
            <ProfileWrap>
                <EngelMushroom src={engelMushroom} />
                <DialogA>
                    <About>
                        <div>
                            <IconImg src={user} />
                            <span>임형오</span>
                        </div>
                        <div>
                            <IconImg src={birth} />
                            <span>94.02.15</span>
                        </div>
                        <div>
                            <IconImg src={address} />
                            <span>관악구 문성로 16가길 31</span>
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
                            <span>학점은행제 정보보호학 전공 중</span>
                        </div>
                        <div>
                            <IconImg src={certificate} />
                            <span>
                                네트워크 관리사2급 <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;SQLD 개발자
                            </span>
                        </div>
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
            <QrWrap>
                <QrImgA src={moonPageQR} />
                <QrImgB src={moonGit} />
            </QrWrap>
            <div>
                <BottomImg />
            </div>
        </Section>
    );
}

export default AboutMe;