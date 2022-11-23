var imageURLs = [
       "https://thanos.lol/resources/404/1.png"
     , "https://thanos.lol/resources/404/2.png"
     , "https://thanos.lol/resources/404/3.png"
     , "https://thanos.lol/resources/404/4.png"
     , "https://thanos.lol/resources/404/5.png"
     , "https://thanos.lol/resources/404/6.png"
  ];
  function getImageTag() {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"begone\"/>';
    return img;
  }