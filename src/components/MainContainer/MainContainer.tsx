const MainConStyle = {
    height: '100vh',
    background: 'egg',
    width: '100vw',
    border: 'groove',
    paddingTop: '20px',
    paddingRight: '30px',
    paddingLeft: '30px',
  
}

const TitleBarStyle = {
    marginTop:'6px',
    display: 'flex',
    justifyContent: 'space-between',
    border: 'groove',
}


const MainContainer = () => {
    return (
        <div className="container" style={MainConStyle}>
            <div className="TitleBar" style={TitleBarStyle}>
                <h2>TitleBar</h2>
                <h4>GithubLogo</h4>
            </div>
            
        </div>
    )
}

export default MainContainer
