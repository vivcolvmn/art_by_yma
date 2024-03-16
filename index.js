document.addEventListener("DOMContentLoaded", () => {

    const h1 = document.createElement("h1");
    document.body.appendChild(h1);

    const main = document.createElement("div");
    main.className = "main";
    document.body.appendChild(main);

    const watercolor = document.createElement("div");
    watercolor.className = "watercolor";
    main.appendChild(watercolor);

    watercolor.addEventListener("click", () => {
        h1.style.backgroundImage = "url(./resources/watercolor.png)";
        h1.style.height = "120px";
        h1.style.width = "337px"
        main.innerHTML = "";
    })

    const penAndInk = document.createElement("div");
    penAndInk.className = "penAndInk";
    main.appendChild(penAndInk);

    penAndInk.addEventListener("click", () => {
        h1.style.backgroundImage = "url(./resources/pen&ink.png)";
        h1.style.height = "120px";
        h1.style.width = "387px"
        main.innerHTML = "";
    })

    const sculpture = document.createElement("div");
    sculpture.className = "sculpture";
    main.appendChild(sculpture);

    sculpture.addEventListener("click", () => {
        h1.style.backgroundImage = "url(./resources/sculpture.png)";
        h1.style.height = "120px";
        h1.style.width = "298px"
        main.innerHTML = "";
    })

    const mixedMedia = document.createElement("div");
    mixedMedia.className = "mixedMedia";
    main.appendChild(mixedMedia);

    mixedMedia.addEventListener("click", () => {
        h1.style.backgroundImage = "url(./resources/mixed_media.png)";
        h1.style.height = "120px";
        h1.style.width = "446px"
        main.innerHTML = "";
    })

    const digital = document.createElement("div");
    digital.className = "digital";
    main.appendChild(digital);

    digital.addEventListener("click", () => {
        h1.style.backgroundImage = "url(./resources/digital.png)";
        h1.style.height = "120px";
        h1.style.width = "262px"
        main.innerHTML = "";
    })

    const about = document.createElement("div");
    about.className = "about";
    main.appendChild(about);

    about.addEventListener("click", () => {
        h1.style.backgroundImage = "url(./resources/about.png)";
        h1.style.height = "120px";
        h1.style.width = "202px"
        main.innerHTML = "";
    })

});
