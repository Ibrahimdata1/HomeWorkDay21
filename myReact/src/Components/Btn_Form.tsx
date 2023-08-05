import { useState } from "react"

const Btn_Form = () => {
    const [state,setState] = useState<boolean>(true)
    const changeBG=()=>{
        setState(!state)
        if(state){setStateName('DarkMode')}else{setStateName('LightMode')}
    }
    const bgConnect = document.querySelector('body')
    const [stateName,setStateName] = useState<string>('LightMode')
    const fontConnect = document.querySelectorAll('.fonts')
    const bgChanged =()=>{
        if(state){
            bgConnect?.classList.add('darkmode')
            bgConnect?.classList.remove('lightmode')
            fontConnect.forEach(e=>{
                e.classList.remove('fontColor')
            });
        }else{
            bgConnect?.classList.add('lightmode')
            bgConnect?.classList.remove('darkmode')
            fontConnect.forEach(e=>{
                e.classList.add('fontColor')
            })
        }
    }
    bgChanged()
  return (
    <div>
      <button className="fixedbutton" onClick={changeBG}>{stateName}</button>
    </div>
  )
}

export default Btn_Form
