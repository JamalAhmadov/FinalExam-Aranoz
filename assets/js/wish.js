let bsk__container = document.getElementById('wish__container')

const renderProducts = () => {
    bsk__container.innerHTML = ""
    let wishData = JSON.parse(localStorage.getItem('wish'))
    wishData.forEach((item, id) => {
        let box__item = document.createElement('div')
        box__item.className = "box__item"
        box__item.innerHTML = `
        
        <div>
        <img src="${item.image}" alt="Quartz belt watch">
        </div>
        <h4>${item.name}</h4>
        <span>$ ${item.price}</span>
        <i  onclick="removeFromWish(${id})" class="fa-solid fa-heart"></i>
        `;
        bsk__container.append(box__item);
    });
}

renderProducts()


const removeFromWish= (id) => {
    let wish = JSON.parse(localStorage.getItem('wish'))
    wish.splice(id, 1)
    localStorage.setItem("wish", JSON.stringify(wish))
    renderProducts()

}