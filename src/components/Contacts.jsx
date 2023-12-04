import { Component } from "react";

export class Contacts extends Component{
    render = () => (
        <div>
            <ul>
                {this.props.contacts.map(contact => (
                    (!this.props.filter || contact.name.toLowerCase().startsWith(this.props.filter.toLowerCase())) &&
                        (<li key={contact.id}>{contact.name} : {contact.number}</li>)
                ))}
            </ul>
        </div>
    )
    
}

