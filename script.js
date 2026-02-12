let step = 0;
let noClickCount = 0;
const messageEl = document.getElementById('message');
const stickerEl = document.getElementById('sticker');
const buttonsArea = document.getElementById('buttons-area');
const counterEl = document.getElementById('love-counter');
const container = document.querySelector('.chat-container');

function nextStep() {
    step++;
    
    if (step === 1) {
        messageEl.innerHTML = "عندي سؤال الچ؟ 🌚";
        stickerEl.src = "https://media.tenor.com/By66_X9867wAAAAi/peach-goma.gif"; 
        buttonsArea.innerHTML = `<button class="btn-yes" onclick="nextStep()">شنو هو 🤔</button>`;
    } 
    else if (step === 2) {
        // خطوة السؤال مع زر "اي احبك" الثابت وزر "لا" الهارب
        messageEl.innerHTML = "تحبيني؟ 🥺👉👈";
        stickerEl.src = "https://media.tenor.com/XpAAs1-O_XAAAAAi/shy-cute.gif";
        buttonsArea.innerHTML = `
            <button class="btn-yes" onclick="nextStep()">اي احبك</button>
            <button id="no-btn" class="btn-no" onmouseover="moveNoButtonInside()" onclick="noAction()">لاااا 😡🔪</button>
        `;
    }
    else if (step === 3) {
        messageEl.innerHTML = "واني احبج اكثررررررر😚";
        stickerEl.src = "https://media.tenor.com/EnO2f_z220QAAAAi/mochi-peach.gif";
        buttonsArea.innerHTML = `<button class="btn-yes" onclick="nextStep()">لا اني اكثر 🤬</button>`;
    }
    else if (step === 4) {
        messageEl.innerHTML = "اني اكثرررر😏";
        stickerEl.src = "https://media.tenor.com/L5_fV26_V78AAAAi/peach-goma.gif";
        buttonsArea.innerHTML = `<button class="btn-yes" onclick="nextStep()">مااا انيي😡🔪</button>`;
    }
    else if (step === 5) {
        messageEl.innerHTML = "بكيييفييي🙂‍↔️";
        stickerEl.src = "https://media.tenor.com/9v8SgU1zY_UAAAAi/peach-goma-sad.gif";
        buttonsArea.innerHTML = `<button class="btn-yes" onclick="nextStep()">خوش!😒</button>`;
    }
    else if (step === 6) {
        messageEl.innerHTML = "امووتتت احبببچ";
        stickerEl.src = "https://media.tenor.com/V_9P8G3v6fMAAAAi/mochi-peach.gif";
        buttonsArea.innerHTML = `<button class="btn-yes" onclick="nextStep()">اني همين احبك 🥹</button>`;
    }
    else if (step === 7) {
        messageEl.innerHTML = "احبجججججج وأدري بيچ تحبيني اكثر بس اني احبچ اكثرر من نفسي🙂‍↕️💋";
        stickerEl.src = "https://media.tenor.com/v0_E9n9_o6QAAAAi/mochi-peach-water.gif";
        buttonsArea.innerHTML = `<button class="btn-yes" onclick="finish()"> >>> </button>`;
    }
}

function noAction() {
    noClickCount++;
    moveNoButtonInside();
    stickerEl.src = "https://media.tenor.com/9v8SgU1zY_UAAAAi/peach-goma-sad.gif";

    if (noClickCount === 1) {
        messageEl.innerHTML = "هاي لييشششش 😔💔";
    } else if (noClickCount === 2) {
        messageEl.innerHTML = "معقولة ماتحبيني؟ 🥲";
    } else if (noClickCount === 3) {
        messageEl.innerHTML = "هاي معقولة ماتحبيني؟ 😓";
    } else if (noClickCount >= 4) {
        messageEl.innerHTML = "ادري بيچ تحبيني😤";
        const noBtn = document.getElementById('no-btn');
        if(noBtn) noBtn.remove(); // يختفي تماماً ليبقى زر "اي احبك" فقط
    }
}

function moveNoButtonInside() {
    const noBtn = document.getElementById('no-btn');
    if(!noBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // التحرك داخل حدود المربع الأبيض (Container) فقط
    const maxX = containerRect.width - btnWidth - 20;
    const maxY = containerRect.height - btnHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function finish() {
    messageEl.innerHTML = "احبچ حبب بكبرر الارض واكثرررر يابعد گلبي ونبضه انتي طيبتي ملكَتي.";
    stickerEl.src = "https://media.tenor.com/yS7S9mKsh8AAAAAi/love-you.gif";
    buttonsArea.style.display = "none";
    counterEl.style.display = "block";
    setInterval(createHeart, 150);
    startCounter();
}

function startCounter() {
    const target = "19481947827348";
    let ticks = 0;
    const timer = setInterval(() => {
        ticks++;
        counterEl.innerText = Math.random().toString().slice(2, 16) + "%";
        if (ticks > 50) {
            clearInterval(timer);
            counterEl.innerText = target + "%";
            const finalMsg = document.createElement('h2');
            finalMsg.style.color = "#c9184a";
            finalMsg.style.marginTop = "10px";
            finalMsg.innerText = "احبچچچچ";
            document.querySelector('.chat-container').appendChild(finalMsg);
        }
    }, 40);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-fall');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
