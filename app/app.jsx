const ReactDOM = require("react-dom/client");
const React = require("react");
const Header = require("./components/header.jsx");
const Article = require("./components/article.jsx");

const headerText = "Welcome to the Cooking Note!"
const greetingText = "This is site is your helper and guide to the world of cooking!"

ReactDOM
    .createRoot(document.getElementById("app"))
    .render(
        <div>
            <Header text={headerText}/>
            <Article text={greetingText}/>
        </div>
    )