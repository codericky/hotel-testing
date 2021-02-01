import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="stars">&#8902;&#8902;&#8902;</div>
      <div className="slogan">
        <h4>For single. For family. For couple. Pets welcome.</h4>
        <h4>
          <span>In two words,</span> for everyone
        </h4>
      </div>
      <div className="border"></div>
      <div className="address">
        <h4>Indonesia</h4>
        <h4>Jl. Johar No.23, RT.5/RW.3, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350</h4>
        <h4>Call : (021) 3909356</h4>
        <h4>email : info@victorycorp.co.id</h4>
      </div>

      <div className="btn-get-directions">
        <a
          href="https://www.google.com/maps/dir//hotel%20vittoria,%20toscolano%20maderno,%2025088,%20italy"
          target="_blank"
        >
          Get directions
        </a>
      </div>

      <div className="links">
        <a href="#">Cookies</a>
        <a href="#">Legal</a>
        <a href="#">Privacy and Policy</a>
      </div>

      <div className="copyright">
        <h5>©Victory Corp.{currentYear} - ALL RIGHTS RESERVED.</h5>
        <p>
          support by{" "}
          <a
            rel="noopener noreferrer"
            target="_BLANK"
            href="https://syukrieseo.com/"
          >
            Syukrie seo
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
