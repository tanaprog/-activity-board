const linkTitle = document.querySelector('.title-add-list');
const listsUl = document.querySelector('.add-list');
const nextList = document.querySelector('.next-list');
const newList = document.querySelector('.new-list');

const newInput = document.querySelector('.newInput');
const addListBtn = document.querySelector('.add-list-btn');
const deleteBtn = document.querySelector('.delete-btn');


let List = [
];

function createElement(tag, className) {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
}

function addNewList(newList) {
    List.push(newList);
}

function deleteListForId(id) {
    const index = List.findIndex((task) => task.id === id);
    console.log(index);
    List.splice(index, 1)
}

function getListId(event) {
    const parentNode = event.target.closest('.list-group');
    const id = Number(parentNode.id);
    console.log(id)
    return id;
}

function getInputText(event) {
    event.preventDefault();
    const inputText = newInput.value;
    return inputText;
}

function removeInputText() {
    newInput.value = '';
    newInput.focus();
}

function changeNameBtn() {
    addListBtn.innerHTML = "+ Add a card";
    addListBtn.classList.add()
}

function addLists(e) {
    const text = getInputText(e);

    const newList = {
        id: Math.floor(Math.random() * 200) + 1,
        text: text,
    }

    addNewList(newList);
    changeNameBtn()
    renderList();
}

function renderList(list) {
    const item = createElement('div', 'list-group');
    item.setAttribute('id', list.id);

    const listUI = `
                <input = ${list.text} data-action="input" class="newInput" type="text" placeholder="Add new list">
                <button data-action="add-btn" class="add-list-btn">+ Add list</button>
                <button data-action="delete-btn" class="delete-btn">x</button>
    `;

    item.innerHTML = listUI;
    listsUl.appendChild(item);
    linkTitle.innerHTML = '';

}


//    Если с массивом форма не появляется      //

// function renderLists() {
//     List.forEach((list) => {
//         const item = createElement('div', 'list-group');
//         item.setAttribute('id', list.id);

//         const listUI = `
//             <input = ${list.text} data-action="input" class="newInput" type="text" placeholder="Add new list">
//             <button data-action="add-btn" class="add-list-btn">+ Add list</button>
//             <button data-action="delete-btn" class="delete-btn">x</button>
// `;

//         item.innerHTML = listUI;
//         listsUl.appendChild(item);
//         linkTitle.innerHTML = '';
//     });
//     console.log(List)
// }

function actionList(e) {
    console.log('dekete')
    const id = getListId(e);
    console.log(id)
    const action = e.target.dataset.action;

    if (action === "delete-btn") {
        deleteListForId(id);
        renderList();
    }

    if (action === "add-btn") {
        addLists(id);
        renderList();
    }
}

function init() {
    linkTitle.addEventListener('click', renderList);
    nextList.addEventListener('click', actionList)
    // addListBtn.addEventListener('click', addLists);
    // deleteBtn.addEventListener('click', actionList);
}

init();







