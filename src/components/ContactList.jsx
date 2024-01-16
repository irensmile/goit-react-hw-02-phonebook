import { ContactItem } from "./ContactItem";

export const ContactList = (props) => (
   <div>
            <ul>
                {props.contacts.map(contact => (
                    (<ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={props.onDelete } />)
                ))}
            </ul>
        </div> 
)

