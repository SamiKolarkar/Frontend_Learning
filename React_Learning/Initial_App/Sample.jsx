import {useState, useEffect} from 'react';

function Sample() {
    const [username, setUserName]=useState("");
    
      // This type of declaration calls our function everytime after the component renders
      useEffect(()=>{
        console.log(">UseEffect is called...");
      });
    
      // This type of declaration calls our function after the initial render of component
      useEffect(()=>{
        console.log(">UseEffect is called...");
      }, []);
    
      // This type of declaration calls our function after the state of state variable username changes
      useEffect(()=>{
        console.log(">UseEffect is called...");
      }, [username]);

    return (
    <>
        <div>
            <h3>This is sample of useEffect Hook...</h3>
        </div>
    </>);
}

export default Sample;