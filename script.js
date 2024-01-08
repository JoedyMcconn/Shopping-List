window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    console.log("Are we getting here");
    let form = document.getElementById("item-form");

    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();
    }

    addItemToShoppingList();
    return false;
}

function addItemToShoppingList() {
    let itemNameInput = document.getElementById("item-name");
    let itemAmountInput = document.getElementById("item-amount");
    let id = getRandomInt(0, 1000000);

    // Creates list item html and appends to page.
    let itemHtml = createListItemHtml(itemNameInput.value, itemAmountInput.value, id);
    console.log("Item HTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
    let deleteButton = document.getElementById("button" + id);
    deleteButton.addEventListener("click", () => {
        removeListItem(id);
    });
}

function createListItemHtml(itemName, itemAmount, id) {
    return `<li id="Item${id}">
        ${itemName} - ${itemAmount}
        <button id="button${id}" type="button">Delete Item</button>
    </li>`;
}

function removeListItem(id) {
    let listItem = document.getElementById("Item" + id);
    listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
