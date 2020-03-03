var catalogItemsWrapper = document.getElementById('section_catalog_items_wrapper');
var newCatalog = catalog.slice();

function addToCatalog(item) {
  var catalogItem = document.createElement('div');
  catalogItem.classList.add('section_catalog_item');
  catalogItemsWrapper.appendChild(catalogItem);
  catalogItem.addEventListener('click', toItemDetailsPage);
  catalogItem.style.order = item * 2;
  var catalogItemImgWrapper = document.createElement('div');
  catalogItemImgWrapper.classList.add('section_catalog_item_image_wrapper');
  catalogItem.appendChild(catalogItemImgWrapper);
  var catalogItemImg = document.createElement('img');
  catalogItemImg.classList.add('section_catalog_item_image');
  catalogItemImg.src = newCatalog[item].thumbnail;
  catalogItemImgWrapper.appendChild(catalogItemImg);

  if (newCatalog[item].hasNew) {
    var catalogItemImgNew = document.createElement('img');
    catalogItemImgNew.classList.add('new_img');
    catalogItemImgNew.src = 'img/new.png';
    catalogItemImgWrapper.appendChild(catalogItemImgNew);
  }

  var catalogItemImgBg = document.createElement('div');
  catalogItemImgBg.classList.add('section_catalog_item_image_bg');
  catalogItemImgWrapper.appendChild(catalogItemImgBg);
  var catalogItemImgText = document.createElement('div');
  catalogItemImgText.classList.add('section_catalog_item_image_text');
  catalogItemImgText.innerHTML = 'View Item';
  catalogItemImgWrapper.appendChild(catalogItemImgText);
  var catalogItemDesc = document.createElement('p');
  catalogItemDesc.classList.add('section_catalog_item_desc');
  catalogItemDesc.innerHTML = newCatalog[item].title;
  catalogItem.appendChild(catalogItemDesc);
  var catalogItemPrice = document.createElement('p');
  catalogItemPrice.classList.add('section_catalog_item_price');
  catalogItemPrice.innerHTML = '£' + newCatalog[item].discountedPrice.toFixed(2);
  catalogItem.appendChild(catalogItemPrice);

  if (newCatalog[item].price !== newCatalog[item].discountedPrice) {
    var catalogItemOldPrice = document.createElement('span');
    catalogItemOldPrice.classList.add('section_catalog_item_old_price');
    catalogItemOldPrice.innerHTML = '£' + newCatalog[item].price.toFixed(2);
    catalogItemPrice.insertBefore(catalogItemOldPrice, catalogItemPrice.firstChild);
  }
}

function toItemDetailsPage() {
  document.location = '3_item.html';
}

function menuOpen() {
  var menuIcon = document.getElementById('header_menu_icon');
  var menuIconClose = document.getElementById('header_menu_icon_close');
  var headerMenu = document.getElementById('header_menu');
  menuIcon.addEventListener('click', function () {
    headerMenu.classList.toggle('menu_open');
    menuIcon.classList.toggle('menu_open');
    menuIconClose.classList.toggle('menu_open');
  });
  menuIconClose.addEventListener('click', function () {
    headerMenu.classList.toggle('menu_open');
    menuIcon.classList.toggle('menu_open');
    menuIconClose.classList.toggle('menu_open');
  });
}

menuOpen();

function addToBag() {
  document.location = '4_shopping_bag.html';
}