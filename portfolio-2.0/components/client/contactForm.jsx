"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    messageHandler(event);
  };

  return (
    <>
      <div className="justify-left gap-4 ">
        <form
          id="contact-form"
          ref={formRef}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col gap-4 w-[100%] h-[100%] p-4 "
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
      aria-multiline="false"
            />
          </div>
          <br></br>
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
          <br></br>
          <div className="w-[95%] flex flex-col justify-center items-center">
            <label htmlFor="message" className="pr-3">Message:</label>
            <textarea
              name="message"
              height="300px"
              className="border-white border p-4 rounded-2xl w-[80%] h-[300px]"
              placeholder="What would you like to say to me?"
              required
        
              ></textarea>
          </div>{" "}
          <br></br>
          <div>
          <input
            type="submit"
            className="rounded-2xl p-2 border border-fuchsia-600 hover:bg-fuchsia-600 hover:cursor-pointer"
            value="Submit"
            aria-multiline='true'
          />
          </div>
        </form>

        {status && <p>{status}</p>}
      </div>
    </>
  );
}
