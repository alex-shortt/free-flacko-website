/*
 ____    ____          _
|_   \  /   _|        (_)
  |   \/   |   ,--.   __   _ .--.
  | |\  /| |  `'_\ : [  | [ `.-. |
 _| |_\/_| |_ // | |, | |  | | | |
|_____||_____|\'-;__/[___][___||__]
Main.js
http://patorjk.com/software/taag/#p=display&f=Varsity&t=Main
*/
var noise;
var smartphones =
  "screen and (max-width: 480px) and (orientation: portrait), screen and (max-height: 480px) and (orientation: landscape)";

function initImageGlitch() {
  jQuery.fn.noisy = function(opts) {
    opts = jQuery.extend({}, jQuery.fn.noisy.defs, opts);
    var instance = this;

    var _pt = [
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      },
      {
        x: 0,
        y: 0
      }
    ];

    var element = jQuery(this);
    var rnd1 = [Math.random() + 1, Math.random() + 1, Math.random() + 1];
    var rnd2 = [0, 0, 0];
    var cnt = 0;
    var arr = [];
    var loop = null;
    var t = null;
    var rows = opts.rows;
    var ratio = opts.ratio;
    var img = opts.img;
    var mshov = false;
    var id = opts.id;

    this.run = function() {
      var i;
      for (i = 0; i < 3; i++) {
        if (rnd1[i] >= 1) {
          --rnd1[i];
          rnd2[i] = Math.random() / 4 + 0.03;
        }
        rnd1[i] += rnd2[i];
        cnt += (38 - cnt) * 0.25;
        _pt[i].x = Math.ceil(
          Math.sin(rnd1[i] * Math.PI * 2) * rnd2[i] * cnt * 2
        );
        _pt[i].y = 0;
      }
      var num =
        (Math.abs(_pt[0].x) + Math.abs(_pt[1].x) + Math.abs(_pt[2].x) + 8) / 4;

      i = rows;
      while ((i -= 1)) {
        var _off =
          Math.sin((i / rows) * Math.PI * (Math.random() / 8 + 1)) *
          0.8 *
          num *
          num;
        arr[i].css({
          transform:
            "translateZ(0) translate3d(0, 0, 0) translateX(" + _off + "px)",
          webkitTransform:
            "translateZ(0) translate3d(0, 0, 0) translateX(" + _off + "px)"
        });
      }
    };

    this.go = function() {
      mshov = true;
      clearInterval(loop);
      loop = setInterval(this.run, 30);
    };

    this.pause = function() {
      mshov = false;
      clearInterval(loop);
      loop = null;

      for (var i = 0; i < rows; i++) {
        arr[i].css({
          transform: "translateZ(0) translate3d(0, 0, 0)",
          webkitTransform: "translateZ(0) translate3d(0, 0, 0)"
        });
      }
    };

    this.updateContainerBounds = function() {
      var containerWidth = $(id).outerWidth();
      var containerHeight = $(id).outerHeight();

      if (ratio < containerHeight / containerWidth) {
        var newHeight = containerWidth * ratio;
        element.css({
          height: newHeight + "px",
          padding: (containerHeight - newHeight) / 2 + "px 0px"
        });
      } else {
        var newWidth = containerHeight / ratio;
        element.css({
          height: containerHeight + "px",
          padding: "0px " + (containerWidth - newWidth) / 2 + "px"
        });
      }
    };

    this.changeImage = function(newImage) {
      var containerWidth = $(id).outerWidth();
      var containerHeight = $(id).outerHeight();

      var img = new Image();
      img.onload = function() {
        ratio = this.height / this.width;

        for (var i = 0; i < rows; i++) {
          element
            .find("div")
            .eq(i)
            .css({
              backgroundImage: "url(" + newImage + ")"
            });
        }

        if (ratio < containerHeight / containerWidth) {
          var newHeight = containerWidth * ratio;
          element.css({
            height: newHeight + "px",
            padding: (containerHeight - newHeight) / 2 + "px 0px"
          });
        } else {
          var newWidth = containerHeight / ratio;
          element.css({
            height: containerHeight + "px",
            padding: "0px " + (containerWidth - newWidth) / 2 + "px"
          });
        }
      };
      img.src = newImage;
    };

    element.css({
      position: "relative",
      padding: "0px calc((430px - " + 430 * ratio + "px) / 2)"
    });

    for (var i = 0; i < rows; i++) {
      var pos = (i * 100) / rows + "%";
      element.append("<div></div>");
      element
        .find("div")
        .eq(i)
        .css({
          backgroundImage: "url(" + img + ")",
          backgroundPosition: "0px " + (pos == "0%" ? "0.2%" : pos),
          backgroundSize: "cover",
          width: "100%",
          flex: "1",
          cursor: "pointer",
          transform: "translateZ(0) translate3d(0, 0, 0)",
          webkitTransform: "translateZ(0) translate3d(0, 0, 0)"
        });
      arr.push(element.find("div").eq(i));
    }

    if (opts.auto) {
      t = setInterval(function() {
        if (mshov) return;
        instance.go();

        setTimeout(instance.pause(), (opts.delay / 2) * Math.random());
      }, opts.delay);
    }

    this.initialize = function() {
      return this;
    };

    return this.initialize();
  };

  jQuery.fn.noisy.defs = {
    rows: 0,
    ratio: 1,
    img: "",
    auto: false,
    delay: 7000
  };
}

function initModal() {
  $(".modal-open").on("click", function(e) {
    var $this = $(this),
      modal = $($this).data("modal");

    $(modal)
      .parents(".modal-overlay")
      .addClass("modal-opened");
    setTimeout(function() {
      $(modal).addClass("modal-opened");
    }, 350);

    $(document).on("click", function(e) {
      var target = $(e.target);

      if ($(target).hasClass("modal-overlay")) {
        $(target)
          .find(".modal-modal")
          .each(function() {
            $(this).removeClass("modal-opened");
          });
        setTimeout(function() {
          $(target).removeClass("modal-opened");
        }, 350);
      }
    });
  });

  $(".modal-close").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
      modal = $($this).data("modal");

    $(modal).removeClass("modal-opened");
    setTimeout(function() {
      $(modal)
        .parents(".modal-overlay")
        .removeClass("modal-opened");
    }, 350);
  });
}

function openModal(modal) {
  if (modal.indexOf("#") == -1) {
    modal = "#" + modal;
  }

  $(modal)
    .parents(".modal-overlay")
    .addClass("modal-opened");
  setTimeout(function() {
    $(modal).addClass("modal-opened");
  }, 350);

  $(document).on("click", function(e) {
    var target = $(e.target);

    if ($(target).hasClass("modal-overlay")) {
      $(target)
        .find(".modal-modal")
        .each(function() {
          $(this).removeClass("modal-opened");
        });
      setTimeout(function() {
        $(target).removeClass("modal-opened");
      }, 350);
    }
  });
}

function closeModal(modal) {
  if (modal.indexOf("#") == -1) {
    modal = "#" + modal;
  }
  $(modal).removeClass("modal-opened");
  setTimeout(function() {
    $(modal)
      .parents(".modal-overlay")
      .removeClass("modal-opened");
  }, 350);
}

function isSafari() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("safari") != -1) {
    if (ua.indexOf("chrome") > -1) {
      return false;
    } else {
      return true;
    }
  }
}

function turnScreenOn(secs) {
  if (isSafari()) {
    $(".awge-content").css(
      "-webkit-animation",
      "turn-on-safari " + secs + "s linear"
    );
  } else {
    $(".awge-content").css("animation", "turn-on " + secs + "s linear");
  }
}

function turnScreenOff(secs) {
  if (isSafari()) {
    $(".awge-content").css(
      "-webkit-animation",
      "turn-off-safari " + secs + "s linear forwards"
    );
  } else {
    $(".awge-content").css(
      "animation",
      "turn-off " + secs + "s linear forwards"
    );
  }
}

function notify(message) {
  $("#notify-message").text(message.toUpperCase());
  openModal("notify-modal");
}

function startTextGlitch() {
  $(".shop-glitch-placeholder").addClass("shop-glitch");
}

function stopTextGlitch() {
  $(".shop-glitch-placeholder").removeClass("shop-glitch");
}

function initTerms() {
  $(".awge-terms").on("click", function() {
    window.location.hash = "terms";
  });
  $(".awge-privacy").on("click", function() {
    window.location.hash = "privacy";
  });
}

function printCredits() {
  // console.log("                                                        \
  //         \n      _  ____      ____   ______  ________                 \
  //         \n     / \\|_  _|    |_  _|.' ___  ||_   __  |               \
  //         \n    / _ \\ \\ \\  /\\  / / / .'   \\_|  | |_ \\_|          \
  //         \n   / ___ \\ \\ \\/  \\/ /  | |   ____  |  _| _             \
  //         \n _/ /   \\ \\_\\  /\\  /   \\ `.___]  |_| |__/ |           \
  //         \n|____| |____|\\/  \\/     `._____.'|________|              \
  //         \n____________________________________________               \
  //         \n____________________________________________               \
  //         \n                                                           \
  //         \nCreated by Ilya Zaidze and Alex Shortt                     \
  //         \nAlex Shortt :: Developer                                   \
  //         \n  >Twitter: @_alexshortt                                   \
  //         \n  >Instagram: @alexander.shortt                            \
  //         \nIlya Zaidze :: Creative + Design                           \
  //         \n  >Twitter: @ilya2x                                        \
  //         \n  >Instagram: @ilya2x                                      \
  //         ");
}

function isMobileView() {
  var mq = window.matchMedia(smartphones);
  return mq.matches;
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/*
 _______                       _    _
|_   __ \                     / |_ (_)
  | |__) |,--.   .--./) ,--. `| |-'__   .--.   _ .--.
  |  ___/`'_\ : / /'`\;`'_\ : | | [  |/ .'`\ \[ `.-. |
 _| |_   // | |,\ \._//// | |,| |, | || \__. | | | | |
|_____|  \'-;__/.',__` \'-;__/\__/[___]'.__.' [___||__]
               ( ( __))
Pagation.js
http://patorjk.com/software/taag/#p=display&f=Varsity&t=Pagation
*/

function autoGlitch() {
  if(noise) noise.go();
  setTimeout(function() {
    if(noise) noise.pause();
  }, Math.random() * 300 + 400);
  setTimeout(autoGlitch, Math.random() * 2000 + 3000);
}

function shopLoad() {
  $("#shop-option-awge").click(function() {});

  $("#shop-option-tstng").click(function() {
    window.open("https://tstng.co/store.html");
  });

  $("#shop-item-decrease").click(function() {
    changeShopPage(-1);
  });

  $("#shop-item-increase").click(function() {
    changeShopPage(1);
  });

  $("#shop-buy-button").click(function() {
    if (!isOutOfStock(shop[currentItem.index].baseSKU + "-" + currentItem.size))
      addToCart();
  });

  $("#cart-checkout").click(function() {
    cleanCart();
    if (Object.keys(getCart()).length == 0) return;
    closeModal("cart-modal");
    openCheckoutLink();
  });

  $(".shop-items-item").click(function() {
    if(noise) noise.go();
    setTimeout(function() {
      if(noise) noise.pause();
    }, 750);
  });

  setTimeout(autoGlitch, 2000);

  var img = new Image();
  img.onload = function() {
    $("#shop-item").html("");

    noise = $("#shop-item").noisy({
      rows: 30,
      img: resolveImgURL(shop[1].filename),
      ratio: this.height / this.width,
      id: "#shop-item"
    });

    window.addEventListener("resize", function() {
      noise.updateContainerBounds();
    });

    $("#shop-item-mobile").css(
      "background-image",
      "url(" + resolveImgURL(shop[1].filename)
    );

    setShopProduct(1);
  };
  img.src = resolveImgURL(shop[1].filename);
  refreshCart();
}

function resolveImgURL(name) {
  return "https://dwvo2npct47gg.cloudfront.net/gifs/" + name + ".gif";
}

/*
  ______   __
.' ____ \ [  |
| (___ \_| | |--.   .--.   _ .--.
 _.____`.  | .-. |/ .'`\ \[ '/'`\ \
| \____) | | | | || \__. | | \__/ |
 \______.'[___]|__]'.__.'  | ;.__/
                          [__|
shop.js
http://patorjk.com/software/taag/#p=display&f=Varsity&t=Shop
*/

var currentItem = {};

function setShopProduct(index) {
  if (shop[index] == null) {
    index = 1;
  }

  var price = $("#shop-item-price");
  var name = $("#shop-item-name");
  var progress = $("#shop-item-progress");
  var image = $("#shop-item-image");
  var message = $("#shop-items-message");
  var numItems = Object.keys(shop).length;

  noise.go();
  startTextGlitch();
  $("#shop-item-mobile").css(
    "background-image",
    "url(" + resolveImgURL(shop[index].filename) + ")"
  );

  setTimeout(function() {
    noise.changeImage(resolveImgURL(shop[index].filename));

    $(progress)
      .html("" + index + "/" + numItems)
      .attr("data-text", "" + index + "/" + numItems);
    var localPrice =
      shop[index].price == "Sold Out" ? "Sold Out" : "$" + shop[index].price;
    $(price)
      .html(localPrice)
      .attr("data-text", localPrice)
      .data(localPrice);
    $(message).html(shop[index].message);
    $(image).prop("src", resolveImgURL(shop[index].filename));
    $(name)
      .html(shop[index].name)
      .attr("data-text", shop[index].name)
      .data(shop[index].name);

    currentItem.index = index;
    resetSizes();

    setTimeout(function() {
      noise.pause();
      stopTextGlitch();
    }, 400);
  }, 400);
}

function changeShopPage(offset) {
  var numItems = Object.keys(shop).length;
  var index = parseInt(currentItem.index) + offset;

  if (index > numItems) index = 1;
  else if (index < 1) index = numItems;

  setShopProduct(index);
}

function closeSizes(size) {
  var wrapper = $(".shop-size-wrapper");
  var container = $(".shop-items-options-middle");

  $(wrapper).html("");
  if (size == null) {
    $(wrapper).append(
      '<h1 onclick="openSizes()" class="shop-item-option shop-size-button">SIZE</h1>'
    );
    currentItem.size = null;
  } else {
    $(wrapper).append(
      '<h1 onclick="openSizes()" id="shop-size-final" class="shop-item-option shop-size-button">' +
        size +
        "</h1>"
    );
    currentItem.size = size;
  }

  updateBuyButton();

  $(container).css("width", "auto");
  $(container).removeClass("shop-items-options-middle-open");
}

function openSizes() {
  var wrapper = $(".shop-size-wrapper");
  var container = $(".shop-items-options-middle");
  var index = currentItem.index;
  var numSizes = Object.keys(shop[index].sizes).length;

  $(wrapper).html("");
  for (var i = 0; i < numSizes; i++) {
    var size = shop[index].sizes[i];
    var baseSKU = shop[index].baseSKU;
    if (isOutOfStock(baseSKU + "-" + size)) {
      $(wrapper).append(
        '<h1 class="shop-item-option shop-size-option shop-size-option-disabled">' +
          size +
          "</h1>"
      );
    } else {
      $(wrapper).append(
        "<h1 onclick=\"closeSizes('" +
          size +
          '\')" class="shop-item-option shop-size-option">' +
          size +
          "</h1>"
      );
    }
  }
  $(container).css("width", $(container).width());

  $(container).animate(
    {
      width: "100%"
    },
    250
  );

  $(container).addClass("shop-items-options-middle-open");
}

function resetSizes() {
  closeSizes();
  var wrapper = $(".shop-size-wrapper");
  var container = $(".shop-items-options-middle");

  $(wrapper).html("");
  $(container).removeClass("shop-items-options-middle-open");
  if (shop[currentItem.index].sizes == null) {
    $(wrapper).css("display", "none");
    currentItem.size = "OS";
    updateBuyButton();
  } else {
    $(wrapper).css("display", "flex");
    $(wrapper).append(
      '<h1 onclick="openSizes()" class="shop-item-option shop-size-button">SIZE</h1>'
    );
    currentItem.size = null;
  }
}

$(document).on("click", function(e) {
  var target = $(e.target);
  var container = $(".shop-items-options-middle");
  if ($(container).hasClass("shop-items-options-middle-open")) {
    if (
      !$(target).hasClass("shop-items-options-middle") &&
      !$(target).hasClass("shop-size-wrapper") &&
      !$(target).hasClass("shop-item-option")
    ) {
      closeSizes(currentItem.size);
    }
  }
});

function getCart() {
  try {
    return localStorage["cart"] == null ? {} : JSON.parse(localStorage["cart"]);
  } catch (e) {
    console.log("Error Getting Cart - Emptying... " + " :: " + e);
    localStorage["cart"] = "{}";
    return JSON.parse(localStorage["cart"]);
  }
}

function cleanCart() {
  // make sure all skus in cart are valid
  var cart = getCart();

  if (Object.keys(cart).length == 0) {
    return;
  }

  for (var i = Object.keys(cart).length - 1; i >= 0; i--) {
    var id = Object.keys(cart)[i];
    var baseSKU = id.substring(0, id.lastIndexOf("-"));

    var hasBaseSKU = false;
    for (var x = 1; x <= Object.keys(shop).length; x++) {
      if (shop[x].baseSKU == baseSKU) {
        hasBaseSKU = true;
        break;
      }
    }

    if (!hasBaseSKU) {
      delete cart[id];
    }
  }

  localStorage["cart"] = JSON.stringify(cart);
}

function refreshCart() {
  // refresh the cart modal html
  cleanCart();

  var container = $("#cart-container");
  $(container).html("");

  var cart = getCart();
  for (var i = 0; i < Object.keys(cart).length; i++) {
    var id = Object.keys(cart)[i];
    var baseSKU = id.substring(0, id.lastIndexOf("-"));
    var index = -1;

    if (cart[id] == 0) {
      continue;
    }

    for (var x = 1; x <= Object.keys(shop).length; x++) {
      if (shop[x].baseSKU == baseSKU) {
        index = x;
        break;
      }
    }

    var item = shop[index];
    var size = id.split("-")[id.split("-").length - 1];

    $(container).append(
      "<div id=" +
        id +
        ' class="cart-item"> \
                        <div class="cart-item-delete-wrapper">\
                            <h1 class="cart-item-delete" onclick="removeFromCart(\'' +
        id +
        '\')">X</h1>\
                        </div>\
                        <div class="cart-item-image" style="background-image: url(\'' +
        resolveImgURL(item.filename) +
        '\')"></div>\
                        <div class="cart-item-name-wrapper">\
                            <h1 class="cart-item-name">' +
        item.name +
        (size == "OS" ? "" : " - SZ " + size) +
        '</h1>\
                        </div>\
                        <div class="cart-item-quantity-wrapper">\
                            <h1 class="cart-item-quantity">' +
        cart[id] +
        '</h1>\
                        </div>\
                        <div class="cart-item-price-wrapper">\
                            <h1 class="cart-item-price">$' +
        parseFloat(item.price) * parseFloat(cart[id]) +
        "</h1>\
                        </div>\
                    </div>"
    );
  }

  if ($(container).html() == "") {
    $(container).append(
      '<div class="cart-items-text">YOUR CART IS EMPTY...</div>'
    );
  }

  localStorage["cart"] = JSON.stringify(cart);
}

function addToCart() {
  // add current item to js cart with following notation
  // baseSKU-size: num
  // i.e. awge-shirt-MD: 2
  if (currentItem.size == null) {
    console.log("Add to cart failed :: No Size");
    return;
  }

  var baseSKU = shop[currentItem.index].baseSKU;
  var size = currentItem.size;
  var item = shop[currentItem.index];
  var id = baseSKU + "-" + size;
  var cart = getCart();
  if (cart[id] == null) {
    cart[id] = 0;
  }

  cart[id]++;

  localStorage["cart"] = JSON.stringify(cart);
  refreshCart();

  openModal("cart-modal");
}

function removeFromCart(id) {
  var cart = getCart();
  delete cart[id];
  localStorage["cart"] = JSON.stringify(cart);
  refreshCart();
}

function isOutOfStock(id) {
  return skuMatch[id] == null;
}

function updateBuyButton() {
  var buyButton = $("#shop-buy-button");
  var sizeButton = $("#shop-size-button");

  $(buyButton).removeClass("shop-buy-button-disabled");
  $(sizeButton).removeClass("shop-size-button-disabled");

  $(buyButton).text("Buy");

  if (!currentItem.index) {
    currentItem.index = 1;
  }

  var item = shop[currentItem.index];
  var sizes = item.sizes;
  var baseSKU = item.baseSKU;

  if (currentItem.index == null) {
    return;
  } else if (sizes == null && isOutOfStock(baseSKU + "-" + currentItem.size)) {
    // no sizes, check immediately
    $(sizeButton).addClass("shop-size-button-disabled");
    $(buyButton).addClass("shop-buy-button-disabled");
    $(buyButton).text("Sold Out");
  } else if (sizes != null && currentItem.size == null) {
    // multiple sizes, check all sizes
    var allOOS = true;
    for (var i = 0; i < sizes.length; i++) {
      var size = sizes[i];
      if (!isOutOfStock(baseSKU + "-" + size)) {
        allOOS = false;
        break;
      }
    }
    if (allOOS) {
      $(sizeButton).addClass("shop-size-button-disabled");
      $(buyButton).addClass("shop-buy-button-disabled");
      $(buyButton).text("Sold Out");
    }
  }
}

/*
   ______  __                    __                       _
 .' ___  |[  |                  [  |  _                  / |_
/ .'   \_| | |--.  .---.  .---.  | | / ]  .--.   __   _ `| |-'
| |        | .-. |/ /__\\/ /'`\] | '' < / .'`\ \[  | | | | |
\ `.___.'\ | | | || \__.,| \__.  | |`\ \| \__. | | \_/ |,| |,
 `.____ .'[___]|__]'.__.''.___.'[__|  \_]'.__.'  '.__.'_/\__/

checkout.js
http://patorjk.com/software/taag/#p=display&f=Varsity&t=Checkout%0A
*/

function openCheckoutLink() {
  var cart = getCart();

  var checkoutItems = [];
  for (var i = 0; i < Object.keys(cart).length; i++) {
    var id = Object.keys(cart)[i];
    var variant = skuMatch[id];
    checkoutItems.push({
      variantId: variant.id,
      quantity: cart[id]
    });
  }

  var lineItems = { lineItems: checkoutItems };
  lineItems = JSON.stringify(lineItems);
  lineItems = lineItems.replace(/\"([^(\")"]+)\":/g, "$1:");
  console.log(lineItems);

  fetch("https://awge-2018.myshopify.com/api/2019-07/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
      "X-Shopify-Storefront-Access-Token": "c93be35bf35584f666b857f0747fa13d"
    },
    body:
      "mutation checkoutCreate { \
          checkoutCreate(input: " +
      lineItems +
      ") { \
              checkout { \
                webUrl \
              } \
          } \
       }"
  })
    .then(function(r) {
      return r.json();
    })
    .then(function(data) {
      console.log("data", data);
      window.location = data.data.checkoutCreate.checkout.webUrl;
    });
}

function getCartSubtotal() {
  var cart = getCart();
  var subtotal = 0;
  for (var i = 0; i < Object.keys(cart).length; i++) {
    var id = Object.keys(cart)[i];

    var type = id.split("-")[0];
    var index = id.split("-")[1];
    var size = id.split("-")[2];
    var item = shop[type][index];

    if (item == null) {
      cart[id] = 0;
    }

    subtotal += parseFloat(item.price) * parseFloat(cart[id]);
  }
  return subtotal;
}

/*
 _______                                              _
|_   __ \                                            / |_
  | |__) |,--.    _   __  _ .--..--.  .---.  _ .--. `| |-'
  |  ___/`'_\ :  [ \ [  ][ `.-. .-. |/ /__\\[ `.-. | | |
 _| |_   // | |,  \ '/ /  | | | | | || \__., | | | | | |,
|_____|  \'-;__/[\_:  /  [___||__||__]'.__.'[___||__]\__/
                 \__.'
Payment.js
http://patorjk.com/software/taag/#p=display&f=Varsity&t=Payment
*/

var checkoutShipping, checkoutEmail, orderData, shopClient;
var skuMatch = {};

function initShopify() {
  fetch("https://awge-2018.myshopify.com/api/2019-07/graphql.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/graphql",
      "X-Shopify-Storefront-Access-Token": "c93be35bf35584f666b857f0747fa13d"
    },
    body:
      '{ productByHandle(handle: "free-rocky-tee") { \
                variants(first: 10) { edges { node { \
                  id \
                  title \
                  sku \
                  price \
                  availableForSale \
                } } } \
            } }'
  })
    .then(function(r) {
      return r.json();
    })
    .then(function(data) {
      console.log("data", data);
      var product = data.data.productByHandle;
      var variants = product.variants.edges;
      for (var x = 0; x < variants.length; x++) {
        if (variants[x].node.availableForSale) {
          skuMatch[variants[x].node.sku] = variants[x].node;
        }
      }
      console.log(skuMatch);
      updateBuyButton();
    });
}
