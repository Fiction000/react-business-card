import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/hastur_kato" target="_blank">
                <button className="footer--buttons"><FontAwesomeIcon icon="fa-brands fa-github" /></button>
            </a>
            <a href="https://twitter.com/hastur_kato" target="_blank">
                <button className="footer--buttons"><FontAwesomeIcon icon="fa-brands fa-twitter" /></button>
            </a>
            <a href="https://twitter.com/hastur_kato" target="_blank">
                <button className="footer--buttons"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></button>
            </a>
        </footer>
    )
}