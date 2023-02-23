

function Header ({onClickModeChange, currentModeBool}) {
    
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onClickModeChange}>
                {currentModeBool ? "Dark" : "Light"} Mode
            </button>
        </header> )
}



export default Header;