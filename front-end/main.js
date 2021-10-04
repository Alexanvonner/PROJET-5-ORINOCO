fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then((items) => {
for (let i = 0; i < items.length; i++) {
    displayElement(items[i]);
}
})

function displayElement(item) {
    let txt = document.querySelector(".elementMain");
    txt.innerHTML += `
    <div class="col-sm-4">
        <a href="products.html?id=${item._id}">
            <div class="card-nounours">
                <img src="${item.imageUrl}" class="nounours" alt="Image"/>
                <div class="footer-nounours">
                    <p class="name"> ${item.name}</p>
                    <p class="price"> ${item.price / 100} $ </p>
                    <button type="button" class="btn-click"> Commander </button>
                </div>
            </div>
        </a>
    </div>
    `;
}

