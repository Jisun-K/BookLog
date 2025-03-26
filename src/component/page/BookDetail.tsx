import { useLocation, useNavigate, useParams } from "react-router-dom";

function BookDetail() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const onClickWriteReport = () => {
        navigate(`/write/${state.isbn}`, { state: state });
    }

    return (
        <div>
            {state.title}
            <button onClick={onClickWriteReport}>add</button>
        </div>
    );

}

export default BookDetail;