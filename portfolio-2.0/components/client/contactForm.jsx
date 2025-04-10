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
    <div className="flex justify-center min-h-screen">
      <form
        id="contact-form"
        ref={formRef}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col items-center gap-6 w-full h-[100%] max-w-md p-6 rounded-2xl shadow-lg"
      >
        <div className="w-full flex flex-col items-start">
          <label htmlFor="name" className="mb-2">Name</label>
          <input
            type="text"
            className="border p-3 rounded-xl w-full  invalid:border-pink-500  valid:border-green-300"
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
  
        <div className="w-full flex flex-col items-start">
          <label htmlFor="email" className="mb-2">Email</label>
          <input
            type="email"
            className="border p-3 rounded-xl w-full  invalid:border-pink-500 valid:border-green-300"
            name="email"
            autoComplete="email"
            placeholder="Your email"
            required
          />
        </div>
  
        <div className="w-full flex flex-col items-start">
          <label htmlFor="message" className="mb-2">Message</label>
          <textarea
            name="message"
            className="border p-3 rounded-xl w-full h-40 invalid:border-pink-500  valid:border-green-300 "
            placeholder="What would you like to say to me?"
            required
          ></textarea>
        </div>
  
        <div>
          <input
            type="submit"
            className="rounded-2xl p-3 border border-fuchsia-600 hover:bg-fuchsia-600 hover:text-white hover:cursor-pointer w-full"
            value="Submit"
          />
        </div>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  );
}