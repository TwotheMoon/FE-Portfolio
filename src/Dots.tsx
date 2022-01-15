
interface DotProps {
    num?: number,
    scrollIndex: number,
    onClick?: any,
    onDotClick?: any
}

const Dot = ({ num, scrollIndex, onDotClick }: DotProps) => {

    return (
        <div
            style={{
                width: 10,
                height: 10,
                border: "1px solid grey",
                borderRadius: 999,
                backgroundColor: scrollIndex === num ? "white" : "transparent",
                transition: "background-color 1.0s",
                cursor: "pointer",
                userSelect: "none",
            }}
        >
            <span style={{ marginLeft: 15 }}>
                {scrollIndex === num && scrollIndex === 1 ? "Hello" : null}
                {scrollIndex === num && scrollIndex === 2 ? "About" : null}
                {scrollIndex === num && scrollIndex === 3 ? "Skills" : null}
                {scrollIndex === num && scrollIndex === 4 ? "Works" : null}
            </span>
        </div>
    );
};

const Dots = ({ scrollIndex, onDotClick }: DotProps) => {

    return (
        <div style={{ position: "fixed", top: "50%", right: 100 }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 20,
                    height: 100,
                }}
            >
                <div onClick={onDotClick.onHomeClick}>
                    <Dot num={1} scrollIndex={scrollIndex} />
                </div>
                <div onClick={onDotClick.onAboutClick}>
                    <Dot num={2} scrollIndex={scrollIndex} />
                </div>
                <div onClick={onDotClick.onSkillsClick}>
                    <Dot num={3} scrollIndex={scrollIndex} />
                </div>
                <div onClick={onDotClick.onWorksClick}>
                    <Dot num={4} scrollIndex={scrollIndex} />
                </div>
            </div >
        </div >
    );
};

export default Dots;