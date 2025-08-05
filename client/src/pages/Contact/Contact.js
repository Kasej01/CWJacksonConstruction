import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Get the API base URL from environment variables
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/messages`, formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us via email, phone, or by sending a message below.</p>

      <div className="contact-options">
        <div className="contact-option">
          <h2>Email</h2>
          <p><a href="mailto:chadjcksn2@yahoo.com">chadjcksn2@yahoo.com</a></p>
        </div>
        <div className="contact-option">
          <h2>Phone</h2>
          <p><a href="tel:+1234567890">(123) 456-7890</a></p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default Contact;