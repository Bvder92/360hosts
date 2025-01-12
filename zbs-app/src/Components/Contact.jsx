import React from "react";

function Contact({ department }) {
  return (
    <div id="contact">
      <h1>Demandez une estimation</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type your email" required />
        <textarea placeholder="Write here..." name="message"></textarea>
        <input type="submit" value="estimation" />
      </form>
    </div>
  );
}

export default Contact;
