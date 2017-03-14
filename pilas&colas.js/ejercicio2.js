var arregloNombres = [];

function Queue(){
  var persona = [];


  this.dataStore = arregloNombres.prototype.enqueue.call(arguments,0);

  this.enqueue = enqueue
  this.dequeue = dequeue;
  this.empty = empty;
  this.tostring = tostring;

  this.print = print;

function enqueue (valor){
  persona.push(valor);
}

function dequeue(){
  return persona.shift();
}

  function toString(){
    document.write(persona.toString());
  }

// function isEmpty(){
//   return this.dataStore.length == 0;
// }

var nombresCola = new Queue();
var arregloNombresCola = [];
arregloNombresCola.enqueue("Mimi ");
arregloNombresCola.enqueue("Les ");
arregloNombresCola.enqueue("Angie ");
arregloNombresCola.enqueue("Sue ");
arregloNombresCola.enqueue("Edith ");


var apellidoCola = new Queue();
var arregloApellidoCola = [];
arregloApellidoCola.enqueue("Arismendi");
arregloApellidoCola.enqueue("Perdom");
arregloApellidoCola.enqueue("Velazquez");
arregloApellidoCola.enqueue("Martinez");
arregloApellidoCola.enqueue("Mandujano");

for(var i = 0; i < arregloNombresCola.length + 4; i++){
  arregloNombres.push(arregloNombresCola.dequeue() + arregloApellidoCola.dequeue())
};

arregloNombres.toString();
