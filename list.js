
const DOM = {
    date:document.querySelector('.date'),
    time:document.querySelector('.time'),
    add: document.querySelector('.add-btn'),
    input: document.querySelector('input[type="text"]'),
    text: document.querySelector('.container-2')
}
/*Date and time */
const day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const date = day + "\\" + month + "\\" + year;
const hour = new Date().getHours();
const minute = new Date().getMinutes(); 
const second = new Date().getSeconds();
const time =`${hour}:${minute}:${second}`;

window.addEventListener('load', () => {
    DOM.date.textContent = date;
    DOM.time.textContent = time;
});
/*time change (ADD AT THE END)
setInterval(function(){
    const hour = new Date().getHours();
    const minute = new Date().getMinutes(); 
    const second = new Date().getSeconds();
    const time =`${hour}:${minute}:${second}`;
    DOM.time.textContent = time;
},1000);*/

//Insert to list
DOM.add.addEventListener('click', ()=>{
    const item = DOM.input.value;
    const markup = `
    <div class="item">
        <input type="checkbox" class="item-checkbox">
        <p>${item}</p>
           <div class="item-btns-container">
                <img src="img/edit.png" alt="edit">
                <img src="img/cancel.png" alt="delete">
            </div>
    </div>
    `;
    DOM.text.insertAdjacentHTML('beforeend', markup);
    DOM.input.value = '';
});