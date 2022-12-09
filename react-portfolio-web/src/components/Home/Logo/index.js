import './index.scss'
import LogoJ from '../../../assets/images/logo-j.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import gsap from 'gsap';

const Logo = () => {

    const bgRef = useRef();
    const outlineOne = useRef();
    const outlineTwo = useRef();
    const outlineThree = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline({ repeatRefresh: true }).to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .fromTo(outlineOne.current, {
            drawSVG: "0%",
            duration: 3,
        },
        {
            drawSVG: "100%",
            duration: 3,
        })
        .fromTo(outlineTwo.current, {
            drawSVG: "0%",
            duration: 3,
        },
        {
            drawSVG: "100%",
            duration: 3,
        })
        .fromTo(outlineThree.current, {
            drawSVG: "0%",
            duration: 1,
        },
        {
            drawSVG: "100%",
        })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 8,
                duration: 5,
            }
        )
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoJ} alt='J'/>
            <svg className='svg-container' width='559pt' height='897pt' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.72586 137.2456"><path ref={outlineOne} d="M156.88962,73.5167,178.88648,69.945v82.26142c.3685,53.88662-71.46142,58.73387-69.44882,9.55276l18.45354-1.72914c1.2756,9.35434,6.57638,13.60631,15.90237,12.84095,9.04251-.737,12.95433-10.0063,13.09605-17.85827Z" transform="translate(-90.41715 -59.27825)"/><path ref={outlineTwo} d="M143.48176,195.63323c-38.32442,4.30867-52.8378-13.57795-52.80945-44.95748l22.73386-2.89133,15.052,10.20472c9.43936,6.4063,9.55275-5.5559,9.75117-11.5937l2.948-84.47245,23.2441-2.38109,14.485,10.40314" transform="translate(-90.41715 -59.27825)"/><line ref={outlineThree} x1="50.74019" y1="2.64474" x2="66.47248" y2="14.23844"/></svg>
        </div>
    )
}


export default Logo;