const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonApplyDiscount = document.querySelector('.apply-discount');
const buttonSumTotal = document.querySelector('.sum-total');
const buttonFilterVegan = document.querySelector('.filter-vegan');

function formatCurrency(value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
}

function showAll(productsArray) {
    let myLi = '';

    productsArray.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.src}" alt="${product.name}">
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `;
    });
    list.innerHTML = myLi;
}

function applyDiscount() {
    const discountedPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }));
    showAll(discountedPrices);
}

function sumTotal() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);
    list.innerHTML = `
        <li>
            <p>O valor total dos itens é ${formatCurrency(totalValue)}</p>
        </li>
    `;
}

function filterVeganItems() {
    const veganItems = menuOptions.filter(product => product.vegan);
    showAll(veganItems);
}

// Event Listeners
buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonApplyDiscount.addEventListener('click', applyDiscount);
buttonSumTotal.addEventListener('click', sumTotal);
buttonFilterVegan.addEventListener('click', filterVeganItems);