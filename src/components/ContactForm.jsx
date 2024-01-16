import { nanoid } from "nanoid";
import { Component } from "react";

export class ContactForm extends Component{

    // Not converted to Functional component, as we will need to mix html code with event handler
    // Functions need to be small and have a single responsibility

    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        this.props.onAddContact({ name: form.elements.name.value, number: form.elements.number.value });
        form.reset();
    }
    
    render() {
        const nameInputId = nanoid();
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor={nameInputId}>Name</label>
                        <input type="text" name="name" id={nameInputId} />
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

