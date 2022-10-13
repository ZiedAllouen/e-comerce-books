import React, { Component } from 'react'

export class Bot extends Component {
       constructor(props){

       super(props);

   } 
    componentDidMount(){
      (function(d, m){
        var kommunicateSettings = 
            {"appId":"<2f6b51cbdd2bf9186f60ee66da5ad2fc2>","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    }
  render() {
    return (
      <div>Bot</div>
    )
  }
}

export default Bot