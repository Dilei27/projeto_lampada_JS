let turnOnOff = document.getElementById('lamp');

let lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/turnOn.png'
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/turnOff.png'
    }
}

function lampBroken() {
    lamp.src = './img/broken.png'
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

turnOnOff.addEventListener('click', lampOnOff)

lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)

// obtém o botão pelo seu ID
let button = document.getElementById("myButton");

// adiciona o evento de mouseover ao botão
button.addEventListener("mouseover", function() {
    // escolhe uma nova posição aleatória para o botão
    let newLeft = Math.random() * (window.innerWidth - button.offsetWidth);
    let newTop = Math.random() * (window.innerHeight - button.offsetHeight);

    // move o botão para a nova posição
    button.style.left = newLeft + "px";
    button.style.top = newTop + "px";
  });