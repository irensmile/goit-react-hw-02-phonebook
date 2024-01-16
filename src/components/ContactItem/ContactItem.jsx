import css from './ContactItem.module.css'
import personPic from '../../images/person.png'
import phonePic from '../../images/phone.png'
export const ContactItem = ({ id, name, number, onDelete }) => (
    <li className={css.card}>
        <div>
            <div className={css.info}><img className={css.icon} src={personPic} alt="person"/>{name}</div>
            <div className={css.info}><img className={css.icon} src={phonePic} alt="phone"/>{number}</div>
        </div>
        <button type="button" onClick={() => onDelete(id)} >Delete</button>
    </li>
)

