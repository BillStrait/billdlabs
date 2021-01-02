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
                <li className="contactListItem"><div className="contactText">Look at some code: </div><a className="contactLink" href="https://www.github.com/billstrait" target="_new">GitHub</a></li>
                <li className="contactListItem"><div className="contactText">See my resume: </div><a className="contactLink" href="https://www.linkedin.com/in/billstrait/" target="_new">LinkedIn</a></li>
                <li className="contactListItem"><div className="contactText">Chat with me securely: </div><a className="contactLink" href="https://keybase.io/billdr" target="_new">Keybase</a></li>
                <li className="contactListItem"><div className="contactText">Send me an email: </div><a className="contactLink" href="mailto:bill@billdlabs.com">Email</a></li>
                <li className="contactListItem"><div className="contactText">Hang out: </div><a className="contactLink" href="https://www.twitch.tv/billd" target="_new">Twitch</a></li>
            </ul>
        );
    }
}

class Cursor extends React.Component{
  render(){
    return(
      <div id="cursor"></div>
    )
  }

}




function App() {
  return (
    <div className="App">
      <TitleBanner/>
      <LinksList/>
      <Cursor/>
    </div>
  );
}

export default App;
