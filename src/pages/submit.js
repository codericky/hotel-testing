import React from "react"
import Layout from "../layouts"

const submit = () => {
return (
    <>
    <Layout>
        <center><h1>Booking Hotel Reservation</h1></center>
        <form action="https://getform.io/f/4ff24713-f674-4ed2-b7f7-09d14682722f" method="POST" className="contact-form">
          <div className="row">
          </div>
          <p>Name</p>
          <div className="row">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <p>Name Rooms</p>
          <div className="row">
            <input type="text" name="room" placeholder="Name Rooms" />
          </div>
          <p>How Many Adults</p>
          <div className="row">
            <input type="text" name="adults" placeholder="How many adults" />
          </div>
          <p>Check In</p>
          <div className="row">
            <input type="date" name="check-in" placeholder="Check In " />
          </div>
          <p>Check Out</p>
          <div className="row">
            <input type="date" name="check-out" placeholder="Check Out" />
          </div>
          <p>Email</p>
          <div className="row">
            <input type="email" name="email" placeholder="E-mail" />
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
