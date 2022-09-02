let autos = require("./autos");
let personas = require('./personas')

const concesionaria = {
  autos: autos,
  personas:personas,

  buscarPatente: function (patente) {
    let encontrado = this.autos.find((auto) => auto.patente === patente);
    if (encontrado == undefined) return "No encontrado";
    else return encontrado;
  },
  buscarAuto: function (patente) {
    let encontrado = this.autos.find((auto) => auto.patente === patente);
    if (encontrado == undefined) return null;
    else return encontrado;
  },
  venderAuto: function (patente) {
    let vender = this.buscarAuto(patente);
    vender.vendido = true;
  },
  autosParaLaVenta: function () {
    const sinVender = this.autos.filter((auto) => auto.vendido == false);
    return sinVender;
  },
  autosNuevos: function () {
    let autosCeroKm = [];
    this.autosParaLaVenta().forEach((auto) => {
      if (auto.km < 100) autosCeroKm.push(auto);
    });
    return autosCeroKm;
  },
  listaDeVentas: function () {
    let autosVendidos = [];
    const filtroAutos = this.autos.filter((auto) => auto.vendido == true);
    filtroAutos.forEach((auto) => {
      autosVendidos.push(auto.precio);
    });
    return autosVendidos;
  },
  totalDeVentas: function () {
    let total = this.listaDeVentas().reduce(function (acumulador, auto) {
      return acumulador + auto;
    }, 0);
    return total;
  },
  puedeComprar: function (autoDeseado, comprador) {
    let cliente = this.personas.find((persona) => persona.nombre === comprador);
    let autoComprar = this.autos.find((auto) => auto.marca === autoDeseado || auto.modelo === autoDeseado);

    let cuota = autoComprar.precio / autoComprar.cuotas;
    if (
      cliente.capacidadDePagoTotal > autoComprar.precio &&
      cliente.capacidadDePagoEnCuotas > cuota
    ) {
      return true;
    } else {
      return false;
    }
  },
  autosQuePuedeComprar: function (comprador) {
    let autosComprables = [];
    let catalogoAutos = this.autosParaLaVenta();
    catalogoAutos.forEach((auto) => {
      let validar = this.puedeComprar(auto.marca, comprador);
      if (validar == true) autosComprables.push(auto);
    });
    if (autosComprables.length > 0) return autosComprables;
    else return `${comprador}, no puedes comprar ningún auto.`;
  },
};

/* console.log(concesionaria.buscarPatente("APL123")); */
/* console.log(concesionaria.buscarAuto("APL123")); */
/* concesionaria.venderAuto("JJK116"); */
/* concesionaria.venderAuto("APL123"); */
/* console.log(concesionaria.autosParaLaVenta()); */
/* console.log(concesionaria.autosNuevos()); */
/* console.log(concesionaria.listaDeVentas()); */
/* console.log(concesionaria.totalDeVentas()); */
/* console.log(concesionaria.totalDeVentas()); */
/* console.log(concesionaria.puedeComprar('Ford','Juan')) */
/* console.log(concesionaria.puedeComprar('Ford','Nahuel')) */
/* console.log(concesionaria.autosQuePuedeComprar("Juan")); */
/* console.log(concesionaria.autosQuePuedeComprar("Melina")); */
/* console.log(concesionaria.autosQuePuedeComprar("Nahuel")); */
/* console.log(concesionaria.autosQuePuedeComprar("Luis")); */