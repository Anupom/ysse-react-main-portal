import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com).";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedData(null);
      return;
    }

    setErrors({});
    setSubmittedData({ ...formData });
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div>
      <PageHeader
        badge="Get In Touch"
        title="Contact & Inquiry Form"
        subtitle="Have a question about YSSE programs or internships? Fill out our frontend inquiry form below."
        breadcrumb="Contact"
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="section-label">Inquiry Channels</span>
            <h2>We Would Love to Hear From You</h2>
            <p>
              Use this form to test controlled React form inputs, real-time validation messages, and state reset functionality.
            </p>

            <div className="contact-cards">
              <div className="c-card">
                <strong>📍 Office Location</strong>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className="c-card">
                <strong>✉️ Official Email (Placeholder)</strong>
                <p>info@ysseglobal.org</p>
              </div>
              <div className="c-card">
                <strong>ℹ️ Form Notice</strong>
                <p>This is a frontend-only demonstration form. No backend or database storage is connected.</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send an Inquiry</h3>

            {/* Conditional Rendering: Success Feedback */}
            {submittedData && (
              <div className="form-success-alert" role="status">
                <strong>✓ Form Validated Successfully (Frontend Demo)!</strong>
                <p>
                  Thank you, <b>{submittedData.fullName}</b>. Your inquiry regarding{" "}
                  <b>"{submittedData.subject}"</b> passed all validation checks. (Note: This is a frontend-only demo; no message was sent to a server.)
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "input-error" : ""}
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g., anupom@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g., Inquiry about Virtual Internship"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? "input-error" : ""}
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your question or message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "input-error" : ""}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;