const buttonAddList = document.querySelector('.add-list');
const listForm = document.querySelector('.list-form');

let LIST = [];

function createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
}

function addNewList(newList) {
    LIST.push(newList);
}

function deleteListForId(id) {
    const index = LIST.findIndex((list) => list.id === id);
    LIST.splice(index, 1)
}

function getListId(event) {
    const parentNode = event.target.closest('.new-list');
    if (!parentNode?.id) return;
    const id = Number(parentNode.id);
    return id;
}

function getInputText(event) {
    event.preventDefault();
}

function controllerLists(newList) {
    
    const newList = {
        id: Math.floor(Math.random() * 200) + 1,
        text: "text"
    }

    addNewList(newList);
    renderLists();
}

function renderLists() {
    listForm.innerHTML = "";

    LIST.forEach((list) => {
        const item = createElement('div', 'new-list');
        item.setAttribute('id', list.id);

        const createList = `
                    <input ${list.text} data-action="input" class="input-list" type="text" placeholder="Add new list">
                    <button data-action="add-btn" class="btn-list">Add list</button>
                    <button data-action="delete-btn" class="btn-delete">X</button>
    `;

        item.innerHTML = createList;
        listForm.appendChild(item);
        buttonAddList.style.display = 'none';
    });
    console.log(LIST)
}

function actionsList(e) {
    const id = getListId(e);
    const action = e.target.dataset.action;

        if (action === "add-btn") {
            const buttonText = document.querySelector('.btn-list');
            buttonText.textContent = 'Add a card';
            buttonText.classList.remove('btn-list');
            buttonText.classList.add('btn-card')

            const inputText = document.querySelector('.input-list');
            const texT = inputText.value;
            console.log(texT)
            const newList = {
                id: Math.floor(Math.random() * 200) + 1,
                text: texT,
            }
            addNewList(newList);
            renderLists();
        }

        if (action === "delete-btn") {
            console.log('delete')
            deleteListForId(id);
            buttonAddList.style.display = 'block';
            renderLists();
        }
}

function init() {
    buttonAddList.addEventListener('click', controllerLists);
    listForm.addEventListener('click', actionsList);
}

init();




























// const linkTitle = document.querySelector('.title-add-list');
// const listsUl = document.querySelector('.add-list');
// const nextList = document.querySelector('.next-list');
// const newList = document.querySelector('.new-list');

// const newInput = document.querySelector('.newInput');
// const addListBtn = document.querySelector('.add-list-btn');
// const deleteBtn = document.querySelector('.delete-btn');


// let List = [
// ];

// function createElement(tag, className) {
//     let element = document.createElement(tag);
//     if (className) element.classList.add(className);
//     return element;
// }

// function addNewList(newList) {
//     List.push(newList);
// }

// function deleteListForId(id) {
//     const index = List.findIndex((task) => task.id === id);
//     console.log(index);
//     List.splice(index, 1)
// }

// function getListId(event) {
//     const parentNode = event.target.closest('.list-group');
//     const id = Number(parentNode.id);
//     console.log(id)
//     return id;
// }

// function getInputText(event) {
//     event.preventDefault();
//     const inputText = newInput.value;
//     return inputText;
// }

// function removeInputText() {
//     newInput.value = '';
//     newInput.focus();
// }

// function changeNameBtn() {
//     addListBtn.innerHTML = "+ Add a card";
//     addListBtn.classList.add()
// }

// function addLists(e) {
//     const text = getInputText(e);

//     const newList = {
//         id: Math.floor(Math.random() * 200) + 1,
//         text: text,
//     }

//     addNewList(newList);
//     changeNameBtn()
//     renderList();
// }

// function renderList(list) {
//     const item = createElement('div', 'list-group');
//     item.setAttribute('id', list.id);

//     const listUI = `
//                 <input = ${list.text} data-action="input" class="newInput" type="text" placeholder="Add new list">
//                 <button data-action="add-btn" class="add-list-btn">+ Add list</button>
//                 <button data-action="delete-btn" class="delete-btn">x</button>
//     `;

//     item.innerHTML = listUI;
//     listsUl.appendChild(item);
//     linkTitle.innerHTML = '';

// }


// //    Если с массивом форма не появляется      //

// // function renderLists() {
// //     List.forEach((list) => {
// //         const item = createElement('div', 'list-group');
// //         item.setAttribute('id', list.id);

// //         const listUI = `
// //             <input = ${list.text} data-action="input" class="newInput" type="text" placeholder="Add new list">
// //             <button data-action="add-btn" class="add-list-btn">+ Add list</button>
// //             <button data-action="delete-btn" class="delete-btn">x</button>
// // `;

// //         item.innerHTML = listUI;
// //         listsUl.appendChild(item);
// //         linkTitle.innerHTML = '';
// //     });
// //     console.log(List)
// // }

// function actionList(e) {
//     console.log('dekete')
//     const id = getListId(e);
//     console.log(id)
//     const action = e.target.dataset.action;

//     if (action === "delete-btn") {
//         deleteListForId(id);
//         renderList();
//     }

//     if (action === "add-btn") {
//         addLists(id);
//         renderList();
//     }
// }

// function init() {
//     linkTitle.addEventListener('click', renderList);
//     listsUl.addEventListener('click', actionList)
//     // addListBtn.addEventListener('click', addLists);
//     // deleteBtn.addEventListener('click', actionList);
// }

// init();







