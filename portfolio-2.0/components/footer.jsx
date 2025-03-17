export default function Footer() {

  const date = new Date().getFullYear();

  return (
    <>
    <div className="justify-items-center mt-20 pb-10">
      <footer className="p-10 *:bg-neutral text-neutral-content"> <em>Copyright Daniella Norris - {date} </em> </footer>
      <div className="grid grid-cols-2">
        <div className="cols-span-1">
          <a href="/portfolio"> Portfolio</a>
        </div>
        <div className="cols-span-1">
          <a href="/certifications"> Certifications </a>
        </div>
        <div className="cols-span-1">
          <a href="/listening"> Listening </a>
        </div>

      </div>
      </div>
    </>
  )
};
