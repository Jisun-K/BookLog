
function BookListItem(props: any) {
    const { book, onClick } = props;

    return (
        <div onClick={onClick} style={{ cursor: "pointer" }}>
            <img src={book.thumbnail} alt={book.title} />
            {book.title}
        </div>
    )
}

export default BookListItem;