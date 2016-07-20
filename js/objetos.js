var data = [];

function saveUsr(){
    var nombre = document.getElementById("nombre");
    var cedula = document.getElementById("cedula");
    var celular = document.getElementById("celular");
    var usr = {nombre: nombre.value
        , cedula: cedula.value
        , celular: celular.value};
    data.push(usr);   
    data.sort(function(a, b){
        return a.cedula - b.cedula;
    });
    nombre.value = "";
    cedula.value = "";
    celular.value = "";
    loadList();
}

function loadList(){
    var list = document.getElementById("lista");
    list.innerHTML = "";
    for(i=0;i<data.length;i++){
        var usr = data[i];
        list.innerHTML += "<h1>"+usr.nombre+"</h1>"
        +"<p><b>Cedula:</b>"+usr.cedula+"</p>"
        +"<p><b>Celular:</b>"+usr.celular+"</p>"
        +"<button onclick='deleteUsr("+i+")'>borrar</button>"
        +"<hr>";

    }
}

function deleteUsr(pos){
    data.splice(pos,1);
    loadList();
}






function testObj(){
    let test = document.getElementById("test");
    var obj = {};
    obj.nombre = "Dario";
    obj.cedula = 123;
    obj.pastuso = true;
    obj.fechaNacimiento = new Date();
    obj.carros = [ {placa:"avb105", marca:"BMW"}
        ,{placa:"aop186", marca:"ferrari"} 
        ];

    delete obj.cedula;  
    test.innerHTML = JSON.stringify(obj);
}