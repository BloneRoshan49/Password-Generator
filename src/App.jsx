import { useCallback, useEffect } from "react";
import { useState } from "react"


function App() {
       const [password, setpassword] = useState("");
       const [length, setLength] = useState(8);
       const [numberAllow, setNumber] = useState(false);
       const [specialAllow, setSpecial ] = useState(false);

       const generatepassword = useCallback(()=>{
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";


        if(numberAllow) str += "0123456789";
        if(specialAllow) str += "/!~@#$%^&*()_:;'<>?";
        
        for (let i = 0; i < length; i++) {
          let char = Math.floor(Math.random()* str.length + 1)
          pass += str.charAt(char)

        }
        setpassword(pass)
       },[numberAllow, specialAllow, length])

      useEffect(()=>{
        generatepassword()
      },[numberAllow, specialAllow, length])



      const copyclipboard = ()=>{
        window.navigator.clipboard.writeText(password);
      };

  return (
    <>
     <div className="w-full h-screen bg-slate-800 pt-20">
      <div className="box min-w-[300px] w-[80vw] max-w-[600px] bg-slate-300 p-4 m-auto rounded">
        <h1 className="text-center text-2xl font-bold m-4">Password Generator</h1>
        <hr/>
        <div className="inputBox w-full bg-zinc-900 mt-2 rounded flex overflow-hidden">
          <input type="text" className="flex-1 outline-none border-none p-2" value={password} readOnly/>
          <button onClick={copyclipboard} className="w-24 text-white bg-red-600">Copy</button>
        </div>
        <div className="choice text-white w-full bg-neutral-400 p-2 mt-3 rounded flex justify-between">
          <span>Numbers</span>
          <input type="checkbox" onChange={()=>setNumber((prev)=> !prev)}/>
        </div>
        <div className="choice text-white w-full bg-neutral-400 p-2 mt-3 rounded flex justify-between">
          <span>Special Characters</span>
          <input type="checkbox" onChange={()=> setSpecial((prev)=> !prev)}/>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
