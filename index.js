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
        main.innerHTML = "";
    })

    const oil = document.createElement("div");
    oil.className = "oil";
    main.appendChild(oil);

    const penAndInk = document.createElement("div");
    penAndInk.className = "penAndInk";
    main.appendChild(penAndInk);

    const sculpture = document.createElement("div");
    sculpture.className = "sculpture";
    main.appendChild(sculpture);

    const mixedMedia = document.createElement("div");
    mixedMedia.className = "mixedMedia";
    main.appendChild(mixedMedia);

    const digital = document.createElement("div");
    digital.className = "digital";
    main.appendChild(digital);

    const about = document.createElement("div");
    about.className = "about";
    main.appendChild(about);

});
