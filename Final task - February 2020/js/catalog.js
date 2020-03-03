function fillCatalog() {
  newCatalog.sort(function (a, b) {
    return Date.parse(b.dateAdded) - Date.parse(a.dateAdded);
  });

  for (var i = 0; i < newCatalog.length; i++) {
    if (newCatalog[i].fashion === 'Casual style' && newCatalog[i].category === 'women') {
      addToCatalog(i);
    }
  }
}

function addBannerToCatalog() {
  var catalogBanner = document.createElement('div');
  catalogBanner.classList.add('section_catalog_banner');
  catalogItemsWrapper.appendChild(catalogBanner);
  var catalogBannerDesc = document.createElement('p');
  catalogBannerDesc.classList.add('section_catalog_banner_desc');
  catalogBannerDesc.innerHTML = 'Last weekend <span>extra 50%</span> off on all reduced boots and shoulder bags';
  catalogBanner.appendChild(catalogBannerDesc);
  var catalogBannerAddInfo = document.createElement('p');
  catalogBannerAddInfo.classList.add('section_best_offer_desc');
  catalogBannerAddInfo.innerHTML = 'This offer is valid in-store and online. ' + 'Prices displayed reflect this additional discount. This offer ends at 11:59 GMT on Match 1st 2019';
  catalogBanner.appendChild(catalogBannerAddInfo);
}

function filterCreate() {
  var buttonFashion = document.getElementById('drop_btn_fashion');
  var buttonProductType = document.getElementById('drop_btn_product_type');
  var buttonColor = document.getElementById('drop_btn_color');
  var buttonBrand = document.getElementById('drop_btn_brand');
  var buttonSize = document.getElementById('drop_btn_size');
  var buttonPrice = document.getElementById('drop_btn_price');
  var fashionPicked = document.getElementById('fashion_picked');
  var productTypePicked = document.getElementById('product_type_picked');
  var colorPicked = document.getElementById('color_picked');
  var brandPicked = document.getElementById('brand_picked');
  var sizePicked = document.getElementById('size_picked');
  var pricePicked = document.getElementById('price_picked');
  var fashionItems = document.getElementsByClassName('fashion_item');
  var productTypeItems = document.getElementsByClassName('product_type_item');
  var colorItems = document.getElementsByClassName('color_item');
  var brandItems = document.getElementsByClassName('brand_item');
  var sizeItems = document.getElementsByClassName('size_item');
  var priceItems = document.getElementsByClassName('price_item');

  var _loop = function _loop(i) {
    fashionItems[i].addEventListener('click', function () {
      fashionPicked.innerHTML = fashionItems[i].innerText;
      buttonFashion.classList.add('drop_btn_selected');
      buttonFashion.classList.remove('drop_btn_not_selected');

      if (fashionItems[i].innerText === 'Not selected') {
        fashionPicked.innerHTML = '';
        buttonFashion.classList.remove('drop_btn_selected');
        buttonFashion.classList.add('drop_btn_not_selected');
      }
    });
  };

  for (var i = 0; i < fashionItems.length; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(_i) {
    productTypeItems[_i].addEventListener('click', function () {
      productTypePicked.innerHTML = productTypeItems[_i].innerText;
      buttonProductType.classList.add('drop_btn_selected');
      buttonProductType.classList.remove('drop_btn_not_selected');

      if (productTypeItems[_i].innerText === 'Not selected') {
        productTypePicked.innerHTML = '';
        buttonProductType.classList.remove('drop_btn_selected');
        buttonProductType.classList.add('drop_btn_not_selected');
      }
    });
  };

  for (var _i = 0; _i < productTypeItems.length; _i++) {
    _loop2(_i);
  }

  var _loop3 = function _loop3(_i2) {
    colorItems[_i2].addEventListener('click', function () {
      colorPicked.innerHTML = colorItems[_i2].innerText;
      buttonColor.classList.add('drop_btn_selected');
      buttonColor.classList.remove('drop_btn_not_selected');

      if (colorItems[_i2].innerText === 'Not selected') {
        colorPicked.innerHTML = '';
        buttonColor.classList.remove('drop_btn_selected');
        buttonColor.classList.add('drop_btn_not_selected');
      }
    });
  };

  for (var _i2 = 0; _i2 < colorItems.length; _i2++) {
    _loop3(_i2);
  }

  var _loop4 = function _loop4(_i3) {
    brandItems[_i3].addEventListener('click', function () {
      brandPicked.innerHTML = brandItems[_i3].innerText;
      buttonBrand.classList.add('drop_btn_selected');
      buttonBrand.classList.remove('drop_btn_not_selected');

      if (brandItems[_i3].innerText === 'Not selected') {
        brandPicked.innerHTML = '';
        buttonBrand.classList.remove('drop_btn_selected');
        buttonBrand.classList.add('drop_btn_not_selected');
      }
    });
  };

  for (var _i3 = 0; _i3 < brandItems.length; _i3++) {
    _loop4(_i3);
  }

  var _loop5 = function _loop5(_i4) {
    sizeItems[_i4].addEventListener('click', function () {
      sizePicked.innerHTML = sizeItems[_i4].innerText;
      buttonSize.classList.add('drop_btn_selected');
      buttonSize.classList.remove('drop_btn_not_selected');

      if (sizeItems[_i4].innerText === 'Not selected') {
        sizePicked.innerHTML = '';
        buttonSize.classList.remove('drop_btn_selected');
        buttonSize.classList.add('drop_btn_not_selected');
      }
    });
  };

  for (var _i4 = 0; _i4 < sizeItems.length; _i4++) {
    _loop5(_i4);
  }

  var _loop6 = function _loop6(_i5) {
    priceItems[_i5].addEventListener('click', function () {
      pricePicked.innerHTML = priceItems[_i5].innerText;
      buttonPrice.classList.add('drop_btn_selected');
      buttonPrice.classList.remove('drop_btn_not_selected');

      if (priceItems[_i5].innerText === 'Not selected') {
        pricePicked.innerHTML = '';
        buttonPrice.classList.remove('drop_btn_selected');
        buttonPrice.classList.add('drop_btn_not_selected');
      }
    });
  };

  for (var _i5 = 0; _i5 < priceItems.length; _i5++) {
    _loop6(_i5);
  }
}

filterCreate();
fillCatalog();
addBannerToCatalog();