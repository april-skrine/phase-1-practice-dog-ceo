// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDog(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const dogArray = data.message
        dogArray.forEach(renderImages)
    })
}
fetchDog()
fetchBreeds()

function renderImages(someUrl){
    const img = document.createElement('img')
    img.src = someUrl
    document.getElementById('dog-image-container').append(img)
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(dataDog => {
        const breedArray = dataDog.message
        breedArray.forEach(renderBreeds)
    })
}

function renderBreeds(breedUrl){
    const p = document.createElement('p')
    p.innerText = breedUrl
    document.getElementById('dog-breeds').append(p)
}