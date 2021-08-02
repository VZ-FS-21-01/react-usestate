const Header = (props) => {
    return (
        <header style={{ background: props.bgColor || "red" }}>
            <h1>Header</h1>
        </header>
    );
}

export default Header;