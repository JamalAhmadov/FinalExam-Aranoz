let bsk__container = document.getElementById('bsk__container')

const renderProducts = () => {
    bsk__container.innerHTML = ""
    let cartData = JSON.parse(localStorage.getItem('cart'))
    console.log(cartData);
    cartData.forEach((item, id) => {
        let box__item = document.createElement('div')
        box__item.className = "box__item"
        box__item.innerHTML = `
        
        <div>
        <img src="${item.image}" alt="Quartz belt watch">
        </div>
        <h4>${item.name}</h4>
        <span>$ ${item.price}</span>
        <p> count: ${item.count}</p>

        <button onclick="removeFromBasket(${id})">Remove</button>
        `;
        bsk__container.append(box__item);
    });
}

renderProducts()


const removeFromBasket = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.splice(id, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    renderProducts()

}