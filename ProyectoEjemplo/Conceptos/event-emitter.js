// Nodejs tiene un modulo "events"ya nativo que permite 
// gestionar eventos
const { Console } = require("console")
const EventEmitter = require("events")
//creamos una clase para heredar las propiedades del 
// eventEmitter
class Payment extends EventEmitter{
    //el metodo pay va a estar emitiendo los eventos 
    pay(callback){
        console.log("Iniciando pago...")
        // this.emit nos permite emitir un evento
        this.emit("inicio")
        callback()
        
    }
}
const payment = new Payment()
//Escuchando eventos
payment.on("inicio",()=>{
    console.log("Realizando pago, espere ...")
})
payment.on("completado",()=>{
    console.log("Pago realizado ........ Gracias!")
    console.log("Finalizando pago")
 
})
payment.pay(()=>{
    return setTimeout(() => {
        // Podemos emitir eventos desde afuera
        console.log("LISTO GRACIAS POR SU PAGO") 
        payment.emit("completado")
    }, 500);
})