const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

function authorWith3DotsOnName() {
    return books.filter(book => book.author.name.split(' ').filter(word => word.endsWith('.')).length === 3)

}

console.log(authorWith3DotsOnName())

function oldBooks() {
    const actualYear = new Date().getFullYear()
    return books.filter(book => (actualYear - book.releaseYear) > 60).map(oldBook => oldBook.name)
}

console.log(oldBooks())
function fantasyOrScienceFictionAuthors() {
    return books.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map(data  => data.author.name).sort()
}

console.log(fantasyOrScienceFictionAuthors())

function oldBooksOrdered() {
    const actualYear = new Date().getFullYear()
    return books.filter(book => (actualYear - book.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear)
}

console.log(oldBooksOrdered())

// Adicione o código do exercício aqui:

function formatedBookNames() {
    return books.map(livro => `${livro.name} - ${livro.genre} - ${livro.author.name}`)
}

console.log(formatedBookNames())


function nameAndAge() {
    return books.map(book => ({
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear
    }))
        .sort((a,b) => a.age - b.age)
}

console.log(nameAndAge())


function fantasyOrScienceFiction() {
    return books.filter(book => book.genre === "Ficção Científica" || book.genre === "Fantasia")
}
console.log(fantasyOrScienceFiction())
