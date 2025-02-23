export default function Footer() {

  const date = new Date().getFullYear();

  return (
    <>
    <div className="justify-items-center">
      <footer className="p-10 *:bg-neutral text-neutral-content"> <em>Copyright Daniella Norris - {date} </em> </footer>
      </div>
    </>
  )
};
