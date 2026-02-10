"use client"
type props={
    error:Error,
    reset:()=>void
}
export default function Error({error,reset}:props) {
    return(
        <div>

            <p>Something went wrong</p>
        {error.message}
        <button onClick={reset}>Try again</button>
        </div>
        
    )
};
