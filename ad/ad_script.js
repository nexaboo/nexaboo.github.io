window.onload = function () {
    let images = [
        "https://play-lh.googleusercontent.com/PqlArUDql3G-R1iZPqK8Zd8FHKNlSs8MY3hAfi1ZTPXDrPqBHy17N25mfYldJM2kpMpM0f4dpMsaZgEg4VYdEQ=w5120-h2880-rw",
        "https://play-lh.googleusercontent.com/6JPfsD3aSeWfDfyQr8gbx2j9bx96HdaABekXjY3QQUA1ZpXjZvoeBHkl3bweCBPTkox42B7VtBCZsqJXkXzZ7w=w5120-h2880-rw",
        "https://play-lh.googleusercontent.com/FELkVUeN0ELlD-x4cL1XGYQrJ2mgEV7iu3UbKEwEYz-VQrVRuDdr10YdM-Uoy2UO4FVvPXEmPD0tbLzwPmXMhgA=w5120-h2880-rw",
        "https://play-lh.googleusercontent.com/Uf_WR3DayHHOj_CFqVgfA6fv5W_DsN_gc3XTTEvBuGXKu17-FvNDtmNPAFib4_G2gPkvEFFvfSoUOZJcMSW5=w5120-h2880-rw",
        "https://play-lh.googleusercontent.com/ot8YkUNZlQ5k9OcYUhe9tSYKwbrhwKvghGgE49FfFbPBAfHVQecynqWQz5edNj14Z8uAVfppLb1H-Rf4oDE1Stc=w5120-h2880-rw"
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
    imgElement.style.height = "633px";
    imgElement.style.objectFit = "cover"; // Corrected property
    imgElement.style.cursor = "pointer";
    imgElement.style.borderRadius = "27px";

    // Create a new link element
    var linkElement = document.createElement("a");

    // Set the link URL
    linkElement.href = "https://play.google.com/store/apps/details?id=com.zenqs.translate";
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

