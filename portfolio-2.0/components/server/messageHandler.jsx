export default async function messageHandler(event) {
    event.preventDefault();

    const form = formRef.current;
    if (!form) return;
    console.log("form", form);

    const dataForm = new FormData(form);

    dataForm.append("service_id", process.env.NEXT_SERVICE_ID);
    dataForm.append("template_id", process.env.NEXT_TEMPLATE_ID);
    dataForm.append("user_id", process.env.NEXT_KEY);

    console.log("form data", dataForm);

    try {
      const res = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        {
          method: "POST",
          body: dataForm,
          contentType: false,
          processData: false,
        }
      );

      if (!res.ok) throw new Error(`Emailjs API Error: ${res.status}`);

      setStatus("Message sent successfully!");
      form.reset(); // Reset the form after submission
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Error sending message.");
    }
}