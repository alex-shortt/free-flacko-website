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
    name: "Free Flacko",
    filename: "CactusHoodie1",
    price: "225",
    baseSKU: "YMD1-HY-WHT",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: {
      pos: [0.709, -0.48, 2.88],
      minDist: 75,
      maxDist: 100,
      scale: 0.1
    }
  }
};
