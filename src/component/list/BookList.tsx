import styled from "styled-components";
import BookListItem from "./BookListItem";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); /* 자동 조정 */
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1rem 0 0 0;
    /* height: calc(100% - 56px - 28px); */
    overflow: scroll;
    width: 100%;
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