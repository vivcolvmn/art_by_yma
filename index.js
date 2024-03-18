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
        window.scrollTo(0, 0);
        h1.style.backgroundImage = "url(./resources/watercolor.png)";
        h1.style.height = "120px";
        h1.style.width = "321px";
        main.innerHTML = "";
        const reload = document.createElement("button");
        reload.className = "reload";
        reload.innerText = "back"
        main.appendChild(reload);

        reload.addEventListener("click", () => {
            location.reload();
        })
    });

    const penAndInk = document.createElement("div");
    penAndInk.className = "penAndInk";
    main.appendChild(penAndInk);

    penAndInk.addEventListener("click", () => {
        window.scrollTo(0, 0);
        h1.style.backgroundImage = "url(./resources/pen&ink.png)";
        h1.style.height = "120px";
        h1.style.width = "366px";
        main.innerHTML = "";
        const reload = document.createElement("button");
        reload.className = "reload";
        reload.innerText = "back"
        main.appendChild(reload);

        reload.addEventListener("click", () => {
            location.reload();
        })
    });

    const sculpture = document.createElement("div");
    sculpture.className = "sculpture";
    main.appendChild(sculpture);

    sculpture.addEventListener("click", () => {
        window.scrollTo(0, 0);
        h1.style.backgroundImage = "url(./resources/sculpture.png)";
        h1.style.height = "120px";
        h1.style.width = "281px"
        main.innerHTML = "";
        const reload = document.createElement("button");
        reload.className = "reload";
        reload.innerText = "back"
        main.appendChild(reload);

        reload.addEventListener("click", () => {
            location.reload();
        })
    });

    const mixedMedia = document.createElement("div");
    mixedMedia.className = "mixedMedia";
    main.appendChild(mixedMedia);

    mixedMedia.addEventListener("click", () => {
        window.scrollTo(0, 0);
        h1.style.backgroundImage = "url(./resources/mixed_media.png)";
        h1.style.height = "120px";
        h1.style.width = "427px";
        main.innerHTML = "";
        const reload = document.createElement("button");
        reload.className = "reload";
        reload.innerText = "back"
        main.appendChild(reload);

        reload.addEventListener("click", () => {
            location.reload();
        })
    });

    const digital = document.createElement("div");
    digital.className = "digital";
    main.appendChild(digital);

    digital.addEventListener("click", () => {
        window.scrollTo(0, 0);
        h1.style.backgroundImage = "url(./resources/digital.png)";
        h1.style.height = "120px";
        h1.style.width = "236px";
        main.innerHTML = "";
        const reload = document.createElement("button");
        reload.className = "reload";
        reload.innerText = "back"
        main.appendChild(reload);

        reload.addEventListener("click", () => {
            location.reload();
        })
    });

    const about = document.createElement("div");
    about.className = "about";
    main.appendChild(about);

    about.addEventListener("click", () => {
        window.scrollTo(0, 0);
        h1.style.backgroundImage = "url(./resources/about.png)";
        h1.style.height = "120px";
        h1.style.width = "190px";
        main.innerHTML = "";
        const reload = document.createElement("button");
        reload.className = "reload";
        reload.innerText = "back"
        main.appendChild(reload);

        reload.addEventListener("click", () => {
            location.reload();
        })
    });

});
