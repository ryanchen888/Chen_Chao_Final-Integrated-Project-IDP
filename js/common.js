function locationMesage()
{
    location.href = "./contact.html";
}

function locationResult()
{
    location.href = "./result.html";
}

function location404()
{
    location.href = "./404.html";
}

var isLayer = false;

function openLayer()
{
    if (isLayer) {
        isLayer = false;
        document.querySelector(".header-menu-ext").style.display = "none";
    }
    else {
        isLayer = true;
        document.querySelector(".header-menu-ext").style.display = "block";
    }
}

function closeLayer()
{
    isLayer = false;
    document.querySelector(".header-menu-ext").style.display = "none";
}

function locationHome()
{
    location.href = "./index.html";
}

var productIndex = 0;

function productSwitch(num)
{
    productIndex = (5 + productIndex + num) % 5;
    var doms = document.querySelectorAll(".product-item")
    for (var i = 0; i < doms.length; i++) {
        doms[i].style.display = "none";
    }
    document.querySelector(".product-item:nth-of-type(" + (productIndex + 1) + ")").style.display = "block";
}

var tabProductIndex = 0;

function tabProductSwitch(num)
{
    if (window.innerWidth < 1200) {
        if (tabProductIndex == 0) {
            tabProductIndex = 1;
            document.querySelector(".product-item-3").style.display = "none";
            document.querySelector(".product-item-1").style.backgroundImage = "url(./img/can4.jpg)";
            document.querySelector(".product-item-2").style.backgroundImage = "url(./img/can5.jpg)";
            var wrappers = document.querySelectorAll(".circle-wrapper");
            for (var i = 0; i < wrappers.length; i++) {
                wrappers[i].style.display = "none";
            }
            document.querySelector(".circle-wrapper-2").style.display = "flex";
        }
        else {
            tabProductIndex = 0;
            document.querySelector(".product-item-3").style.display = "block";
            document.querySelector(".product-item-1").style.backgroundImage = "url(./img/can1.jpg)";
            document.querySelector(".product-item-2").style.backgroundImage = "url(./img/can2.jpg)";
            document.querySelector(".product-item-3").style.backgroundImage = "url(./img/can3.jpg)";
            var wrappers = document.querySelectorAll(".circle-wrapper");
            for (var i = 0; i < wrappers.length; i++) {
                wrappers[i].style.display = "none";
            }
            document.querySelector(".circle-wrapper-1").style.display = "flex";
        }
    }
    else {
        if (tabProductIndex == 0) {
            tabProductIndex = 1;
            document.querySelector(".product-item-2").style.display = "none";
            document.querySelector(".product-item-3").style.display = "none";
            document.querySelector(".product-item-4").style.display = "none";
            document.querySelector(".product-item-1").style.backgroundImage = "url(./img/can5.jpg)";
            var wrappers = document.querySelectorAll(".circle-wrapper");
            for (var i = 0; i < wrappers.length; i++) {
                wrappers[i].style.display = "none";
            }
            document.querySelector(".circle-wrapper-4").style.display = "flex";
        }
        else {
            tabProductIndex = 0;
            document.querySelector(".product-item-2").style.display = "block";
            document.querySelector(".product-item-3").style.display = "block";
            document.querySelector(".product-item-4").style.display = "block";
            document.querySelector(".product-item-1").style.backgroundImage = "url(./img/can1.jpg)";
            document.querySelector(".product-item-2").style.backgroundImage = "url(./img/can2.jpg)";
            document.querySelector(".product-item-3").style.backgroundImage = "url(./img/can3.jpg)";
            document.querySelector(".product-item-4").style.backgroundImage = "url(./img/can4.jpg)";
            var wrappers = document.querySelectorAll(".circle-wrapper");
            for (var i = 0; i < wrappers.length; i++) {
                wrappers[i].style.display = "none";
            }
            document.querySelector(".circle-wrapper-3").style.display = "flex";
        }
    }
}