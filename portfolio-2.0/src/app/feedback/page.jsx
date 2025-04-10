
import MessageServerRender from "../../../components/server/messageHandler";

export default function FeedbackPage() {
  return (
    <div className="justify-left flex-wrap text-center gap-4 w-[100vw]">
        <h1>Contact Me</h1>
       
        <div className="p-10 text-left">
        <p> If you'd like to get in touch with me to just say hey, for job / contracting opportunities, or even to provide site feedback, here's your chance! </p>
        <br></br>
        <p> You can also reach out to me directly at daniellamnorris@gmail.com if preferred.</p>
        <br></br>
        <p> This email form was created using Emailjs, an email API. For more about Emailjs, check out <a className="text-fuchsia-600" href="https://www.emailjs.com/docs/tutorial/overview/"> this link</a>.</p>
        </div>

        <div className="w-[100vw]">
        <MessageServerRender />
        </div>
    </div>
  );
}
