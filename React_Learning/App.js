const parent=React.createElement(
    "div", 
    {id: "parent"},
    React.createElement(
        "h3",
        {id: "child"},
        "This is how nested React elements are created..."
    )
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading=React.createElement("h2", {}, "Hello, this is my first react DOM manipulation...");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);