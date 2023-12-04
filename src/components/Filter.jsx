import { Component } from "react";

export class Filter extends Component {
    render = () => (
        <div>
            <div>Find contacts by name</div>
            <input type="text" onInput={this.searching}/>
        </div>
    )
    searching = (e) => {
        this.props.onSearching(e.target.value);
    }
}