// PopUp Vídeo

function clickOpenPopUp(open) {
    open.addEventListener('click', () => {
        const event = document.querySelector('.popup');
        event.style.display = "block";
    })
}

function closePopUp(close) {
    close.addEventListener('click', () => {
        document.querySelector('.popup').style.display = "none";
    })
}


// Texto Mais Informações Home

function clickOpenText(open) {
    open.addEventListener('click', () => {
        document.querySelector('.text-box-info').style.display = "block";
    })
}

function closeTextInfo(close) {
    close.addEventListener('click', () => {
        document.querySelector('.text-box-info').style.display = "none";
    })
}

// Fecha Vídeo e Informações da Home em Scroll Page

function closeRoll() {
    addEventListener('scroll', () => {
        const eventOne = document.querySelector('#closeone')
        eventOne.style.display = "none";
        const eventTwo = document.querySelector('#closetwo')
        eventTwo.style.display = "none";
    })
}

// Formulário

const sendMsn = document.querySelector("#send-msn");

function validacaoForm(form) {
    if (form.nome.value == "" || form.tel.value == "" || form.email.value == "") {
        form.nome.style.border = "solid 4px rgb(255,0,0,0.5)";
        form.tel.style.border = "solid 4px rgb(255,0,0,0.5)";
        form.email.style.border = "solid 4px rgb(255,0,0,0.5)";
        sendMsn.innerHTML = '<b style="color: white";>É necessário preencher os campos que estão em vermelho!</b>'
        return false
    } else {
        form.nome.style.border = "";
        form.tel.style.border = "";
        form.email.style.border = "";
        sendMsn.innerHTML = '<b style="color: white";>Mensagem enviada com sucesso!</b>'
        setTimeout(() => {
            sendMsn.innerHTML = ''
        }, 5000);
        return true
    }
}

function formClean() {
    form.nome.style.border = "";
    form.tel.style.border = "";
    form.email.style.border = "";
    sendMsn.innerHTML = '';
    console.log(window.scrollbars)
    return true
}

const form = document.forms[0];
form.addEventListener('submit', event => {
    event.preventDefault();
});

function onlynumber(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
};