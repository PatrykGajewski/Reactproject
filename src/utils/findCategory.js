export default function findVegetablesGroup(products,category){
    return products.filter(product=>product.category === category)
}