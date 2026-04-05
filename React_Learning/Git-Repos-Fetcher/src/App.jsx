import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [repoDetails, setRepoDetails]=useState([]);
  const [entries, setEntries]=useState("");
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

  const repos=async()=>{
    const details=await fetch("https://api.github.com/users/"+username, {
          headers: {
          Authorization: ""
        }
      }
    )
    details=await details.json();
    console.log(details);
    setRepoDetails(details);
  }

  return (
    <>
      <div>
        <label htmlFor="username">Username : </label>
        <input type="text" id="username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
        <br /><br />
        <button onChange={repos()}>Fetch</button>
      </div>
    </>
  )
}

export default App
