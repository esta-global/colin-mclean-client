"use client";

import { useState } from "react";
import { buildApiUrl } from "@/lib/api-config";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ type: "success" | "error"; message: string } | null>(null);

  function validateField(fieldName: keyof FormValues, val: string): string | undefined {
    const trimmed = val.trim();

    if (fieldName === "name") {
      if (!trimmed) return "Name is required.";
      if (/\d/.test(val)) return "Name cannot contain numbers.";
      if (trimmed.length < 2) return "Name must be at least 2 characters.";
    }

    if (fieldName === "email") {
      if (!trimmed) return "Email is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";
    }

    if (fieldName === "phone") {
      if (!trimmed) return "Phone number is required.";
      if (!/^\d+$/.test(trimmed)) return "Phone number must contain digits only.";
      if (trimmed.length !== 11) return "Phone number must be 11 digits.";
    }

    if (fieldName === "message") {
      if (!trimmed) return "Description / message is required.";
      if (trimmed.length < 5) return "Message must be at least 5 characters.";
    }

    return undefined;
  }

  function validateAll(currentValues: FormValues): FormErrors {
    const newErrors: FormErrors = {};
    const nameErr = validateField("name", currentValues.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField("email", currentValues.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateField("phone", currentValues.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const messageErr = validateField("message", currentValues.message);
    if (messageErr) newErrors.message = messageErr;

    return newErrors;
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Strip out any numbers immediately
    const cleanVal = e.target.value.replace(/[0-9]/g, "");
    setValues((prev) => ({ ...prev, name: cleanVal }));
    if (touched.name) {
      setErrors((prev) => ({ ...prev, name: validateField("name", cleanVal) }));
    }
  }

  function handleNameKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Disallow typing numbers 0-9
    if (e.key >= "0" && e.key <= "9") {
      e.preventDefault();
    }
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    // Allow digits only and max 11 digits
    const cleanVal = e.target.value.replace(/\D/g, "").slice(0, 11);
    setValues((prev) => ({ ...prev, phone: cleanVal }));
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validateField("phone", cleanVal) }));
    }
  }

  function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Allow control keys (Backspace, Tab, Delete, Arrow keys, Enter, etc.)
    const allowedKeys = [
      "Backspace",
      "Tab",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
      "Enter",
    ];

    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
      return;
    }

    // Disallow non-digit characters
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    // Disallow typing more than 11 digits if no text is selected
    const input = e.currentTarget;
    const hasSelection = (input.selectionEnd ?? 0) - (input.selectionStart ?? 0) > 0;
    if (input.value.length >= 11 && !hasSelection) {
      e.preventDefault();
    }
  }

  function handleBlur(fieldName: keyof FormValues) {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const err = validateField(fieldName, values[fieldName]);
    setErrors((prev) => ({ ...prev, [fieldName]: err }));
  }

  function handleGenericChange(fieldName: "email" | "message", val: string) {
    setValues((prev) => ({ ...prev, [fieldName]: val }));
    if (touched[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: validateField(fieldName, val) }));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(null);

    // Mark all fields touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    const formErrors = validateAll(values);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setLoading(true);

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      message: values.message.trim(),
    };

    try {
      const response = await fetch(buildApiUrl("/contact-inquiries"), {
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
        setValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
        setTouched({});
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
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label htmlFor="contact-name">Your Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Name"
          value={values.name}
          onChange={handleNameChange}
          onKeyDown={handleNameKeyDown}
          onBlur={() => handleBlur("name")}
          className={touched.name && errors.name ? "has-error" : ""}
          aria-invalid={touched.name && !!errors.name}
          disabled={loading}
        />
        {touched.name && errors.name && (
          <span className="contact-field-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          value={values.email}
          onChange={(e) => handleGenericChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          className={touched.email && errors.email ? "has-error" : ""}
          aria-invalid={touched.email && !!errors.email}
          disabled={loading}
        />
        {touched.email && errors.email && (
          <span className="contact-field-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-phone">Phone Number</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={11}
          autoComplete="tel"
          placeholder="Phone"
          value={values.phone}
          onChange={handlePhoneChange}
          onKeyDown={handlePhoneKeyDown}
          onBlur={() => handleBlur("phone")}
          className={touched.phone && errors.phone ? "has-error" : ""}
          aria-invalid={touched.phone && !!errors.phone}
          disabled={loading}
        />
        {touched.phone && errors.phone && (
          <span className="contact-field-error" role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Description</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Message"
          rows={5}
          value={values.message}
          onChange={(e) => handleGenericChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={touched.message && errors.message ? "has-error" : ""}
          aria-invalid={touched.message && !!errors.message}
          disabled={loading}
        />
        {touched.message && errors.message && (
          <span className="contact-field-error" role="alert">
            {errors.message}
          </span>
        )}
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
