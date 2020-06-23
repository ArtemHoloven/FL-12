var totalSum = document.getElementById('shopping_bag_total_price_sum');
var totalDiscount = document.getElementById('shopping_bag_result_discount');
var shoppingBagWrapper = document.getElementById('shopping_bag_wrapper');
var shoppingBagItemsWrapper = document.getElementById('shopping_bag_items_wrapper');
var bestOfferLeft = [];
var bestOfferRight = [];

function addToBag(item) {
  var shoppingBagItem = document.createElement('div');
  shoppingBagItem.classList.add('shopping_bag_item');
  shoppingBagItemsWrapper.appendChild(shoppingBagItem);
  var shoppingBagImgWrapper = document.createElement('div');
  shoppingBagImgWrapper.classList.add('shopping_bag_item_img_wrapper');
  shoppingBagItem.appendChild(shoppingBagImgWrapper);
  shoppingBagImgWrapper.addEventListener('click', function() {
    tempId = item.id;
    sessionStorage.setItem('id', tempId);
    toItemDetailsPage();
  })
  var shoppingBagImg = document.createElement('img');
  shoppingBagImg.classList.add('shopping_bag_item_img');
  shoppingBagImg.src = item.thumbnail;
  shoppingBagImgWrapper.appendChild(shoppingBagImg);

  if (item.hasNew) {
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
  shoppingBagItemTitle.innerHTML = item.title;
  shoppingBagItemInfo.appendChild(shoppingBagItemTitle);
  var shoppingBagItemPrice = document.createElement('p');
  shoppingBagItemPrice.classList.add('shopping_bag_item_price');
  shoppingBagItemPrice.innerHTML = '£' + item.discountedPrice.toFixed(2);
  shoppingBagItemInfo.appendChild(shoppingBagItemPrice);
  var shoppingBagItemColor = document.createElement('p');
  shoppingBagItemColor.classList.add('shopping_bag_item_color');
  if (item.colors !== undefined) {
    shoppingBagItemColor.innerHTML = 'Color: ' + item.colors;
  } else {
    shoppingBagItemColor.innerHTML = 'Color: Default';
  }
  shoppingBagItemInfo.appendChild(shoppingBagItemColor);
  var shoppingBagItemSize = document.createElement('p');
  shoppingBagItemSize.classList.add('shopping_bag_item_size');
  if (item.sizes !== undefined) {
    shoppingBagItemSize.innerHTML = 'Size: ' + item.sizes;
  } else {
    shoppingBagItemSize.innerHTML = 'Size: Default';
  }
  shoppingBagItemInfo.appendChild(shoppingBagItemSize);
  var shoppingBagItemQuantity = document.createElement('p');
  shoppingBagItemQuantity.classList.add('shopping_bag_item_quantity');
  shoppingBagItemQuantity.innerHTML = 'Quantity: ';
  shoppingBagItemInfo.appendChild(shoppingBagItemQuantity);
  var shoppingBagItemButtonMinus = document.createElement('button');
  shoppingBagItemButtonMinus.classList.add('shopping_bag_item_button_minus');
  shoppingBagItemButtonMinus.innerHTML = '-';
  shoppingBagItemQuantity.appendChild(shoppingBagItemButtonMinus);
  var shoppingBagItemsQuantity = document.createElement('span');
  shoppingBagItemsQuantity.classList.add('shopping_bag_items_quantity');
  shoppingBagItemsQuantity.innerHTML = item.quantity;
  shoppingBagItemQuantity.appendChild(shoppingBagItemsQuantity);
  var shoppingBagItemButtonPlus = document.createElement('button');
  shoppingBagItemButtonPlus.classList.add('shopping_bag_item_button_plus');
  shoppingBagItemButtonPlus.innerHTML = '+';
  shoppingBagItemQuantity.appendChild(shoppingBagItemButtonPlus);
  shoppingBagItemButtonPlus.addEventListener('click', function () {
    item.quantity++;
    shoppingBagItemsQuantity.innerHTML = item.quantity;
    sessionStorage.setItem('bag', JSON.stringify(tempBag));
    bagTotalItems++;
    sessionStorage.setItem('items', bagTotalItems);
    bagTotalPrice += item.discountedPrice;
    sessionStorage.setItem('price', bagTotalPrice);
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    if (bagTotalPrice === 0) {
      totalPriceSpan.innerHTML = '';
    }
    totalItemsSpan.innerHTML = bagTotalItems;
    totalSum.innerHTML = bagTotalPrice.toFixed(2);
  });
  shoppingBagItemButtonMinus.addEventListener('click', function () {
    item.quantity--;

    if (item.quantity < 1) {
      item.quantity = 1;
    } else {
      shoppingBagItemsQuantity.innerHTML = item.quantity;
      sessionStorage.setItem('bag', JSON.stringify(tempBag));
      bagTotalItems--;
      sessionStorage.setItem('items', bagTotalItems);
      bagTotalPrice -= item.discountedPrice;
      sessionStorage.setItem('price', bagTotalPrice);
      totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
      if (bagTotalPrice === 0) {
        totalPriceSpan.innerHTML = '';
      }
      totalItemsSpan.innerHTML = bagTotalItems;
      totalSum.innerHTML = bagTotalPrice.toFixed(2);
    }
  });
  var shoppingBagItemButtonRemove = document.createElement('button');
  shoppingBagItemButtonRemove.classList.add('shopping_bag_item_remove');
  shoppingBagItemButtonRemove.innerHTML = 'Remove item';
  shoppingBagItemInfo.appendChild(shoppingBagItemButtonRemove);
  shoppingBagItemButtonRemove.addEventListener('click', function () {
    shoppingBagItem.remove();
    tempBag = JSON.parse(sessionStorage.getItem('bag'));
    for (var i = 0; i < tempBag.length; i++) {
      if ( JSON.stringify(item) === JSON.stringify(tempBag[i]) ) {
        tempBag.splice(tempBag.indexOf(tempBag[i]), 1);
        break;
      }
    }
    sessionStorage.setItem('bag', JSON.stringify(tempBag));
    bagTotalItems -= item.quantity;
    sessionStorage.setItem('items', bagTotalItems);
    bagTotalPrice -= item.discountedPrice * item.quantity;
    sessionStorage.setItem('price', bagTotalPrice);
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    if (bagTotalPrice === 0) {
      totalPriceSpan.innerHTML = '';
    }
    totalItemsSpan.innerHTML = bagTotalItems;

    if (item.id === bestOffer.left[0] || item.id === bestOffer.left[1] || item.id === bestOffer.left[2]) {
      bestOfferLeft.splice(bestOfferLeft.indexOf(item.id, 1));
    } else if (item.id === bestOffer.right[0] || item.id === bestOffer.right[1]) {
      bestOfferRight.splice(bestOfferLeft.indexOf(item.id, 1));
    }

    if (bestOfferLeft.length > 0 && bestOfferRight.length > 0) {
      totalDiscount.style.display = 'block';
      totalSum.innerHTML = (bagTotalPrice - bestOffer.discount).toFixed(2);
    } else {
      totalSum.innerHTML = bagTotalPrice.toFixed(2);
      totalDiscount.style.display = 'none';
    }
  });

  if (item.id === bestOffer.left[0] || item.id === bestOffer.left[1] || item.id === bestOffer.left[2]) {
    bestOfferLeft.push(item.id);
  } else if (item.id === bestOffer.right[0] || item.id === bestOffer.right[1]) {
    bestOfferRight.push(item.id);
  }

  if (bestOfferLeft.length > 0 && bestOfferRight.length > 0) {
    totalDiscount.style.display = 'block';
    totalSum.innerHTML = (bagTotalPrice - bestOffer.discount).toFixed(2);
  } else {
    totalSum.innerHTML = bagTotalPrice.toFixed(2);
    totalDiscount.style.display = 'none';
  }
}

function addClearShoppingBagButton() {
  var clearShoppingBagButton = document.getElementById('shopping_bag_clear_bag');
  clearShoppingBagButton.addEventListener('click', function () {
    shoppingBagItemsWrapper.remove();

    if (shoppingBagWrapper.firstElementChild) {
      shoppingBagWrapper.removeChild(shoppingBagWrapper.firstElementChild);
    }

    if (sessionStorage.bag !== undefined) {
      tempBag = JSON.parse(sessionStorage.getItem('bag'));
      tempBag.splice(0, tempBag.length);
      sessionStorage.setItem('bag', JSON.stringify(tempBag));
    }

    var bagEmptyMessage = document.createElement('p');
    bagEmptyMessage.classList.add('shopping_bag_empty_message');
    bagEmptyMessage.innerHTML = 'Your shopping bag is empty. Use Catalog to add new items';
    shoppingBagWrapper.appendChild(bagEmptyMessage);
    bagTotalItems = 0;
    sessionStorage.setItem('items', bagTotalItems);
    bagTotalPrice = 0;
    sessionStorage.setItem('price', bagTotalPrice);
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    if (bagTotalPrice === 0) {
      totalPriceSpan.innerHTML = '';
    }
    totalItemsSpan.innerHTML = bagTotalItems;
    bestOfferLeft.splice(0, bestOfferLeft.length);
    bestOfferRight.splice(0, bestOfferLeft.length);
    if (bestOfferLeft.length > 0 && bestOfferRight.length > 0) {
      totalDiscount.style.display = 'block';
      totalSum.innerHTML = (bagTotalPrice - bestOffer.discount).toFixed(2);
    } else {
      totalSum.innerHTML = bagTotalPrice.toFixed(2);
      totalDiscount.style.display = 'none';
    }
  });
}

function addFinishPurchaseButton() {
  var checkoutButton = document.getElementById('shopping_bag_checkout');
  checkoutButton.addEventListener('click', function () {
    shoppingBagItemsWrapper.remove();

    if (shoppingBagWrapper.firstElementChild) {
      shoppingBagWrapper.removeChild(shoppingBagWrapper.firstElementChild);
    }

    if (sessionStorage.bag !== undefined) {
      tempBag = JSON.parse(sessionStorage.getItem('bag'));
      tempBag.splice(0, tempBag.length);
      sessionStorage.setItem('bag', JSON.stringify(tempBag));
    }

    var thanksMessage = document.createElement('p');
    thanksMessage.classList.add('shopping_bag_thanks_message');
    thanksMessage.innerHTML = 'Thank you for your purchase';
    shoppingBagWrapper.appendChild(thanksMessage);
    bagTotalItems = 0;
    sessionStorage.setItem('items', bagTotalItems);
    bagTotalPrice = 0;
    sessionStorage.setItem('price', bagTotalPrice);
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    if (bagTotalPrice === 0) {
      totalPriceSpan.innerHTML = '';
    }
    totalItemsSpan.innerHTML = bagTotalItems;
    bestOfferLeft.splice(0, bestOfferLeft.length);
    bestOfferRight.splice(0, bestOfferLeft.length);
    if (bestOfferLeft.length > 0 && bestOfferRight.length > 0) {
      totalDiscount.style.display = 'block';
      totalSum.innerHTML = (bagTotalPrice - bestOffer.discount).toFixed(2);
    } else {
      totalSum.innerHTML = bagTotalPrice.toFixed(2);
      totalDiscount.style.display = 'none';
    }
  });
}

for (var i = 0; i < tempBag.length; i++) {
  addToBag(tempBag[i]);
}

addClearShoppingBagButton();
addFinishPurchaseButton();