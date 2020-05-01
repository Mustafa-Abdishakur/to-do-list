
const DOM = {
    date: document.querySelector('.date'),
    time: document.querySelector('.time'),
    add: document.querySelector('.add-btn'),
    input: document.querySelector('input[type="text"]'),
    text: document.querySelector('.container-2'),
    highlightBtn: document.querySelector('.highlight-btn'),
    editBtn: document.querySelector('.edit-btn'),
    deleteBtn: document.querySelector('.delete-btn'),
}
/*Date and time */
const day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const date = day + "\\" + month + "\\" + year;
const hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();
const time = `${hour}:${minute}:${second}`;

window.addEventListener('load', () => {
    DOM.date.textContent = date;
    DOM.time.textContent = time;
});

setInterval(function(){
    const hour = new Date().getHours();
    const minute = new Date().getMinutes(); 
    const second = new Date().getSeconds();
    const time =`${hour}:${minute}:${second}`;
    DOM.time.textContent = time;
},1000);

//Insert to list
DOM.add.addEventListener('click', () => {
    addToList();

});
//insert to list (Enter key)
DOM.input.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        addToList();
    }
});

//highlight text
DOM.highlightBtn.addEventListener('click', () => {
    DOM.highlightBtn.classList.toggle('red-border');
});

//edit and delete btns
DOM.text.addEventListener('click', event => {
    //edit btn
    let textElement, markup, text, newValue, newMarkup;
    let i = 0;
    if (event.target.matches('.edit-btn')) {
        textElement = event.target.parentElement.parentElement.children[1];
        text = textElement.textContent;
        if (!(document.querySelector('.edit-input'))) {

            markup = document.createRange().createContextualFragment(`
            <input class="edit-input" type="text" value=${text}>
            `); //changed string to node to be able to use replaceChild method
            textElement.parentNode.replaceChild(markup, textElement);

        } else {
            if (!(textElement.className === 'text')) {
                newValue = textElement.value;
                newMarkup = document.createRange().createContextualFragment(`
                <p class="text">${newValue}</p>
                `);
                textElement.parentNode.replaceChild(newMarkup, textElement);


            }

        }

    //delete btn
    }
    if (event.target.matches('.delete-btn')) {
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    }

});


function addToList() {
    const item = DOM.input.value;
    let markUp;
    if (item !== '') {
        //highlight text when hightlightBtn is on
        if (!(document.querySelector('.red-border'))) {
            markUp = `
            <div class="item">
                <input type="checkbox" class="item-checkbox">
                <p class="text">${item}</p>
                   <div class="item-btns-container">
                        <img class="edit-btn" src="img/edit.png" alt="edit">
                        <img class="delete-btn" src="img/cancel.png" alt="delete">
                    </div>
            </div>
            `;
        } else {
            markUp = `
            <div class="item">
                <input type="checkbox" class="item-checkbox">
                <p class="text" style="color:red;">${item}</p>
                   <div class="item-btns-container">
                        <img class="edit-btn" src="img/edit.png" alt="edit">
                        <img class="delete-btn" src="img/cancel.png" alt="delete">
                    </div>
            </div>
            `;
        }

        DOM.text.insertAdjacentHTML('beforeend', markUp);
        DOM.input.value = '';
    }
};