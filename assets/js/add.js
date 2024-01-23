let data__container = document.getElementById('data__container')

const API = "https://65745c66f941bda3f2afa6af.mockapi.io/products/"
values = []

const renderData = (arr) => {
    data__container.innerHTML = " "
    arr.forEach(item => {
        let data__box = document.createElement('tr');
        data__box.innerHTML = `
        
        <td>Id: ${item.id}</td>
        <td>İmage: <img src="${item.image}" alt=""></td>
        <td>Name: ${item.name}</td>
        <td>Price: $ ${item.price}</td>
        <td><button onclick="deleteData(${item.id})">Remove </button></td>
        

        `;
        data__container.append(data__box)
    });
}

const getData = () => {
    fetch(API)
        .then(res => res.json())
        .then((data) => {
            values = data;
            renderData(values)
        })
}

getData()

// POST 
let product__price = document.getElementById('product__price')
let product__name = document.getElementById('product__name')
let product__form = document.getElementById('product__form')



const postData = () => {
    axios.post(API, {
        name: product__name.value,
        price: product__price.value
    })
        .then(function (response) {
            console.log(response);
            getData();
            product__form.reset()
        })
        .catch(function (error) {
            console.log(error);
        });
}

product__form.addEventListener('submit', e => {
    e.preventDefault()
    postData()
})


//DELETE

const deleteData = (id) => {
    axios.delete(API + id)
        .then(response => {
            console.log('Resource deleted successfully:', response.data);
            getData()
        })
        .catch(error => {
            console.error('Error deleting resource:', error);
        });
}

//SORT 

let product__sort = document.getElementById('product__sort')

product__sort.addEventListener('change', e => {
    sortdata = [...values]
    if (e.target.value == 'az') {

        sortAz = sortdata.sort((a, b) => a.name.localeCompare(b.name))
        renderData(sortAz)

    } else if (e.target.value == 'za') {
        sortZa = sortdata.sort((a, b) => b.name.localeCompare(a.name))
        renderData(sortZa)
    }
    else {
        renderData(values)
    }
})


// CHECH MINUS PRICE

const checkPrice = () => {
    price = product__price.value;
    if (price < 0) {
        alert('Enter regular price')
        product__price.value = ""
    } 
}


// SEARCH 

let product__search = document.getElementById('product__search')


const searchData = (name) => {
    data__container.innerHTML = " "
    searched = values.filter(item => item.name.toLowerCase().includes(name))
    searched.forEach(item => {
        let data__box = document.createElement('tr');
        data__box.innerHTML = `
        
        <td>Id: ${item.id}</td>
        <td>İmage: <img src="${item.image}" alt=""></td>
        <td>Name: ${item.name}</td>
        <td>Price: $ ${item.price}</td>
        <td><button onclick="deleteData(${item.id})">Remove </button></td>
        

        `;
        data__container.append(data__box)
    });
}

product__search.addEventListener("input", e=>{
    searchData(e.target.value)
})