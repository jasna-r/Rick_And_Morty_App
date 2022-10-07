import React from "react"
import "./Footer.css"

const Footer = ({ totalCharacters, totalPages }) => {
  return (
    <footer className="footer">
      <h2>Characters: {totalCharacters}</h2>
      <h2>Pages: {totalPages}</h2>
      <div className="status">
        <h2>Server status</h2> <div className="dot"></div>
      </div>
    </footer>
  )
}

export default Footer
