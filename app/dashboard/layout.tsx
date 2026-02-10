import { ReactNode } from "react";

export default function layout({children}:{children:ReactNode}) {
    return(
        <section>
            <nav>This is nav bar</nav>
            {children}
        </section>
    )
};
