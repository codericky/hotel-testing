import React from "react"
import Layout from "../layouts"
import FbIcon from "../images/icons/facebook.png"
import MapIcon from "../images/icons/google-maps.png"

const submit = props => {
return (
    <>
         <Layout contactPagePath={props.location.pathname}>
        <form action="https://getform.io/f/4ff24713-f674-4ed2-b7f7-09d14682722f" method="POST" className="contact-form">
          <div className="row">
          <h1>Booking Hotel Reservation</h1>
          </div>
          <br />
          <p>First Name</p>
          <div className="row">
            <input type="text" name="firstname" />
          </div>
          <p>Last Name</p>
          <div className="row">
            <input type="text" name="lastname" />
          </div>
          <p>Name Rooms</p>
          <div className="row">
            <input type="text" name="rooms" />
          </div>
          <p>How Many Adults</p>
          <div className="row">
            <input type="text" name="Adults" />
          </div>
          <p>Check In</p>
          <div className="row">
            <input type="date" name="Check-In" />
          </div>
          <p>Check Out</p>
          <div className="row">
            <input type="date" name="Check-Out" />
          </div>
          <p>Email</p>
          <div className="row">
            <input type="email" name="email"/>
          </div>
          <p>Add Message</p>
          <div className="row">
            <textarea
              name="request"
              id="request"
              cols="30"
              rows="10"
              placeholder="Message add other"
            ></textarea>
          </div>
          <div className="row">
            <button type="submit">Send</button>
          </div>
        </form>
        <section className="contact-page-header socials">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/LaVittoriadiMaderno/"
          >
            <img src={FbIcon} alt="facebook icon" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/maps/place/Hotel+Vittoria/@45.6382209,10.6006442,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0xdfe1e097a1faebc6!5m1!1s2018-04-16!8m2!3d45.638064!4d10.602875?hl=it"
          >
            <img
              src={MapIcon}
              alt="google maps icon"
              style={{ width: "55px", height: "55px" }}
            />
          </a>
        </section>
        </Layout>
  </>
  )
}
export default submit
