import { useParams } from "react-router-dom";

function BookDetail() {
    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );

}

export default BookDetail;