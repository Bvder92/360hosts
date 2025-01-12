import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import BackButton from "./BackButton";

function ContactForm() {
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tdpiuig",
        "template_v0dhrj2",
        form.current,
        "yrHrP5x7BnoaVu052"
      )
      .then(
        (result) => {
          alert("Votre message a été envoyé avec succès.");
          navigate("/"); // Redirige vers la page principale
        },
        (error) => {
          alert("Erreur lors de l'envoi de l'email, veuillez réessayer.");
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h1>Renseignez vos coordonnées pour faire estimer vos revenus</h1>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <input
          type="email"
          name="from_email"
          placeholder="Votre e-mail"
          required
        />
        <input
          type="tel"
          name="from_phone"
          placeholder="+33 0 00 00 00 00"
          required
        />
        <div className="checkbox-container">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/terms">conditions générales d'utilisation</a>.
          </label>
        </div>
        <button type="submit" className="submit-button">
          Faire estimer mes revenus
        </button>
      </form>
      <BackButton />
    </div>
  );
}

export default ContactForm;
