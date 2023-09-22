const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en" ? "selected" : "" : country_code == "hu" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});

jQuery(document).ready( function () {
    $("#from-text").on("keyup", function () {
        let text = fromText.value.trim();
        var translateFrom = selectTag[0].value;
        var translateTo = selectTag[1].value;
        var security_code = $('#security_code').text();
        if (text.length == 0) {
            toText.setAttribute("placeholder", "Fordítás");
        } else {

            if(!text) return;
            toText.setAttribute("placeholder", "Fordítás...");
            $.ajax({
                url: 'https://nexaboo.rf.gd/translate_engine_ajax/translate_engine_ajax_1_0',
                type: 'POST',
                dataType: 'json',
                data: {from_lang: translateFrom, to_lang: translateTo, translate_text: text},
                success: function(response_translate_result) {
                    toText.value = response_translate_result;
                }
            })
        }
    })
})


icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(!fromText.value || !toText.value) return;
        if(target.classList.contains("fa-copy")) {
            if(target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if(target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});
