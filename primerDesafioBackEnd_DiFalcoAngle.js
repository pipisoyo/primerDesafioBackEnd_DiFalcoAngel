

let products = []

class ProductManager {
    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const getProducts = () => (products)

function addProduct (title, description, price, thumbnail, code, stock){
   
    if (!products.map(product=>product.code).includes(code)){// verifica q code no este ya en el array de objetos
                                                             // si es asi se genera un nuevo objeto producto
        const newProduct = new ProductManager (

        generarId(),
        title ,
        description ,
        price ,
        thumbnail,
        code,
        stock ,
        )
     products.push(newProduct)//se agrega el producto creado al array products
    }else{
        console.log("El codigo "+ code + " esta repetido")// si no se verifica la primera comprovacion devuelve un error
}

}

function generarId(){
    let id = 0;
    if (products.length === 0){

        id = 1; // si el array esta vacio , este va a ser el primer elemento

    }else{

       id = products[products.length - 1].id + 1; // el id no se repite nunca ya q siempre se le suma 1(uno) al
                                                  //indice en donde estamos trabajando y es acumilatibo
                                                  //si el indice no existe (length=0) la funcion acumuladora no se ejecuta
    }
    return id;
}

function getProductsByID(id) {
    let product = null; 
    if (products.map(product => product.id).includes(id)) {
        product = products.find(product => product.id === id); //Si existe ID se guarda en variabe product
    }
    if (product) { // si produc no es null lo retorna
        return product;
    } else {
        return "Not Found"; // si su estado sigue siendo null(por q no hubo coincidencia en la anterior comprovacion)
                            //retorna un error
    }
}



//TESTING
console.log("1🚀 ~ getProducts:", getProducts())
addProduct ("producto prueva 1 ", "ese ess un producto de prueva", 200, "Sin imagen", "abc123", 25)
addProduct ("producto prueva 4", "ese ess un producto de prueva", 200, "Sin imagen", "abc124", 25)
console.log("2🚀 ~ getProducts:", getProducts())
addProduct ("producto prueva 2", "ese ess un producto de prueva", 200, "Sin imagen", "abc124", 25)
addProduct ("producto prueva 3", "ese ess un producto de prueva", 200, "Sin imagen", "abc123", 25)
console.log("Resultado de busqueda por ID : ",getProductsByID(1))
console.log("Resultado de busqueda por ID : ",getProductsByID(3))

