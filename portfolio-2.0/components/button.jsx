import Arrow from "./arrow";

export function Button({text}) {
    return(
        <>
        <button className="bg-fuchsia-500 hover:bg-fuchsia-700 rounded p-1 flex">
            {text}
            <Arrow className="self-center"></Arrow>
        </button>
        
        </>
    )
    

    

};