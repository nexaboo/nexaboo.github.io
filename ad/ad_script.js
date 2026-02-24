window.addEventListener('load', function () {
    // --- BEÁLLÍTÁSOK ---
    const images = [
        "https://play-lh.googleusercontent.com/PqlArUDql3G-R1iZPqK8Zd8FHKNlSs8MY3hAfi1ZTPXDrPqBHy17N25mfYldJM2kpMpM0f4dpMsaZgEg4VYdEQ=w5120-h2880-rw",
        "https://play-lh.googleusercontent.com/6JPfsD3aSeWfDfyQr8gbx2j9bx96HdaABekXjY3QQUA1ZpXjZvoeBHkl3bweCBPTkox42B7VtBCZsqJXkXzZ7w=w5120-h2880-rw",
        "https://play-lh.googleusercontent.com/FELkVUeN0ELlD-x4cL1XGYQrJ2mgEV7iu3UbKEwEYz-VQrVRuDdr10YdM-Uoy2UO4FVvPXEmPD0tbLzwPmXMhgA=w5120-h2880-rw",
        "https://play-lh.googleusercontent.com/Uf_WR3DayHHOj_CFqVgfA6fv5W_DsN_gc3XTTEvBuGXKu17-FvNDtmNPAFib4_G2gPkvEFFvfSoUOZJcMSW5=w5120-h2880-rw",
        "https://play-lh.googleusercontent.com/ot8YkUNZlQ5k9OcYUhe9tSYKwbrhwKvghGgE49FfFbPBAfHVQecynqWQz5edNj14Z8uAVfppLb1H-Rf4oDE1Stc=w5120-h2880-rw"
    ];
    let adID = 0;
    const targetLink = "https://play.google.com/store/apps/details?id=com.zenqs.translate";
    
    // Ide írd a saját YouTube videód azonosítóját! (pl. v= utáni rész)
    const youtubeVideoID = "56b9uHAcHYc"; 

    // Fő konténer megkeresése
    const rootElement = document.getElementById("nexaboo_ad_network");
    if (!rootElement) {
        console.error("Hiba: 'nexaboo_ad_network' ID-val rendelkező elem nem található.");
        return;
    }

    // Konténer formázása (hogy a kép és a videó szépen egymás alá kerüljön)
    rootElement.style.display = "flex";
    rootElement.style.flexDirection = "column";
    rootElement.style.alignItems = "center";
    rootElement.style.gap = "15px"; // Távolság a hirdetés és a videó között

    // --- 1. FŐ KÉPES HIRDETÉS LÉTREHOZÁSA ---
    const imgElement = document.createElement("img");
    imgElement.src = images[adID];
    imgElement.style.width = "300px";
    imgElement.style.height = "600px";
    imgElement.style.objectFit = "cover";
    imgElement.style.cursor = "pointer";
    imgElement.style.borderRadius = "27px";
    imgElement.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

    const linkElement = document.createElement("a");
    linkElement.href = targetLink;
    linkElement.target = "_blank";
    linkElement.appendChild(imgElement);
    
    rootElement.appendChild(linkElement);

    // Kép cseréje 5 másodpercenként
    setInterval(() => {
        adID = (adID + 1) % images.length;
        imgElement.src = images[adID];
    }, 5000);


    // --- 2. AUTOMATIKUSAN INDULÓ YOUTUBE VIDEÓ ---
    const ytContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    iframe.width = "300";
    iframe.height = "169"; // 16:9 képarány 300px szélességhez
    // Autoplay CSAK némítva (mute=1) működik a böngészőkben!
    iframe.src = `https://www.youtube.com/embed/${youtubeVideoID}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoID}&controls=0`;
    iframe.title = "YouTube ad video";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.borderRadius = "15px";
    iframe.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    
    ytContainer.appendChild(iframe);
    rootElement.appendChild(ytContainer);


    // --- 3. IN-PAGE POP-UP (MODAL) HIRDETÉS ---
    function createPopUp() {
        // Háttér sötétítő overlay
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        overlay.style.zIndex = "9998";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";

        // Maga a pop-up doboz
        const modal = document.createElement("div");
        modal.style.backgroundColor = "#fff";
        modal.style.padding = "20px";
        modal.style.borderRadius = "15px";
        modal.style.position = "relative";
        modal.style.zIndex = "9999";
        modal.style.textAlign = "center";
        modal.style.width = "300px";
        modal.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";

        // Bezáró gomb
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "10px";
        closeBtn.style.right = "15px";
        closeBtn.style.background = "none";
        closeBtn.style.border = "none";
        closeBtn.style.fontSize = "24px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.color = "#333";
        closeBtn.onclick = function() {
            document.body.removeChild(overlay);
        };

        // Pop-up tartalom (szintén a Play Store-ba visz)
        const modalTitle = document.createElement("h3");
        modalTitle.innerText = "Próbáld ki az új appunkat!";
        modalTitle.style.margin = "10px 0 20px 0";
        modalTitle.style.fontFamily = "sans-serif";

        const modalBtn = document.createElement("a");
        modalBtn.href = targetLink;
        modalBtn.target = "_blank";
        modalBtn.innerText = "Letöltés most";
        modalBtn.style.display = "inline-block";
        modalBtn.style.backgroundColor = "#007BFF";
        modalBtn.style.color = "#fff";
        modalBtn.style.padding = "10px 20px";
        modalBtn.style.textDecoration = "none";
        modalBtn.style.borderRadius = "8px";
        modalBtn.style.fontWeight = "bold";
        modalBtn.style.fontFamily = "sans-serif";

        modal.appendChild(closeBtn);
        modal.appendChild(modalTitle);
        modal.appendChild(modalBtn);
        overlay.appendChild(modal);
        
        document.body.appendChild(overlay);
    }

    // A pop-up megjelenik az oldal betöltése után 7 másodperccel
    setTimeout(createPopUp, 7000);


    // --- 4. PRIVACY SANDBOX / TOPICS API (Eredeti kódod alapján) ---
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

    if ('browsingTopics' in document) {
        document.browsingTopics().then((topics) => {
            console.log('Browsing Topics:', topics);
        }).catch((error) => {
            console.error('Error fetching browsing topics:', error);
        });
    } else {
        console.log('Browsing Topics API not supported in this browser.');
    }
});
