import styled from "styled-components";
import SearchInput from "../ui/SearchInput";
import { useState } from "react";
import { searchBooks } from "../../api/bookApi";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #f0eae4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

function Main() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleKeywordChange = (event: any) => {
        setSearchKeyword(event.target.value);
    };

    const handleSubmit = async (query: string) => {
        const results = await searchBooks(query);
        console.log("handleSubmit =========== >", results);
        setSearchResults(results);
    };

    return (
        <Wrapper>
            <SearchInput
                value={searchKeyword}
                onChange={handleKeywordChange}
                onSubmit={handleSubmit}
            />
            {searchResults && (
                searchResults.map((book: any) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> - {book.authors?.join(", ")}
                    </li>
                ))
            )}
        </Wrapper>
    );

}

export default Main;