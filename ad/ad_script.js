window.onload = function() {
    let images = [
        "https://m.media-amazon.com/images/I/51b8X3Li58L.png",
        "https://m.media-amazon.com/images/I/51iO43NQDtL.png",
        "https://m.media-amazon.com/images/I/51rF-6SNm1L.png",
        "https://m.media-amazon.com/images/I/71TtTsuXj5L.png",
        "https://m.media-amazon.com/images/I/61oQuTgZFGL.png"
    ];

    var adID = 0;

    // Find the element with ID "nexaboo_ad_network"
    var rootElement = document.getElementById("nexaboo_ad_network");

    // Create a new img element
    var imgElement = document.createElement("img");

    // Set the initial image source
    imgElement.src = images[adID];

    // Set the image width to 100%
    imgElement.style.width = "100%";

    // Set the cursor style to pointer
    imgElement.style.cursor = "pointer";

    imgElement.style.borderRadius = "27px";

    // Create a new link element
    var linkElement = document.createElement("a");

    // Set the link URL
    linkElement.href = "https://www.amazon.com/gp/product/B0C8BP8ZWC"; 

    // Add the img element to the link element
    linkElement.appendChild(imgElement);

    // Create a new span element
    var spanElement = document.createElement("span");

    // Add the link element to the span element
    spanElement.appendChild(linkElement);

    // Add the span element to the "nexaboo_ad_network" element
    rootElement.appendChild(spanElement);

    // Function to change the ad
    function changeAd() {
        adID = (adID + 1) % images.length; // Loop through the images
        imgElement.src = images[adID];     // Update the image source
    }

    // Change the ad every 5 seconds (5000 ms)
    setInterval(changeAd, 5000);

    console.log("Success ad nexaboo");
}
