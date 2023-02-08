import '../styles/form.scss'

export const Form = () => {

    return <form className='form'>
        <input className='form__input' type='text' name='name' placeholder="Event name" required/>
        <div className='form__menu'>
            <select className='form__menu__select' name='date'>
                <option value='Monday'>Monday</option>
                <option value='Tuesday'>Tuesday</option>
                <option value='Wednesday'>Wednesday</option>
                <option value='Thursday'>Thursday</option>
                <option value='Friday'>Friday</option>
            </select>
            <select className='form__menu__select' name='time'>
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