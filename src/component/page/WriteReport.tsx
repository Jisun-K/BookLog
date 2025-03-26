import { useLocation } from "react-router-dom";

function WriteReport() {
    const { state } = useLocation();

    return (
        <div>
            독후감 스는 창

            write{state.title}
        </div>
    )
}

export default WriteReport;