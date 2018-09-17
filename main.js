let screen = document.querySelector('.screen');

let workTime = 15;
let breakTime = 5 ;
let timeLeft = workTime
let interval = null;
document.querySelector('#start-btn').addEventListener('click',startTimer);
document.querySelector('#stop-btn').addEventListener('click',stopTimer);
let typeScreen = document.querySelector('.type');
typeScreen.textContent = 'work';

updateScreen();


function updateScreen()
{
    let mm = Math.floor(timeLeft / 60)
    let ss = timeLeft % 60
    screen.textContent = ('00'+mm).slice(-2) + ':' + ('00'+ss).slice(-2)
}


function decrementTimer()
{
    timeLeft -= 1;
    if (timeLeft == 0)
    {
        stopTimer();
        let type = typeScreen.textContent;
        typeScreen.textContent = (type == 'work')? 'break' : 'work';
        setTimer( (type == 'work')? breakTime : workTime  );
        startTimer()
        typeScreen.classList.toggle('break');
    }
}

function setTimer(secs)
{
    timeLeft  = secs;
}

function startTimer()
{
    if (interval == null)
    {
        interval = setInterval( () => {decrementTimer(); updateScreen()} , 1000)
    }
}

function stopTimer()
{
    if (interval != null)
    {
        clearInterval(interval);
        interval = null;
    }
}