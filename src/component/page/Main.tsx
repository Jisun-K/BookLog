import styled from "styled-components";
import SearchInput from "../ui/SearchInput";
import { useState } from "react";
import { searchBooks } from "../../api/bookApi";
import BookList from "../list/BookList";
import { useNavigate } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import { Header, Logo } from "../../styles/styles";

const Layout = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    
    /* background: #f0eae4; */
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: scroll; */
`;

const ContentWrapper = styled.div<{ isOpen: boolean }>`
    margin-left: ${props => (props.isOpen ? '250px' : '0')};  // 사이드바 크기에 맞게 왼쪽 여백 조정
    transition: margin-left 0.5s ease; // 애니메이션
    width: 100%;
`;

const MainContent = styled.div<{ isOpen: boolean }>`
    width: ${props => (props.isOpen ? 'calc(100% - 250px)' : '100%')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
    flex-direction: column;
`;

function Main() {
    const [isOpen, setIsOpen] = useState(true);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleKeywordChange = (event: any) => {
        setSearchKeyword(event.target.value);
    };

    const handleSubmit = async (query: string) => {
        const results = await searchBooks(query);
        console.log("handleSubmit =========== >", results);
        setSearchResults(results);
    };

    const onClickBookItem = (book: any) => {
        console.log("click book ===>", book);
        navigate(`/books/${book.isbn}`, { state: book });
    }

    return (
        <Layout>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <ContentWrapper isOpen={isOpen} >
                <Header>
                    {!isOpen &&
                        <Logo src="logo192.png" alt="logo" onClick={() => setIsOpen(!isOpen)} />
                    }
                </Header>
                <MainContent isOpen={isOpen}>
                    <SearchInput
                        value={searchKeyword}
                        placeholder={"무슨 책을 찾으시나요?"}
                        onChange={handleKeywordChange}
                        onSubmit={handleSubmit}
                    />
                    {searchResults &&
                        <BookList
                            list={searchResults}
                            onClick={onClickBookItem}
                        />}
                </MainContent>

            </ContentWrapper>
        </Layout>
    );

}

export default Main;