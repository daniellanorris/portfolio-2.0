
import ContactForm from "../client/contactForm";
import Link from "next/link";


export default async function MessageServerRender() {
  try {
    return (
      <div>
        <ContactForm/>
      </div>
    );
  } catch (error) {
    console.error("Error fetching artists:", error);
    return <p>Failed to load artists. Try and reload page. If reloading does not work, please navigate to my <Link href='/feedback' className="text-fuchsia-600 hover:cursor-pointer">contact page </Link></p>
  }
}