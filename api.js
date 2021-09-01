const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);

}