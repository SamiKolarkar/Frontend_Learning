// import React from "react";
import ReactDOM from "react-dom/client";
import Sample from "./Sample"
import SampleRouting from "./SampleRouting";
import {createBrowserRouter, RouterProvider} from "react-router-dom"


// Redundant - Due to use of JSX
// const parent=React.createElement(
//     "div", 
//     {id: "parent"},
//     React.createElement(
//         "h3",
//         {id: "child"},
//         "This is how nested React elements are created..."
//     )
// );


// Unstructured manner of writing creating elements
// const parent=(<div id="parent">
//     <h2 id="child" className="children" style={{
//         "backgroundColor": "red"
//     }}>This is how nested React elements are created using JSX...</h2>
// </div>)

//React Functional Component - An Function that returns a JSX (or) React Element
const Parent= ()=>{
    return <div id="parent">
                <h2 id="child" className="children" style={{
                    "backgroundColor": "red"
                }}>This is how nested React elements are created using JSX...</h2>
            </div>
}

// const root=ReactDOM.createRoot(document.getElementById("root"));
// Rendering a Functional Component
// root.render(<Parent />);

// const heading=React.createElement("h2", {}, "Hello, this is my first react DOM manipulation...");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<Parent/>
        },
        {
            path:"/hooks",
            element:<Sample />
        },
        {
            path:"/routing",
            element:<SampleRouting/>
        }
    ]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);