import style from "./navbar.module.css"
import { Menu,Cruz } from "../assets/icons"
import { useEffect, useRef,useState } from "react"

export default function Navbar(){
    const [checked, setChecked] = useState(false)
    
    const handleChange = (evt)=>{
        setChecked(evt.target.checked)
    }
    return(
    <div className={style.navbar}>
        <div className={style.title}>
            <span >THIS INTERIOR</span>
        </div>
        
        
        <label htmlFor="menu" className={style.menu} >
            {checked? <Cruz/>: <Menu/>}
        </label>
        <input id="menu" type="checkbox" onChange={handleChange} className={style.checkbox}/>
        <ul className={style.navbarList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#colletion">Collection</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
             
        
    </div>)
}