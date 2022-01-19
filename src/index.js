// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchDog(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const dogArray = data.message
        dogArray.forEach(renderImages)
        // console.log(data.message)
    })
}
fetchDog()

function renderImages(){
    // take a url and make an image out of it
    const img = document.createElement('img')
    img.src = "https://dog.ceo/api/breeds/image/random/4"
    document.getElementById('dog-breeds').append(img)
}