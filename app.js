/*   🟢 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.


Output:

objeto.encender();-------------------- auto encendido

objeto.apadar();---------------------- El auto se apagó */

/*let auto = {
    color: "Negro",
    marca: "Toyota",
    modelo: "Corolla",
    encender : function () {
        return "auto encendido"
    },
    apagar : function () {
        return "El auto se apagó"
    }

}*/




/*  🟢🟡 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

/*
function cuenta (titular, saldo = 0) {
    this.titular = titular,
    this.saldo = saldo,
    ingresar : function(ingreso) {
        return this.saldo += ingreso;
    },
    extraer : function(extraccion) {
        return this.saldo -= extraccion;
    },
    informar : function() {
        return console.log(this.saldo);
    },
}

let cuentaAlex = new cuenta("Alex")
console.log(cuentaAlex)
*/

/*
let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar : function (ingreso) {
        return cuenta.saldo += ingreso;
    },
    extraer : function (extraccion) {
        return cuenta.saldo -= extraccion;
    },
    informar : function () {
        return cuenta.saldo
    }
}
*/




/*  🟢 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área. */

/*class Rectangulo {
    constructor (alto, ancho) {
        this.alto = alto
        this.ancho = ancho
    }
    nuevosValores (alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    perimetro () {
        let perimetro = this.ancho*this.alto;
        return perimetro
    }
}

const rectangulito = new Rectangulo ( 10 , 20 );
console.log (rectangulito);
console.log (rectangulito.perimetro());
*/

/*  🟢🟡 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */

/*
class Producto {
    constructor (codigo,nombre,precio) {
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }
    datos () {
        console.log(`el producto ${this.nombre} tiene el valor de $ ${this.precio} y su codigo es ${this.codigo}`);
    }
}

let arroz = new Producto (1010 , "Arroz" , 150 );
let atun = new Producto (2020 , "Atun" , 300 );
let galleta = new Producto (3030 , "Galleta" , 120 );

let stock = [ arroz , atun , galleta]

console.log(stock)

for (const product of stock) {
    product.datos();
}
*/



/*   🟢🟡🔴 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

# ver imagen en el enunciado
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

/*
class Generacion {
    constructor (generacion , marcoTemporalInicio , marcoTemporalFinal, poblacion, circunstanciaHistorica, rasgoCaracteristico) {
        this.generacion = generacion
        this.marcoTemporalInicio = marcoTemporalInicio
        this.marcoTemporalFinal = marcoTemporalFinal 
        this.poblacion = poblacion 
        this.circunstanciaHistorica = circunstanciaHistorica 
        this.rasgoCaracteristico = rasgoCaracteristico
    }
}
const generacion1 = new Generacion ("generacion Z",1994, 2010, 7800000, "expansion masiva de internet",  "irreverencia")

const generacion2 = new Generacion ("generacion Y",1981, 1993, 7200000,  "inicio de la digitalizacion", "Frustracion")

const generacion3 = new Generacion ( "generacion X", 1969, 1980, 9300000, "Crisis del 73 y transicion española" ,  "Obsesion porel exito")

const generacion4 = new Generacion ( "Baby Boom", 1949, 1968, 12200000, "Paz y explosion demografica", "Ambicion")

const generacion5 = new Generacion ("Silent Generation", 1930, 1948, 6300000, "Conflictos belicos" , "Austeridad")

const generaciones = [generacion1, generacion2, generacion3, generacion4, generacion5]


class Persona {
    constructor (nombre, edad, sexo, peso, altura, anioDeNacimiento, dni=0) {
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
        this.anioDeNacimiento = anioDeNacimiento 
    }
    // como hacer un metodo de un objeto para crear nuevas propiedades del mismo objeto  
    aniadir (propiedad,valor) {
        this.propiedad = valor;        
    }
    
    mostrarGeneracion () {
        for (const elemento of generaciones) {
            if (this.anioDeNacimiento >= elemento.marcoTemporalInicio && this.anioDeNacimiento < elemento.marcoTemporalFinal) {
                console.log(`${this.nombre} pertenece a la generacion ${elemento.generacion} y el razgo caracteristico de dicha generacion es: ${elemento.rasgoCaracteristico}`)
            }
            
        }
    }
    esMayorDeEdad () {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else{
            console.log(`${this.nombre} no es mayor de edad`);
        }
    }
    // aprender a hacer con getter porque de este modo no funciona, tengo que cambiar Persona por el nombre del objeto que quiera mostrar
    mostrarDatos () {
        for (const prop in Persona) {
            console.log(`${prop} : ${Persona[prop]}`)            
        }
    }
    // aprender para hacer el metodo de abajo con un setter
    generaDNI () {
        this.dni = Math.floor(Math.random()*100000000 + 1);
        
    }
}

const maurice = new Persona ("mauricio", 28, "M", 72, 180, 1995,)

*/


/*  🟢🟡🔴 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */


class Libro {
    constructor ( isbn, titulo = "", autor , numeroDePaginas = 0 ){
        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        this.numeroDePaginas = numeroDePaginas
    }

    set nuevoIsbn (valor) {
        this.isbn = valor;
    }
    set nuevoTitulo (valor) {
        this.titulo = valor;
    }
    set nuevoAutor (valor) {
        this.autor = valor;
    }
    set nuevoNumeroDePag (valor) {
        this.numeroDePaginas = valor;
    }

    get devolverIsbn () {
        return this.isbn ;
    }
    get devolverTitulo () {
        return this.titulo ;
    }
    get devolverAutor () {
        return this.autor ;
    }
    get devolverNumeroDePag () {
        return this.numeroDePaginas ;
    } 

    mostrarLibro () {
        console.log (`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numeroDePaginas}`);
    }
}

const libro1 = new Libro ();
libro1.nuevoAutor = "Rolon Gabriel";
libro1.nuevoIsbn = 1234;
libro1.nuevoTitulo = "PalabrasCruzadas";
libro1.nuevoNumeroDePag = 350;

const libro2 = new Libro ();
//libro2.nuevoAutor = "Gabriel G. Marquez";
//libro2.nuevoIsbn = 4567;
libro2.nuevoTitulo = "Cien años de soledad";
libro2.nuevoNumeroDePag = 800;

libro1.mostrarLibro();
console.log(libro1.devolverNumeroDePag);

libro2.mostrarLibro();
console.log(libro2.devolverNumeroDePag);

(libro1.devolverNumeroDePag >libro2.devolverNumeroDePag ) ? console.log(`el libro ${libro1.devolverTitulo} tiene mas paginas`) : console.log(`el libro ${libro2.devolverTitulo} tiene mas paginas`) 


/* 🟢🟡🔴   7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.*/





/*    8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".*/





/*    9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */




/*    10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.*/
