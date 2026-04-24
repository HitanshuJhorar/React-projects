import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import { guestOptions, roomOptions } from "../../data/contactContent";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomType: "",
  guests: "",
  specialRequests: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+\d\s()-]{8,20}$/;

function ReservationBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
      <path d="M7 3v3" />
      <path d="M17 3v3" />
      <path d="M4 8h16" />
      <rect x="4" y="5" width="16" height="15" rx="3" />
    </svg>
  );
}

function validateField(name, value, values = initialForm) {
  switch (name) {
    case "firstName":
    case "lastName":
      return value.trim() ? "" : "This field is required.";
    case "email":
      if (!value.trim()) return "Email is required.";
      return emailRegex.test(value) ? "" : "Enter a valid email address.";
    case "phone":
      if (!value.trim()) return "Phone number is required.";
      return phoneRegex.test(value) ? "" : "Enter a valid phone number.";
    case "checkIn":
      return value ? "" : "Select a check-in date.";
    case "checkOut":
      if (!value) return "Select a check-out date.";
      if (values.checkIn && value <= values.checkIn) {
        return "Check-out must be after check-in.";
      }
      return "";
    case "roomType":
      return value ? "" : "Select a room type.";
    case "guests":
      return value ? "" : "Select number of guests.";
    default:
      return "";
  }
}

function ReservationForm() {
  const [formValues, setFormValues] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const errors = useMemo(() => {
    const nextErrors = {};
    Object.keys(initialForm).forEach((field) => {
      const error = validateField(field, formValues[field], formValues);
      if (error) nextErrors[field] = error;
    });
    return nextErrors;
  }, [formValues]);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const isFormValid =
    Object.keys(errors).length === 0 &&
    formValues.firstName &&
    formValues.lastName &&
    formValues.email &&
    formValues.phone &&
    formValues.checkIn &&
    formValues.checkOut &&
    formValues.roomType &&
    formValues.guests;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setStatus({ type: "", message: "" });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const touchedFields = Object.keys(initialForm).reduce(
      (accumulator, key) => ({ ...accumulator, [key]: true }),
      {},
    );
    setTouched(touchedFields);

    if (!isFormValid) {
      setStatus({
        type: "error",
        message: "Please review the highlighted fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    await new Promise((resolve) => {
      setTimeout(resolve, 1400);
    });

    setFormValues(initialForm);
    setTouched({});
    setIsSubmitting(false);
    setStatus({
      type: "success",
      message:
        "Your reservation inquiry has been received. Our concierge will contact you shortly.",
    });
  };

  const showError = (field) => touched[field] && errors[field];

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-[#EEE6E0] bg-white p-5 shadow-[0_18px_36px_rgba(34,24,21,0.05)] md:p-8"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAEEF0] text-[#B76E79]">
          <ReservationBadgeIcon />
        </div>
        <h2 className="font-display text-[34px] leading-none text-[#1A1A1A] md:text-[42px]">
          Reservation Inquiry
        </h2>
      </div>

      <div className="mt-6 grid gap-3 md:mt-8 md:gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">First Name</span>
          <Input
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Jane"
            className={`rounded-lg ${showError("firstName") ? "border-[#B76E79] ring-2 ring-[#B76E79]/15" : ""}`}
          />
          {showError("firstName") ? (
            <span className="text-[12px] text-[#B76E79]">{errors.firstName}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">Last Name</span>
          <Input
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Doe"
            className={`rounded-lg ${showError("lastName") ? "border-[#B76E79] ring-2 ring-[#B76E79]/15" : ""}`}
          />
          {showError("lastName") ? (
            <span className="text-[12px] text-[#B76E79]">{errors.lastName}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">Email</span>
          <Input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="janedoe@email.com"
            className={`rounded-lg ${showError("email") ? "border-[#B76E79] ring-2 ring-[#B76E79]/15" : ""}`}
          />
          {showError("email") ? (
            <span className="text-[12px] text-[#B76E79]">{errors.email}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">Phone</span>
          <Input
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+1 (555) 000-0000"
            className={`rounded-lg ${showError("phone") ? "border-[#B76E79] ring-2 ring-[#B76E79]/15" : ""}`}
          />
          {showError("phone") ? (
            <span className="text-[12px] text-[#B76E79]">{errors.phone}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">Check-in</span>
          <Input
            name="checkIn"
            type="date"
            min={today}
            value={formValues.checkIn}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-lg ${showError("checkIn") ? "border-[#B76E79] ring-2 ring-[#B76E79]/15" : ""}`}
          />
          {showError("checkIn") ? (
            <span className="text-[12px] text-[#B76E79]">{errors.checkIn}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">Check-out</span>
          <Input
            name="checkOut"
            type="date"
            min={formValues.checkIn || today}
            value={formValues.checkOut}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-lg ${showError("checkOut") ? "border-[#B76E79] ring-2 ring-[#B76E79]/15" : ""}`}
          />
          {showError("checkOut") ? (
            <span className="text-[12px] text-[#B76E79]">{errors.checkOut}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">Room Preference</span>
          <Select
            name="roomType"
            value={formValues.roomType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-lg ${showError("roomType") ? "border-[#B76E79] ring-2 ring-[#B76E79]/15" : ""}`}
          >
            {roomOptions.map((option) => (
              <option key={option.value || option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {showError("roomType") ? (
            <span className="text-[12px] text-[#B76E79]">{errors.roomType}</span>
          ) : null}
        </label>

        <label className="grid gap-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">Number of Guests</span>
          <Select
            name="guests"
            value={formValues.guests}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-lg ${showError("guests") ? "border-[#B76E79] ring-2 ring-[#B76E79]/15" : ""}`}
          >
            {guestOptions.map((option) => (
              <option key={option.value || option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {showError("guests") ? (
            <span className="text-[12px] text-[#B76E79]">{errors.guests}</span>
          ) : null}
        </label>

        <label className="grid gap-2 md:col-span-2">
          <span className="text-[14px] font-medium text-[#4F4B49]">Special Requests</span>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="specialRequests"
            value={formValues.specialRequests}
            onChange={handleChange}
            rows="4"
            placeholder="Any dietary requirements or special occasions?"
            className="w-full rounded-lg border border-[#E5E5E5] bg-white px-4 py-3 text-[14px] text-[#1A1A1A] outline-none transition placeholder:text-[#9A9A9A] focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/15"
          />
        </label>
      </div>

      {status.message ? (
        <div
          className={`mt-5 rounded-md px-4 py-3 text-[14px] ${
            status.type === "success"
              ? "bg-[#F2F7F3] text-[#2A6A42]"
              : "bg-[#FBEEF0] text-[#B76E79]"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <div className="mt-6">
        <Button
          type="submit"
          className="w-full justify-center py-4"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? "Requesting..." : "Request Availability"}
        </Button>
      </div>
    </motion.form>
  );
}

export default ReservationForm;
