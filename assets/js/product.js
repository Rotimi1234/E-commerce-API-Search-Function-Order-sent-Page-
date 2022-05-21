const productList = document.getElementById("productList");
const searchBar = document.getElementById("searchBar");
const jewellery =document.getElementById("jewellery")
const accessories =document.getElementById("accessories")
const dresses =document.getElementById("dresses")
const footwear =document.getElementById("footwear")
const all =document.getElementById("all")
let theProducts = [];
console.log(searchBar);



const loadProducts = async () => {
    try {
        const res = await fetch('./assets/js/json/productss.json');
        theProducts = await res.json();
        displayProducts(theProducts);
    } catch (err) {
        console.error(err);
    }
    
};



/* category filter section*/
jewellery.addEventListener('click', (e) =>{
    const searchString = "jewelery"
    
    const filteredProduct = theProducts.filter((product) =>{
        return (
            product.category.toLowerCase().includes(searchString)
        )
    })
    displayProducts(filteredProduct)
})

accessories.addEventListener('click', (e) =>{
    const searchString = "electronic"
    
    const filteredProduct = theProducts.filter((product) =>{
        return (
            product.category.toLowerCase().includes(searchString)
        )
    })
    displayProducts(filteredProduct)
})

all.addEventListener('click', (e) =>{
    const searchString = "men's clothing" || "wommen's clothing" || "jewelery" || "electronic"
    
    const filteredProduct = theProducts.filter((product) =>{
        return (
            product.category.toLowerCase().includes(searchString)
        )
    })
    displayProducts(filteredProduct)
})

dresses.addEventListener('click', (e) =>{
    const searchString = "men's clothing" || "wommen's clothing"
    
    const filteredProduct = theProducts.filter((product) =>{
        return (
            product.category.toLowerCase().includes(searchString)
        )
    })
    displayProducts(filteredProduct)
})

footwear.addEventListener('click', (e) =>{
    const searchString = "men's clothing"
    
    const filteredProduct = theProducts.filter((product) =>{
        return (
            product.category.toLowerCase().includes(searchString)
        )
    })
    displayProducts(filteredProduct)
})

searchBar.addEventListener('keyup', (e) =>{
    const searchString = e.target.value.toLowerCase()
    
    const filteredProducts = theProducts.filter((product) =>{
        return (
            product.title.toLowerCase().includes(searchString) ||
            product.category.toLowerCase().includes(searchString)
        )
    })
    displayProducts(filteredProducts)
})


const displayProducts = (items) => {
    const htmlString = items.map(
        (product) => {
        return `
                    <article class="products__card produc_card">
                    <span class="featured__tag">Id - ${product.id}</span>
                        <img src="${product.image}" alt="" class="products__img">
                    <div class="hide_content">
                        <h3 class="products__title">${product.title}</h3>
                        <p class="products__title">${product.description}</p>
                        <span class="products__price">${product.price}</span>
                    </div>
                        <button class="products__button" >
                            <a href="confirm.html" style="text-decoration: none; color: #fff;" ><i class='bx bx-shopping-bag' ></i></a>
                        </button>
                    </article>
        `;
    })
    .join('');
    productList.innerHTML = htmlString;
}
loadProducts();





