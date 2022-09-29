import React, { useState } from 'react';
import './App.css';
import { ethers } from 'ethers'   // acts like a backend for our Web3/DApp 
import Greeter from './contracts/Greeter.sol/Greeter.json'

const greeterAddress = '0xdc64a140aa3e981100a9beca4e685f962f0cf6c9'

function App() {
  const [greeting, setGreetingValue] = useState<string | null>(null);

 async function requestAccount() {
  await window.ethereum?.request({ method: 'eth_requestAccounts' });
 }
 // call the smart contract, read the current greeting value
 async function fetchGreeting() {
  await window.ethereum.enable()
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
    try {
      const data = await contract.greet()
      console.log('data: ', data)
    } catch (err) {
      console.log("Error: ", err)
    }
  }    
}

// call the smart contract, send an update
async function setGreeting() {
  if (!greeting) return
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
    const transaction = await contract.setGreeting(greeting)
    await transaction.wait()
    fetchGreeting()
  }
}

return (
  <div className="App">
    <header className="App-header">
      <button onClick={fetchGreeting}>Fetch Greeting</button>
      <button onClick={setGreeting}>Set Greeting</button>
      <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
    </header>
  </div>
);
}


export default App;
