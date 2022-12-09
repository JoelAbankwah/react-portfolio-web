import './index.scss';
import Loader from 'react-loaders';
import React from 'react';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

import project1 from '../../assets/images/artist-presslist.png';
import project2 from '../../assets/images/budget-tracker.png';
import project3 from '../../assets/images/cat-me.png';
import project4 from '../../assets/images/deja-imp.png';
import project5 from '../../assets/images/tech-blog.png';
import project6 from '../../assets/images/weather-dashboard.png';
import project7 from '../../assets/images/book-search-engine.png'

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [ letterClass, setLetterClass ] = useState('text-animate');

  const cards = [
    { id: '1', image:  project1, title: 'Artist Nation Presslist', link: 'https://artistnation-presslist.herokuapp.com/', tech: ['MYSQL', 'Heroku', 'Express.js'], left: true },
    { id: '2', image:  project2, title: 'Budget Tracker', link: 'https://warm-woodland-92951.herokuapp.com', tech: ['IndexedDB', 'MongoDB', 'Express.js'] },
    { id: '3', image:  project3, title:  'Cat Me', link: 'https://sammylwolfson.github.io/cat-me/', tech: ['HTML', 'CSS', 'Foundation', 'Google Icons']},
    { id: '4', image:  project4, title: 'Deja IMP', link: 'https://deja-imp.herokuapp.com', tech: ['GraphQL', 'Apollo', 'MongoDb', 'React'], left: true },
    { id: '5', image:  project5, title: 'Tech Blog', link: 'https://agile-earth-64002.herokuapp.com', tech: ['JawsDB', 'MYSQL', 'Node.js'], left: true },
    { id: '6', image:  project6, title: 'Weather Dashboard', link: 'https://joelabankwah.github.io/weather-dashboard/', tech: ['HTML', 'CSS', "Javascript"], left: true},
    {id: '7', image: project7, title: 'Book Search Engine', link: 'https://desolate-brushlands-39443.herokuapp.com', tech: ['JSON Webtoken', 'Bcrypt', 'Mongoose', 'Apollo', 'React']}
  ];

  const mod = (n,m) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  }

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
    }, 5000);
  }, [index]);

  return (
    <>
      <div className="container">
        <div className='text-zone'>
          <h1>
              <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['P', 'r', 'o', 'j', 'e', ' c', 't', 's']}
                  idx={15}
              />
          </h1>
        </div>
        <div className='carousel'>
          {cards.map((item, i) => {
            const indexLeft = mod(index -1, cards.length);
            const indexRight = mod(index + 1, cards.length);

            let className = '';

            if(i === index) {
              className = 'card card--active';
            }
              else if (i === indexLeft) {
                className = 'card card--left';
            } 
              else if (i === indexRight) {
                className = 'card card--right';
            } 
            else {
              className = 'card';
            }

            let imageClass = '';

            if (!item.left) {
              imageClass = 'image'
            } else {
              imageClass = 'image image-left'
            }

            return (
              <div className={className} key={item.id}>
                <a href={item.link} target='_blank' rel='noreferrer'>
                  <img key={item.id} src={item.image} alt={item.title} className={imageClass} />
                </a>
                <h1 className='title'>{item.title}</h1>
                <p className='tech'>Technology Used: {item.tech.join(' / ')}</p>
              </div>
            
            )
          })}
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
}

export default Projects;