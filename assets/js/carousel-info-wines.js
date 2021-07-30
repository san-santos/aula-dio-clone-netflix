// Carrocel informações Vinhos

function openPage(wines, container) {
    let indice = wines;
    let target = container;
    let url = '../assets/content/wine' + indice + '.html';
    console.log(url);

    let xml = new XMLHttpRequest();

    xml.onreadystatechange = function () {

        if (xml.readyState == 4 && xml.status == 200) {

            document.getElementById(target).innerHTML = xml.responseText;
        }
    }

    xml.open("GET", url, true);
    xml.send();

};