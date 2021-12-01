let totalSliders = document.querySelectorAll('#galery .slider-item').length
let currentSlider = 0

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSliders})`

function goPrev(){
    currentSlider--

    if(currentSlider < 0){
        currentSlider  = totalSliders - 1
    }

    updateMargin()
}
function goNext(){
    currentSlider++

    if(currentSlider > 3){
        currentSlider = 0
    }
    updateMargin()
}

function updateMargin(){
    let larguraSliderItem = document.querySelector('.slider-item').clientWidth
    let newWidth = (currentSlider * larguraSliderItem)
    document.querySelector('.slider-width').style.marginLeft  = `-${newWidth}px`
}

setInterval(goNext, 4000)

let documentsTotalSliders = document.querySelectorAll('.depoiments .slider-item').length
let aux = 0

document.querySelector('.depoiments-slider-width').style.width = `calc(100vw * ${documentsTotalSliders})`


function depoimentsGoPrev(){
    aux--
    if(aux < 0){
        aux = documentsTotalSliders - 1
    }
    upDet()
}
function depoimentsGoNext(){
    aux++
    if(aux > (documentsTotalSliders - 1)){
        aux=0
    }
    upDet()
}
function upDet(){
    let larguraSliderItem = document.querySelector('.depoiments .slider-item').clientWidth
    let newMargin = (aux * larguraSliderItem)

    document.querySelector('.depoiments-slider-width').style.marginLeft =  `-${newMargin}px`
}

setInterval(depoimentsGoNext, 5000)