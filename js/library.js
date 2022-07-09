const errorText = document.getElementById("error-message")
const foundItem = document.getElementById('found-info');
const bookItem = () => {
    document.getElementById("load").style.display = "block"
    errorText.textContent = '';
    const searchField = document.getElementById('search-text');
    const searchText = searchField.value;

    // console.log(searchText);


    searchField.value = "";
    if (searchText.length === 0) {
        errorText.innerHTML =
            "<h5 class='text-center p-3 bg-danger'><b>Please enter a  book Name...</b></h5>";
    }
    else {

        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => searchResult(data));
    }

}
const resultNumber = num => {
    foundItem.textContent = '';
    if (num === 0) {
        errorText.innerHTML =
            "<h5 class='text-center p-3 bg-info'><b>No Result Found</b></h5>";
    }
    else {
        foundItem.innerHTML = ` 
        <h4 class='text-center p-3 m-3 bg-info'>${num} result Found</h4>
       
        `;
    }
}


const searchResult = books => {

    document.getElementById("load").style.display = "none"
    resultNumber(books.numFound)

    console.log(books)
    const displaySearch = document.getElementById('book-item');
    displaySearch.textContent = '';
    const dataArray = books.docs;

    dataArray.forEach(booksLibrary => {

        // console.log(books)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
        <div class="card">
             <img src="https://covers.openlibrary.org/b/id/${booksLibrary.cover_i}-L.jpg" class="card-img-top" alt="...">
               <div class="card-body">
                 <h5 class="card-title">Book Name: ${booksLibrary.title}</h5>
                  <h5 class="card-text">Author Name: ${booksLibrary.author_name[0]}</h5>
                   <h5 class="card-text">published Date: ${booksLibrary.publish_date[0]}</h5>
                   <h5 class="card-text">publisher: ${booksLibrary.publisher[0]}</h5>
            </div>
        </div>    
    `
        displaySearch.appendChild(div);


    })


}















