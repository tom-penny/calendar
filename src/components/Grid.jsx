import '../styles/grid.scss'
import { Event } from './Event'

export const Grid = () => {
    
    const createCells = () => {

        const arr = []
        for (let i = 0; i < 45; i++) {
            arr.push({})
        }

        return arr.map((cell) => <div className='grid__cell'/>)
    }

    return <div className='grid'>
        {createCells()}

        <div className='grid__cell'></div>
        <div className='grid__cell--col-header'>MON</div>
        <div className='grid__cell--col-header'>TUE</div>
        <div className='grid__cell--col-header'>WED</div>
        <div className='grid__cell--col-header'>THU</div>
        <div className='grid__cell--col-header'>FRI</div>
        <div className='grid__cell--row-header'>09:00</div>
        <div className='grid__cell--row-header'>10:00</div>
        <div className='grid__cell--row-header'>11:00</div>
        <div className='grid__cell--row-header'>12:00</div>
        <div className='grid__cell--row-header'>13:00</div>
        <div className='grid__cell--row-header'>14:00</div>
        <div className='grid__cell--row-header'>15:00</div>
        <div className='grid__cell--row-header'>16:00</div>
        <div className='grid__cell--row-header'>17:00</div>
    </div>
}