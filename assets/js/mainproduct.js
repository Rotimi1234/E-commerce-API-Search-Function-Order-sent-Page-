const mainList = document.getElementById("mainList");

const loadMain = async () => {
    try {
        const respo = await fetch('./assets/js/json/mainproduct.json');
        let theMain = await respo.json();
        displayMain(theMain);
    } catch (err) {
        console.error(err);
    }
}

const displayMain = (item) => {
    const htmlMain = item.map(
        (main) => {
        return `
        <article class="products__card">
        <img src="${main.url}" alt="" class="products__img">

        <div class="hide_content">
        <h3 class="products__title">${main.title}</h3>
        <span class="products__price">${main.price}</span>
            </div>
        <button class="products__button">
           <a href="product.html" style="text-decoration: none; color: #fff;" ><i class='bx bx-shopping-bag'></i></a>
        </button>
    </article>
        `;
    })
    .join('');
    mainList.innerHTML = htmlMain;
}
loadMain();

