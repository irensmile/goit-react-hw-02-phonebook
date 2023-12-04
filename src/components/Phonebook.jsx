import { nanoid } from "nanoid";
import { Component } from "react";

export class Phonebook extends Component{
    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        this.props.onAddContact({ name: form.elements.name.value, number: form.elements.number.value });
        form.reset();
    }
    nameInputId = nanoid();
    

    render() {
        return (
            <div>
                <h2>Phonebook</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor={this.nameInputId}>Name</label>
                        <input type="text" name="name" id={this.nameInputId} />
                    </div>
                    <div>
                        <label>Number</label>
                        <input type="tel" name="number" required />
                    </div>
                    <button type="submit">Add contact</button>
                    
                </form>
            </div>)
    }
}

