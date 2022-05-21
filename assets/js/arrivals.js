const arrivalList = document.getElementById("arrivalList");

const loadArrival = async () => {
    try {
        const arrive = await fetch('./assets/js/json/product.json');
        let theArrive = await arrive.json();
        displayArrive(theArrive);
    } catch (err) {
        console.error(err);
    }
}

const displayArrive = (i) => {
    const htmlArrive = i.map(
        (arr) => {
        return `
                            <article class="new__card swiper-slide">
                                <span class="new__tag">New</span>
        
                                <img src="${arr.url}" alt="" class="new__img">
        
                                <div class="new__data">
                                    <h3 class="new__title">${arr.title}</h3>
                                    <span class="new__price">${arr.price}</span>
                                </div>
        
                                <a href="product.html" style="text-decoration: none; color: #fff;" ><button class="button new__button">Buy Now</button></a>
                            </article>
        `;
    })
    .join('');
    arrivalList.innerHTML = htmlArrive;
}
loadArrival()