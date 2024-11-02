// a function to return the error page

import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>An unexpected error has occured :(</h1>
            <p>{error.message}</p>
        </div>
    );
}