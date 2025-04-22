'use client'

import Header from "../../components/client/header";
import Footer from "../../components/client/footer.jsx";
import "./globals.css";
import { useEffect, useState } from "react";


export default function RootLayout({ children }) {

  const metadata = {
    title: "Portfolio - Norris",
    description: "Portfolio - Norris",
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }
  , []);


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
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Darumadrop+One&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
            rel="stylesheet"></link>

<link href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Triangles&family=Rubik+Iso&display=swap" rel="stylesheet"/>
        </head>
        <body>
          { loaded ? ( <>
          <Header />
          <div>{children}</div>
          <Footer />
          </>) :
          
          (<>
       
           <div className="items-center flex-col flex min-h-screen">

            <div className="h-[35vh] flex flex-col animate-pulse justify-center items-center m-10">
            <h1> Site generating...</h1>
              <div className="grid grid-cols-4 space-x-10 pt-10">
             
                <div className="gap-10 col-span-1 size-10 rounded-full bg-green-200"></div>
                <div className="gap-x-10 col-span-1 size-10 rounded-full bg-green-300"></div>
                <div className="gap-x-10 col-span-1 size-10 rounded-full bg-green-400"></div>
                <div className="gap-x-10 col-span-1 size-10 rounded-full bg-green-500"></div>
              </div>
              </div>
              </div>
    

            
        </>)
}
        </body>
      </html>
    </>
  );
}
