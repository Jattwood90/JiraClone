const SettingStyle = {
    Position: 'relative',
    display: 'flex',
    paddingTop: '8px',
    paddingBottom:'12px',
    borderRadius: '3px',
    cursor: 'pointer',
    UserSelect: 'none',
    TextAlign: 'center',
    width: '200px',
    
}



const Settings = ({icon, name }) => {
    return (
        <div style={SettingStyle}>
            <a href='#' style={{marginRight: '15px', fontSize: '20px', color: '#0748A6'}} >{icon}</a>
            <div style={{paddingTop: '2px', fontSize: '15px'}}>{name}</div>
        </div>
    )
}

export default Settings;