document.addEventListener("DOMContentLoaded", () => {
  let formTaskBar = document.querySelector('#create_task_form')
  formTaskBar.addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo(e.target.new_task_description.value)
    formTaskBar.reset()

  },
  )

});


function addToDo(toDo) {
  //create unordered list
  let ul = document.createElement('ul')
  let textInsert = document.createElement('text')
  textInsert.textContent = `${toDo} `
  ul.appendChild(textInsert)

  //create btn
  let btn = document.createElement('button')
  btn.addEventListener('click', removeItem)
  btn.textContent = 'X'

  //create selector
  let colorSelection = colorSelector()

  ul.appendChild(colorSelection)
  //add btn to ul
  ul.appendChild(btn)

  let toDoList = document.querySelector('#tasks');

  return toDoList.appendChild(ul)
}



function colorSelector() {
  let colorSelection = document.createElement('select')
  colorSelection.addEventListener('click', changeColor)

  let optionHighest = document.createElement('option')
  let optionMedium = document.createElement('option')
  let optionLowest = document.createElement('option')
  let optionSelect = document.createElement('option')

  optionHighest.textContent = 'Highest'
  optionMedium.textContent = 'Medium'
  optionLowest.textContent = 'Lowest'
  optionSelect.textContent = "Select Priority"

  colorSelection.appendChild(optionSelect)
  colorSelection.appendChild(optionHighest)
  colorSelection.appendChild(optionMedium)
  colorSelection.appendChild(optionLowest)

  return colorSelection;

}



function removeItem(e) {
  e.target.parentNode.remove()

}

function changeColor(e) {
  let colorChangeValue = e.target.value
  let getUpToRightNode = e.target.parentNode

  if ('Highest' === colorChangeValue) {
    getUpToRightNode.style.color = 'red'
  } else if (colorChangeValue === 'Medium') {
    getUpToRightNode.style.color = 'orange'
  } else if (colorChangeValue === 'Lowest') {
    getUpToRightNode.style.color = 'green'
  } else {
    getUpToRightNode.style.color = 'black'
  }
  return colorChangeValue
}

