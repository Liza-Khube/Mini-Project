const React = require("react");

const COLORS = ["Red", "Orange", "Yellow", "Green", "Lightblue", "Blue", "Purple"];

const ChangeColor = () => {

    const genColor = function* (){
        let i = 0;
        while (true) {
            yield COLORS[i];
            i = (i + 1) % COLORS.length;
        }
    }

    const iterableColor = genColor();
    const iteraterColor = iterableColor[Symbol.iterator]();
    const iterableRef = React.useRef(iteraterColor);

    const [currColor, setColor] = React.useState("Black");

    const changeColor = () => {
        setColor(iterableRef.current.next().value);
    };

    return (
        <div>
        <div style={{color: currColor, textAlign: "center", margin: "20px auto"}}>
                {currColor}
        </div>
        <div style={{textAlign: "center"}}>
            <button style={{fontSize: "17px"}} onClick={changeColor}>Change color</button>
            {/* <span  style={{marginRight: "10px"}}>Change color automatically:</span>
            <button  id="button">Start</button>
            <button  id="button">Stop</button> */}
        </div>
        </div>
    );
};


module.exports = ChangeColor;