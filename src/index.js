console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function fetchImgs() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => json.message);
}

function fetchBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => json.message);
}

//need json.message, not json
document.addEventListener('DOMContentLoaded', () => {
    fetchImgs().then(x => {
        x.forEach(img => {
            let list = document.createElement('div');
            list.innerHTML = `<img src="${img}" />`;
            document.querySelector('#dog-image-container').append(list);
        })
    })

    fetchBreeds().then (a => {
        let x = Object.keys(a)

        x.forEach(Breed => {
            let list = document.createElement('li');
            list.innerHTML = `${Breed}`; //remove li here to remove the extra dot points `<li>${Breed}<li>`;
            document.querySelector('#dog-breeds').append(list);

            list.addEventListener('click', (e) => {
                console.log(e)
                list.style.color = 'red';
            })

        })
    })

})




//string starts with... or use [0] (first letter of string when converted to array)
//make more efficient (so code doesnt have to delete the original list on the page)