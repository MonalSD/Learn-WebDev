//Manipulating THE DOM
/*const ul= document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent ='Hello';
ul.children[1].innerText ='Brad';
ul.lastElementChild.innerHTML ='<h1>Hello</h1>';

const btn =document.querySelector('.btn');
btn.style.background ='red';
const btn =document.querySelector('.btn');
//Events 
//MouseEvent
btn.addEventListener('mouseout', (e) =>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='lavender';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
});
// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});
*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//Listen for Form Submit

myForm.addEventListener('submit',onSubmit);

function onSubmit(e) {
    
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' ) {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';
        //Remove Error after 3 seconds
        setTimeout(() => msg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
        
        // Append to ul
        userList.appendChild(li);
        
        // Clear Fields:
        nameInput.value = '';
        emailInput.value = '';
    }
}