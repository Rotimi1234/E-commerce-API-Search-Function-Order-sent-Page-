const featureList = document.getElementById("featureList");

const loadFeatures = async () => {
    try {
        const resp = await fetch('./assets/js/json/featured.json');
        let theFeature = await resp.json();
        displayFeatures(theFeature);
    } catch (err) {
        console.error(err);
    }
}

const displayFeatures = (item) => {
    const htmlStrings = item.map(
        (feature) => {
        return `
                 <article class="featured__card">
                        <span class="featured__tag">Sale</span>

                        <img src="${feature.url}" alt="" class="featured__img">

                        <div class="featured__data">
                            <h3 class="featured__title">${feature.title}</h3>
                            <span class="featured__price">${feature.price}</span>
                        </div>

                        <a href="product.html" style="text-decoration: none; color: #fff;" ><button class="button featured__button">ADD TO CART</button></a>
                    </article>
        `;
    })
    .join('');
    featureList.innerHTML = htmlStrings;
}
loadFeatures();

