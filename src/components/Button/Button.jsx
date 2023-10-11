//import React from 'react'

//import { MdMessage } from "react-icons/md"
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <>
           <button className={props.isOutline ? styles.outline_btn : styles.pri_butn}>
                
                {props.icon}
                {props.text}
          </button>
        </>
      
         
  )
}

export default Button