const React = require("react");

const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div id="text-button">
            Count: {count}
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

module.exports = Counter;