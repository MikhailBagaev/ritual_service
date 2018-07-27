$(function () {
    $('.drop').hover(
        function () {
            $(this).children('.sub-menu').stop().slideDown(600);
        },
        function () {
            $(this).children('.sub-menu').stop().slideUp(600);
        });
    $('.drop').hover(
        function(){
    $('.sub-menu li a').addClass('hover');
    });
});

(function () {

    const chevro1 = document.querySelector("#chevron-down-basket");
    const chevro2 = document.querySelector("#chevron-down-autorization");
    const hiddenBlock1 = document.querySelector(".basket-block-hidden");
    const hiddenBlock2 = document.querySelector(".autorization-block-hidden");


    function checkChevro(e) {
        var chevro = e.target;
        return chevro;
    };

    function changeGlyphicon(e) {
        var glyphicon = e.target;
        if (glyphicon.classList.contains("glyphicon-chevron-down")) {
            glyphicon.classList.remove('glyphicon-chevron-down');
            glyphicon.classList.add('glyphicon-chevron-up');
        } else {
            glyphicon.classList.remove('glyphicon-chevron-up');
            glyphicon.classList.add('glyphicon-chevron-down');
        }
    };    

    function showContent(glyph) {
        var glyphicon = glyph;
        if (glyphicon.id === "chevron-down-basket") {
            if (glyphicon.classList.contains('glyphicon-chevron-up')) {
                (hiddenBlock1.classList.remove('block-hidden'));
            } else if (glyphicon.classList.contains('glyphicon-chevron-down')) {
                (hiddenBlock1.classList.add('block-hidden'));
            }
        }

        if (glyphicon.id === "chevron-down-autorization") {
            if (glyphicon.classList.contains('glyphicon-chevron-up')) {
                (hiddenBlock2.classList.remove('block-hidden'));
            } else if (glyphicon.classList.contains('glyphicon-chevron-down')) {
                (hiddenBlock2.classList.add('block-hidden'));
            }
        }
    }

    function init(e) {
        changeGlyphicon(e);
        showContent(checkChevro(e));
    }

    function initListeners() {
        chevro1.addEventListener('click', init);
        chevro2.addEventListener('click', init);
    }

    initListeners();

})();