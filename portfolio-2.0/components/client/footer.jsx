export default function Footer() {

  const date = new Date().getFullYear();

  return (
    <>
    <div className="relative mt-5 sm:mt-20">
    <img src='./images/shoe.svg' width='50px' height='auto' className="justify-self-center"/>
    <div className="justify-items-center">
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

      </div>
      <footer className="pt-10 pb-2 *:bg-neutral text-neutral-content text-center"> <em>Copyright Daniella Norris - {date} </em> </footer>
      </div>
      
    </>
  )
};
