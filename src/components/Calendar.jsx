import '../styles/calendar.scss'

import { Form } from './Form'
import { Grid } from './Grid'
import { useState } from 'react'

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

// Initialise object for timeslots {day: {time: {}}}
const initSlots = () => {
    const slots = {}

    for (let i = 0; i < days.length; i++) {
        slots[days[i]] = {}

        for (let j = 0; j < times.length; j++) {
            slots[days[i]][times[j]] = {}
        }
    }

    return slots
}

export const Calendar = () => {

    // Hold timeslots in state
    const [slots, setSlots] = useState(initSlots())

    const addEvent = (input) => {
        const {date, time} = input

        setSlots((slots) => {
            const temp = {...slots}
            const id = String(Date.now())
            temp[date][time][id] = {...input, id}
            return temp
        })
    }

    return <div className='calendar'>
        <Grid slots={slots}/>
        <Form/>
    </div>
}