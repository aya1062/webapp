import React from 'react'

function Footer() {
  return (
    <footer
  style={{
    backgroundColor: "#f2f2f2",
    padding: "30px 0",
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    borderTop: "1px solid #ddd"
  }}
>
  <div className="container">
    <p>© all right resived</p>
    <p>
      <a
        href="#about"
        style={{ color: "#333", textDecoration: "none", margin: "0 10px" }}
      >
        about
      </a>{" "}
      |
      <a
        href="#services"
        style={{ color: "#333", textDecoration: "none", margin: "0 10px" }}
      >
        services
      </a>{" "}
      |
      <a
        href="#contact"
        style={{ color: "#333", textDecoration: "none", margin: "0 10px" }}
      >
        contact
      </a>
    </p>
  </div>
</footer>

  )
}

export default Footer