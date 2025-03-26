import styled from "styled-components";

const BookItem = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
`;

const Thumbnail = styled.img`
    width: 120px;
    height: 175px;
`;

function BookListItem(props: any) {
    const { book, onClick } = props;

    return (
        <BookItem onClick={onClick}>
            <Thumbnail src={book.thumbnail} alt={book.title} />
            {book.title}
        </BookItem>
    )
}

export default BookListItem;