import '../styles/event.scss'

import { useRef } from 'react'

const colors = ["#FF6961", "#FFB480", "#F8F38D", "#42D6A4", "#08CAD1", "#59ADF6", "#9D94FF", "#C780E8"]

export const Event = () => {

    let width = 100;

    // Randomise BG colour and persist through state changes with useRef()
    const color = useRef(colors[Math.floor(Math.random()*colors.length)])

    const style = {
        width: `${width}%`,
        backgroundColor: color.current
    }

    return <div className='event' style={style}>
        <div className='event__container'>
            <div className='event__text'>Name</div>
        </div>
    </div>
}