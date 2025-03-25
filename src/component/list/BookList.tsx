import styled from "styled-components";
import BookListItem from "./BookListItem";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* width: 80%;
    height: 32px; */
`;


function BookList(props: any) {
    const { list, onClick } = props;

    return (
        <GridWrapper>
            {
                list.map((book: any) => (
                    <BookListItem
                        key={book.title}
                        book={book}
                        onClick={() => onClick(book)} />
                ))
            }
        </GridWrapper>
    )
}

export default BookList;