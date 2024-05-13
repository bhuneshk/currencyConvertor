import React from 'react'

function Input(props) {

  return (
    <div className="bg-black m-6" style={{width:"40em",height:"160px"}}>
      <div className="py-5 px-6 text-xl flex justify-between" style={{color:"white"}}>
        <h1>{props.label}</h1>
        <h1>Currency Type</h1>
      </div>
      <div className="py-5 px-6 text-xl flex justify-between" style={{color:"black"}}>
        <input className="bg-white rounded-lg px-2" style={{width:"20em",opacity:"0.9"}} placeholder={props.amount} onChange={(e)=>{
          if(!e.target.value){
            props.setAmount(0)
          }else props.setAmount(parseInt(e.target.value));
        }} disabled={props.disabled}></input>
        <select className='bg-white rounded-lg py-2 px-2' style={{width:"5em",opacity:"0.9",color:"black"}} value={props.selectCurrency} onChange={(e)=>{
          props.setCurrencyValue(e.target.value); }}>
           {props.currencyList.length && props.currencyList.map((currency)=>(
            <option key={currency} value={currency} style={{color:"black"}} >
            {currency}
            </option>
           ))}
        </select>
      </div>
    </div>
  )
}

export default Input

