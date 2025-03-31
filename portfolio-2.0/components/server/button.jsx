import Arrow from "./arrow";

export function Button({text}) {
    return(
        <>
        <button className="border-fuchsia-500 border hover:bg-fuchsia-700 rounded p-1 flex">
            {text}
            <Arrow className="self-center"></Arrow>
        </button>
        
        </>
    )
    

    

};