import React from "react"
import Layout from "../layouts"

const submit = () => {
return (
    <>
    <Layout>
    <form action="https://getform.io/f/4ff24713-f674-4ed2-b7f7-09d14682722f" method="POST" className="contact-form">
          <div className="row">
            <h3>Booking Hotel Reservation</h3>
          </div>
          <div className="row">
            <input type="text" placeholder="Name" />
          </div>
          <div className="row">
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="row">
            <textarea
              name="request"
              id="request"
              cols="30"
              rows="10"
              placeholder="What can we do for you?"
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
