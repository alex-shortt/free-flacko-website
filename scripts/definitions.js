/*
1: {
        name: name in cart,
        filename: filename in cloudfront / gifs,
        price: price displayed,
        baseSKU: base sku in shopify,
        sizes: [
            array of available sizes in shopify (check code for conjunction
             between sku and size)
        ],
        camera: {
            pos: [
                -7.6, -2.4, 15.7
            ],
            minDist: 8,
            maxDist: 25
        }
    },
*/

var shop = {
  1: {
    name: "Free Flacko Tee",
    filename: "free-rocky",
    price: "50",
    baseSKU: "IGEN-SS-BLK",
    sizes: ["SM", "MD", "LG", "XL"]
  }
};
