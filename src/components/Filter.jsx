export const Filter = (props) => {
    const searching = (e) => {
        props.onSearching(e.target.value);
    }
    return (
        <div>
            <div>Find contacts by name</div>
            <input type="text" onInput={searching}/>
        </div>
    )
    
}