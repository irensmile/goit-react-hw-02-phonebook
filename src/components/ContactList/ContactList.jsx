import { ContactItem } from "../ContactItem/ContactItem";
import css from './ContactList.module.css'

export const ContactList = (props) => (
   <div>
        <ul className={css.contacts }>
                {props.contacts.map(contact => (
                    (<ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={props.onDelete } />)
                ))}
            </ul>
        </div> 
)

