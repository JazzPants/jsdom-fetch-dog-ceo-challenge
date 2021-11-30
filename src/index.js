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
        let x = Object.keys(a) //get object keys of the API object and turn into an array called x
        console.log(a);
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

    //wait for DOM to load before performing these operations!
    const selectBreed = document.getElementById('breed-dropdown')
    selectBreed.addEventListener('change', filterBreed);

    function filterBreed() {
    let x = selectBreed;
    let filterChoice = x.options[x.selectedIndex].text; //get all options array, get selected index and the text inside it
    console.log(`${filterChoice}`)
    updateBreed(filterChoice);

    function updateBreed(x) {
        //remove all children
        let deleteList = document.getElementById('dog-breeds');
        deleteList.innerHTML = '';
        console.log("filterChoice was selected")

        //add back a filtered list
    }
}

})





// function updateBreedList(x) {
//     let ul = document.querySelector('#dog-breeds');
//     removeChildren(ul);
//     x.forEach(breed => addBreed(breed))
// }

// function filterBreedWithStartingLetter(letter) {

// }



//string starts with... or use [0] (first letter of string when converted to array)
//make more efficient (so code doesnt have to delete the original list on the page)