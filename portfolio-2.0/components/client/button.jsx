import Arrow from "./arrow";

export function Button({text, href}) {
    console.log(href);
    return(
        <div>
        <a href={href}>
        <button className="border-fuchsia-500 border hover:bg-fuchsia-700 hover:cursor-pointer rounded p-1 flex">
            {text}
            <Arrow className="self-center"></Arrow>
        </button>
        </a>
        
        </div>
    )
    

    

};