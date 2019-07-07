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
    name: "Cactus Hoodie v1",
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
  },
  2: {
    name: "Cactus Hoodie v2",
    filename: "CactusHoodie2",
    price: "225",
    baseSKU: "YMD2-HY-WHT",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: {
      pos: [0.709, -0.48, 2.88],
      minDist: 75,
      maxDist: 100,
      scale: 0.1
    }
  },
  3: {
    name: "Yams Photo Hoodie",
    filename: "YamsPhotoHoodie",
    price: "185",
    baseSKU: "YMFA-HY-BLK",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: {
      pos: [0.709, -0.48, 2.88],
      minDist: 75,
      maxDist: 100,
      scale: 0.1
    }
  },
  4: {
    name: "Yams OFFWHITE Airbrush Hoodie",
    filename: "Airbrush_Hoodie",
    price: "400",
    baseSKU: "OFFW-HY-WHT",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: null // obj file was 1 GB
  },
  5: {
    name: "Yams OFFWHITE Airbrush Sweats",
    filename: "Airbrush_Sweats",
    price: "350",
    baseSKU: "OFFW-SW-WHT",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: {
      pos: [-7.6, -2.4, 15.7],
      minDist: 200,
      maxDist: 300,
      scale: 0.2
    }
  },
  // 6: {
  //   name: "Thunder Yams Tee",
  //   filename: "ThunderYams",
  //   price: "40",
  //   baseSKU: "YMTY-SS-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   camera: {
  //     pos: [0.709, -0.48, 2.88],
  //     minDist: 1,
  //     maxDist: 3
  //   }
  // },
  // 7: {
  //   name: "Yams X Vlone Black Tee",
  //   filename: "Yams%20X%20Vlone",
  //   price: "150",
  //   baseSKU: "YMVL-SS-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   camera: {
  //     pos: [0.709, -0.48, 2.88],
  //     minDist: 1,
  //     maxDist: 3
  //   }
  // },
  // 8: {
  //   name: "Yams X Vlone White Tee",
  //   filename: "Vlone_White",
  //   price: "150",
  //   baseSKU: "YMVL-SS-WHT",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   camera: {
  //     pos: [0.709, -0.48, 2.88],
  //     minDist: 1,
  //     maxDist: 3
  //   }
  // },
  6: {
    name: "Yams X Fredo Tee",
    filename: "Yams%20X%20Fredo",
    price: "185",
    baseSKU: "YMFD-SS-WHT",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: {
      pos: [0.709, -0.48, 2.88],
      minDist: 1,
      maxDist: 3
    }
  },
  7: {
    name: "Yams X Disco Inferno Tee",
    filename: "Yams%20X%20Disco%20Inferno",
    price: "85",
    baseSKU: "YMDI-SS-BLK",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: {
      pos: [0.709, -0.48, 2.88],
      minDist: 1,
      maxDist: 3
    }
  },
  8: {
    name: "Yams Airbrush Photo Tee",
    filename: "Yams_Airbrush%20Photo",
    price: "85",
    baseSKU: "YMAB-SS-WHT",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: {
      pos: [0.709, -0.48, 2.88],
      minDist: 1,
      maxDist: 3
    }
  },
  9: {
    name: "Yams Day 2019 White Longsleeve",
    filename: "YamsDay_19",
    price: "150",
    baseSKU: "YMBL-LS-WHT",
    sizes: ["SM", "MD", "LG", "XL"],
    camera: null
  },
  // 13: {
  //   name: "NWO Black Longsleeve",
  //   filename: "NWO",
  //   price: "60",
  //   baseSKU: "YMWP-LS-BLK",
  //   sizes: ["SM", "MD", "LG", "XL"],
  //   camera: null
  // },
  10: {
    name: "Airbrush Bandana",
    filename: "AirbrushBandana",
    price: "40",
    baseSKU: "YMAB-BN-WHT",
    sizes: null,
    camera: {
      pos: [0.709, -0.48, 2.88],
      minDist: 300,
      maxDist: 400
    }
  },
  11: {
    name: "Yams Day Bull Bandana",
    filename: "BullBandana",
    price: "40",
    baseSKU: "YMBL-BN-WHT",
    sizes: null,
    camera: {
      pos: [0.709, -0.48, 2.88],
      minDist: 300,
      maxDist: 400
    }
  }
};

//ferg, carti, nast, smooky, rocky, key, twelvyy, illz, treez, ant, tyy
var artists = {
  ferg: {
    name: "A$AP Ferg",
    bio: ["Harlem, NY", "Hood Pope/Trap Lord"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-ferg.gif",
    imgPos: "top center",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-ferg.jpg"
  },
  carti: {
    name: "Playboi Carti",
    bio: ["Southside Atlanta", "Cash Carti/Sir Cartier/Young Carti"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-carti.gif",
    imgPos: "center 20%",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-carti.jpg"
  },
  nast: {
    name: "A$AP Nast",
    bio: ["Harlem, NY", "Nast/Nasty Baby"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-nast.gif",
    imgPos: "center",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-nast.jpg"
  },
  smooky: {
    name: "Smooky Margielaa",
    bio: ["South Bronx, NY", "Margielaa Mad Man"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-smooky.gif",
    imgPos: "top center",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-smooky.jpg"
  },
  rocky: {
    name: "A$AP Rocky",
    bio: ["Harlem, NY", "Lord Pretty Flacko Jodye"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-rocky.gif",
    imgPos: "center",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-rocky.jpg"
  },
  key: {
    name: "Key!",
    bio: ["Atlanta", "Key Kudi/Fatman Key"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-key.gif",
    imgPos: "center top",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-key.jpg"
  },
  twelvyy: {
    name: "A$AP Twelvyy",
    bio: ["Harlem, NY", "12/Noon Yung"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-twelvyy.gif",
    imgPos: "center top",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-twelvyy.jpg"
  },
  illz: {
    name: "A$AP Illz",
    bio: ["Bronx, NY", "Illz"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-illz.gif",
    imgPos: "top center",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-illz.jpg"
  },
  treez: {
    name: "Treez Lowkey",
    bio: ["Virginia", "Treez/Newport Nam"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-treez.gif",
    imgPos: "center",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-treez.jpg"
  },
  ant: {
    name: "A$AP Ant",
    bio: ["Baltimore, MD", "YG Addie"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-ant.gif",
    imgPos: "top center",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-ant.jpg"
  },
  tyy: {
    name: "A$AP TyY",
    bio: ["Harlem, NY"],
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/artist-tyy.gif",
    imgPos: "top center",
    img: "https://dwvo2npct47gg.cloudfront.net/images/artist-tyy.jpg"
  }
};

var videos = {
  1: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/monsterew-cropped.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/wrong.gif",
    title: "AWGE 01",
    desc: ""
  },
  2: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/rocky-1-compressed.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/rocky-1.gif",
    title: "AWGE 02",
    desc: ""
  },
  3: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/rocky-2.mov",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/rocky-2.gif",
    title: "A$AP Rocky",
    desc: "Please Shut Up Skit"
  },
  4: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/rocky-concert.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/rocky-concert.gif",
    title: "AWGEchella",
    desc: "2017"
  },
  5: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/rocky-music.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/rocky-music.gif",
    title: "A$AP Rocky",
    desc: "Skeppy Challenge"
  },
  6: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/rocky-home.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/rocky-home.gif",
    title: "AWGE Video Skit",
    desc: ""
  },
  7: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/rocky-jail.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/rocky-jail.gif",
    title: "Cash Carti",
    desc: "wokeuplikethis skit"
  },
  8: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/lookbook.mov",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/lookbook.gif",
    title: "AWGE Merch",
    desc: ""
  },
  9: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/krash-testing.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/krash-testing.gif",
    title: "A$AP Rocky",
    desc: "TESTING Purposes"
  },
  10: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/rocky-run-it.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/rocky-run-it.gif",
    title: "A$AP Rocky",
    desc: "Who Run It"
  },
  11: {
    link:
      "https://dwvo2npct47gg.cloudfront.net/videos/herojauna-blunts-sound.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/herojuana-blunts.gif",
    title: "A$AP Rocky",
    desc: "Herojuana Blunts"
  },
  12: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/injured-generation.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/injured-generation.gif",
    title: "A$AP Rocky",
    desc: "Injured Generation Tour"
  }
};

//directed videos
var directed = {
  1: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct1.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct1.gif",
    title: "Yamborghini High",
    desc: "A$AP Mob ft. Juicy J"
  },

  2: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct2.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct2.gif",
    title: "Money Man",
    desc: "A$AP Mob"
  },

  3: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct3.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct3.gif",
    title: "Raf",
    desc: "A$AP Mob ft. Playboi Carti, Quavo, Lil Uzi Vert, Frank Ocean"
  },

  4: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct4.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct4.gif",
    title: "Magnolia",
    desc: "Playboi Carti"
  },

  5: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct5.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct5.gif",
    title: "New Choppa",
    desc: "Playboi Carti ft. A$AP Rocky"
  },

  6: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct11.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct11.gif",
    title: "What",
    desc: "Playboi Carti ft. UnoTheActivist"
  },

  7: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct7.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct7.gif",
    title: "Plain Jane",
    desc: "A$AP Ferg"
  },

  8: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct10.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct10.gif",
    title: "Feels So Good",
    desc: "A$AP Mob"
  },

  9: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct8.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct8.gif",
    title: "Ghost Ride",
    desc: "Skepta ft. A$AP Rocky, A$AP Nast"
  },

  10: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct9.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct9.gif",
    title: "Pick It Up",
    desc: "Famous Dex ft. A$AP Rocky"
  },

  11: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/Direct6.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/Direct6.gif",
    title: "Roll in Peace",
    desc: "Kodak Black ft. XXXTENTACION"
  },

  12: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/mattress.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/mattress.gif",
    title: "Mattress",
    desc: "A$AP Ferg ft. A$AP Rocky"
  },

  13: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/asapforever.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/asapforever.gif",
    title: "A$AP Forever",
    desc: "A$AP Rocky ft. Moby"
  },

  14: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/asap-praise-lord.mp4",
    gif:
      "https://dwvo2npct47gg.cloudfront.net/gifs/asap-praise-lord-preview-optimized.gif",
    title: "Praise The Lord",
    desc: "A$AP Rocky ft. Skepta"
  },

  15: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/potatosalad.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/potatosalad-compressed.gif",
    title: "Potato Salad",
    desc: "Tyler the Creator & A$AP Rocky"
  },

  16: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/fukk-sleep.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/fukk-sleep.gif",
    title: "Fukk Sleep",
    desc: "A$AP Rocky"
  },

  17: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/KidsTurnedOutFine.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/KidsTurnedOutFine.gif",
    title: "Kids Turned Out Fine",
    desc: "A$AP Rocky"
  },

  18: {
    link: "https://dwvo2npct47gg.cloudfront.net/videos/RichardMilliePlain.mp4",
    gif: "https://dwvo2npct47gg.cloudfront.net/gifs/RichardMilliePlain.gif",
    title: "Richard Millie Plain",
    desc: "Gunna"
  }
};
