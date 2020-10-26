// phone navbar toggle 

const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('toggle');

    $(".nav-list").toggleClass("nav-list_open")
});



//end



//fixed header




///end





$("#banner_cross").click(function () {
    $(".top_header").hide(200)
    console.log("cliked")
    $(".toggle-menu").addClass("toggle-menu_added")
})
////products cards 

$(".product_one").mouseover(function () {
    $(this).addClass("selected")

    $(".product_two").removeClass("selected")

})

$(".product_one").mouseout(function () {
    $(this).removeClass("selected")
    $(".product_two").addClass("selected")

})


$(".product_three").mouseover(function () {
    $(this).addClass("selected")

    $(".product_two").removeClass("selected")

})

///end


$(".product_three").mouseout(function () {
    $(this).removeClass("selected")
    $(".product_two").addClass("selected")

})




"use strict";

productScroll();

function productScroll() {
    let slider = document.getElementById("slider");
    let next = document.getElementsByClassName("pro-next");
    let prev = document.getElementsByClassName("pro-prev");
    let slide = document.getElementById("slide");
    let item = document.getElementById("slide");

    for (let i = 0; i < next.length; i++) {
        //refer elements by class name

        let position = 0; //slider postion

        prev[i].addEventListener("click", function () {
            //click previos button
            if (position > 0) {
                //avoid slide left beyond the first item
                position -= 1;
                translateX(position); //translate items
            }
        });

        next[i].addEventListener("click", function () {
            if (position >= 0 && position < hiddenItems()) {
                //avoid slide right beyond the last item
                position += 1;
                translateX(position); //translate items
            }
        });
    }

    function hiddenItems() {
        //get hidden items
        let items = getCount(item, true);
        let visibleItems = slider.offsetWidth / 210;
        return items - Math.ceil(visibleItems);
    }
}

function translateX(position) {
    //translate items
    slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
    //count no of items
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
            if (getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i], true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}
