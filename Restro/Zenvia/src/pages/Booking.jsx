import { useState } from "react";
import emailjs from "emailjs-com";
import "./Booking.css"
import Navbar from "../Components/Navbar";
export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 VALIDATION
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to send. Try again.");
        setLoading(false);
      });
  };

  return (
     <>
     <Navbar />
      <div className="booking-container">
      <h1>Reserve Your Table</h1>

      <form onSubmit={handleSubmit} className="booking-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          onChange={handleChange}
        />

        <input
          type="number"
          name="guests"
          placeholder="Guests"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Special Request"
          onChange={handleChange}
        />

        <button type="submit">
          {loading ? "Sending..." : "Reserve Now"}
        </button>

        {success && <p>✅ Booking request sent!</p>}
      </form>
    </div>
     </>
  );
}