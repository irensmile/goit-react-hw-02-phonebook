import { Component } from "react";
import { ContactItem } from "./ContactItem";

export class ContactList extends Component{
    render = () => (
        <div>
            <ul>
                {this.props.contacts.map(contact => (
                    (!this.props.filter || contact.name.toLowerCase().startsWith(this.props.filter.toLowerCase())) &&
                    (<ContactItem key={ contact.id} name={contact.name} number={ contact.number} />)
                ))}
            </ul>
        </div>
    )
    
}

