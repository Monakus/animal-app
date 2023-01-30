const tileData = [
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Alpaka-samiec-Drakula-11-2048x1365.jpg',
      name: 'Alpaka',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/01/bolen-Header-X31-300x169.webp',
      name: 'Boleń',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/03/dzioborozec-kafryjski-Header-X31-1030x579.webp',
      name: 'Dzioborożec Kafryjski',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/DSC049221-300x200.jpg',
      name: 'Dzioborożec Palawański',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/11-Fenek-1-1-of-11-300x200.jpg',
      name: 'Fenek',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/Ciekawostka-X3-foka-pospolita-webp-300x200.webp',
      name: 'Foka Pospolita',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/gereza-Header-X31-300x169.webp',
      name: 'Gereza Angolska',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Header-X3-gibon-bialopoliczkowy-webp-1030x579.webp',
      name: 'Gibon Białopoliczkowy',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Gibon-czapnik-61-300x200.jpg',
      name: 'Gibon Czapnik',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/02/Header-X3-gwanako-300x169.webp',
      name: 'Gwanako',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/AdobeStock_270465851-300x200.jpg',
      name: 'Hipopotam Nilowy',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/03/Header-kakadu-rozowa-X31-300x169.webp',
      name: 'Kadaku Różowa',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/kameleon-jermenski-Header-X31-300x169.webp',
      name: 'Kameleon Jemeński',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/01/kapibara_Header-X31-1030x579.webp',
      name: 'Kapibara',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/02/Header-X3-kapucynka-zoltobrzucha-1030x579.webp',
      name: 'Kapucynka Żółtobrzucha',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Header-X3-kea-webp-300x169.webp',
      name: 'Kea',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/koczkodan-diana-Ciekawostka-X31-300x200.webp',
      name: 'Koczkodan Diana',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/koczkodan-gorski-Header-X31-1-300x169.webp',
      name: 'Koczkodan Górski',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/03/koroniec-plamoczuby-Header-X31-1030x579.webp',
      name: 'Koroniec Plamoczuby',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/Header-X3-kotik-webp-1-300x169.webp',
      name: 'Kotik Afrykański',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/02/Krokodyl-nilowy-300x200.jpg',
      name: 'Krokodyl Nilowy',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/AdobeStock_135642267-1030x688.jpeg',
      name: 'Legwan Zielony',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/03/DSC_0021-Edit1-300x200.jpg',
      name: 'Lemur Katta',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/02/Header-X3-lemur-koroniasty-300x169.webp',
      name: 'Lemur Koroniasty',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Header-X3-lew-webp-300x169.webp',
      name: 'Lew Angolski',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/likaon-Ciekawostka-X31-300x200.webp',
      name: 'Likaon',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/02/Header-X3-lwiatka-zlotoglowa-300x169.webp',
      name: 'Lwiatka Złotogłowa',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/mangaba-rudoczelna-Header-X31-300x169.webp',
      name: 'Mangaba Rudoczelna',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/03/moringa-siatkowana-Header-X31-1030x579.webp',
      name: 'Moringa Siatkowana',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/muflon-Ciekawostka-X31-300x200.webp',
      name: 'Muflon',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/nandu-Ciekawostka-X31-300x200.webp',
      name: 'Nandu Szare',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Header-X3-nosorozec-indyjski-webp-1030x579.webp',
      name: 'Nosorożec Indyjski',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Header-X3-okapi-webp-1-1030x579.webp',
      name: 'Okapi Leśne',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/DSC_05541-300x200.jpg',
      name: 'Panda Mała',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Fotolia_139585792_Subscription_Monthly_XXL-300x240.jpg',
      name: 'Pantera Śnieżna',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/pawian-masajski-Header-X31-300x169.webp',
      name: 'Pawian Masajski',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/Ciekawostka-X3-pingwin-toniec-webp-300x200.jpg',
      name: 'Pingwin Przylądkowy',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Ciekawostka-X3-puchacz-webp-300x200.webp',
      name: 'Puchacz',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/pyton-ciemnoskory-Ciekawostka-X31-300x200.webp',
      name: 'Pyton Ciemnoskóry',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/03/Reny-5-300x200.jpg',
      name: 'Renifer Tundrowy',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/saimiri-Header-X31-300x169.webp',
      name: 'Sajmiri Wiewiórcza',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Header-X3-slon-webp-300x169.webp',
      name: 'Słoń Indyjski',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/strus-nowy-Header-X31-300x169.webp',
      name: 'Struś Czerwonoskóry',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/surykatka-Header-X31-300x169.webp',
      name: 'Surykatka',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/swinia-rzeczna-Ciekawostka-X31-300x200.webp',
      name: 'Świnia Rzeczna',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/03/syczek-filipinski-Header-X31-1030x579.webp',
      name: 'Syczek Filipiński',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/Header-X3-szpak-balijski-300x169.webp',
      name: 'Szpak Balijski',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/szympans-header1-300x169.webp',
      name: 'Szympans Zwyczajny',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/02/Header-X3-takin-zloty-300x169.webp',
      name: 'Takin Złoty',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/01/Header-X3-tygrys-sumatrzanski-webp-1030x579.webp',
      name: 'Tygrys Sumatrzański',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/02/Header-X3-uistiti-bialoucha-300x169.webp',
      name: 'Uistiti Białoucha',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/header-walabia-300x169.webp',
      name: 'Walabia Benneta',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/01/waran-blekitny-Header-X31-1030x579.webp',
      name: 'Waran Błękitny',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/03/waran-filipinski-Header-X31-300x169.webp',
      name: 'Waran Filipiński',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/wari-Header-X31-1030x579.webp',
      name: 'Wari Czarno-biały',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/03/Header-waz-dlugonosy-X31-300x169.webp',
      name: 'Wąż Długonosy',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Header-X3-wielblad-jednogarbny-webp-1030x579.webp',
      name: 'Wielbłąd Jednogarbny',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Ciekawostka-X3-wilk-szary-webp-1-300x200.webp',
      name: 'Wilk Szary',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/wyjec-czarny-Header-X31-300x169.webp',
      name: 'Wyjec Czarny',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/02/zaba-szponiasta-Header-X31-300x169.webp',
      name: 'Żaba Szponiasta',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/zebra-Header-X31-300x169.webp',
      name: 'Zebra Chapmana',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/11/Header-X3-zebra-hartmanna-webp-1030x579.webp',
      name: 'Zebra Hartmanna',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/Header-X3-zolw-blotny-webp-300x169.webp',
      name: 'Żółw Błotny',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/03/zolw-jaszczurowaty-Header-X31-300x169.webp',
      name: 'Żółw Jaszczurowaty',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2021/12/Header-X3-zolw-zielony-webp-300x169.webp',
      name: 'Żółw Zielony',
    },
    {
      img: 'https://zoo.wroclaw.pl/wp-content/uploads/2022/01/Ciekawostka-X3-zubr-webp-300x200.webp',
      name: 'Żubr',
    },
  ];
  
  export default tileData;