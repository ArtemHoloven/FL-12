var bestOfferSection = document.getElementById('section_best_offer');
var bestOfferWrapper = document.getElementById('section_best_offer_wrapper');

function fillBestOfferSection(leftItem, rightItem) {
  var bestOfferFirstItemWrapper = document.createElement('div');
  bestOfferFirstItemWrapper.classList.add('section_best_offer_item_wrapper');
  bestOfferWrapper.appendChild(bestOfferFirstItemWrapper);
  var bestOfferFirstItemButtonUp = document.createElement('button');
  bestOfferFirstItemButtonUp.classList.add('section_best_offer_button_up');
  bestOfferFirstItemWrapper.appendChild(bestOfferFirstItemButtonUp);
  var bestOfferFirstItem = document.createElement('div');
  bestOfferFirstItem.classList.add('section_catalog_item');
  bestOfferFirstItemWrapper.appendChild(bestOfferFirstItem);
  bestOfferFirstItem.addEventListener('click', function() {
    tempId = catalog[leftItem].id;
    sessionStorage.setItem('id', tempId);
    toItemDetailsPage();
  });
  var bestOfferFirstItemImgWrapper = document.createElement('div');
  bestOfferFirstItemImgWrapper.classList.add('section_catalog_item_image_wrapper');
  bestOfferFirstItem.appendChild(bestOfferFirstItemImgWrapper);
  var bestOfferFirstItemImg = document.createElement('img');
  bestOfferFirstItemImg.classList.add('section_catalog_item_image');
  bestOfferFirstItemImg.src = catalog[leftItem].thumbnail;
  bestOfferFirstItemImgWrapper.appendChild(bestOfferFirstItemImg);
  var bestOfferFirstItemImgNew = document.createElement('img');

  if (catalog[leftItem].hasNew) {
    bestOfferFirstItemImgNew.classList.add('new_img');
    bestOfferFirstItemImgNew.src = 'img/new.png';
    bestOfferFirstItemImgWrapper.appendChild(bestOfferFirstItemImgNew);
  }

  var bestOfferFirstItemImgBg = document.createElement('div');
  bestOfferFirstItemImgBg.classList.add('section_catalog_item_image_bg');
  bestOfferFirstItemImgWrapper.appendChild(bestOfferFirstItemImgBg);
  var bestOfferFirstItemImgText = document.createElement('div');
  bestOfferFirstItemImgText.classList.add('section_catalog_item_image_text');
  bestOfferFirstItemImgText.innerHTML = 'View Item';
  bestOfferFirstItemImgWrapper.appendChild(bestOfferFirstItemImgText);
  var bestOfferFirstItemDesc = document.createElement('p');
  bestOfferFirstItemDesc.classList.add('section_catalog_item_desc');
  bestOfferFirstItemDesc.innerHTML = catalog[leftItem].title;
  bestOfferFirstItem.appendChild(bestOfferFirstItemDesc);
  var bestOfferFirstItemPrice = document.createElement('p');
  bestOfferFirstItemPrice.classList.add('section_catalog_item_price');
  bestOfferFirstItemPrice.innerHTML = '£' + catalog[leftItem].discountedPrice.toFixed(2);
  bestOfferFirstItem.appendChild(bestOfferFirstItemPrice);
  var bestOfferFirstItemOldPrice = document.createElement('span');

  if (catalog[leftItem].price !== catalog[leftItem].discountedPrice) {
    bestOfferFirstItemOldPrice.classList.add('section_catalog_item_old_price');
    bestOfferFirstItemOldPrice.innerHTML = '£' + catalog[leftItem].price.toFixed(2);
    bestOfferFirstItemPrice.insertBefore(bestOfferFirstItemOldPrice, bestOfferFirstItemPrice.firstChild);
  }

  var bestOfferFirstItemButtonDown = document.createElement('button');
  bestOfferFirstItemButtonDown.classList.add('section_best_offer_button_down');
  bestOfferFirstItemWrapper.appendChild(bestOfferFirstItemButtonDown);
  var bestOfferSignPlus = document.createElement('span');
  bestOfferSignPlus.classList.add('section_best_offer_sign');
  bestOfferSignPlus.innerHTML = '+';
  bestOfferWrapper.appendChild(bestOfferSignPlus);
  var bestOfferSecondItemWrapper = document.createElement('div');
  bestOfferSecondItemWrapper.classList.add('section_best_offer_item_wrapper');
  bestOfferWrapper.appendChild(bestOfferSecondItemWrapper);
  var bestOfferSecondItemButtonUp = document.createElement('button');
  bestOfferSecondItemButtonUp.classList.add('section_best_offer_button_up');
  bestOfferSecondItemWrapper.appendChild(bestOfferSecondItemButtonUp);
  var bestOfferSecondItem = document.createElement('div');
  bestOfferSecondItem.classList.add('section_catalog_item');
  bestOfferSecondItemWrapper.appendChild(bestOfferSecondItem);
  bestOfferSecondItem.addEventListener('click', function() {
    tempId = catalog[rightItem].id;
    sessionStorage.setItem('id', tempId);
    toItemDetailsPage();
  });
  var bestOfferSecondItemImgWrapper = document.createElement('div');
  bestOfferSecondItemImgWrapper.classList.add('section_catalog_item_image_wrapper');
  bestOfferSecondItem.appendChild(bestOfferSecondItemImgWrapper);
  var bestOfferSecondItemImg = document.createElement('img');
  bestOfferSecondItemImg.classList.add('section_catalog_item_image');
  bestOfferSecondItemImg.src = catalog[rightItem].thumbnail;
  bestOfferSecondItemImgWrapper.appendChild(bestOfferSecondItemImg);
  var bestOfferSecondItemImgNew = document.createElement('img');

  if (catalog[rightItem].hasNew) {
    bestOfferSecondItemImgNew.classList.add('new_img');
    bestOfferSecondItemImgNew.src = 'img/new.png';
    bestOfferSecondItemImgWrapper.appendChild(bestOfferSecondItemImgNew);
  }

  var bestOfferSecondItemImgBg = document.createElement('div');
  bestOfferSecondItemImgBg.classList.add('section_catalog_item_image_bg');
  bestOfferSecondItemImgWrapper.appendChild(bestOfferSecondItemImgBg);
  var bestOfferSecondItemImgText = document.createElement('div');
  bestOfferSecondItemImgText.classList.add('section_catalog_item_image_text');
  bestOfferSecondItemImgText.innerHTML = 'View Item';
  bestOfferSecondItemImgWrapper.appendChild(bestOfferSecondItemImgText);
  var bestOfferSecondItemDesc = document.createElement('p');
  bestOfferSecondItemDesc.classList.add('section_catalog_item_desc');
  bestOfferSecondItemDesc.innerHTML = catalog[rightItem].title;
  bestOfferSecondItem.appendChild(bestOfferSecondItemDesc);
  var bestOfferSecondItemPrice = document.createElement('p');
  bestOfferSecondItemPrice.classList.add('section_catalog_item_price');
  bestOfferSecondItemPrice.innerHTML = '£' + catalog[rightItem].discountedPrice.toFixed(2);
  bestOfferSecondItem.appendChild(bestOfferSecondItemPrice);
  var bestOfferSecondItemOldPrice = document.createElement('span');

  if (catalog[rightItem].price !== catalog[rightItem].discountedPrice) {
    bestOfferSecondItemOldPrice.classList.add('section_catalog_item_old_price');
    bestOfferSecondItemOldPrice.innerHTML = '£' + catalog[rightItem].price.toFixed(2);
    bestOfferSecondItemPrice.insertBefore(bestOfferSecondItemOldPrice, bestOfferSecondItemPrice.firstChild);
  }

  var bestOfferSecondItemButtonDown = document.createElement('button');
  bestOfferSecondItemButtonDown.classList.add('section_best_offer_button_down');
  bestOfferSecondItemWrapper.appendChild(bestOfferSecondItemButtonDown);
  var bestOfferSignEqual = document.createElement('span');
  bestOfferSignEqual.classList.add('section_best_offer_sign');
  bestOfferSignEqual.innerHTML = '=';
  bestOfferWrapper.appendChild(bestOfferSignEqual);
  var bestOfferResult = document.createElement('div');
  bestOfferResult.classList.add('section_best_offer_result');
  bestOfferWrapper.appendChild(bestOfferResult);
  var bestOfferSumWithDiscount = document.createElement('span');
  bestOfferSumWithDiscount.id = 'section_best_offer_sum_with_discount';
  bestOfferSumWithDiscount.innerHTML = '£' + (catalog[leftItem].discountedPrice + catalog[rightItem].discountedPrice - bestOffer.discount).toFixed(2);
  bestOfferResult.appendChild(bestOfferSumWithDiscount);
  var bestOfferSumWithoutDiscount = document.createElement('span');
  bestOfferSumWithoutDiscount.id = 'section_best_offer_sum_without_discount';
  bestOfferSumWithoutDiscount.innerHTML = '£' + (catalog[leftItem].discountedPrice + catalog[rightItem].discountedPrice).toFixed(2);
  bestOfferResult.appendChild(bestOfferSumWithoutDiscount);
  var bestOfferButtonAddDesktop = document.createElement('button');
  bestOfferButtonAddDesktop.id = 'section_best_offer_button_add_desc';
  bestOfferButtonAddDesktop.innerHTML = 'Add to bag';
  bestOfferResult.appendChild(bestOfferButtonAddDesktop);
  bestOfferButtonAddDesktop.addEventListener('click', function() {
    if (sessionStorage.bag !== undefined) {
      tempBag = JSON.parse(sessionStorage.getItem('bag'));
    }
    catalog[leftItem].quantity = 1;
    catalog[rightItem].quantity = 1;
    if (catalog[leftItem] === catalog[rightItem]) {
      catalog[leftItem].sizes = catalog[leftItem].sizes[0];
      catalog[leftItem].colors = catalog[leftItem].colors[0];
      catalog[leftItem].quantity = 2;
      var zero = 0;
      for (var i = 0; i < tempBag.length; i++) {
        if (catalog[leftItem].id === tempBag[i].id && catalog[leftItem].colors === tempBag[i].colors && catalog[leftItem].sizes === tempBag[i].sizes) {
          tempBag[i].quantity += catalog[leftItem].quantity;
        } else {
          zero++;
        }
      }
      if (zero === tempBag.length) {
        tempBag.push(catalog[leftItem]);
      } 
    } else {
      catalog[leftItem].sizes = catalog[leftItem].sizes[0];
      catalog[leftItem].colors = catalog[leftItem].colors[0];
      catalog[rightItem].sizes = catalog[rightItem].sizes[0];
      catalog[rightItem].colors = catalog[rightItem].colors[0];
      var zero = 0;
      for (var i = 0; i < tempBag.length; i++) {
        if (catalog[leftItem].id === tempBag[i].id && catalog[leftItem].colors === tempBag[i].colors && catalog[leftItem].sizes === tempBag[i].sizes) {
          tempBag[i].quantity += catalog[leftItem].quantity;
        } else {
          zero++;
        }
      }
      if (zero === tempBag.length) {
        tempBag.push(catalog[leftItem]);
      }
      zero = 0;
      for (var i = 0; i < tempBag.length; i++) {
        if (catalog[rightItem].id === tempBag[i].id && catalog[rightItem].colors === tempBag[i].colors && catalog[rightItem].sizes === tempBag[i].sizes) {
          tempBag[i].quantity += catalog[rightItem].quantity;
        } else {
          zero++;
        }
      }
      if (zero === tempBag.length) {
        tempBag.push(catalog[rightItem]);
      }
    }
    sessionStorage.setItem('bag', JSON.stringify(tempBag));
    bagTotalItems += 2;
    sessionStorage.setItem('items', bagTotalItems);
    bagTotalPrice += catalog[leftItem].discountedPrice + catalog[rightItem].discountedPrice;
    sessionStorage.setItem('price', bagTotalPrice);
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    if (bagTotalPrice === 0) {
      totalPriceSpan.innerHTML = '';
    }
    totalItemsSpan.innerHTML = bagTotalItems;
    addToBag();
  });
  var bestOfferButtonAddTabletMobile = document.createElement('button');
  bestOfferButtonAddTabletMobile.id = 'section_best_offer_button_add_tm';
  bestOfferButtonAddTabletMobile.innerHTML = 'Add to bag';
  bestOfferSection.appendChild(bestOfferButtonAddTabletMobile);
  bestOfferButtonAddTabletMobile.addEventListener('click', function() {
    if (sessionStorage.bag !== undefined) {
      tempBag = JSON.parse(sessionStorage.getItem('bag'));
    }
    catalog[leftItem].quantity = 1;
    catalog[rightItem].quantity = 1;
    if (catalog[leftItem] === catalog[rightItem]) {
      catalog[leftItem].sizes = catalog[leftItem].sizes[0];
      catalog[leftItem].colors = catalog[leftItem].colors[0];
      catalog[leftItem].quantity = 2;
      var zero = 0;
      for (var i = 0; i < tempBag.length; i++) {
        if (catalog[leftItem].id === tempBag[i].id && catalog[leftItem].colors === tempBag[i].colors && catalog[leftItem].sizes === tempBag[i].sizes) {
          tempBag[i].quantity += catalog[leftItem].quantity;
        } else {
          zero++;
        }
      }
      if (zero === tempBag.length) {
        tempBag.push(catalog[leftItem]);
      } 
    } else {
      catalog[leftItem].sizes = catalog[leftItem].sizes[0];
      catalog[leftItem].colors = catalog[leftItem].colors[0];
      catalog[rightItem].sizes = catalog[rightItem].sizes[0];
      catalog[rightItem].colors = catalog[rightItem].colors[0];
      var zero = 0;
      for (var i = 0; i < tempBag.length; i++) {
        if (catalog[leftItem].id === tempBag[i].id && catalog[leftItem].colors === tempBag[i].colors && catalog[leftItem].sizes === tempBag[i].sizes) {
          tempBag[i].quantity += catalog[leftItem].quantity;
        } else {
          zero++;
        }
      }
      if (zero === tempBag.length) {
        tempBag.push(catalog[leftItem]);
      }
      zero = 0;
      for (var i = 0; i < tempBag.length; i++) {
        if (catalog[rightItem].id === tempBag[i].id && catalog[rightItem].colors === tempBag[i].colors && catalog[rightItem].sizes === tempBag[i].sizes) {
          tempBag[i].quantity += catalog[rightItem].quantity;
        } else {
          zero++;
        }
      }
      if (zero === tempBag.length) {
        tempBag.push(catalog[rightItem]);
      }
    }
    sessionStorage.setItem('bag', JSON.stringify(tempBag));
    bagTotalItems += 2;
    sessionStorage.setItem('items', bagTotalItems);
    bagTotalPrice += catalog[leftItem].discountedPrice + catalog[rightItem].discountedPrice;
    sessionStorage.setItem('price', bagTotalPrice);
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    if (bagTotalPrice === 0) {
      totalPriceSpan.innerHTML = '';
    }
    totalItemsSpan.innerHTML = bagTotalItems;
    addToBag();
  });
  bestOfferFirstItemButtonUp.addEventListener('click', function () {
    leftItem++;

    if (leftItem > 13) {
      leftItem = 0;
    }

    firstItemOnClick(leftItem);
  });
  bestOfferFirstItemButtonDown.addEventListener('click', function () {
    leftItem--;

    if (leftItem < 0) {
      leftItem = 13;
    }

    firstItemOnClick(leftItem);
  });
  bestOfferSecondItemButtonUp.addEventListener('click', function () {
    rightItem++;

    if (rightItem > 13) {
      rightItem = 0;
    }

    secondItemOnClick(rightItem);
  });
  bestOfferSecondItemButtonDown.addEventListener('click', function () {
    rightItem--;

    if (rightItem < 0) {
      rightItem = 13;
    }

    secondItemOnClick(rightItem);
  });

  function firstItemOnClick(leftItem) {
    bestOfferFirstItemImg.src = catalog[leftItem].thumbnail;

    if (catalog[leftItem].hasNew) {
      bestOfferFirstItemImgNew.classList.add('new_img');
      bestOfferFirstItemImgNew.src = 'img/new.png';
      bestOfferFirstItemImgWrapper.appendChild(bestOfferFirstItemImgNew);
    } else {
      bestOfferFirstItemImgNew.remove();
    }

    bestOfferFirstItemDesc.innerHTML = catalog[leftItem].title;
    bestOfferFirstItemPrice.innerHTML = '£' + catalog[leftItem].discountedPrice.toFixed(2);

    if (catalog[leftItem].price !== catalog[leftItem].discountedPrice) {
      bestOfferFirstItemOldPrice.classList.add('section_catalog_item_old_price');
      bestOfferFirstItemOldPrice.innerHTML = '£' + catalog[leftItem].price.toFixed(2);
      bestOfferFirstItemPrice.insertBefore(bestOfferFirstItemOldPrice, bestOfferFirstItemPrice.firstChild);
    }

    calculateTotalPrice();
  }

  function secondItemOnClick(rightItem) {
    bestOfferSecondItemImg.src = catalog[rightItem].thumbnail;

    if (catalog[rightItem].hasNew) {
      bestOfferSecondItemImgNew.classList.add('new_img');
      bestOfferSecondItemImgNew.src = 'img/new.png';
      bestOfferSecondItemImgWrapper.appendChild(bestOfferSecondItemImgNew);
    } else {
      bestOfferSecondItemImgNew.remove();
    }

    bestOfferSecondItemDesc.innerHTML = catalog[rightItem].title;
    bestOfferSecondItemPrice.innerHTML = '£' + catalog[rightItem].discountedPrice.toFixed(2);

    if (catalog[rightItem].price !== catalog[rightItem].discountedPrice) {
      bestOfferSecondItemOldPrice.classList.add('section_catalog_item_old_price');
      bestOfferSecondItemOldPrice.innerHTML = '£' + catalog[rightItem].price.toFixed(2);
      bestOfferSecondItemPrice.insertBefore(bestOfferSecondItemOldPrice, bestOfferSecondItemPrice.firstChild);
    }

    calculateTotalPrice();
  }

  function calculateTotalPrice() {
    if ((catalog[leftItem].id === bestOffer.left[0] || catalog[leftItem].id === bestOffer.left[1] || catalog[leftItem].id === bestOffer.left[2]) && (catalog[rightItem].id === bestOffer.right[0] || catalog[rightItem].id === bestOffer.right[1])) {
      bestOfferSumWithDiscount.innerHTML = '£' + (catalog[leftItem].discountedPrice + catalog[rightItem].discountedPrice - bestOffer.discount).toFixed(2);
      bestOfferSumWithoutDiscount.innerHTML = '£' + (catalog[leftItem].discountedPrice + catalog[rightItem].discountedPrice).toFixed(2);
    } else {
      bestOfferSumWithDiscount.innerHTML = '£' + (catalog[leftItem].discountedPrice + catalog[rightItem].discountedPrice).toFixed(2);
      bestOfferSumWithoutDiscount.innerHTML = '';
    }
  }

  function addToBag() {
    document.location = '4_shopping_bag.html';
  }
}

function fillNewArrivals() {
  newCatalog.sort(function (a, b) {
    return Date.parse(b.dateAdded) - Date.parse(a.dateAdded);
  });

  for (var i = 0; i < 5; i++) {
    if (newCatalog[i].fashion === 'Casual style' && newCatalog[i].category === 'women') {
      addToCatalog(i);
    }
  }

  setNewClass();
}

function setNewClass() {
  var newArrivalsItems = document.getElementsByClassName('section_catalog_item');

  for (var i = 0; i < newArrivalsItems.length; i++) {
    newArrivalsItems[i].classList.add('section_new_arrivals_item');
  }
}

fillNewArrivals();
fillBestOfferSection(8, 4);
var newArrivalsButton = document.getElementById('section_new_arrivals_button');
newArrivalsButton.addEventListener('click', function () {
  document.location = '2_catalog.html';
});