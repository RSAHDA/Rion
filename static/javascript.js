// code for search engine:

document.addEventListener('submit', (input) => {
    input.preventDefault()

    const input_data = document.getElementById('search').value
    localStorage.input = input_data

    console.log(localStorage.input)

    window.open('results.html', '_self')
})
