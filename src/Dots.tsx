interface DotProps {
    num?: number,
    scrollIndex: number,
}

const Dot = ({ num, scrollIndex }: DotProps) => {
    return (
        <div
            style={{
                width: 10,
                height: 10,
                border: "1px solid grey",
                borderRadius: 999,
                backgroundColor: scrollIndex === num ? "white" : "transparent",
                transition: "background-color 1.0s",

            }}
        ></div>
    );
};

const Dots = ({ scrollIndex }: DotProps) => {
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
                <Dot num={1} scrollIndex={scrollIndex}></Dot>
                <Dot num={2} scrollIndex={scrollIndex}></Dot>
                <Dot num={3} scrollIndex={scrollIndex}></Dot>
                <Dot num={4} scrollIndex={scrollIndex}></Dot>
            </div>
        </div>
    );
};

export default Dots;