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
            interval: 7000
        },
        youtubeVideoId: "56b9uHAcHYc", // 👈 Replace with your YouTube video ID
        popup: {
            delayMs: 3000,
            youtubeVideoId: "56b9uHAcHYc" // 👈 Replace with your YouTube video ID
        }
    };
    // ============================

    const rootElement = document.getElementById("nexaboo_ad_network");
    if (!rootElement) {
        console.error("Element with ID 'nexaboo_ad_network' not found.");
        return;
    }

    // ---- MATERIAL 3 DARK STYLES ----
    const style = document.createElement("style");
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

        :root {
            --m3-bg:           #0f0f14;
            --m3-surface:      #1c1b22;
            --m3-surface2:     #25242d;
            --m3-surface3:     #2e2c38;
            --m3-primary:      #c9b8ff;
            --m3-primary-cont: #4a3f72;
            --m3-on-primary:   #2a1f52;
            --m3-secondary:    #cbc2db;
            --m3-outline:      #48464f;
            --m3-radius-pill:  28px;
            --m3-radius-card:  20px;
            --m3-font:         'Nunito', sans-serif;
        }

        #nexaboo_ad_network {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 16px 0;
            font-family: var(--m3-font);
            background: transparent;
        }

        /* ── PROFILE HEADER CARD ── */
        .nex-profile-card {
            width: 300px;
            background: var(--m3-primary-cont);
            border-radius: var(--m3-radius-pill);
            padding: 14px 18px;
            display: flex;
            align-items: center;
            gap: 14px;
            text-decoration: none;
            box-shadow: 0 4px 20px rgba(100,80,180,0.35);
            transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .nex-profile-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 28px rgba(100,80,180,0.5);
        }
        .nex-profile-avatar {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(201,184,255,0.4);
            flex-shrink: 0;
        }
        .nex-profile-info {}
        .nex-profile-label {
            color: rgba(201,184,255,0.7);
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .nex-profile-name {
            color: var(--m3-primary);
            font-size: 20px;
            font-weight: 800;
            line-height: 1.1;
        }

        /* ── M3 MENU ROW CARDS ── */
        .nex-menu-row {
            width: 300px;
            background: var(--m3-surface2);
            border-radius: var(--m3-radius-pill);
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 16px;
            text-decoration: none;
            border: 1px solid rgba(255,255,255,0.04);
            transition: background 0.18s ease, transform 0.18s ease;
            cursor: pointer;
        }
        .nex-menu-row:hover {
            background: var(--m3-surface3);
            transform: translateX(4px);
        }
        .nex-menu-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--m3-surface3);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 18px;
        }
        .nex-menu-text {}
        .nex-menu-title {
            color: var(--m3-primary);
            font-size: 16px;
            font-weight: 700;
        }
        .nex-menu-sub {
            color: var(--m3-secondary);
            font-size: 11px;
            font-weight: 400;
            opacity: 0.8;
        }
        .nex-menu-arrow {
            margin-left: auto;
            color: var(--m3-outline);
            font-size: 16px;
        }

        /* ── IMAGE AD CARD ── */
        .nex-img-card {
            width: 300px;
            border-radius: var(--m3-radius-card);
            overflow: hidden;
            position: relative;
            box-shadow: 0 4px 24px rgba(0,0,0,0.4);
            cursor: pointer;
        }
        .nex-img-card img {
            width: 100%;
            height: 580px;
            object-fit: cover;
            display: block;
            transition: opacity 0.45s ease;
        }
        .nex-img-card img.nex-fade {
            opacity: 0;
        }
        .nex-img-overlay {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            background: linear-gradient(to top, rgba(10,8,20,0.92) 0%, transparent 100%);
            padding: 28px 20px 20px;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
        }
        .nex-img-overlay-text {}
        .nex-img-badge {
            background: var(--m3-primary-cont);
            color: var(--m3-primary);
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            padding: 3px 10px;
            border-radius: 20px;
            margin-bottom: 6px;
            display: inline-block;
        }
        .nex-img-title {
            color: #fff;
            font-size: 15px;
            font-weight: 700;
        }
        .nex-img-cta {
            background: var(--m3-primary);
            color: var(--m3-on-primary);
            font-size: 12px;
            font-weight: 800;
            padding: 8px 16px;
            border-radius: 20px;
            text-decoration: none;
            flex-shrink: 0;
            transition: filter 0.15s;
        }
        .nex-img-cta:hover { filter: brightness(1.12); }
        .nex-img-dots {
            position: absolute;
            top: 14px;
            right: 14px;
            display: flex;
            gap: 5px;
        }
        .nex-img-dot {
            width: 6px; height: 6px;
            border-radius: 50%;
            background: rgba(255,255,255,0.35);
            transition: background 0.3s, width 0.3s;
        }
        .nex-img-dot.active {
            background: var(--m3-primary);
            width: 18px;
            border-radius: 4px;
        }

        /* ── YOUTUBE CARD ── */
        .nex-yt-card {
            width: 300px;
            background: var(--m3-surface2);
            border-radius: var(--m3-radius-card);
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.04);
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .nex-yt-card iframe {
            width: 300px;
            height: 169px;
            display: block;
            border: none;
        }
        .nex-yt-footer {
            padding: 14px 18px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .nex-yt-footer-icon {
            width: 36px; height: 36px;
            border-radius: 50%;
            background: var(--m3-primary-cont);
            display: flex; align-items: center; justify-content: center;
            font-size: 16px; flex-shrink: 0;
        }
        .nex-yt-footer-text { flex: 1; }
        .nex-yt-footer-title {
            color: var(--m3-primary);
            font-size: 13px;
            font-weight: 700;
        }
        .nex-yt-footer-sub {
            color: var(--m3-secondary);
            font-size: 11px;
            opacity: 0.75;
        }
        .nex-yt-footer-btn {
            background: var(--m3-primary);
            color: var(--m3-on-primary);
            font-size: 11px;
            font-weight: 800;
            padding: 7px 14px;
            border-radius: 20px;
            text-decoration: none;
            flex-shrink: 0;
        }

        /* ── POPUP ── */
        #nex-popup-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.72);
            z-index: 99999;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(8px);
        }
        #nex-popup-overlay.visible {
            display: flex;
            animation: nex-pop-in 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes nex-pop-in {
            from { opacity: 0; transform: scale(0.88); }
            to   { opacity: 1; transform: scale(1); }
        }
        #nex-popup-box {
            background: var(--m3-surface);
            border-radius: 28px;
            overflow: hidden;
            width: 320px;
            max-width: 94vw;
            box-shadow: 0 24px 60px rgba(0,0,0,0.7);
            border: 1px solid rgba(201,184,255,0.12);
            position: relative;
        }
        #nex-popup-box iframe {
            width: 320px;
            height: 180px;
            display: block;
            border: none;
        }
        #nex-popup-close {
            position: absolute;
            top: 12px; right: 14px;
            width: 30px; height: 30px;
            border-radius: 50%;
            background: rgba(0,0,0,0.55);
            color: white;
            font-size: 15px;
            cursor: pointer;
            z-index: 10;
            display: flex; align-items: center; justify-content: center;
            transition: background 0.2s;
            border: 1px solid rgba(255,255,255,0.15);
        }
        #nex-popup-close:hover { background: rgba(0,0,0,0.8); }
        .nex-popup-body {
            padding: 20px 22px 24px;
            text-align: center;
        }
        .nex-popup-eyebrow {
            display: inline-block;
            background: var(--m3-primary-cont);
            color: var(--m3-primary);
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            padding: 3px 12px;
            border-radius: 20px;
            margin-bottom: 10px;
        }
        .nex-popup-title {
            color: #fff;
            font-size: 18px;
            font-weight: 800;
            margin-bottom: 6px;
            line-height: 1.25;
        }
        .nex-popup-sub {
            color: var(--m3-secondary);
            font-size: 13px;
            margin-bottom: 18px;
            opacity: 0.8;
        }
        .nex-popup-cta {
            display: inline-block;
            background: var(--m3-primary);
            color: var(--m3-on-primary);
            font-size: 14px;
            font-weight: 800;
            padding: 13px 32px;
            border-radius: var(--m3-radius-pill);
            text-decoration: none;
            box-shadow: 0 6px 20px rgba(100,80,200,0.4);
            transition: transform 0.18s, filter 0.18s;
        }
        .nex-popup-cta:hover { transform: scale(1.04); filter: brightness(1.08); }
        .nex-popup-dismiss {
            display: block;
            margin-top: 12px;
            color: var(--m3-secondary);
            font-size: 12px;
            opacity: 0.6;
            cursor: pointer;
            text-decoration: underline;
        }
        .nex-popup-dismiss:hover { opacity: 1; }
    `;
    document.head.appendChild(style);

    // ---- HELPER: image card with dots ----
    function createImgCard(cfg) {
        let adID = 0;
        const card = document.createElement("div");
        card.className = "nex-img-card";

        const anchor = document.createElement("a");
        anchor.href = cfg.link;
        anchor.target = "_blank";

        const img = document.createElement("img");
        img.src = cfg.images[adID];
        anchor.appendChild(img);
        card.appendChild(anchor);

        // Overlay
        const overlay = document.createElement("div");
        overlay.className = "nex-img-overlay";
        overlay.innerHTML = `
            <div class="nex-img-overlay-text">
                <div class="nex-img-badge">📱 Hirdetés</div>
                <div class="nex-img-title">${cfg.title || "Töltsd le most!"}</div>
            </div>
            <a href="${cfg.link}" target="_blank" class="nex-img-cta">Letöltés</a>
        `;
        card.appendChild(overlay);

        // Dots
        const dotsEl = document.createElement("div");
        dotsEl.className = "nex-img-dots";
        cfg.images.forEach((_, i) => {
            const d = document.createElement("div");
            d.className = "nex-img-dot" + (i === 0 ? " active" : "");
            dotsEl.appendChild(d);
        });
        card.appendChild(dotsEl);

        if (cfg.images.length > 1) {
            setInterval(() => {
                adID = (adID + 1) % cfg.images.length;
                img.classList.add("nex-fade");
                setTimeout(() => {
                    img.src = cfg.images[adID];
                    img.classList.remove("nex-fade");
                }, 450);
                dotsEl.querySelectorAll(".nex-img-dot").forEach((d, i) => {
                    d.classList.toggle("active", i === adID);
                });
            }, cfg.interval);
        }
        return card;
    }

    // ---- 1. PROFILE HEADER CARD ----
    const profileCard = document.createElement("a");
    profileCard.className = "nex-profile-card";
    profileCard.href = CONFIG.mainAd.link;
    profileCard.target = "_blank";
    profileCard.innerHTML = `
        <img class="nex-profile-avatar"
             src="https://play-lh.googleusercontent.com/PqlArUDql3G-R1iZPqK8Zd8FHKNlSs8MY3hAfi1ZTPXDrPqBHy17N25mfYldJM2kpMpM0f4dpMsaZgEg4VYdEQ=w5120-h2880-rw"
             alt="App icon">
        <div class="nex-profile-info">
            <div class="nex-profile-label">Szponzorált</div>
            <div class="nex-profile-name">Translate AI</div>
        </div>
    `;
    rootElement.appendChild(profileCard);

    // ---- 2. M3 MENU ROWS (feature highlights) ----
    const menuItems = [
        { icon: "🌐", title: "100+ nyelv fordítása", sub: "Azonnali, offline is működik" },
        { icon: "🎨", title: "Testreszabható felület", sub: "Sötét mód és témák" },
        { icon: "🎙️", title: "Hangfelismerés", sub: "Valós idejű tolmács mód" },
        { icon: "⬇️", title: "Hangok letöltése", sub: "Offline TTS csomagok" },
    ];
    menuItems.forEach(item => {
        const row = document.createElement("a");
        row.className = "nex-menu-row";
        row.href = CONFIG.mainAd.link;
        row.target = "_blank";
        row.innerHTML = `
            <div class="nex-menu-icon">${item.icon}</div>
            <div class="nex-menu-text">
                <div class="nex-menu-title">${item.title}</div>
                <div class="nex-menu-sub">${item.sub}</div>
            </div>
            <div class="nex-menu-arrow">›</div>
        `;
        rootElement.appendChild(row);
    });

    // ---- 3. MAIN IMAGE AD ----
    const mainCard = createImgCard({
        images: CONFIG.mainAd.images,
        link: CONFIG.mainAd.link,
        title: "Fordítsd le a világot",
        interval: CONFIG.mainAd.interval
    });
    rootElement.appendChild(mainCard);

    // ---- 4. YOUTUBE CARD ----
    const ytCard = document.createElement("div");
    ytCard.className = "nex-yt-card";
    ytCard.innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/${CONFIG.youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${CONFIG.youtubeVideoId}&controls=1&rel=0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
        <div class="nex-yt-footer">
            <div class="nex-yt-footer-icon">▶️</div>
            <div class="nex-yt-footer-text">
                <div class="nex-yt-footer-title">Nézd meg hogyan működik</div>
                <div class="nex-yt-footer-sub">Translate AI – bemutató videó</div>
            </div>
            <a href="${CONFIG.mainAd.link}" target="_blank" class="nex-yt-footer-btn">Letöltés</a>
        </div>
    `;
    rootElement.appendChild(ytCard);

    // ---- 5. SECOND IMAGE AD ----
    const secondCard = createImgCard({
        images: CONFIG.secondAd.images,
        link: CONFIG.secondAd.link,
        title: "Kiemelt ajánlat",
        interval: CONFIG.secondAd.interval
    });
    rootElement.appendChild(secondCard);

    // ---- POPUP ----
    const overlay = document.createElement("div");
    overlay.id = "nex-popup-overlay";
    overlay.innerHTML = `
        <div id="nex-popup-box">
            <div id="nex-popup-close">✕</div>
            <iframe
                src="https://www.youtube.com/embed/${CONFIG.popup.youtubeVideoId}?autoplay=1&mute=1&rel=0&controls=0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>
            <div class="nex-popup-body">
                <div class="nex-popup-eyebrow">🔥 Szponzorált</div>
                <div class="nex-popup-title">Fordíts bárhol, bármikor</div>
                <div class="nex-popup-sub">10 millió+ felhasználó bízza ránk a fordítást naponta.</div>
                <a href="${CONFIG.mainAd.link}" target="_blank" class="nex-popup-cta">Ingyenes letöltés →</a>
                <span class="nex-popup-dismiss" id="nex-popup-dismiss-btn">Nem most</span>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    setTimeout(() => overlay.classList.add("visible"), CONFIG.popup.delayMs);

    function closePopup() {
        overlay.classList.remove("visible");
        const f = overlay.querySelector("iframe");
        const src = f.src; f.src = ""; f.src = src;
    }
    document.getElementById("nex-popup-close").addEventListener("click", closePopup);
    document.getElementById("nex-popup-dismiss-btn").addEventListener("click", closePopup);
    overlay.addEventListener("click", e => { if (e.target === overlay) closePopup(); });

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

    console.log("✅ Nexaboo Ad Network (M3 Dark) loaded.");
};
