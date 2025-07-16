

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            { id: "heads" },
            "I'm h1 tag"
        ),
        React.createElement(
            "h2",
            { id: "heads" },
            "I'm h2 tag"
        )]
    ));


const heading = React.createElement("h1", { id: "heading" }, "Helloie world!!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);