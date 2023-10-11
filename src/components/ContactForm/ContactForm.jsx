import Button from '../Button/Button';
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {HiMail} from "react-icons/hi"
import { useState } from 'react';

const ContactForm = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [text, setText] = useState();
    // let name;
    // let email;
    // let text;

    const submitHandler = (e) => {
        e.preventDefault();
        // name = e.target[0].value;
        // email = e.target[1].value;
        // text = e.target[2].value;
        

        // console.log("name", e.target[0].value);
        // console.log("email", e.target[1].value);
        // console.log("text", e.target[2].value);
        
        setName(e.target[0].value)
       setEmail(e.target[1].value);
        setText(e.target[2].value);
        console.log({
            name,
            email,
            text
        })
    
}


  return (
    <section className={styles.container2}>
      <div className={styles.contact_form}>
        <div className={styles.btn_top}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA Email Form"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={submitHandler}>
          <div className={styles.form_control}>
            <label htmlFor="name"> Name</label>
            <input type="text" name="name"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email"> Email</label>
            <input type="email" name="email"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text"> Text</label>
            <textarea name="text" rows={8}></textarea>
          </div>
                  <div style={{
                      display: "flex",
                      justifyContent:"end"
          }}>
            <Button text="SUBMIT" />
                  </div>
                  <div>{name+ " "+email+" "+text }</div>
        </form>
      </div>

          <div className={styles.contact_Image}>
              <img src='/Images/Service.png' alt='contact-image'/>
      </div>
    </section>
  );
}

export default ContactForm