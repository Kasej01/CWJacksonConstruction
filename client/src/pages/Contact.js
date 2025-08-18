import React, { useState } from "react";
import '../styles/pages/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log(form);
    setSubmitted(true);
    // TODO: Connect to backend to send email
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span className="required-label">
            Full Name <span className="required-dot">*</span>
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </label>
        <label>
          <span className="required-label">
            Email <span className="required-dot">*</span>
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </label>
        <label>
          <span className="required-label">
            Message <span className="required-dot">*</span>
          </span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
      {submitted && (
        <div className="contact-success">
          Thank you for your message! We will get back to you soon.
        </div>
      )}
    </div>
  );
}
