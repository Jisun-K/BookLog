import BookListItem from "./BookListItem";

function BooktList(props: any) {
    const { list, onClick } = props;

    return (
        (
            list.map((book: any) => (
                <BookListItem
                    key={book.title}
                    book={book} />
            ))
        )
    )
}

export default BooktList;