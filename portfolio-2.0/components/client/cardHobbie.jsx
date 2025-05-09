
import X from './x.jsx'

export default function CardHobbie({text, open, onClick, setIsOpenHobbie}) {

        return (
          <div onClick={onClick}>
            {open && (
              <div className="rounded-2xl p-4 border-fuchsia-400 border-r-8 border-b-8 hover:cursor-pointer text-left">
                <div onClick={() => setIsOpenHobbie(!open)}>
            <X />
            </div>
                <ul>
                  {text.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      }
      