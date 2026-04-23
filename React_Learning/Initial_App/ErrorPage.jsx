import { useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error=useRouteError();
    return(
        <>
            <div>{error}</div>
        </>
    );
}