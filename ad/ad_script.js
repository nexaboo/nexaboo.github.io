window.onload = function() {
    let images = [
        "https://m.media-amazon.com/images/I/51b8X3Li58L.png",
        "https://m.media-amazon.com/images/I/51iO43NQDtL.png",
        "https://m.media-amazon.com/images/I/51rF-6SNm1L.png",
        "https://m.media-amazon.com/images/I/71TtTsuXj5L.png",
        "https://m.media-amazon.com/images/I/61oQuTgZFGL.png"
    ];

    var adID = 0;
    
    function changeAd() {
        if (adID == images.length - 1) {
            adID = 0;
        } else {
            adID++;
        }
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    while(true) {
        changeAd()
        sleep(5000)
    }
    
    // Keresse meg az "x_root" ID-jú elemet
    var rootElement = document.getElementById("nexaboo_ad_network");

    // Hozzon létre egy új képelemet
    var imgElement = document.createElement("img");

    // Állítsa be a kép forrását
    imgElement.src = images[adID];

    // Állítsa be a kép szélességét 100%-ra
    imgElement.style.width = "100%";

    // Állítsa be a cursor stílust pointer-re
    imgElement.style.cursor = "pointer";

    // Hozzon létre egy új link elemet
    var linkElement = document.createElement("a");

    // Állítsa be a link URL-jét
    linkElement.href = "https://www.amazon.com/gp/product/B0C8BP8ZWC"; // Cserélje le a "your_link_url_here" részt a kívánt URL-re

    // Adja hozzá a képelemet a link elemhez
    linkElement.appendChild(imgElement);

    // Hozzon létre egy új span elemet
    var spanElement = document.createElement("span");

    // Adja hozzá a link elemet a span elemhez
    spanElement.appendChild(linkElement);

    // Adja hozzá a span elemet az "x_root" elemhez
    rootElement.appendChild(spanElement);

    console.log("Sucess ad nexaboo")
}
