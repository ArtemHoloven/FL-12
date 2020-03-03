var totalPriceSpan = document.getElementById('bag_total_price');
var totalItemsSpan = document.getElementById('bag_total_items');
var addToBagButton = document.getElementById('section_item_details_button_add');
var itemDetailsImages = document.getElementById('section_item_details_images');
var itemDetailsInfo = document.getElementById('section_item_details_info');
var bagTotalPrice = 0;
var bagTotalItems = 0;

function fillItem(item) {
  var itemDetailsMainImg = document.createElement('img');
  itemDetailsMainImg.id = 'section_item_details_main_image';
  itemDetailsMainImg.src = catalog[item].preview[0];
  itemDetailsImages.appendChild(itemDetailsMainImg);
  var itemDetailsThumbImages = document.createElement('div');
  itemDetailsThumbImages.classList.add('section_item_details_thumbnail_images');
  itemDetailsImages.appendChild(itemDetailsThumbImages);
  var itemDetailsThumbFirstImg = document.createElement('img');
  itemDetailsThumbFirstImg.classList.add('section_item_details_thumbnail_image');
  itemDetailsThumbFirstImg.src = catalog[item].preview[0];
  itemDetailsThumbImages.appendChild(itemDetailsThumbFirstImg);
  var itemDetailsThumbSecondImg = document.createElement('img');
  itemDetailsThumbSecondImg.classList.add('section_item_details_thumbnail_image');
  itemDetailsThumbSecondImg.src = catalog[item].preview[1];
  itemDetailsThumbImages.appendChild(itemDetailsThumbSecondImg);
  var itemDetailsThumbThirdImg = document.createElement('img');
  itemDetailsThumbThirdImg.classList.add('section_item_details_thumbnail_image');
  itemDetailsThumbThirdImg.src = catalog[item].preview[2];
  itemDetailsThumbImages.appendChild(itemDetailsThumbThirdImg);
  var itemDetailsTitle = document.createElement('h2');
  itemDetailsTitle.id = 'section_item_details_title';
  itemDetailsTitle.innerHTML = catalog[item].title;
  itemDetailsInfo.appendChild(itemDetailsTitle);
  var itemDetailsDesc = document.getElementById('section_item_details_desc');
  itemDetailsDesc.innerHTML = catalog[item].description;
  var itemDetailsPrice = document.getElementById('section_item_details_price');
  itemDetailsPrice.innerHTML = '£' + catalog[item].discountedPrice.toFixed(2);
  var itemDetailsThumbImgs = document.getElementsByClassName('section_item_details_thumbnail_image');

  for (var i = 0; i < itemDetailsThumbImgs.length; i++) {
    itemDetailsThumbImgs[i].addEventListener('click', function (e) {
      itemDetailsMainImg.src = e.target.src;
    });
  }

  var itemDetailsSizes = document.getElementById('section_item_details_sizes');
  var itemDetailsColors = document.getElementById('section_item_details_colors');

  var _loop = function _loop(_i) {
    var itemDetailsSizesValue = document.createElement('button');
    itemDetailsSizesValue.classList.add('section_item_details_sizes_button');
    itemDetailsSizesValue.innerHTML = catalog[item].sizes[_i];
    itemDetailsSizes.appendChild(itemDetailsSizesValue);
    var itemDetailsSizesAllButtons = document.getElementsByClassName('section_item_details_sizes_button');
    itemDetailsSizesValue.addEventListener('click', function () {
      for (var _i3 = 0; _i3 < itemDetailsSizesAllButtons.length; _i3++) {
        itemDetailsSizesAllButtons[_i3].classList.remove('section_item_details_sizes_button_clicked');
      }

      this.classList.add('section_item_details_sizes_button_clicked');
    });
  };

  for (var _i = 0; _i < catalog[item].sizes.length; _i++) {
    _loop(_i);
  }

  var _loop2 = function _loop2(_i2) {
    var itemDetailsColorsValue = document.createElement('button');
    itemDetailsColorsValue.classList.add('section_item_details_colors_button');
    itemDetailsColorsValue.innerHTML = catalog[item].colors[_i2];
    itemDetailsColors.appendChild(itemDetailsColorsValue);
    var itemDetailsColorsAllButtons = document.getElementsByClassName('section_item_details_colors_button');
    itemDetailsColorsValue.addEventListener('click', function () {
      for (var _i4 = 0; _i4 < itemDetailsColorsAllButtons.length; _i4++) {
        itemDetailsColorsAllButtons[_i4].classList.remove('section_item_details_colors_button_clicked');
      }

      this.classList.add('section_item_details_colors_button_clicked');
    });
  };

  for (var _i2 = 0; _i2 < catalog[item].colors.length; _i2++) {
    _loop2(_i2);
  }

  addToBagButton.addEventListener('click', function () {
    bagTotalItems++;
    bagTotalPrice += catalog[item].price;
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    totalItemsSpan.innerHTML = bagTotalItems;
  });
}

fillItem(6);