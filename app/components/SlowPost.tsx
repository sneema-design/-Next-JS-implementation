export default async function SlowPost() {
    await new Promise(res=>setTimeout(res,3000))
    return(
        <div>
            <p>post</p>
        </div>
    )
};
