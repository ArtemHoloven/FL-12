var totalPriceSpan = document.getElementById('bag_total_price');
var totalItemsSpan = document.getElementById('bag_total_items');
var addToBagButton = document.getElementById('section_item_details_button_add');
var itemDetailsImages = document.getElementById('section_item_details_images');
var itemDetailsInfo = document.getElementById('section_item_details_info');
var bagTotalPrice = 0;
var bagTotalItems = 0;
var item;

function fillItem(item) {
  var itemDetailsMainImg = document.createElement('img');
  itemDetailsMainImg.id = 'section_item_details_main_image';
  itemDetailsMainImg.src = item.preview[0];
  itemDetailsImages.appendChild(itemDetailsMainImg);
  var itemDetailsThumbImages = document.createElement('div');
  itemDetailsThumbImages.classList.add('section_item_details_thumbnail_images');
  itemDetailsImages.appendChild(itemDetailsThumbImages);
  var itemDetailsThumbFirstImg = document.createElement('img');
  itemDetailsThumbFirstImg.classList.add('section_item_details_thumbnail_image');
  itemDetailsThumbFirstImg.src = item.preview[0];
  itemDetailsThumbImages.appendChild(itemDetailsThumbFirstImg);
  var itemDetailsThumbSecondImg = document.createElement('img');
  itemDetailsThumbSecondImg.classList.add('section_item_details_thumbnail_image');
  itemDetailsThumbSecondImg.src = item.preview[1];
  itemDetailsThumbImages.appendChild(itemDetailsThumbSecondImg);
  var itemDetailsThumbThirdImg = document.createElement('img');
  itemDetailsThumbThirdImg.classList.add('section_item_details_thumbnail_image');
  itemDetailsThumbThirdImg.src = item.preview[2];
  itemDetailsThumbImages.appendChild(itemDetailsThumbThirdImg);
  var itemDetailsTitle = document.createElement('h2');
  itemDetailsTitle.id = 'section_item_details_title';
  itemDetailsTitle.innerHTML = item.title;
  itemDetailsInfo.appendChild(itemDetailsTitle);
  var itemDetailsDesc = document.getElementById('section_item_details_desc');
  itemDetailsDesc.innerHTML = item.description;
  var itemDetailsPrice = document.getElementById('section_item_details_price');
  itemDetailsPrice.innerHTML = '£' + item.discountedPrice.toFixed(2);
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
    itemDetailsSizesValue.innerHTML = item.sizes[_i];
    itemDetailsSizes.appendChild(itemDetailsSizesValue);
    var itemDetailsSizesAllButtons = document.getElementsByClassName('section_item_details_sizes_button');
    itemDetailsSizesValue.addEventListener('click', function () {
      for (var _i3 = 0; _i3 < itemDetailsSizesAllButtons.length; _i3++) {
        itemDetailsSizesAllButtons[_i3].classList.remove('section_item_details_sizes_button_clicked');
      }
      item.sizes = this.innerText;
      this.classList.add('section_item_details_sizes_button_clicked');
    });
  };

  for (var _i = 0; _i < item.sizes.length; _i++) {
    _loop(_i);
  }
  item.sizes = item.sizes[0];

  var _loop2 = function _loop2(_i2) {
    var itemDetailsColorsValue = document.createElement('button');
    itemDetailsColorsValue.classList.add('section_item_details_colors_button');
    itemDetailsColorsValue.innerHTML = item.colors[_i2];
    itemDetailsColors.appendChild(itemDetailsColorsValue);
    var itemDetailsColorsAllButtons = document.getElementsByClassName('section_item_details_colors_button');
    itemDetailsColorsValue.addEventListener('click', function () {
      for (var _i4 = 0; _i4 < itemDetailsColorsAllButtons.length; _i4++) {
        itemDetailsColorsAllButtons[_i4].classList.remove('section_item_details_colors_button_clicked');
      }
      item.colors = this.innerText;
      this.classList.add('section_item_details_colors_button_clicked');
    });
  };

  for (var _i2 = 0; _i2 < item.colors.length; _i2++) {
    _loop2(_i2);
  }
  item.colors = item.colors[0];

  addToBagButton.addEventListener('click', function () {
    if (sessionStorage.bag !== undefined) {
      tempBag = JSON.parse(sessionStorage.getItem('bag'));
    }
    var zero = 0;
    item.quantity = 1;
    for (var i = 0; i < tempBag.length; i++) {
      if (item.id === tempBag[i].id && item.sizes === tempBag[i].sizes && item.colors === tempBag[i].colors) {
        tempBag[i].quantity++;
      } else {
        zero++;
      }
    }
    if (zero === tempBag.length) {
      tempBag.push(item);
    }
    sessionStorage.setItem('bag', JSON.stringify(tempBag));
    bagTotalItems++;
    sessionStorage.setItem('items', bagTotalItems);
    bagTotalPrice += item.discountedPrice;
    sessionStorage.setItem('price', bagTotalPrice);
    totalPriceSpan.innerHTML = '£' + bagTotalPrice.toFixed(2);
    totalItemsSpan.innerHTML = bagTotalItems;
  });
}

function findItem() {
	for (var i = 0; i < catalog.length; i++) {
		if (sessionStorage.id === catalog[i].id) {
			item = catalog[i];
			fillItem(item);
		}
	}
}
findItem();
