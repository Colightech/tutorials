const asideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const inputText = document.querySelector('.name-input');
const submitBtn = document.querySelector('.submit');



menuBtn.addEventListener('click', () => {
    asideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    asideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle("change-theme");

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// table orders
Orders.forEach(orders => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${orders.productName}</td>
                        <td>${orders.productNumber}</td>
                        <td>${orders.paymentStatus}</td>
                        <td class="${orders.shipping === 'Declined' ? 'wine' : orders.shipping === 'pending' ? 'warning' : 'primary'}">${orders.shipping}</td>
                        <td class="primary">Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

