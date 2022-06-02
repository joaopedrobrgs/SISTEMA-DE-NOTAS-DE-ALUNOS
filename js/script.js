let inputName = document.getElementById("inputName");
let inputP1 = document.getElementById("inputP1");
let inputP2 = document.getElementById("inputP2");
let inputT = document.getElementById("inputT");
let register = document.getElementById("register");
let data = document.getElementById("data");

//EVENT REGISTER STUDENT

register.addEventListener("click", registerStudent);

function registerStudent(){

    let name = inputName.value;
    let p1 = inputP1.value;
    let p2 = inputP2.value;
    let t = inputT.value;
    let total = parseFloat(p1) + parseFloat(p2) + parseFloat(t);

   data.innerHTML += `<div class="dataContent"><span class="nameCategory">${name}</span><span class="otherCategories">${p1}</span><span class="otherCategories">${p2}</span><span class="otherCategories">${t}</span><span class="otherCategories">${total}</span><span class="otherCategories" style="font-weight: 700">${approbation(total)}</span><div id="eraseOneStudentContainer"><button id='eraseOneStudent' onclick='eraseStudentFunction(this)'>Apagar</button></div><hr></div>`;

   form1.reset();

}



function approbation(total) {
    if(total >= 7 && total <= 10){
        return 'Aprovado';
    }

    else if(total < 7 && total >= 0){
        return 'Reprovado';
    }

    else{
        return alert("Resultado fora dos limites (Total não está entre 0 e 10 pontos)");
    }
}

let eraseDataButton = document.getElementById("eraseDataButton");

//EVENT ERASE DATA

eraseDataButton.addEventListener("click", eraseFunction);

function eraseFunction(){
    if(confirm("Você tem certeza disso?\nClique em OK para confirmar ou em CANCEL para cancelar a ação.") == true){
        data.innerHTML = "";
        form1.reset();
    }
    else{
    }
}

// EVENT ERASE ONE STUDENT

function eraseStudentFunction(e){
    e.parentElement.parentElement.innerHTML = "";
}