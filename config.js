var config = {
            "SITE_INFO":{
                "TITLE":"Delta Ten"
            },
            "DB":{
                "SERVICES":{
                    1:{
                        "TITLE":"Sviluppo Web App",
                        "DESC":"Sviluppiamo web app su richiesta.",
                        "LONGDESC":"Sviluppiamo web app di ogni tipo, applicazioni pubbliche sul web non native (IOS,ANDROID), forniamo esempi su come poi dovrebbe essere il risultato finale, proponiamo i servizi a minori prezzi con le migliori qualità secondo i nostri pensieri del settore.",
                        "IMG":"https://cdn3.iconfinder.com/data/icons/seo-and-web-41/567/Seo_and_Web-07-512.png",
                        "OTHIMG":"https://cdn.dribbble.com/users/1216441/screenshots/16672394/media/0e9cd95548eec3ce8dc402cee91e141a.png"
                    },
                    2:{
                        "TITLE":"Sviluppo Web Sites",
                        "DESC":"Sviluppiamo siti web su richiesta.",
                        "LONGDESC":"Sviluppiamo siti web aziendali secondo ogni tipo di esigenza, contattaci per avere maggiori info, se non hai ancora nessuna idea su come 'fare' il tuo sito web ti aiutiamo proponendoti esempi.",
                        "IMG":"https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/web-icon.png",
                        "OTHIMG":"https://img.freepik.com/premium-vector/futuristic-technology-websites-background_71773-297.jpg"
                    },
                    3:{
                        "TITLE":"Sviluppo Dashboard",
                        "DESC":"Sviluppiamo dashboard modificabili.",
                        "LONGDESC":"Sviluppiamo dashboard per aziende di tutti i tipi completamente personalizzabile secondo i requisiti dell'azienda, contattaci per maggiori info.",
                        "IMG":"https://static.vecteezy.com/system/resources/previews/008/329/474/original/dashboard-icon-style-free-vector.jpg",
                        "OTHIMG":"media/images/Carousel3.jpg"
                    }
                },
                "CAROUSELS":{
                    1:{
                        "TITLE":"Società Innovativa.",
                        "DESC":"Società con il massimo apprendimento.",
                        "IMG":"media/images/Carousel1.jpg",
                        "ACTIVE":false
                    },
                    2:{
                        "TITLE":"Ai tempi con le tecnologie.",
                        "DESC":"Ci aggiorniamo sempre restando a tempo con le tecnologie, impariamo nuovi framework, linguaggi,ecc..",
                        "IMG":"media/images/Carousel2.jpg",
                        "ACTIVE":true
                    },
                    3:{
                        "TITLE":"Personalizzazione Completa.",
                        "DESC":"Personalizziamo al massimo secondo le esigenze dei clienti.",
                        "IMG":"media/images/Carousel3.jpg",
                        "ACTIVE":false
                    },
                }
            }
        }
document.title =config.SITE_INFO.TITLE + " - "+verPath(window.location.pathname);
document.head.innerHTML += '<link rel="icon" type="image/x-icon" href="https://deltaxweb.github.io/home/media/images/Favicon.jpg"/>';
actPage(verPath(window.location.pathname));
setServices(config.DB.SERVICES);
setBigServices(config.DB.SERVICES);
setCarousel(config.DB.CAROUSELS);



function verPath(path) {
    if (path.substring(1,path.indexOf('.')) == "index") return "Home";
    else {
        let c = 0;
        let lastSlash = 0;
        for (let index = 0; index < path.length; index++) {
            if (path.charAt(index) == "/") {
                c ++;
                lastSlash = index;
            }
        }
        if (c > 1) {
            return path.substring(lastSlash + 1,path.indexOf('.')).slice(0,1).toUpperCase() 
                   + path.substring(lastSlash + 1,path.indexOf('.')).slice(1);
        }
    }
}

function actPage(page) {
    switch (page) {
        case "Home":
            document.getElementById("HomeLink").className = "nav-link active";
            break;
        case "Servizi":
            document.getElementById("ServicesLink").className = "nav-link active";
            break;
        case "Prezzi":
            document.getElementById("PricesLink").className = "nav-link active";
            break;
    }
}

function setServices(db) {
    let homeServices = document.getElementById('homeServices');
    for (let index = 1; index <= Object.keys(db).length; index++) {
        homeServices.innerHTML += '<div class="col-lg-4">\
        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="'+db[index].IMG+'" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"/>\
        <h2 class="fw-normal">'+db[index].TITLE+'</h2>\
        <p>'+db[index].DESC+'</p>\
        <p><a class="btn btn-secondary" href="#'+index+'">Maggiori Info &raquo;</a></p>\
        </div>';
    }
    
}

function setBigServices(db) {
    let bigHomeServices = document.getElementById('servicesHomeBig');
    for (let index = 1; index <= Object.keys(db).length; index++) {
        if (index %2 == 1) classToUse = "col-md-7", classToUseTwo = "col-md-5";
        else classToUse = "col-md-7 order-md-2", classToUseTwo = "col-md-5 order-md-1";
        bigHomeServices.innerHTML += '<div class="row featurette" id="'+index+'"><div class="'+classToUse+'">\
        <h2 class="featurette-heading fw-normal lh-1">'+db[index].TITLE+'.</h2>\
        <p class="lead">'+db[index].LONGDESC+'</p>\
        </div><div class="'+classToUseTwo+'">\
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="'+db[index].OTHIMG+'" role="img" focusable="false" >\
        </div></div></div>\
        <hr class="featurette-divider">';
    }
}

function setCarousel(db) {
    let caruselConteiner = document.getElementById('carouselContainer');
    for (let index = 1; index <= Object.keys(db).length; index++) {
        if (db[index].ACTIVE) classToUse = "carousel-item active";
        else classToUse = "carousel-item";
        console.group(classToUse)
        caruselConteiner.innerHTML += '<div class="'+classToUse+'">\
        <img class="bd-placeholder-img" width="100%" height="100%" src="'+db[index].IMG+'" aria-hidden="true" focusable="false"/>\
        <div class="container">\
        <div class="carousel-caption text-start">\
        <h1>'+db[index].TITLE+'.</h1>\
        <p>'+db[index].DESC+'.</p>\
        </div>\</div>\</div>';
    }
}


