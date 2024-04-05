const videos = document.querySelectorAll('.video__player');
const videoSources = [

    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977d5e44da13127048971_08(2).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977d13f8854293a375871_08(1).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977cccafd905222beda00_07(1).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977c28868839e3e4054d6_06.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977b57d1533733ddb5046_05.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e96dfa450c282ca832efa4_video_2024-03-05_16-01-32.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e96dedbeb291f8e2e1c12c_IMG_5034.MP4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e96df36ce317053df1d9d6_video_2024-03-04_21-22-03.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e970719626aa0169341c50_0307.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e9779fe034c0252f6aa84f_01.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977a31e405a60c1417f11_02(1).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65e977a9bb7e199b53c30dfa_04.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cdad8fbb76f74aaf513e29_hea.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cda5d108add4c3077c80ed_14890030-720p.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65c46678eb060b2652d58a40_e1369d63-4d07-4002-8e20-dba716380d5d_full-video_1080p_normal.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65cdad742f8a25117bd64cc4_miser.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65ed4fae370b0f7f3aecd1a3_10.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/64597a8e3c345998aa7cd3c4/65ed4fe2c836e1218aad72cc_11.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd455e6485709dd025f1f3_marzo%20(6).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45591f010ba8055f7933_marzo%20(5).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45535b5a2ff508b3180a_marzo%20(4).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd454b82f2587ae9ab7c04_marzo%20(3).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4545737697bcf2879f86_marzo%20(2).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4540df36044af63af0be_marzo%20(1).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd457c74eed39e9f84c62c_marzo%20(13).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4577acaeda24dce1736b_marzo%20(12).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45738da9e9fd81b65a75_marzo%20(11).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd456e5615754244124e2f_marzo%20(9).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45688bbf716559a8e9e3_marzo%20(8).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4564ed609b77a885be50_marzo%20(7).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45850d7b86cc123a929f_marzo%20(14).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48b7a25c5fa665444f51_marzo%20(15).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48c93dd9b46e47e6253f_marzo%20(16).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48cfb35c99ad9860a1d7_marzo%20(17).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48d76970bbb287bfc980_marzo%20(18).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48eac6330d401e6cf879_marzo%20(19).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48f88bbf716559ac6028_marzo%20(21).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd49074012ae2e95ff0702_marzo%20(22).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c404012ae2e9501ef51_marzo%20(23).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c491eaf5ffad23ef893_marzo%20(24).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c57088caa74fe42764d_marzo%20(25).mp4",





    // Agrega aquí más URLs de videos según sea necesario
];

const nombresAleatorios = [
    "🇵🇹 Lorena Caterina 🇵🇹 ",
    "🇫🇮 Ana Maria 🇫🇮",
    "🇨🇦 Carolina Garcia 🇨🇦",
    "🇦🇺 NAKARY MILLER 🇦🇺",
    "🇺🇸 GRACIELA CATERINA 🇺🇸",
    "🇻🇪 Valentina Ribeiro 🇻🇪",
    "🇻🇪 G R A C I E L A 💘 🇻🇪",
    "🇵🇪 Mariana López 🇵🇪",
    "🇷🇴 Andrei Popescu 🇷🇴",
    "🇧🇪 Emma Dubois 🇧🇪",
    "🇬🇷 Ioanna Papadopoulos 🇬🇷",
    "🇨🇱 Matías Silva 🇨🇱",
    "🇭🇺 Levente Kovács 🇭🇺",
    "🇸🇦 Fatima Al-Mansoori 🇸🇦",
    "🇲🇽 Alejandro Hernández 🇲🇽",
    "🇵🇦 Camila González 🇵🇦",
    "🇨🇮 Aminata Diop 🇨🇮",
    "🇨🇴 Isabela Ríos 🇨🇴",
    "🇮🇹 Sofia Santoro 🇮🇹",
    "🇳🇴 Emilie Andersen 🇳🇴",
    "🇦🇹 Lara Hofmann 🇦🇹",
    "🇳🇿 Harper Wilson 🇳🇿",
    "🇨🇿 Klára Nováková 🇨🇿",
    "🇮🇪 Aoife Murphy 🇮🇪",
    "🇨🇭 Alessia Rossi 🇨🇭",
    "🇮🇳 Aarav Patel 🇮🇳",
    "🇦🇪 Layla Khan 🇦🇪",
    "🇸🇪 Malin Lindström 🇸🇪",
    "🇿🇦 Thabo Molefe 🇿🇦",
    "🇳🇱 Daan van der Berg 🇳🇱",
    "🇧🇷 Maria da Silva 🇧🇷",
    "🇫🇷 Léa Dubois 🇫🇷",
    "🇰🇷 Min-jun Kim 🇰🇷",
    "🇯🇵 Yui Tanaka 🇯🇵",
    "🇩🇪 Lena Müller 🇩🇪",
    "🇬🇧 Oliver Hughes 🇬🇧",
    "🇪🇸 Marta García 🇪🇸",
    // Agrega más nombres según sea necesario
];

const textosAleatorios = [
    "Watch Me Masturbate Live ❤️",
    "📞🔥 Phone Calls, 💥 Custom Videos, 😋 Live Broadcasts, Your Name on My 🍒TITS!",
    "Made in Czech 🇨🇿🍺 Big smile and big...heart🍒 Cum join me in my adventures as I show off just for you baby ❤️",
    "❣ Exclusive VIP Content 🔞|Seduction and Sensuality Unleashed 🦊| Monthly Nude Delights📸",
    "😻 Model, ❤️ student 🔥I make exclusive videos, 📞calls! Sexsting LIVE -broadcasts!!🍑🍒 #fuck",
    "Model, 20 y.o 🇪🇸 Wanna chat with me? Check all my links 😍",
    "Hi I’m Molly! ❤️ Just a sweet girl who loves to be naughty 🤫😈💋CHECK ALL MY LINKS via IG! ✨",
    "🔥 Hot and ready for you! 😈 Let's play together and make your fantasies come true 💦",
    "🍑 Curvy and fun! 💋 Join me for exclusive content and live shows 📸",
    "🌟 Your favorite cam girl! 🎥 Live shows, custom videos, and more 🔞",
    "💖 Sensual and seductive! 😘 Exclusive content just for you 💌",
    "🔥 Naughty but nice! 💋 Cum play with me and let's have some fun 🍒",
    "🌺 Sweet and sexy! 💫 Join me for a private show and let's get wild together 🚀",
    "👅 Ready to please! 💦 Let's explore your wildest desires together 🔥",
    "🔞 Explicit content and live shows! 💋 Cum chat with me and let's have some fun 😘",
    "🌈 Fun and flirty! 💖 Exclusive content and private shows just for you 🌟",
    "💥 Wild and willing! 🔞 Let's get naughty together and have an unforgettable time 😈",
    // Agrega más textos según sea necesario
];

// Función para cambiar aleatoriamente el video
function changeRandomVideo() {
    videos.forEach(video => {
        const randomSourceIndex = Math.floor(Math.random() * videoSources.length);
        const newSource = videoSources[randomSourceIndex];

        video.src = newSource;
        video.load();
        video.play();
    });
}

// Función para cambiar aleatoriamente el nombre
function changeRandomName() {
    const nameElement = document.getElementById('randomName');
    const randomIndex = Math.floor(Math.random() * nombresAleatorios.length);
    const newName = nombresAleatorios[randomIndex];

    nameElement.textContent = newName;
}

// Función para cambiar aleatoriamente el texto
function changeRandomText() {
    const textElement = document.getElementById('randomText');
    const randomIndex = Math.floor(Math.random() * textosAleatorios.length);
    const newText = textosAleatorios[randomIndex];

    textElement.textContent = newText;
}

// Ejecutar las funciones al cargar la página
window.onload = function () {
    changeRandomVideo();
    changeRandomName();
    changeRandomText();
};

function recargarPagina() {
    // Recargar la página
    location.reload();
}





// Crear un elemento <script>
//var script = document.createElement('script');
//script.type = 'text/javascript';
//script.src = '//pl21546160.profitablegatecpm.com/6c/9c/ca/6c9cca2344310fc5890c46b7c2e6c2ca.js';

// Agregar el elemento <script> al final del body
//document.body.appendChild(script);