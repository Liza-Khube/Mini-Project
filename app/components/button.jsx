const React = require("react");

const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div id="text-button">
            Count: {count}
            <button id="button" onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

const AgreeFlag = () => {
    const [isChecked, setIsChacked] = React.useState(false);

    const handleChange = () => {
        setIsChacked((value) => !value);
    }

    return (
        <div style={{display: "flex"}}>
            <label>Accept the terms: </label>
            <input type="checkbox" checked={isChecked} onChange={handleChange} style={{marginRight: "36px"}}/>
            {isChecked ? <div style={{color: "darkgrey"}}>You accept the terms. Thank you!</div> : <div>Need to accept the terms.</div>}
        </div>
    )
}

module.exports = {Counter, AgreeFlag};