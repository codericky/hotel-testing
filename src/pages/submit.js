import React from "react"
import Layout from "../layouts"
const submit = () => {
return (
    <>
    <Layout>
        <form action="https://getform.io/f/4ff24713-f674-4ed2-b7f7-09d14682722f" method="POST" className="contact-form">
          <div className="row">
          <h1>Booking Hotel Reservation</h1>
          </div>
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
        </Layout>
  </>
  )
}
export default submit
