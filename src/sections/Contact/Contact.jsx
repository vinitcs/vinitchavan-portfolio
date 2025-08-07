import React from 'react'
import styles from './ContactStyles.module.css';
import { FaSquareWhatsapp } from "react-icons/fa6";

function Contact() {
     return (
          <section id='contact' className={styles.container}>
               <h2 className='sectionTitle'>Contact</h2>
               <span className={styles.emailText}>Let's Connect (click on email id)</span>
               <a className={styles.email} href="mailto:vinitchavan.dev@gmail.com">vinitchavan.dev@gmail.com</a>
               <span className={styles.orText}>or</span>
               <span className={styles.chatOnText}>Chat on</span>
               <a className={styles.whatsup} href="https://wa.me/9112706329" target="_blank"><FaSquareWhatsapp size={60}/></a>

               {/* <form action=''>
                    <div className='formGroup'>
                         <label htmlFor='name' hidden>
                              Name
                         </label>
                         <input
                              type='text'
                              name='name'
                              id='name'
                              placeholder='Name'
                              required
                         />
                    </div>
                    <div className='formGroup'>
                         <label htmlFor='email' hidden>
                              Email
                         </label>
                         <input
                              type='text'
                              name='email'
                              id='email'
                              placeholder='Email'
                              required
                         />
                    </div>
                    <div className='formGroup'>
                         <label htmlFor='message' hidden>
                              Message
                         </label>
                         <textarea
                              name='message'
                              id='message'
                              placeholder='Message'
                              required
                         ></textarea>
                    </div>
                    <input className='hover btn' type='submit' value='Submit' />
               </form> */}
          </section>
     )
}

export default Contact