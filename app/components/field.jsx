const React = require("react");

const User = () => {
    const [name, setName] = React.useState("user")

    React.useEffect(() => {
        document.title = `Hello ${name}`
    }, [name])
    return (
        <div>
            <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/></p>
            <h3>Hello {name}!</h3>
        </div>
    )
}

module.exports = User;