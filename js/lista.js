var data = [];

function loadList(e){
    if(e.keyCode == 13){
        let lista = document.getElementById("lista");
        let campo = document.getElementById("campo");
        
        let array = campo.value.split(",");
        if(array.length >= 2){
            data = data.concat(array);     
        }else{
            data.push(campo.value);
        }


        campo.value = "";
        data.sort();

        lista.innerHTML = "";
        data.forEach((item)=>addLi(lista, item));

        
    }
}

function addLi(list, value ){
    list.innerHTML += "<li onclick='clickItem(\""
            +value+"\")'>"
            +value+"</li>";
}

function clickItem(txt){
    alert(txt);
}