import Header from "../../components/header";
import Footer from "../../components/footer.jsx";
import "../app/globals.css";

export const metadata = {
  title: "Portfolio - Norris",
  description: "Portfolio - Norris",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </>
  );
}
