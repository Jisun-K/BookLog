import styled from "styled-components";
import { Header, Logo } from "../../styles/styles";
import SearchInput from "../ui/SearchInput";
import BookList from "../list/BookList";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const MainContent = styled.div<{ isOpen: boolean }>`
    width: ${props => (props.isOpen ? 'calc(100% - 250px)' : '100%')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
    flex-direction: column;
`;


function Home() {
    const { isOpen,
        setIsOpen,
        searchKeyword,
        handleKeywordChange,
        handleSubmit,
        searchResults } = useAppContext();
    const navigate = useNavigate();

    const onClickBookItem = (book: any) => {
        console.log("click book ===>", book);
        navigate(`/books/${book.isbn}`, { state: book });
    }

    return (
        <>
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
        </>
    )
}

export default Home;