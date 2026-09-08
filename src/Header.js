function Header(props) {
    return (
        <div style={{ backgroundColor: '#333', padding: '15px', color: 'white' }}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Header;