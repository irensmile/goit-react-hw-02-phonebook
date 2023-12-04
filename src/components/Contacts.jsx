import { Component } from "react";

export class Contacts extends Component{
    render = () => (
        <div>
            <h2>Contacts</h2>
            <ul>
                {this.props.contacts.map(contact => (
                    <li key={contact.id}>{contact.name} : { contact.number}</li>
                ))}
            </ul>
        </div>
    )
    
}

