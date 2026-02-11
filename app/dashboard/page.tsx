import { Suspense } from "react"
import SlowPost from "../components/SlowPost"
export default function page() {
    return(
        <div>
            <p>welcome to dashboard</p>
            <Suspense fallback={ <p>loading posts</p>}>
              <SlowPost/>
            </Suspense>
        </div>
    )
};
