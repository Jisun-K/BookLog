import styled from "styled-components";
import BookListItem from "./BookListItem";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 자동 조정 */
    gap: 16px;
    flex-wrap: wrap;
    /* width: 80%;
    height: 32px; */
`;


function BookList(props: any) {
    const { list, onClick } = props;

    return (
        <GridContainer>
            {
                list.map((book: any) => (
                    <BookListItem
                        key={book.title}
                        book={book}
                        onClick={() => onClick(book)} />
                ))
            }
        </GridContainer>
    )
}

export default BookList;