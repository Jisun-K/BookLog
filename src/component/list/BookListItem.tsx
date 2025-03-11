
function BookListItem(props: any) {
    const { book } = props;

    return (
        <div>
            <img src={book.thumbnail} alt={book.title} />
            {book.title}
        </div>
    )
}

export default BookListItem;