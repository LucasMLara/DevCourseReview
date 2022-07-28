document.getElementById('header-container').style.backgroundColor = '#00B068'
document.getElementsByTagName('body')[0].style.backgroundColor = '#F3F3F3'
document.getElementsByTagName('footer')[0].style.backgroundColor = '#003533'
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#FF9F84'
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#ECD059'
const emergencyTasksTitles = document.querySelectorAll('.emergency-tasks div h3')
const noEmergencyTasksTitles = document.querySelectorAll('.no-emergency-tasks div h3')

for (let i = 0; i < emergencyTasksTitles.length; i++) {
    emergencyTasksTitles[i].style.backgroundColor = '#A500F3'
}

for (let i = 0; i < noEmergencyTasksTitles.length; i++) {
    noEmergencyTasksTitles[i].style.backgroundColor = '#232525'
}

// #232525
// #A500F3



