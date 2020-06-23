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
  var buttonFashion = document.getElementsByClassName('drop_btn_fashion');
  var buttonProductType = document.getElementsByClassName('drop_btn_product_type');
  var buttonColor = document.getElementsByClassName('drop_btn_color');
  var buttonBrand = document.getElementsByClassName('drop_btn_brand');
  var buttonSize = document.getElementsByClassName('drop_btn_size');
  var buttonPrice = document.getElementsByClassName('drop_btn_price');
  var fashionPicked = document.getElementsByClassName('fashion_picked');
  var productTypePicked = document.getElementsByClassName('product_type_picked');
  var colorPicked = document.getElementsByClassName('color_picked');
  var brandPicked = document.getElementsByClassName('brand_picked');
  var sizePicked = document.getElementsByClassName('size_picked');
  var pricePicked = document.getElementsByClassName('price_picked');
  var fashionItems = document.getElementsByClassName('fashion_item');
  var productTypeItems = document.getElementsByClassName('product_type_item');
  var colorItems = document.getElementsByClassName('color_item');
  var brandItems = document.getElementsByClassName('brand_item');
  var sizeItems = document.getElementsByClassName('size_item');
  var priceItems = document.getElementsByClassName('price_item');
  var dropListTabletMobile = document.getElementById('drop_list_tablet_mobile');
  var dropListContentWrapper = document.getElementById('drop_list_content_wrapper');
  var dropListContentClose = document.getElementById('drop_list_content_close');

  var _loop = function _loop(i) {
    fashionItems[i].addEventListener('click', function () {
      fashionPicked[0].innerHTML = fashionItems[i].innerText;
      buttonFashion[0].classList.add('drop_btn_selected');
      buttonFashion[0].classList.remove('drop_btn_not_selected');
      fashionPicked[1].innerHTML = fashionItems[i].innerText;
      buttonFashion[1].classList.add('drop_btn_selected');
      buttonFashion[1].classList.remove('drop_btn_not_selected');
      for (var j = 0; j < fashionItems.length; j++) {
        fashionItems[j].classList.remove('drop_list_item_selected');
        fashionItems[j].classList.remove('drop_list_item_not_selected');
      }
      fashionItems[i].classList.add('drop_list_item_selected');
      if (i < 7) {
        fashionItems[i+7].classList.add('drop_list_item_selected');
      }

      if (fashionItems[i].innerText === 'Not selected') {
        fashionPicked[0].innerHTML = '';
        buttonFashion[0].classList.remove('drop_btn_selected');
        buttonFashion[0].classList.add('drop_btn_not_selected');
        fashionPicked[1].innerHTML = '';
        buttonFashion[1].classList.remove('drop_btn_selected');
        buttonFashion[1].classList.add('drop_btn_not_selected');
        fashionItems[i].classList.add('drop_list_item_not_selected');
        if (i < 7) {
          fashionItems[i+7].classList.add('drop_list_item_not_selected');
        }
      }
    });
  };

  for (var i = 0; i < fashionItems.length; i++) {
    _loop(i);
  }

  var _loop2 = function _loop2(_i) {
    productTypeItems[_i].addEventListener('click', function () {
      productTypePicked[0].innerHTML = productTypeItems[_i].innerText;
      buttonProductType[0].classList.add('drop_btn_selected');
      buttonProductType[0].classList.remove('drop_btn_not_selected');
      productTypePicked[1].innerHTML = productTypeItems[_i].innerText;
      buttonProductType[1].classList.add('drop_btn_selected');
      buttonProductType[1].classList.remove('drop_btn_not_selected');
      for (var j = 0; j < productTypeItems.length; j++) {
        productTypeItems[j].classList.remove('drop_list_item_selected');
        productTypeItems[j].classList.remove('drop_list_item_not_selected');
      }
      productTypeItems[_i].classList.add('drop_list_item_selected');
      if (_i < 4) {
        productTypeItems[_i+4].classList.add('drop_list_item_selected');
      }

      if (productTypeItems[_i].innerText === 'Not selected') {
        productTypePicked[0].innerHTML = '';
        buttonProductType[0].classList.remove('drop_btn_selected');
        buttonProductType[0].classList.add('drop_btn_not_selected');
        productTypePicked[1].innerHTML = '';
        buttonProductType[1].classList.remove('drop_btn_selected');
        buttonProductType[1].classList.add('drop_btn_not_selected');
        productTypeItems[_i].classList.add('drop_list_item_not_selected');
        if (_i < 4) {
          productTypeItems[_i+4].classList.add('drop_list_item_not_selected');
        }
      }
    });
  };

  for (var _i = 0; _i < productTypeItems.length; _i++) {
    _loop2(_i);
  }

  var _loop3 = function _loop3(_i2) {
    colorItems[_i2].addEventListener('click', function () {
      colorPicked[0].innerHTML = colorItems[_i2].innerText;
      buttonColor[0].classList.add('drop_btn_selected');
      buttonColor[0].classList.remove('drop_btn_not_selected');
      colorPicked[1].innerHTML = colorItems[_i2].innerText;
      buttonColor[1].classList.add('drop_btn_selected');
      buttonColor[1].classList.remove('drop_btn_not_selected');
      for (var j = 0; j < colorItems.length; j++) {
        colorItems[j].classList.remove('drop_list_item_selected');
        colorItems[j].classList.remove('drop_list_item_not_selected');
      }
      colorItems[_i2].classList.add('drop_list_item_selected');
      if (_i2 < 6) {
        colorItems[_i2+6].classList.add('drop_list_item_selected');
      }

      if (colorItems[_i2].innerText === 'Not selected') {
        colorPicked[0].innerHTML = '';
        buttonColor[0].classList.remove('drop_btn_selected');
        buttonColor[0].classList.add('drop_btn_not_selected');
        colorPicked[1].innerHTML = '';
        buttonColor[1].classList.remove('drop_btn_selected');
        buttonColor[1].classList.add('drop_btn_not_selected');
        colorItems[_i2].classList.add('drop_list_item_not_selected');
        if (_i2 < 6) {
          colorItems[_i2+6].classList.add('drop_list_item_not_selected');
        }
      }
    });
  };

  for (var _i2 = 0; _i2 < colorItems.length; _i2++) {
    _loop3(_i2);
  }

  var _loop4 = function _loop4(_i3) {
    brandItems[_i3].addEventListener('click', function () {
      brandPicked[0].innerHTML = brandItems[_i3].innerText;
      buttonBrand[0].classList.add('drop_btn_selected');
      buttonBrand[0].classList.remove('drop_btn_not_selected');
      brandPicked[1].innerHTML = brandItems[_i3].innerText;
      buttonBrand[1].classList.add('drop_btn_selected');
      buttonBrand[1].classList.remove('drop_btn_not_selected');
      for (var j = 0; j < brandItems.length; j++) {
        brandItems[j].classList.remove('drop_list_item_selected');
        brandItems[j].classList.remove('drop_list_item_not_selected');
      }
      brandItems[_i3].classList.add('drop_list_item_selected');
      if (_i3 < 6) {
        brandItems[_i3+6].classList.add('drop_list_item_selected');
      }

      if (brandItems[_i3].innerText === 'Not selected') {
        brandPicked[0].innerHTML = '';
        buttonBrand[0].classList.remove('drop_btn_selected');
        buttonBrand[0].classList.add('drop_btn_not_selected');
        brandPicked[1].innerHTML = '';
        buttonBrand[1].classList.remove('drop_btn_selected');
        buttonBrand[1].classList.add('drop_btn_not_selected');
        brandItems[_i3].classList.add('drop_list_item_not_selected');
        if (_i3 < 6) {
          brandItems[_i3+6].classList.add('drop_list_item_not_selected');
        }
      }
    });
  };

  for (var _i3 = 0; _i3 < brandItems.length; _i3++) {
    _loop4(_i3);
  }

  var _loop5 = function _loop5(_i4) {
    sizeItems[_i4].addEventListener('click', function () {
      sizePicked[0].innerHTML = sizeItems[_i4].innerText;
      buttonSize[0].classList.add('drop_btn_selected');
      buttonSize[0].classList.remove('drop_btn_not_selected');
      sizePicked[1].innerHTML = sizeItems[_i4].innerText;
      buttonSize[1].classList.add('drop_btn_selected');
      buttonSize[1].classList.remove('drop_btn_not_selected');
      for (var j = 0; j < sizeItems.length; j++) {
        sizeItems[j].classList.remove('drop_list_item_selected');
        sizeItems[j].classList.remove('drop_list_item_not_selected');
      }
      sizeItems[_i4].classList.add('drop_list_item_selected');
      if (_i4 < 9) {
        sizeItems[_i4+9].classList.add('drop_list_item_selected');
      }

      if (sizeItems[_i4].innerText === 'Not selected') {
        sizePicked[0].innerHTML = '';
        buttonSize[0].classList.remove('drop_btn_selected');
        buttonSize[0].classList.add('drop_btn_not_selected');
        sizePicked[1].innerHTML = '';
        buttonSize[1].classList.remove('drop_btn_selected');
        buttonSize[1].classList.add('drop_btn_not_selected');
        sizeItems[_i4].classList.add('drop_list_item_not_selected');
        if (_i4 < 9) {
          sizeItems[_i4+9].classList.add('drop_list_item_not_selected');
        }
      }
    });
  };

  for (var _i4 = 0; _i4 < sizeItems.length; _i4++) {
    _loop5(_i4);
  }

  var _loop6 = function _loop6(_i5) {
    priceItems[_i5].addEventListener('click', function () {
      pricePicked[0].innerHTML = priceItems[_i5].innerText;
      buttonPrice[0].classList.add('drop_btn_selected');
      buttonPrice[0].classList.remove('drop_btn_not_selected');
      pricePicked[1].innerHTML = priceItems[_i5].innerText;
      buttonPrice[1].classList.add('drop_btn_selected');
      buttonPrice[1].classList.remove('drop_btn_not_selected');
      for (var j = 0; j < priceItems.length; j++) {
        priceItems[j].classList.remove('drop_list_item_selected');
        priceItems[j].classList.remove('drop_list_item_not_selected');
      }
      priceItems[_i5].classList.add('drop_list_item_selected');
      if (_i5 < 4) {
        priceItems[_i5+4].classList.add('drop_list_item_selected');
      }

      if (priceItems[_i5].innerText === 'Not selected') {
        pricePicked[0].innerHTML = '';
        buttonPrice[0].classList.remove('drop_btn_selected');
        buttonPrice[0].classList.add('drop_btn_not_selected');
        pricePicked[1].innerHTML = '';
        buttonPrice[1].classList.remove('drop_btn_selected');
        buttonPrice[1].classList.add('drop_btn_not_selected');
        priceItems[_i5].classList.add('drop_list_item_not_selected');
        if (_i5 < 4) {
          priceItems[_i5+4].classList.add('drop_list_item_not_selected');
        }
      }
    });
  };

  for (var _i5 = 0; _i5 < priceItems.length; _i5++) {
    _loop6(_i5);
  }

  dropListTabletMobile.addEventListener('click', function() {
    dropListContentWrapper.style.display = 'flex';
    dropListContentClose.style.display = 'inline';
    this.children[5].style.background = 'none';
  });

  dropListContentClose.addEventListener('click', function(e) {
    e.stopPropagation();
    dropListContentWrapper.style.display = 'none';
    dropListContentClose.style.display = 'none';
    this.parentNode.children[5].style.background = 'no-repeat url(img/list_down.png) right';  
  }); 
}

filterCreate();
fillCatalog();
addBannerToCatalog();