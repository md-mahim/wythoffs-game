let body = document.querySelector('body')
let rulesBtn = document.querySelector('.rules-btn')
let rules = document.querySelector('.rules')
let rulesClose = document.querySelector('.rules-close')
let refresh = document.querySelector('.refresh-btn')
let you = document.querySelector('.you')
let computer = document.querySelector('.computer')
let ballCon = document.querySelector('.ball-outer')
let ball = document.getElementsByClassName('ball')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let result = document.querySelector('.result')
let playAgain = document.querySelector('.play-again')
let close = document.querySelector('.close')
let carrierInside = document.querySelector('.carrier-inside')
let ballOuter = document.querySelector('.ball-outer')
let container = document.querySelector('.container')



if (window.matchMedia("(max-width: 575px)").matches) {
    let carEdge = document.querySelector('.carrier-edge').clientWidth;
    let carInside = document.querySelector('.carrier-inside')
    let widthCarIns = carEdge - 20
    
    carInside.style.width = widthCarIns + 'px';
    result.style.width = container.clientWidth - 90 + 'px'

    console.log(container.clientWidth - 80)

}


let ballLeft = carrierInside.clientWidth - ballOuter.clientWidth
let ballTop = carrierInside.clientHeight - ballOuter.clientHeight

rulesBtn.addEventListener('click', function(){
    rules.style.transform = 'scaleY(1)'
})
rulesClose.addEventListener('click', function(){
    rules.style.transform = 'scaleY(0)'
})

refresh.addEventListener('click', function(){
    location.reload()
})

for(let i=0; i<ball.length; i++){
    let rndm = Math.floor(Math.random()*ballLeft)
    let rndm2 = Math.floor(Math.random()*ballTop)
    ball[i].style.top = rndm2 + 'px'
    ball[i].style.left = rndm + 'px'
}


async function removeBall(btnValue){
    btn1.disabled = true
    btn2.disabled = true
    btn3.disabled = true
    btn1.style.opacity = '0.5'
    btn2.style.opacity = '0.5'
    btn3.style.opacity = '0.5'
    let btnVal = btnValue.value - 1
    for(i=btnVal; i>=0; i--){
        ball[i].style.setProperty('--ball-background', '#196C0F')
        ball[i].style.setProperty('--ball-background-before', '#3FD155')
        await new Promise(r => setTimeout(r, 500))
        ballCon.removeChild(ball[i])
    }

    await new Promise(r => setTimeout(r, 500))

    you.style.opacity = '0.2'
    you.style.transform = 'scale(1)'
    computer.style.opacity = '1'
    computer.style.transform = 'scale(1.1)'


    await new Promise(r => setTimeout(r, 2000))

    let compRem = 3 - btnValue.value
    for(i=compRem; i>=0; i--){
        ball[i].style.setProperty('--ball-background', '#651010')
        ball[i].style.setProperty('--ball-background-before', '#8F3128')
        ball[i].style.background = 'red'
        await new Promise(r => setTimeout(r, 500))
        ballCon.removeChild(ball[i])
    }

    await new Promise(r => setTimeout(r, 500))

    you.style.opacity = '1'
    you.style.transform = 'scale(1.1)'
    computer.style.opacity = '0.2'
    computer.style.transform = 'scale(1)'
    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
    btn1.style.opacity = '1'
    btn2.style.opacity = '1'
    btn3.style.opacity = '1'



    if(ballCon.childElementCount == 0){
        result.style.display = 'block'
        let resPosTop = (window.innerHeight - result.clientHeight) / 2
        let resPosLeft = (window.innerWidth - result.clientWidth) / 2
        result.style.top = resPosTop + "px"
        result.style.left = resPosLeft + "px"
        you.style.opacity = '0.2'
        you.style.transform = 'scale(1)'
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn1.style.opacity = '0.5'
        btn2.style.opacity = '0.5'
        btn3.style.opacity = '0.5'
    }

}

btn1.addEventListener('click', function(){
    removeBall(this)
})

btn2.addEventListener('click', function(){
    removeBall(this)
})

btn3.addEventListener('click', function(){
    removeBall(this)
})


close.addEventListener('click', function(){
    result.style.display = 'none'
})

playAgain.addEventListener('click', function(){
    location.reload()
})






