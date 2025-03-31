import ContactForm from "../../../components/server/contactForm";

export default function FeedbackPage() {
  return (
    <div className="justify-content-center justify-center flex-wrap text-center items-center gap-4 w-[100vw]">
        <h1>Contact Me</h1>
       
        <div className="p-20">
        <p> If you'd like to get in touch with me to just say hey, for job / contracting opportunities, or even to provide site feedback, here's your chance! </p>
        <br></br>
        <p> You can also reach out to me directly at daniellamnorris@gmail.com if preferred.</p>
        </div>
        <div className="w-[100vw]">
        <ContactForm/>
        </div>
    </div>
  );
}
