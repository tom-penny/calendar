import '../styles/form.scss'

import { useState } from "react"

export const Form = ({addEvent}) => {

    const [event, setEvent] = useState({name: "", date: "Monday", time: "09:00"})

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        addEvent(event)
    }

    // Event handler for form changes
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setEvent((event) => {
            return {...event, [name]: value}
        })
    }

    return <form className='form' onSubmit={handleSubmit}>
        <input className='form__input' type='text' name='name' value={event.name} placeholder="Event name" onChange={handleChange} required/>
        <div className='form__menu'>
            <select className='form__menu__select' name='date' value={event.date} onChange={handleChange}>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
            </select>
            <select className='form__menu__select' name='time' value={event.time} onChange={handleChange}>
                <option value='09:00'>09:00</option>
                <option value='10:00'>10:00</option>
                <option value='11:00'>11:00</option>
                <option value='12:00'>12:00</option>
                <option value='13:00'>13:00</option>
                <option value='14:00'>14:00</option>
                <option value='15:00'>15:00</option>
                <option value='16:00'>16:00</option>
                <option value='17:00'>17:00</option>
            </select>
            <button className='form__menu__btn' type='submit'>Save</button>
        </div>
    </form>
}