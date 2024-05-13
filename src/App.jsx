import { useEffect, useState } from "react";
import Input from "./components/Input"

function App() {
  const [value,setValue]=useState({});
  const [fromselectCurrency,setFromSelectCurrency]=useState("usd");
  const [toselectCurrency,setToSelectCurrency]=useState("inr");
  const [currencyList,setCurrencyList]=useState({});
  const [fromAmount,setfromAmount]=useState(0);
  const [toAmount,settoAmount]=useState(0);
  const fetchData=async ()=>{
    const data=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromselectCurrency}.json`).then((res)=>res.json()).then((res)=>res[fromselectCurrency]);
    setCurrencyList(Object.keys(data));
    setValue(data);
  }
  const convert=()=>{
    console.log(parseInt(value[toselectCurrency]));
    settoAmount(fromAmount* parseInt(value[toselectCurrency]));
  }
  console.log(fromAmount);
  useEffect(()=>{
    fetchData();
  },[fromselectCurrency]);
  return (
    <>
      <div className="rounded-xl" style={{width: "700px", height: "500px", backgroundColor:"grey",opacity: "0.9",border:"4px solid white",margin:"auto",marginTop:"4rem"}}>
      <form onSubmit={(e)=>{
        e.preventDefault();
        convert();}}>
      <Input label="From" currencyList={currencyList} selectCurrency={fromselectCurrency} setCurrencyValue={setFromSelectCurrency} amount={fromAmount} setAmount={setfromAmount}/>
      <Input label="To" currencyList={currencyList} selectCurrency={toselectCurrency} setCurrencyValue={setToSelectCurrency} amount={toAmount} disabled={true}/>
      <button type="submit" className="text-xl p-5" style={{width:"80%",backgroundColor:"black",opacity: "0.9",color: "white",display:"block",margin:"auto",cursor:"pointer"}}>Convert {fromselectCurrency.toUpperCase()} to {toselectCurrency.toUpperCase()}</button>
      </form>
      </div>
    </>
  )
}

export default App
