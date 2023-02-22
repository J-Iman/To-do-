// Take the HTML elements into a varibale 

var inputData = document.getElementById("inputfield")
var addButton = document.getElementById("addbutton")
var todoContainer = document.getElementById("todocontainer")


addButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputData.value;
    paragraph.classList.add("applyonparagraph")
    todoContainer.appendChild(paragraph)

    //single click on P tag action
    paragraph.addEventListener('click', function(){
        paragraph.style.backgroundColor = 'white'
    })

    // Double click on P tag Action 
    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph)
    })
})