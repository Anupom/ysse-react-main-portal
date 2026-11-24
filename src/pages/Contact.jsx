import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
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
      message: "",
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

      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="inline-block bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Inquiry Channels
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              We Would Love to Hear From You
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-6">
              Use this form to test controlled React form inputs, Tailwind focus/hover states, validation messages, and state reset functionality.
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                <strong className="block text-slate-900 text-sm mb-1">📍 Office Location</strong>
                <p className="text-sm text-slate-600">Dhaka, Bangladesh</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                <strong className="block text-slate-900 text-sm mb-1">✉️ Official Email (Placeholder)</strong>
                <p className="text-sm text-slate-600">info@ysseglobal.org</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                <strong className="block text-slate-900 text-sm mb-1">ℹ️ Frontend Demonstration Notice</strong>
                <p className="text-sm text-slate-600">
                  This is a frontend-only demonstration form. No backend or database storage is connected.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-5">
              Send an Inquiry
            </h3>

            {submittedData && (
              <div
                className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-4 mb-6 text-sm"
                role="status"
              >
                <strong className="block mb-1">
                  ✓ Form Validated Successfully (Frontend Demo)!
                </strong>
                <p>
                  Thank you, <b>{submittedData.fullName}</b>. Your inquiry regarding{" "}
                  <b>"{submittedData.subject}"</b> passed all validation checks. (Note: No message was sent to an external server.)
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all ${
                    errors.fullName
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-300 hover:border-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20"
                  }`}
                />
                {errors.fullName && (
                  <span className="text-xs text-red-600 font-medium mt-1 block">
                    {errors.fullName}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g., anupom@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all ${
                    errors.email
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-300 hover:border-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20"
                  }`}
                />
                {errors.email && (
                  <span className="text-xs text-red-600 font-medium mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g., Inquiry about Virtual Internship"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all ${
                    errors.subject
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-300 hover:border-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20"
                  }`}
                />
                {errors.subject && (
                  <span className="text-xs text-red-600 font-medium mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-800 mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your question or message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-all ${
                    errors.message
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                      : "border-slate-300 hover:border-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20"
                  }`}
                ></textarea>
                {errors.message && (
                  <span className="text-xs text-red-600 font-medium mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              <Button type="submit" variant="primary" className="w-full py-3">
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