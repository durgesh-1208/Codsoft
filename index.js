const container = document.querySelector('.output-field');

let r =document.querySelector('input').value;

    var counter=1;
    function get() {
        let t=document.querySelector('input');
        var c=t.value;
        console.log(c);
        if(c.length<=0){
            alert('Please enter');
        }

    // let t=document.querySelector('input');
    // var c=t.value;
    else{
        t.value="";
        let v= document.createTextNode(c);
        // let x= document.createTextNode();
        let Div=  document.createElement('div');
        let Div2=  document.createElement('div');
        var newCheckbox = document.createElement("input");

        let Para=  document.createElement('p');
        let But=  document.createElement('button');
    newCheckbox.type = "checkbox";
    But.type = "cross";

    container.appendChild(Div);

    Div2.appendChild(newCheckbox);
    Div2.appendChild(Para);
    Div.appendChild(Div2);
    Div.appendChild(But);
    Para.appendChild(v);
    But.innerHTML += "&#215;";
    Div.classList.add("user-toDo");
    newCheckbox.classList.add("completed");
    Para.classList.add("paragraph");
    But.classList.add("cross-btn");
    Div2.classList.add("left-container");
    Div.id=`b${counter}`;
    // Para.id=`b${counter}`;


    // container.appendChild(newCheckbox);
    counter++;
    }

}
// Div2.click(function(evt){
//     var clicked = evt.target;
//     var currentID = clicked.id || "No ID!";
//     console.log(currentID);
//   })

// Get all the checkbox elements
// Add a click event listener to the document
// Add a change event listener to the document
// document.addEventListener('change', function(evt) {
//     if (evt.target.type === 'checkbox') {
//         const checkbox = evt.target;
//         if (paragraph) {
//             if (checkbox.checked) {
//             } else {
//             }
//         }
//     }
// });

document.addEventListener('click', function(evt) {
    if (evt.target.type === 'checkbox') {
        const checkbox = evt.target;
        const userToDo = checkbox.closest('.user-toDo');
        const paragraph = checkbox.closest('.user-toDo').querySelector('.paragraph');

        if (userToDo) {
            if (checkbox.checked) {
                userToDo.classList.add('completeD'); // Add the class
                paragraph.classList.add('completed');

            } else {
                userToDo.classList.remove('completeD'); // Remove the class
                paragraph.classList.remove('completed');

            }
        }
    }
});


document.addEventListener('click', function(evt) {
    // console.log(evt.t);
    if (evt.target.classList.contains('cross-btn')) {
        const button = evt.target;
        console.log('Button with class "cross-btn" clicked');
        const userToDo = button.closest('.user-toDo');
        if (userToDo) {
            userToDo.remove(); // Remove the parent element containing the button
        }
    }
});






// document.addEventListener("click", function(evt) {
//     if (evt.target && evt.target.classList.contains("cross-btn")) {
//         var clickedCheckbox = evt.target.parentElement.querySelector("input[type='checkbox']");
//         if (clickedCheckbox) {
//             var currentID = clickedCheckbox.id || "No ID!";
//             console.log(currentID);
//         }
//     }
// });