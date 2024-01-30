class ProductManager {
    constructor() {
        this.products = [];
        this.idCounter = 0;// agrego variable , cada vez q se genera un id se incrementa en 1 , evitando duplicar
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!this.products.map(product => product.code).includes(code)) {// verifica q code no este ya en el array de objetos
                                                                        // si es asi se genera un nuevo objeto producto
            const newProduct = new Product(
                this.generarId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            );
            this.products.push(newProduct);//se agrega el producto creado al array products
        } else {
            console.log("El código " + code + " está repetido");// si no se verifica la primera comprovacion devuelve un error

        }
    }

    generarId() {
        this.idCounter++;
        return this.idCounter;
    }

    getProducts() {// para obtener los productos
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);//Si existe ID se guarda en variabe product
        if (product) {
            return product;
        } else {
            return "Not Found";// si no se encuetra retorna error 
        }
    }
}

class Product {// Creo la clase  product (se contendra dentro de products)
    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const productManager = new ProductManager();// defino productManager

//TESTING
console.log("1🚀 Productos: ", productManager.getProducts());
productManager.addProduct("producto prueba 1", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
productManager.addProduct("producto prueba 4", "Este es un producto de prueba", 200, "Sin imagen", "abc124", 25);
console.log("2🚀 Productos: ", productManager.getProducts());
productManager.addProduct("producto prueba 2", "Este es un producto de prueba", 200, "Sin imagen", "abc124", 25);
productManager.addProduct("producto prueba 3", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
console.log("Resultado de búsqueda por ID:", productManager.getProductById(1));
console.log("Resultado de búsqueda por ID:", productManager.getProductById(3));