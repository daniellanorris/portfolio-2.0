export default function Footer() {

  const date = new Date().getFullYear();

  return (
    <>
    <div className="justify-items-center mt-20">
      <div>  <a href="/portfolio" className="hover:text-fuchsia-600 text-center"> Home </a></div>
    <div className="grid grid-cols-2 text-center">
        <div className="cols-span-1">
          <a href="/portfolio" className="hover:text-fuchsia-600"> Portfolio</a>
        </div>
        <div className="cols-span-1">
          <a href="/certifications" className="hover:text-fuchsia-600"> Certifications </a>
        </div>
        <div className="cols-span-1">
          <a href="/listening" className="hover:text-fuchsia-600"> Listening </a>
        </div>
        <div className="cols-span-1">
          <a href="/feedback" className="hover:text-fuchsia-600"> Feedback </a>
        </div>
        

      </div>
      <footer className="pt-10 pb-2 *:bg-neutral text-neutral-content"> <em>Copyright Daniella Norris - {date} </em> </footer>
      </div>
      
    </>
  )
};
