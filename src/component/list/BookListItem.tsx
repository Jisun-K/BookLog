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

const NoThumbnail = styled(Thumbnail)`
    border: 1px solid black;
`;


function BookListItem(props: any) {
    const { book, onClick } = props;

    return (
        <BookItem onClick={onClick}>
            {book.thumbnail
                ? <Thumbnail src={book.thumbnail} alt={book.title} />
                : <NoThumbnail />}
            {book.title}
        </BookItem>
    )
}

export default BookListItem;