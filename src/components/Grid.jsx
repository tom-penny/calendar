import '../styles/grid.scss'

import { Event } from './Event'

export const Grid = ({slots}) => {
    
    const createCells = () =>
    {
        return Object.keys(slots).map((date) => {
            return Object.keys(slots[date]).map((time) => {
                const dateTime = `${date} ${time}`
                return <div className='grid__cell' aria-label={dateTime} key={dateTime}>
                    {createEvents(slots[date][time])}
                </div>
            })
        })
    }

    const createEvents = (events) =>
    {
        return Object.keys(events).map((id) => {
            const event = events[id]
            const width = Object.keys(events).length
            return <Event event={event} width={100/width} key={id}/>
        })
    }

    return <div className='grid'>
        {createCells()}

        <div className='grid__cell' style={{gridColumn: "1", gridRow: "1"}}></div>
        <div className='grid__col-header' style={{gridColumn: "2", gridRow: "1"}}>MON</div>
        <div className='grid__col-header' style={{gridColumn: "3", gridRow: "1"}}>TUE</div>
        <div className='grid__col-header' style={{gridColumn: "4", gridRow: "1"}}>WED</div>
        <div className='grid__col-header' style={{gridColumn: "5", gridRow: "1"}}>THU</div>
        <div className='grid__col-header' style={{gridColumn: "6", gridRow: "1"}}>FRI</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "2"}}>09:00</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "3"}}>10:00</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "4"}}>11:00</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "5"}}>12:00</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "6"}}>13:00</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "7"}}>14:00</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "8"}}>15:00</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "9"}}>16:00</div>
        <div className='grid__row-header' style={{gridColumn: "1", gridRow: "10"}}>17:00</div>
    </div>
}