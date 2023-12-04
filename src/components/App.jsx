import { Component } from "react";
import { Phonebook } from "./Phonebook";
import { Contacts } from "./Contacts";
import { nanoid } from "nanoid";


export class App extends Component{

  state = {
    contacts: [],
    name: '',
    number: ''
  }
 
  onAddContact = e => {
    console.log(this.state.contacts);
    const newContact = {
      name: e.name,
      id: nanoid(),
      number: e.number
    };
    this.setState({contacts: this.state.contacts.concat([newContact])});

    //console.log(e.name);
    //const contactId = nanoid();


  }
  render = () => (
    <div>
      <Phonebook onAddContact={this.onAddContact }></Phonebook>
      <Contacts contacts = {this.state.contacts}></Contacts>
    </div>
  )

}


