function Vehiculos(marca,modelo,color,anioFabricacion,kmRecorridos,precio,cuotas,patente,vendido){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anioFabricacion;
    this.km = kmRecorridos;
    this.precio = precio;
    this.cuotas = cuotas;
    this.patente = patente;
    this.vendido = vendido;
}

let ford = new Vehiculos('Ford','Ranger','Rojo',2022,0,8000000,84,'AA888BB',false);