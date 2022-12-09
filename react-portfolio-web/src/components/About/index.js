import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { Loader } from 'react-loaders'
import photoOfMe from '../../assets/images/photo-of-me.jpg'

const About = () => {
    const [ letterClass, setLetterClass ] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
      <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a very ambitous junior web developer looking for a role
                    in an established IT company with the opportunity to learn
                    vastly from great mentors while working on challenging projects.
                </p>
                <p>
                    Work well in a team, quick learner, and constantly trying to further
                    improve my skills as a critical thinker and problem solver.
                </p>
                <p>
                    If I had to describe myself in a few words, they would be family orientated, 
                    curious, car enthusiast, basketball fanatic, puzzle and strategy game addict,
                    and technophile. 
                </p>
            </div>
            <div className='photo-container'>
                <img src={photoOfMe} alt='photo of me' className='photo' />
            </div>
        </div>
        <Loader type='pacman' />
      </>
    )
}

export default About;