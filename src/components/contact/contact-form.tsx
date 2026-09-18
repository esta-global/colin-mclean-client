"use client";

import { useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://colin-mclean-api.esta-dev.com/api/v1";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);
    setLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/contact-inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && (result.status === 200 || !result.errors)) {
        setNotice({
          type: "success",
          message: "Thank you for reaching out. Your enquiry has been received and Colin will get back to you soon.",
        });
        form.reset();
      } else {
        const errorMsg =
          result.message ||
          (result.errors && Object.values(result.errors).join(", ")) ||
          "Failed to submit enquiry. Please try again.";
        setNotice({ type: "error", message: errorMsg });
      }
    } catch {
      setNotice({
        type: "error",
        message: "Unable to connect to the server. Please check your connection or connect via LinkedIn.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">Your Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Name" required disabled={loading} />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Email" required disabled={loading} />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-phone">Phone Number</label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone" disabled={loading} />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">Description</label>
        <textarea id="contact-message" name="message" placeholder="Message" required rows={5} disabled={loading} />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {notice && (
        <p
          className={`contact-form-notice ${notice.type === "error" ? "text-red-600" : "text-emerald-700 font-medium"}`}
          role="status"
        >
          {notice.message}
        </p>
      )}
    </form>
  );
}
