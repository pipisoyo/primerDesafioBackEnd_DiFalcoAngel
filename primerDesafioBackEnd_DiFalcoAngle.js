/// <reference lib="es2016.array" />
//Pasar primer desafio BackEnde en JS a TS
//comento para fines didacticos(machete)
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.products = [];
        this.idCount = 0;
    }
    ProductManager.prototype.addProduct = function (// plubli indica que el el metdo es de acceso puplico puede se accedido des fuera de la clase
    title, description, price, thumbnail, code, stock) {
        if (this.products.map(function (product) { return product.code; }).includes(code)) {
            var newProduct = new Product(this.generarId(), // aqui no se 
            title, // no se espesifica
            description, // los tipos de datos
            price, // ya que asumo 
            thumbnail, // que el constructor
            code, // realizo esa verificacion
            stock // y los datos son correctos
            );
            this.products.push(newProduct); //se agrega el producto creado al array products
        }
        else {
            console.log("El código " + code + " está repetido"); // si no se verifica la primera comprovacion devuelve un error
        }
    };
    ProductManager.prototype.generarId = function () {
        this.idCount++;
        return this.idCount;
    };
    ProductManager.prototype.getProduct = function () {
        return this.products;
    };
    ProductManager.prototype.getProductById = function (id) {
        var product = this.products.find(function (product) { return product.id === id; }); //Si existe ID se guarda en variabe product
        if (product) {
            return product;
        }
        else {
            return "Not Found"; // si no se encuetra retorna error 
        }
    };
    return ProductManager;
}());
var Product = /** @class */ (function () {
    function Product(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
    return Product;
}());
var productManager = new ProductManager();
// TESTING
console.log("1🚀 Productos: ", productManager.getProduct());
productManager.addProduct("producto prueba 1", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
productManager.addProduct("producto prueba 4", "Este es un producto de prueba", 200, "Sin imagen", "abc124", 25);
console.log("2🚀 Productos: ", productManager.getProduct());
productManager.addProduct("producto prueba 2", "Este es un producto de prueba", 200, "Sin imagen", "abc124", 25);
productManager.addProduct("producto prueba 3", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
console.log("Resultado de búsqueda por ID:", productManager.getProductById(1));
console.log("Resultado de búsqueda por ID:", productManager.getProductById(3));
