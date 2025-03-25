import { useLocation, useParams } from "react-router-dom";

function BookDetail() {
    const { state } = useLocation();

    return (
        <div>
            {state.title}
        </div>
    );

}

export default BookDetail;