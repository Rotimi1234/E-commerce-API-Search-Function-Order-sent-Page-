const commentList = document.getElementById("commentList");

const loadProducts = async () => {
    try {
        const res = await fetch('./assets/js/json/comment.json');
        let theProducts = await res.json();
        displayProducts(theProducts);
    } catch (err) {
        console.error(err);
    }
};

const displayProducts = (items) => {
    const htmlString = items.map(
        (comment) => {
        return `
        <div class="testimonial__card swiper-slide">
        <div class="testimonial__quote">
            <i class='bx bxs-quote-alt-left' ></i>
        </div>
        <p class="testimonial__description">${comment.body}
        </p>
        <h3 class="testimonial__date">March 27. 2021</h3>

        <div class="testimonial__perfil">
            <img src="assets/img/testimonial2.jpg" alt="" class="testimonial__perfil-img">

            <div class="testimonial__perfil-data">
                <span class="testimonial__perfil-name">${comment.name}</span>
                <span class="testimonial__perfil-detail">${comment.email}</span>
            </div>
        </div>
        </div>
        `;
    })
    .join('');
    commentList.innerHTML = htmlString;
}
loadProducts();

