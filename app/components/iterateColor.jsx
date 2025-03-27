const React = require("react");

const COLORS = ["Red", "Orange", "Yellow", "Green", "Lightblue", "Blue", "Purple"];

const ChangeColor = () => {

    const genColor = function* (){
        let i = 0;
        while (true) {
            yield COLORS[i];
            i = (i + 1) % COLORS.length;
        };
    };

    const iterableColor = genColor();
    const iteraterColor = iterableColor[Symbol.iterator]();
    const iterableRef = React.useRef(iteraterColor);

    const [currColor, setColor] = React.useState("Black");
    const intervalRef = React.useRef(null);

    const changeColor = () => {
        setColor(iterableRef.current.next().value);
    };

    const startChangeColorAuto = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setColor(iterableRef.current.next().value)
            }, 1000)  ;  
        };
    };

    const stopChangeColorAuto = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <div>
        <div style={{color: currColor, textAlign: "center", margin: "20px auto"}}>
            {currColor}
        </div>
        <div style={{textAlign: "center"}}>
            <button className="button" style={{marginRight: "36px"}} onClick={changeColor}>Change color</button>
            <span  style={{marginRight: "10px"}}>Change color automatically:</span>
            <button  className="button" onClick={startChangeColorAuto}>Start</button>
            <button  className="button" onClick={stopChangeColorAuto}>Stop</button>
        </div>
        </div>
    );
};

module.exports = ChangeColor;