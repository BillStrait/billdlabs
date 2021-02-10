import './App.css';
import React from 'react';
import './index.css';

class TitleBanner extends React.Component{
    render(){
        return(
            <h1 id="titleText">Bill Strait</h1>
        );
    }
}

class LinksList extends React.Component{
    render(){
        return(
            <ul id="contactList">
                <li className="contactListItem"><div className="contactText">Hire me: </div><a className="contactLink" href="https://www.upwork.com/fl/billstrait" target="_new">UpWork</a></li>
                <li className="contactListItem"><div className="contactText">Buy a domain from me: </div><a className="contactLink" href="www.secureserver.net?prog_id=573107" target="_new">SecureServer</a></li>
                <li className="contactListItem"><div className="contactText">Look at some code: </div><a className="contactLink" href="https://www.github.com/billstrait" target="_new">GitHub</a></li>
                <li className="contactListItem"><div className="contactText">See my resume: </div><a className="contactLink" href="https://www.linkedin.com/in/billstrait/" target="_new">LinkedIn</a></li>
                <li className="contactListItem"><div className="contactText">Chat with me securely: </div><a className="contactLink" href="https://keybase.io/billdr" target="_new">Keybase</a></li>
                <li className="contactListItem"><div className="contactText">Send me an email: </div><a className="contactLink" href="mailto:bill@billdlabs.com">Email</a></li>
                <li className="contactListItem"><div className="contactText">Hang out: </div><a className="contactLink" href="https://www.twitch.tv/billd" target="_new">Twitch</a></li>
            </ul>
        );
    }
}

class Console extends React.Component{
  render(){
    return(
        <div id="theGame">
            <Display/>
            <div id="console"></div>
            <div id="cursor"></div>
      </div>
    )
  }
}

class Display extends React.Component {
    componentDidMount() {
        document.body.addEventListener('keydown', this.typingHandler);
    }
    constructor(props) {
        super(props);
        this.state = {
            moneyDec: 0.00,
            foodInt: 0,
            consumptionInt: 0,
            gasPer: 0,
            oilPer: 0,
            debtDec: 0.00,
            text: ''
        }
        this.typingHandler = this.typingHandler.bind(this);
    }
    

    typingHandler(e) {
        var console = document.getElementById('console');
        switch (e.key) {
            case 'Alt':
                break;
            case 'Shift':
                break;
            case 'Tab':
                break;
            case 'Caps Lock':
                break;
            case 'Control':
                break;
            case 'Meta':
                break;
            case 'Enter':
                if (console.textContent === 'white rabbit') {

                    this.setState({ text: "Check back later." });
                    
                }
                else {
                    this.setState({ text: "That is not the correct password." });
                }
                console.textContent = '';
                break;
            case 'Backspace':
                console.textContent = console.textContent.substring(0, console.textContent.length - 1);
                break;
            case 'Space Bar':
                console.textContent = console.textContext + ' ';
                break;
            default:
                console.textContent = console.textContent + e.key;
                this.setState({ text: '' });
                break;
        }
        return false;
    }
    render() {
        return (
            <div id="display">{this.state.text}</div>
        );
    }
}

function App(){

  return (
    <div className="App">
      <TitleBanner/>
      <LinksList/>
      <Console/>
    </div>
  );
}

export default App;
