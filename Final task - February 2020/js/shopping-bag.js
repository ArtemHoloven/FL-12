var totalPriceSpan = document.getElementById('bag_total_price');
var totalItemsSpan = document.getElementById('bag_total_items');
var totalSum = document.getElementById('shopping_bag_total_price_sum');
var shoppingBagWrapper = document.getElementById('shopping_bag_wrapper');
var shoppingBagItemsWrapper = document.getElementById('shopping_bag_items_wrapper');
var bagTotalPrice = 0;
var bagTotalItems = 0;

function addToBag(item) {
  var shoppingBagItem = document.createElement('div');
  shoppingBagItem.classList.add('shopping_bag_item');
  shoppingBagItemsWrapper.appendChild(shoppingBagItem);
  var shoppingBagImgWrapper = document.createElement('div');
  shoppingBagImgWrapper.classList.add('shopping_bag_item_img_wrapper');
  shoppingBagItem.appendChild(shoppingBagImgWrapper);
  var shoppingBagImg = document.createElement('img');
  shoppingBagImg.classList.add('shopping_bag_item_img');
  shoppingBagImg.src = catalog[item].thumbnail;
  shoppingBagImgWrapper.appendChild(shoppingBagImg);

  if (catalog[item].hasNew) {
    var shoppingBagImgNew = document.createElement('img');
    shoppingBagImgNew.classList.add('new_img');
    shoppingBagImgNew.src = 'img/new.png';
    shoppingBagImgWrapper.appendChild(shoppingBagImgNew);
  }

  var shoppingBagImgBg = document.createElement('div');
  shoppingBagImgBg.classList.add('shopping_bag_item_img_bg');
  shoppingBagImgWrapper.appendChild(shoppingBagImgBg);
  var shoppingBagImgText = document.createElement('div');
  shoppingBagImgText.classList.add('shopping_bag_item_img_text');
  shoppingBagImgText.innerHTML = 'Edit Item';
  shoppingBagImgWrapper.appendChild(shoppingBagImgText);
  var shoppingBagItemInfo = document.createElement('div');
  shoppingBagItemInfo.classList.add('shopping_bag_item_info');
  shoppingBagItem.appendChild(shoppingBagItemInfo);
  var shoppingBagItemTitle = document.createElement('h2');
  shoppingBagItemTitle.classList.add('shopping_bag_item_title');
  shoppingBagItemTitle.innerHTML = catalog[item].title;
  shoppingBagItemInfo.appendChild(shoppingBagItemTitle);
  var shoppingBagItemPrice = document.createElement('p');
  shoppingBagItemPrice.classList.add('shopping_bag_item_price');
  shoppingBagItemPrice.innerHTML = '£' + catalog[item].discountedPrice.toFixed(2);
  shoppingBagItemInfo.appendChild(shoppingBagItemPrice);
  var shoppingBagItemColor = document.createElement('p');
  shoppingBagItemColor.classList.add('shopping_bag_item_color');
  shoppingBagItemColor.innerHTML = 'Color: ' + catalog[item].colors[0];
  shoppingBagItemInfo.appendChild(shoppingBagItemColor);
  var shoppingBagItemSize = document.createElement('p');
  shoppingBagItemSize.classList.add('shopping_bag_item_size');
  shoppingBagItemSize.innerHTML = 'Size: ' + catalog[item].sizes[0];
  shoppingBagItemInfo.appendChild(shoppingBagItemSize);
  var shoppingBagItemQuantity = document.createElement('p');
  shoppingBagItemQuantity.classList.add('shopping_bag_item_quantity');
  shoppingBagItemQuantity.innerHTML = 'Quantity: ';
  shoppingBagItemInfo.appendChild(shoppingBagItemQuantity);
  var shoppingBagItemButtonMinus = document.createElement('button');
  shoppingBagItemButtonMinus.classList.add('shopping_bag_item_button_minus');
  shoppingBagItemButtonMinus.innerHTML = '-';
  shoppingBagItemQuantity.appendChild(shoppingBagItemButtonMinus);
  var quantity = 1;
  var shoppingBagItemsQuantity = document.createElement('span');
  shoppingBagItemsQuantity.classList.add('shopping_bag_items_quantity');
  shoppingBagItemsQuantity.innerHTML = quantity;
  shoppingBagItemQuantity.appendChild(shoppingBagItemsQuantity);
  var shoppingBagItemButtonPlus = document.createElement('button');
  shoppingBagItemButtonPlus.classList.add('shopping_bag_item_button_plus');
  shoppingBagItemButtonPlus.innerHTML = '+';
  shoppingBagItemQuantity.appendChild(shoppingBagItemButtonPlus);
  shoppingBagItemButtonPlus.addEventListener('click', function () {
    quantity++;
    shoppingBagItemsQuantity.innerHTML = quantity;
    bagTotalItems++;
    bagTotalPrice += catalog[item].discountedPrice;
    totalItemsSpan.innerHTML = bagTotalItems;
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    totalSum.innerHTML = bagTotalPrice.toFixed(2);
  });
  shoppingBagItemButtonMinus.addEventListener('click', function () {
    quantity--;

    if (quantity < 1) {
      quantity = 1;
    }

    shoppingBagItemsQuantity.innerHTML = quantity;
    bagTotalItems--;
    bagTotalPrice -= catalog[item].discountedPrice;
    totalItemsSpan.innerHTML = bagTotalItems;
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    totalSum.innerHTML = bagTotalPrice.toFixed(2);
  });
  var shoppingBagItemButtonRemove = document.createElement('button');
  shoppingBagItemButtonRemove.classList.add('shopping_bag_item_remove');
  shoppingBagItemButtonRemove.innerHTML = 'Remove item';
  shoppingBagItemInfo.appendChild(shoppingBagItemButtonRemove);
  shoppingBagItemButtonRemove.addEventListener('click', function () {
    shoppingBagItem.remove();
    bagTotalItems -= quantity;
    bagTotalPrice -= catalog[item].discountedPrice * quantity;
    totalItemsSpan.innerHTML = bagTotalItems;
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    totalSum.innerHTML = bagTotalPrice.toFixed(2);
  });
  bagTotalItems++;
  bagTotalPrice += catalog[item].discountedPrice;
  totalItemsSpan.innerHTML = bagTotalItems;
  totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
  totalSum.innerHTML = bagTotalPrice.toFixed(2);
}

function addClearShoppingBagButton() {
  var clearShoppingBagButton = document.getElementById('shopping_bag_clear_bag');
  clearShoppingBagButton.addEventListener('click', function () {
    shoppingBagItemsWrapper.remove();

    if (shoppingBagWrapper.firstElementChild) {
      shoppingBagWrapper.removeChild(shoppingBagWrapper.firstElementChild);
    }

    var bagEmptyMessage = document.createElement('p');
    bagEmptyMessage.classList.add('shopping_bag_empty_message');
    bagEmptyMessage.innerHTML = 'Your shopping bag is empty. Use Catalog to add new items';
    shoppingBagWrapper.appendChild(bagEmptyMessage);
    bagTotalItems = 0;
    totalItemsSpan.innerHTML = bagTotalItems;
    bagTotalPrice = 0;
    totalPriceSpan.innerHTML = '';
    totalSum.innerHTML = bagTotalPrice.toFixed(2);
  });
}

function addFinishPurchaseButton() {
  var checkoutButton = document.getElementById('shopping_bag_checkout');
  checkoutButton.addEventListener('click', function () {
    shoppingBagItemsWrapper.remove();

    if (shoppingBagWrapper.firstElementChild) {
      shoppingBagWrapper.removeChild(shoppingBagWrapper.firstElementChild);
    }

    var thanksMessage = document.createElement('p');
    thanksMessage.classList.add('shopping_bag_thanks_message');
    thanksMessage.innerHTML = 'Thank you for your purchase';
    shoppingBagWrapper.appendChild(thanksMessage);
    bagTotalItems = 0;
    totalItemsSpan.innerHTML = bagTotalItems;
    bagTotalPrice = 0;
    totalPriceSpan.innerHTML = '';
    totalSum.innerHTML = bagTotalPrice.toFixed(2);
  });
}

addToBag(8);
addToBag(13);
addToBag(1);
addToBag(7);
addClearShoppingBagButton();
addFinishPurchaseButton();