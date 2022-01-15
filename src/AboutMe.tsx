import styled from "styled-components";
import profileImg from "./img/profile.jpg";
import dialogA from "./img/dialogA.png";
import bottomImg from "./img/botImg.png";

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
        width: 400px;
        height: 400px;
        background-image: url(${profileImg});
        background-repeat:no-repeat;
        background-size: cover;
        user-select: none;
        border-radius: 200px;
    `;
const DialogA = styled.div`
        width: 400px;
        height: 400px;
        background-image: url(${dialogA});
        background-repeat:no-repeat;
        background-size: cover;
        user-select: none;
    `;
const BottomImg = styled.div`
    width: 100%;
    height: 100px;
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
                <DialogA>
                    {/* 내용 */}
                </DialogA>
                <ProfileImg />
            </ProfileWrap>
            <div>
                <BottomImg />
            </div>
        </Section>
    );
}

export default AboutMe;