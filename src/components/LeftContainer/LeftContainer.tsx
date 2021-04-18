import { faTasks, faClipboard, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Settings from './Settings';

const ContainerStyle = {
    background:'#F4F5F7',
    border: 'groove',
    height: '100vh',
    width: '350px',
    display: 'flex',
    justifyContent: 'center',
}

const TopBox = {
    border: 'groove',
    width: '200px',
    height: '70px',
    margin: '10px',
    marginTop: '20px',
    marginLeft: '75px',
    display: 'flex',
  
}

const MenuBox = {
    width: '200px',
    height: '70px',
    margin: '10px',
    marginTop: '20px',
    marginLeft: '90px',
    Display: 'flex',
    FlexDirection: 'column',
}

const LeftContainer = () => {
    return (
        <div className="container" style={ContainerStyle}>
            <div>
            <div style={TopBox}>
                <div>
                    <FontAwesomeIcon icon={faTasks} style={{fontSize: '2.5em', margin: '10px', marginTop: '15px'}}/>
                </div>
                <div style={{paddingTop: '3px', paddingRight: '0px', paddingBottom: '0px', paddingLeft: '10px', marginTop: '12px'}}>
                    <div style={{color: 'rgb(66, 82, 110)', fontSize: '20px', fontWeight: 'normal', textAlign:'left'}}>Name Test</div>
                    <div style={{color: 'rgb(66, 82, 110)', fontSize: '12px', fontWeight: 'normal', textAlign:'left'}}>Software Test</div>
                </div>
            </div>
            <div style={MenuBox}>
                <Settings icon={<FontAwesomeIcon icon={faClipboard}/>} name={'joe'}/>
                <Settings icon={<FontAwesomeIcon icon={faCog}/>} name={'up'}/>
            </div>
        </div>
        </div>
    )
}

export default LeftContainer
