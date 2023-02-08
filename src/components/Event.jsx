import '../styles/event.scss'

import { useRef } from 'react'
import { RxCross2 as CrossIcon } from 'react-icons/rx'

const colors = ["#FF6961", "#FFB480", "#F8F38D", "#42D6A4", "#08CAD1", "#59ADF6", "#9D94FF", "#C780E8"]

export const Event = ({event, width}) => {

    const handleClick = () => {
    }

    // Randomise BG colour and persist through state changes with useRef()
    const color = useRef(colors[Math.floor(Math.random()*colors.length)])

    const style = {
        width: `${width}%`,
        backgroundColor: color.current
    }

    return <div className='event' style={style}>
        <CrossIcon className='event__icon' onClick={handleClick}/>
        <div className='event__text'>{event.name}</div>
    </div>
}