import { Component } from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { nanoid } from "nanoid";
import { Filter } from "./Filter";


export class App extends Component{

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    name: '',
    number: ''
  }
 
  onAddContact = e => {
    const newContact = {
      name: e.name,
      id: nanoid(),
      number: e.number
    };
    if (this.state.contacts.some(c => c.name === e.name))
      alert(`${e.name} is already in contacts.`);
    this.setState({contacts: this.state.contacts.concat([newContact])});
  }

onSearching = filter => {
  this.setState({ filter: filter});
}

  render = () => (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={this.onAddContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter onSearching = {this.onSearching}></Filter>
      <ContactList contacts = {this.state.contacts} filter = {this.state.filter}></ContactList>
    </div>
  )

}


