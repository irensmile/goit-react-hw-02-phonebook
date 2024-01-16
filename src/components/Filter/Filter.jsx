import css from './Filter.module.css'

export const Filter = (props) => {
    const searching = (e) => {
        props.onSearching(e.target.value);
    }
    return (
        <>
            <h2 className={css.header}>Contacts</h2>
            <div class={css['search-box']}>
                <div>Find contacts by name</div>
                <input type="text" onInput={searching}/>
            </div>
        </>
    )
    
}