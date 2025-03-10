import styled from "styled-components";
import SearchInput from "../ui/SearchInput";
import { useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #FDF6E3;
`;

function Main() {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleKeywordChange = (event: any) => {
        setSearchKeyword(event.target.value);
    };

    const handleSubmit = (query: string) => {
        alert("querParmas ====>" + query);
    };

    return (
        <Wrapper>
            <SearchInput
                value={searchKeyword}
                onChange={handleKeywordChange}
                onSubmit={handleSubmit}
            />
        </Wrapper>
    )

}

export default Main;