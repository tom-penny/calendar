import '../styles/grid.scss'
import { Event } from './Event'

export const Grid = () => {
    
    const createCells = () => {

        const arr = []
        for (let i = 0; i < 45; i++) {
            arr.push({})
        }

        return arr.map((cell) => {
            return <div className='grid__cell'>
                <Event/>
            </div>
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