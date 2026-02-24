window.onload = function () {
    // ========== CONFIG ==========
    const CONFIG = {
        mainAd: {
            images: [
                "https://play-lh.googleusercontent.com/PqlArUDql3G-R1iZPqK8Zd8FHKNlSs8MY3hAfi1ZTPXDrPqBHy17N25mfYldJM2kpMpM0f4dpMsaZgEg4VYdEQ=w5120-h2880-rw",
                "https://play-lh.googleusercontent.com/6JPfsD3aSeWfDfyQr8gbx2j9bx96HdaABekXjY3QQUA1ZpXjZvoeBHkl3bweCBPTkox42B7VtBCZsqJXkXzZ7w=w5120-h2880-rw",
                "https://play-lh.googleusercontent.com/FELkVUeN0ELlD-x4cL1XGYQrJ2mgEV7iu3UbKEwEYz-VQrVRuDdr10YdM-Uoy2UO4FVvPXEmPD0tbLzwPmXMhgA=w5120-h2880-rw",
                "https://play-lh.googleusercontent.com/Uf_WR3DayHHOj_CFqVgfA6fv5W_DsN_gc3XTTEvBuGXKu17-FvNDtmNPAFib4_G2gPkvEFFvfSoUOZJcMSW5=w5120-h2880-rw",
                "https://play-lh.googleusercontent.com/ot8YkUNZlQ5k9OcYUhe9tSYKwbrhwKvghGgE49FfFbPBAfHVQecynqWQz5edNj14Z8uAVfppLb1H-Rf4oDE1Stc=w5120-h2880-rw"
            ],
            link: "https://play.google.com/store/apps/details?id=com.zenqs.translate",
            interval: 5000
        },
        secondAd: {
            images: [
                "https://play-lh.googleusercontent.com/PqlArUDql3G-R1iZPqK8Zd8FHKNlSs8MY3hAfi1ZTPXDrPqBHy17N25mfYldJM2kpMpM0f4dpMsaZgEg4VYdEQ=w5120-h2880-rw",
                "https://play-lh.googleusercontent.com/6JPfsD3aSeWfDfyQr8gbx2j9bx96HdaABekXjY3QQUA1ZpXjZvoeBHkl3bweCBPTkox42B7VtBCZsqJXkXzZ7w=w5120-h2880-rw"
            ],
            link: "https://play.google.com/store/apps/details?id=com.zenqs.translate",
            interval: 7000,
            label: "🔥 Kiemelt ajánlat"
        },
        youtubeVideoId: "56b9uHAcHYc", // 👈 CSERÉLD LE a saját YouTube videó ID-ra
        popup: {
            delayMs: 3000,       // mikor jelenjen meg a popup (ms)
            youtubeVideoId: "56b9uHAcHYc" // 👈 CSERÉLD LE
        }
    };
    // ============================

    const rootElement = document.getElementById("nexaboo_ad_network");
    if (!rootElement) {
        console.error("Element with ID 'nexaboo_ad_network' not found.");
        return;
    }

    // ---- STYLES ----
    const style = document.createElement("style");
    style.textContent = `
        #nexaboo_ad_network {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            font-family: sans-serif;
        }
        .nex-ad-card {
            position: relative;
            border-radius: 27px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0,0,0,0.25);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            width: 300px;
        }
        .nex-ad-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 40px rgba(0,0,0,0.35);
        }
        .nex-ad-card img {
            width: 300px;
            height: 600px;
            object-fit: cover;
            display: block;
            transition: opacity 0.4s ease;
        }
        .nex-ad-card img.fade {
            opacity: 0;
        }
        .nex-ad-label {
            position: absolute;
            top: 12px;
            left: 12px;
            background: linear-gradient(135deg, #ff6b6b, #ff8e53);
            color: white;
            font-size: 12px;
            font-weight: bold;
            padding: 4px 10px;
            border-radius: 20px;
            pointer-events: none;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .nex-ad-dots {
            position: absolute;
            bottom: 12px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 6px;
        }
        .nex-ad-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: rgba(255,255,255,0.5);
            transition: background 0.3s;
        }
        .nex-ad-dot.active {
            background: white;
        }

        /* Second Ad - YouTube */
        .nex-yt-wrapper {
            width: 300px;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0,0,0,0.25);
        }
        .nex-yt-wrapper iframe {
            display: block;
            width: 300px;
            height: 169px;
            border: none;
        }
        .nex-yt-cta {
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .nex-yt-cta-text {
            color: white;
            font-size: 12px;
            font-weight: bold;
        }
        .nex-yt-cta-btn {
            background: linear-gradient(135deg, #ff6b6b, #ff8e53);
            color: white;
            font-size: 11px;
            font-weight: bold;
            padding: 6px 12px;
            border-radius: 20px;
            text-decoration: none;
            white-space: nowrap;
        }

        /* POPUP */
        #nex-popup-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.65);
            z-index: 99999;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(4px);
        }
        #nex-popup-overlay.visible {
            display: flex;
            animation: nex-fadein 0.4s ease;
        }
        @keyframes nex-fadein {
            from { opacity: 0; transform: scale(0.92); }
            to   { opacity: 1; transform: scale(1); }
        }
        #nex-popup-box {
            background: #1a1a2e;
            border-radius: 24px;
            overflow: hidden;
            width: 340px;
            max-width: 95vw;
            box-shadow: 0 20px 60px rgba(0,0,0,0.6);
            position: relative;
        }
        #nex-popup-close {
            position: absolute;
            top: 10px;
            right: 14px;
            color: white;
            font-size: 22px;
            cursor: pointer;
            z-index: 10;
            line-height: 1;
            opacity: 0.7;
            transition: opacity 0.2s;
        }
        #nex-popup-close:hover { opacity: 1; }
        #nex-popup-box iframe {
            width: 340px;
            height: 191px;
            display: block;
            border: none;
        }
        .nex-popup-body {
            padding: 18px 20px 22px;
            text-align: center;
        }
        .nex-popup-title {
            color: white;
            font-size: 17px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        .nex-popup-sub {
            color: rgba(255,255,255,0.65);
            font-size: 13px;
            margin-bottom: 16px;
        }
        .nex-popup-cta {
            display: inline-block;
            background: linear-gradient(135deg, #ff6b6b, #ff8e53);
            color: white;
            font-size: 14px;
            font-weight: bold;
            padding: 12px 28px;
            border-radius: 30px;
            text-decoration: none;
            box-shadow: 0 6px 20px rgba(255,107,107,0.4);
            transition: transform 0.2s;
        }
        .nex-popup-cta:hover { transform: scale(1.05); }
    `;
    document.head.appendChild(style);

    // ---- HELPER: create ad card ----
    function createAdCard(images, link, label, intervalMs) {
        let adID = 0;
        const card = document.createElement("div");
        card.className = "nex-ad-card";

        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.target = "_blank";

        const img = document.createElement("img");
        img.src = images[adID];
        anchor.appendChild(img);
        card.appendChild(anchor);

        if (label) {
            const lbl = document.createElement("div");
            lbl.className = "nex-ad-label";
            lbl.textContent = label;
            card.appendChild(lbl);
        }

        // Dots indicator
        if (images.length > 1) {
            const dots = document.createElement("div");
            dots.className = "nex-ad-dots";
            images.forEach((_, i) => {
                const dot = document.createElement("div");
                dot.className = "nex-ad-dot" + (i === 0 ? " active" : "");
                dots.appendChild(dot);
            });
            card.appendChild(dots);

            setInterval(() => {
                adID = (adID + 1) % images.length;
                img.classList.add("fade");
                setTimeout(() => {
                    img.src = images[adID];
                    img.classList.remove("fade");
                }, 400);
                dots.querySelectorAll(".nex-ad-dot").forEach((d, i) => {
                    d.classList.toggle("active", i === adID);
                });
            }, intervalMs);
        }

        return card;
    }

    // ---- MAIN AD ----
    const mainCard = createAdCard(
        CONFIG.mainAd.images,
        CONFIG.mainAd.link,
        "📱 Hirdetés",
        CONFIG.mainAd.interval
    );
    rootElement.appendChild(mainCard);

    // ---- YOUTUBE + SECOND AD SECTION ----
    const ytWrapper = document.createElement("div");
    ytWrapper.className = "nex-yt-wrapper";

    const ytIframe = document.createElement("iframe");
    ytIframe.src = `https://www.youtube.com/embed/${CONFIG.youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${CONFIG.youtubeVideoId}&controls=1&rel=0`;
    ytIframe.allow = "autoplay; encrypted-media";
    ytIframe.allowFullscreen = true;
    ytWrapper.appendChild(ytIframe);

    const ytCta = document.createElement("div");
    ytCta.className = "nex-yt-cta";
    ytCta.innerHTML = `
        <div class="nex-yt-cta-text">🔥 Töltsd le ingyen!</div>
        <a href="${CONFIG.secondAd.link}" target="_blank" class="nex-yt-cta-btn">Letöltés →</a>
    `;
    ytWrapper.appendChild(ytCta);
    rootElement.appendChild(ytWrapper);

    // ---- SECOND IMAGE AD ----
    const secondCard = createAdCard(
        CONFIG.secondAd.images,
        CONFIG.secondAd.link,
        CONFIG.secondAd.label,
        CONFIG.secondAd.interval
    );
    rootElement.appendChild(secondCard);

    // ---- POPUP ----
    const overlay = document.createElement("div");
    overlay.id = "nex-popup-overlay";
    overlay.innerHTML = `
        <div id="nex-popup-box">
            <span id="nex-popup-close">✕</span>
            <iframe
                src="https://www.youtube.com/embed/${CONFIG.popup.youtubeVideoId}?autoplay=1&mute=1&rel=0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>
            <div class="nex-popup-body">
                <div class="nex-popup-title">Fedezd fel az alkalmazást!</div>
                <div class="nex-popup-sub">Az app már több mint 10 millió felhasználónak segít naponta.</div>
                <a href="${CONFIG.mainAd.link}" target="_blank" class="nex-popup-cta">Ingyenes letöltés →</a>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    // Show popup after delay
    setTimeout(() => {
        overlay.classList.add("visible");
    }, CONFIG.popup.delayMs);

    // Close popup
    document.getElementById("nex-popup-close").addEventListener("click", () => {
        overlay.classList.remove("visible");
        // Stop YT video in popup by resetting src
        const popupIframe = overlay.querySelector("iframe");
        popupIframe.src = popupIframe.src;
    });
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("visible");
            const popupIframe = overlay.querySelector("iframe");
            popupIframe.src = popupIframe.src;
        }
    });

    // ---- Topics API ----
    if ('topics' in navigator) {
        navigator.topics.getTopics()
            .then(t => console.log('User interest topics:', t))
            .catch(e => console.error('Topics error:', e));
    }
    if ('browsingTopics' in document) {
        document.browsingTopics()
            .then(t => console.log('Browsing Topics:', t))
            .catch(e => console.error('Browsing Topics error:', e));
    }

    console.log("✅ Nexaboo Ad Network loaded successfully.");
};
