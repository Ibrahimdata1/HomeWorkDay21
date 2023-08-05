import { useState } from "react"

const My_Form =()=>{
    const [Weight,setWeight] = useState<number>(0)
    const [result,setResult] = useState<number>()
    const clickWeight = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setWeight(+event.target.value)
    }
    const CalResult =()=>{
            setResult(Weight*2.2*30/2)
    }
    return(
        <>
            <h1 className="fonts">ควรดื่มน้ำวันละเท่าไร???</h1>
            <h3 className="fonts">คำตอบคือ: {result} ML.</h3>
            <input type="number" onChange={clickWeight} placeholder="Insert Bodyweight(KG)" className="inputCSS"/>
            <button onClick={CalResult}>Calculate</button>
        </>
    )
}
export default My_Form