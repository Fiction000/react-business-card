import React from "react"
import mail from "../images/mail.png"
import linkedin from "../images/linkedin.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Info() {
    return (
        <div>
            <h2 className="info--name">Tatsuhiko Kato</h2>
            <h4 className="info--title">Frontend Developer</h4>
            <h5 className="info--website">tatsu.website</h5>
            <div className="info--buttons">
                <a href="mailto:hastur@me.com" target="_blank">
                    <button className="info--button--email"><FontAwesomeIcon icon="fa-solid fa-envelope" />  Email</button>
                </a>
                <a href="https://www.linkedin.com/in/kato-tatsuhiko/" target="_blank">
                    <button className="info--button--linkedin"><img className="info--button--img" src={linkedin} />  LinkedIn</button>
                </a>
            </div>
        </div>
    )
}