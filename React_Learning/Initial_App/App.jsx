// import React from "react";
import ReactDOM from "react-dom/client";
import Sample from "./Sample"
import SampleRouting from "./SampleRouting";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import SampleHoc from "./SampleHoc";
import { useDetails } from "./useDetails";
import { useContext, useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { userContext } from "./userContext";

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

//Dynamic-Bundling
const DynamicBundle=lazy(()=>import("./SampleDynamicBundling"));

const Parent= ()=>{
    const HigherOrderComponent=SampleHoc(Sample);
    const {loggedInUser}=useContext(userContext);
    const [userName, setUserName]=useState(loggedInUser);
    const [details, setDetails]=useState(null);

    return (
        <>
            <userContext.Provider value={{loggedInUser:userName, setUserName}}>
                <div id="parent">
                    <label htmlFor="userName">UserName : </label>
                    <input id="userName" type="text" onChange={(e)=>setUserName(e.target.value)}/>
                    <button onClick={()=>setDetails(useDetails({name:userName, status:window.navigator.onLine}))}>Update</button>
                    {details!==null && details}
                    <h2 id="child" className="children" >This is how nested React elements are created using JSX...</h2>
                </div>
                <h3><Link to="/dynamic/bundle">Use Dynamic Bundling</Link></h3>
                <Outlet />
                <HigherOrderComponent />
            </userContext.Provider>
        </>
    );
}

// const root=ReactDOM.createRoot(document.getElementById("root"));
// Rendering a Functional Component
// root.render(<Parent />);

// const heading=React.createElement("h2", {}, "Hello, this is my first react DOM manipulation...");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//Sample Routing
// const appRouter=createBrowserRouter(
//     [
//         {
//             path:"/",
//             element:<Parent/>
//         },
//         {
//             path:"/hooks",
//             element:<Sample />
//         },
//         {
//             path:"/routing",
//             element:<SampleRouting/>
//         }
//     ]
// );


//Children Routing 
const appRouter=createBrowserRouter(
    [
        {
            path: "/",
            element: <Parent/>,
            children: [
                {
                    path: "/hooks",
                    element: <Sample/>
                },
                {
                    path: "/routing",
                    element: <SampleRouting/>
                }
            ],
            errorElement: <ErrorPage/>
        },
        {
            path: "/dynamic/bundle",
            element: <Suspense fallback={<h2>This is fallback from suspense due to dynamic bundling</h2>}><DynamicBundle /></Suspense>
        }
    ]
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);