import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
      setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_emeq3xb',
        'template_feel7w8',
        refForm.current,
        "nJbODiwzyOYhP72ei"
      )
      .then(
        () => {
        alert('Message successfully sent')
        window.location.reload(false)
      },
      () => {
        alert("Failed to send the message, please try again!")
      })
  }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
              <h1>
                <AnimatedLetters
                letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                I am interested in entry level opportunities to further develop my skills.
                If you have any request or question, feel free to contact me using the form below!
              </p>
              <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                  <ul>
                    <li className='half'>
                      <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                      <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                      <input placeholder='Subject' type='text' name='subject' required />
                    </li>
                    <li>
                      <textarea placeholder='Message' name='message' required />
                    </li>
                    <input type='submit' className='flat-button' value='SEND' />
                    <li/>
                  </ul>
                </form>
              </div>
            </div>
            <div className='stage-cube-cont'>
              <div className='cube-spinner'>
                  <div className='face1'>
                      <FontAwesomeIcon icon={faNodeJs} color='#215732' />
                  </div>
                  <div className='face2'>
                      <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                  </div>
                  <div className='face3'>
                      <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                  </div>
                  <div className='face4'>
                      <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                  </div>
                  <div className='face5'>
                      <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                  </div>
                  <div className='face6'>
                      <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                  </div>
              </div>
          </div>
        </div>
          <Loader type='pacman'/>
        </>
    )
}

export default Contact;


