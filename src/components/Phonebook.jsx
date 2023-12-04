import { nanoid } from "nanoid";
import { Component } from "react";

export class Phonebook extends Component{
    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        this.props.onAddContact({ name: form.elements.name.value });
        form.reset();
    }
    nameInputId = nanoid();
    

    render() {
        return (
            <div>
                <h2>Phonebook</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.nameInputId}>Name</label>
                    <input type="text" name="name" id={this.nameInputId} />
                    <button type="submit">Add contact</button>
                </form>
            </div>)
    }
}

