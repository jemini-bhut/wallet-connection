// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // Defining an empty state for the wallet address
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  async function requestAccount() {
    console.log("Account Requested");
  
    // Check if metamask exists in the browser
    if(window.ethereum) {
      console.log("Metamask exists!")
  
      try{
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        console.log(accounts[0])
        setWalletAddress(accounts[0]);
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        })
        setWalletBalance(balance[0]);
        //console.log(accounts);
      } catch (error) {
        console.log(error);
      }
  
    } else {
      console.log("Metamask not detected!");
    }
  } 

  return (
    <div className="App">
      <header className="App-header">
      <h3>Wallet Address: {walletAddress}</h3>
      <h3>Address Balance: {walletBalance}</h3>
        <button
        
        onClick={ requestAccount }
        
        >Connect Metamask</button>
        
      </header>
    </div>
  );
}

export default App;
