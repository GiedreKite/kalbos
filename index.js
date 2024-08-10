const searchDOM = document.getElementById('search');
const enterDOM = document.querySelector('.enter');
const btnDOM = document.querySelector('.btn');
const listDOM = document.querySelector('#list');

btnDOM.addEventListener('click', () => {
    const value = enterDOM.value
    if(value.trim()==='') {
        alert("Iveskite sali")
        return
    } else{
        listDOM.append(Object.assign(document.createElement('li'), {textContent: value}))}

})

searchDOM.addEventListener("keyup", search)

function search() {
    const searchDOMValue = searchDOM.value

    const listElements = document.getElementsByTagName("li");

    for (let i = 0; i< listElements.length; i++) {
        if (listElements[i].innerHTML.toLowerCase().includes(searchDOMValue) ||
        listElements[i].innerHTML.toUpperCase().includes(searchDOMValue)) {
            listElements[i].style.display ="";
        } else {
        listElements[i].style.display = "none";}
    }
}


