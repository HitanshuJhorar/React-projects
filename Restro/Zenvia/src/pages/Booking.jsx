import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Booking.css";
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
  const [status, setStatus] = useState(""); // success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Better validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="booking-wrapper">
        <div className="booking-container">
          
          {/* LEFT SIDE */}
          <div className="booking-info">
            <h1>Reserve Your Table</h1>
            <p>
              Experience fine dining like never before. Book your table and let
              the night unfold with elegance.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="booking-form">
            
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>

            <input
              type="number"
              name="guests"
              placeholder="Guests"
              value={formData.guests}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Special Request"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Reserve Now"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <p className="success-msg">✅ Booking request sent!</p>
            )}
            {status === "error" && (
              <p className="error-msg">❌ Something went wrong</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}