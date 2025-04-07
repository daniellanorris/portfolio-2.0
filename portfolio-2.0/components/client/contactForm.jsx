"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData from the form
    const form = formRef.current;

    const formData = new FormData(form);

    console.log(formRef); // Debugging line to check form data
    formData.append("service_id", process.env.NEXT_PUBLIC_SERVICE_ID);
    formData.append("template_id", process.env.NEXT_PUBLIC_TEMPLATE_ID);
    formData.append("user_id", process.env.NEXT_PUBLIC_PUBLIC_KEY);

  
    try {
      // Send the form data directly
       const res = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        contentType: false, // auto-detection
        processData: false,
        body: formData,
        
      }
);

     
if (!res.ok) throw new Error(`Emailjs API Error: ${res.status}`);
 
setStatus("Message sent successfully!");
form.reset(); // Reset the form after submission
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try again later.");
    }
  };

  return (
    <div className="justify-left gap-4">
      <form
        id="contact-form"
        ref={formRef}
        onSubmit={handleSubmit}
        encType="multipart/form-data"  // Ensure proper encoding for file uploads
        className="flex flex-col gap-4 w-full h-full p-4"
      >
        <div className="w-[80%]">
          <label htmlFor="name" className="pr-3">Name:</label>
          <input
            type="text"
            className="border-white border rounded-2xl p-2 w-[80%]"
            name="name"
            required
            placeholder="Your name"
            autoFocus
            maxLength="30"
            minLength="8"
            pattern="[A-Za-z ]{8,30}"
            title="Please enter a valid name (8-30 letters)"
          />
        </div>

        <div className="relative w-[80%]">
          <label htmlFor="email" className="pr-3">Email:</label>
          <input
            type="email"
            className="border-white p-4 border rounded-2xl w-[80%]"
            name="email"
            autoComplete="email"
            placeholder="Your email"
            required
          />
        </div>

        <div className="w-[95%] flex flex-col justify-center items-center">
          <label htmlFor="message" className="pr-3">Message:</label>
          <textarea
            name="message"
            className="border-white border p-4 rounded-2xl w-[80%] h-[300px]"
            placeholder="What would you like to say to me?"
            required
          ></textarea>
        </div>

        <div>
          <input
            type="submit"
            className="rounded-2xl p-2 border border-fuchsia-600 hover:bg-fuchsia-600 hover:cursor-pointer"
            value="Submit"
          />
        </div>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
