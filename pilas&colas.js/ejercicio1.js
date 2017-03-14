var arregloDeNombres = [];

function Stack(){

  var persona = [];

  this.push = function(valor){
    persona.push(valor);
  };
  this.isEmpty = function(){
    return persona.length == 0;
  };

}

var nombre = new Stack();
  var arregloNombres = [];
  arregloNombres.push("Mimi ");
  arregloNombres.push("Les ");
  arregloNombres.push("Angie ");
  arregloNombres.push("Sue ");
  arregloNombres.push("Edith ");
  arregloNombres.push("Ana ");
  arregloNombres.push("Pari ");
  arregloNombres.push("Val ");

var apellido = new Stack();
  var arregloApellidos = [];
  arregloApellidos.push("Arismendi");
  arregloApellidos.push("Perdom");
  arregloApellidos.push("Velazquez");
  arregloApellidos.push("Martinez");
  arregloApellidos.push("Mandujano");
  arregloApellidos.push("Ana");
  arregloApellidos.push("Gutierrez");
  arregloApellidos.push("De Leon");

for ( var i = 0; i < arregloNombres.length + 7; i++){
  arregloDeNombres.push(arregloNombres.pop() + arregloApellidos.pop());
}

document.write(arregloDeNombres);
