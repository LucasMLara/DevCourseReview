function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let decemberDays = document.getElementById('days')


for(let day of decemberDaysList) {

  let currentDay = document.createElement('li')
  currentDay.classList.add('day')
  currentDay.innerText = day

  let isHoliday = day === 24 ||  day === 25 || day ===31
  let isFriday = day === 4 ||  day === 11 || day === 18 || day === 25

  if(isHoliday) {
    currentDay.classList.add('holiday')
  }

  if(isFriday) {
    currentDay.classList.add('friday')
  }

  decemberDays.appendChild(currentDay)

}

// Exercicio 2

let btnContainer = document.querySelector('.buttons-container')

function isHolidayButton(buttonName) {
  let holiDayButton = document.createElement('button')
  holiDayButton.setAttribute('id', 'btn-holiday')
  holiDayButton.innerText = buttonName
  btnContainer.appendChild(holiDayButton)
}

isHolidayButton('Feriados')

// Exercício 3

function changeColor() {
  
  let holidays = document.querySelectorAll('.holiday')
  let holidaybtn = document.getElementById('btn-holiday')
  
  holidaybtn.addEventListener('click', () => {
    for (let holiday of holidays) {
      
      if(holiday.style.background === 'white'){
        holiday.style.background = 'rgb(238,238,238)'
      } else {
        holiday.style.background = 'white'
      }
    }
  })
}

changeColor()

// Exercício 4

function isFridayButton(buttonName) {
  let fridayBtn = document.createElement('button')
  fridayBtn.setAttribute('id', 'btn-friday')
  fridayBtn.innerText = buttonName
  btnContainer.appendChild(fridayBtn)
}

isFridayButton('Sexta-Feira')

// Exercício 5

function changeFridayText() {
  
  
  let fridays = document.querySelectorAll('.friday')
  let friDaybtn = document.getElementById('btn-friday')
  
  friDaybtn.addEventListener('click', () => {
    let day = 4    
    for (let holiday of fridays) {
      if(holiday.innerText !== 'Sextou o/'){
        holiday.innerText = 'Sextou o/'
      } else {
        holiday.innerText = day
      }
      day+=7
    }
  })
}

changeFridayText()

// Exercicio 6

let allDays = document.querySelectorAll('.day')
function zoom(evento, escala) {
  for(let day of allDays)
  day.addEventListener(evento, () => {
    day.style.scale = escala
  })
}

zoom('mouseover','1.5')
zoom('mouseout','1')


// function zoomInDay() {
//   for(let day of allDays)
//   day.addEventListener('mouseover', () => {
//     day.style.scale = '1.5'
//   })
// }

// zoomInDay()

// function zoomOutDay() {
//   for(let day of allDays)
//   day.addEventListener('mouseout', () => {
//     day.style.scale = '1'
//   })
// }

// zoomOutDay()



// Exercício 7
const tasks = document.querySelector('.my-tasks')

function addTask(task) {

  let newTask = document.createElement('span')
  newTask.innerText = task
  tasks.appendChild(newTask)
}

addTask('Estudar')

// Exercício 8


function addTaskColor(color) {
  let backgroundTask = document.createElement('div')
  backgroundTask.classList.add('task')
  backgroundTask.style.backgroundColor = color
  tasks.appendChild(backgroundTask)
}

addTaskColor('red')

// Exercício 9

function selectTask() {

  let selectedTask = document.getElementsByClassName('task selected')
  let myTask = document.querySelector('.task')

  myTask.addEventListener('click', (e) => {
    if(selectedTask.length === 0) {
      e.target.className = 'task selected';
    } else {
      e.target.className = 'task';
    }
  })
}

selectTask()

// Exercício 10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor; // Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
      event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';  // Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
    }
  });
}

setDayColor();
