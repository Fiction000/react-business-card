import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faFacebook, faGithub,  } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faLinkedin, faFacebook, faGithub);

ReactDOM.render(<App />, document.getElementById("root"))