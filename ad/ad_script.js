window.onload = function () {
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

    // Check if rootElement exists
    if (!rootElement) {
        console.error("Element with ID 'nexaboo_ad_network' not found.");
        return;
    }

    // Create a new img element
    var imgElement = document.createElement("img");

    // Set the initial image source
    imgElement.src = images[adID];

    // Set the image size and styles
    imgElement.style.width = "300px";
    imgElement.style.height = "600px";
    imgElement.style.objectFit = "cover"; // Corrected property
    imgElement.style.cursor = "pointer";
    imgElement.style.borderRadius = "27px";

    // Create a new link element
    var linkElement = document.createElement("a");

    // Set the link URL
    linkElement.href = "https://www.amazon.com/gp/product/B0C8BP8ZWC";
    linkElement.target = "_blank"; // Open the link in a new tab

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

    if ('topics' in navigator) {
        navigator.topics.getTopics().then((topics) => {
            console.log('User interest topics:', topics);
        }).catch((error) => {
            console.error('Error:', error);
        });
    } else {
        console.log('Topics API not supported in this browser.');
    }

    // Remove invalid `await` usage for `document.browsingTopics`
    if ('browsingTopics' in document) {
        document.browsingTopics().then((topics) => {
            console.log('Browsing Topics:', topics);
        }).catch((error) => {
            console.error('Error fetching browsing topics:', error);
        });
    } else {
        console.log('Browsing Topics API not supported in this browser.');
    }
};

