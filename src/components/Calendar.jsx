import '../styles/calendar.scss'

import { Form } from './Form'
import { Grid } from './Grid'

export const Calendar = () => {

    return <div className='calendar'>
        <Grid/>
        <Form/>
    </div>
}