const reviewSearchElement = (merchTitleName) => {
    // const API_KEY = "AIzaSyCHft0TYkdMXi6KFSS_-9EQ"
    let baseGoolgeSearchURL = `https://www.google.com/search?client=ms-google-coop&q=${merchTitleName}`;
    let img = document.createElement('img');
    img.src = chrome.extension.getURL('googleicon_prod.png');
    img.style.width = "40px";
    img.style.display = "inline";

    let span = document.createElement('span');
    span.style.marginLeft = "5px";
    span.style.marginTop = "5px";
    span.style.marginBottom = "5px";
    span.style.position = "absolute";

    let div = document.createElement('div');
    div.style.cursor = "pointer";
    div.style.padding = "0px 0px 5px";
    div.onclick = () => {
        window.open(baseGoolgeSearchURL)
    };
    let text = document.createTextNode("Search Product on google");
    div.appendChild(img);
    span.appendChild(text);
    div.appendChild(span);
    return div;
};

const reviewYoutubeSearchElement = (merchTitleName) => {
    let baseYoutubeSearchURL = `https://www.youtube.com/results?search_query=${merchTitleName}`;
    let img = document.createElement('img');
    img.src = chrome.extension.getURL('yticon_prod.png');
    img.style.width = "35px";
    img.style.display = "inline";

    let span = document.createElement('span');
    span.style.marginLeft = "5px";
    span.style.marginTop = "5px";
    span.style.marginBottom = "5px";
    span.style.position = "absolute";

    let div = document.createElement('div');
    div.style.cursor = "pointer";
    div.style.padding = "0px 0px 5px";
    div.onclick = () => {
        window.open(baseYoutubeSearchURL)
    };
    let text = document.createTextNode("Search review/unboxing on youtube");
    div.appendChild(img);
    span.appendChild(text);
    div.appendChild(span);
    return div;
};

const merchTitleId = (id) => {
    return document.getElementById(id) && document.getElementById(id).textContent.trim().replace(/\s/g, "+");
}
const merchTitleClass = (className) => {
    return document.getElementsByClassName(className) && document.getElementsByClassName(className)[0].textContent.trim().replace(/\s/g, "+");
}
const loadMerchReviewBeforeByIdName = (merchTitleName, id) => {
    return document.getElementById(id) && document.getElementById(id).parentNode && document.getElementById(id).parentNode.insertBefore(reviewSearchElement(merchTitleName), document.getElementById(id));
}

const loadMerchYoutubeReviewBeforeByIdName = (merchTitleName, id) => {
    return document.getElementById(id) && document.getElementById(id).parentNode && document.getElementById(id).parentNode.insertBefore(reviewYoutubeSearchElement(merchTitleName), document.getElementById(id));
}

const loadMerchReviewBeforeByClassName = (merchTitleName, className) => {
    return document.getElementsByClassName(className)[0] && document.getElementsByClassName(className)[0].parentNode && document.getElementsByClassName(className)[0].parentNode.insertBefore(reviewSearchElement(merchTitleName), document.getElementsByClassName(className)[0]);
}

// youtube
const loadMerchYoutubeReviewBeforeByClassName = (merchTitleName, className) => {
    return document.getElementsByClassName(className)[0] && document.getElementsByClassName(className)[0].parentNode && document.getElementsByClassName(className)[0].parentNode.insertBefore(reviewYoutubeSearchElement(merchTitleName), document.getElementsByClassName(className)[0]);
}

const executeElement = () => {
    let merchTitleName = "";

    // daraz
    if (window.location.host.includes("daraz")) {
        merchTitleName = merchTitleClass("pdp-product-title pdp-mod-product-badge-title");
        if (merchTitleName == undefined) {
            return;
        }
        // loadMerchReviewBeforeByIdName(merchTitleName, "module_product_price_1") || loadMerchReviewBeforeByIdName(merchTitleName, "module_product_brand_1")
        loadMerchReviewBeforeByClassName(merchTitleName, "pdp-block pdp-block__rating-questions-summary")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "pdp-block pdp-block__rating-questions-summary")
    }

    // sastodeals
    if (window.location.host.includes("sastodeal")) {
        merchTitleName = merchTitleClass("page-title");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "price-box price-final_price")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "price-box price-final_price")
    }

    // bigpasal

    if (window.location.host.includes("bigpasal")) {
        merchTitleName = merchTitleClass("product_title entry-title");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "price")
    }

    // hamrobazar
    if (window.location.host.includes("hamrobazaar")) {
        merchTitleName = merchTitleClass("title");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByIdName(merchTitleName, "title")
    }

    // meroshoppping

    if (window.location.host.includes("meroshopping")) {
        merchTitleName = merchTitleClass("title");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "updated-date")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "updated-date")

    }

    // dokoman

    if (window.location.host.includes("dokoman")) {
        merchTitleName = merchTitleClass("product_title");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "woocommerce-Price-amount amount")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "woocommerce-Price-amount amount")
    }

    // smartdoko
    if (window.location.host.includes("smartdoko")) {
        merchTitleName = merchTitleClass("s-pro-options col-lg-7 col-12");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "wrap-pro clearfix")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "wrap-pro clearfix")
    }

    // neplify
    if (window.location.host.includes("neplify")) {
        merchTitleName = merchTitleClass("product_title entry-title");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "summary entry-summary")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "summary entry-summary")
    }


    // style97
    if (window.location.host.includes("style97")) {
        merchTitleName = merchTitleClass("product_title");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "product-summary-bottom clearfix")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "product-summary-bottom clearfix")
    }

    // nepkart

    if (window.location.host.includes("nepkart")) {
        merchTitleName = merchTitleClass("product-info");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "description")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "description")
    }


    // dealgara
    if (window.location.host.includes("dealgara")) {
        merchTitleName = merchTitleClass("keep-header");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "keep-under")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "keep-under")
    }

    // baleyo

    if (window.location.host.includes("baleyo")) {
        merchTitleName = merchTitleClass("breadcrumb-item active");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByIdName(merchTitleName, "product_details")
        loadMerchYoutubeReviewBeforeByIdName(merchTitleName, "product_details")
    }

    // istore

    if (window.location.host.includes("istore")) {
        merchTitleName = merchTitleClass("ty-product-block-title");
        if (merchTitleName == undefined) {
            return;
        }
        loadMerchReviewBeforeByClassName(merchTitleName, "tygh-content clearfix")
        loadMerchYoutubeReviewBeforeByClassName(merchTitleName, "tygh-content clearfix")
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    executeElement()
});