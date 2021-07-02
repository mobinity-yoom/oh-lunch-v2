
export default function slotMachine() {

    var menuList = ['햄버거', '라면', '한식', '중식', '양식', '냉면'];

    // css입힌 
    function buildSlotItem (text) {
        return $('<div>').addClass('slottt-machine-recipe__item')
                        .text(text)
    }

    function buildSlotContents ($container, menuList) {
        $items = menuList.map(buildSlotItem);
        $container.append($items);
    }

    function popPushNItems ($container, n) {
        $children = $container.find('.slottt-machine-recipe__item');
        $children.slice(0, n).insertAfter($children.last());

        if (n === $children.length) {
            popPushNItems($container, 1);
        }
    }

    // After the slide animation is complete, we want to pop some items off
    // the front of the container and push them onto the end. This is
    // so the animation can slide upward infinitely without adding
    // inifinte div elements inside the container.
    function rotateContents ($container, n) {
        setTimeout(function () {
            popPushNItems($container, n);
            $container.css({top: 0});
        }, 300);    
    }

    function randomSlotttIndex(max) {
        var randIndex = (Math.random() * max | 0);
        return (randIndex > 10) ? randIndex : randomSlotttIndex(max);
    }
    
    function animate() {
        var wordIndex = randomSlotttIndex(menuList.length);
        $wordbox.animate({top: -wordIndex*150}, 500, 'swing', function () {
        rotateContents($wordbox, wordIndex);
        });
    }

    
    function display() {
        $wordbox = $('#wordbox .slottt-machine-recipe__items_container');
        console.log($wordbox);
        buildSlotContents($wordbox, menuList);  
        buildSlotContents($wordbox, menuList);  
        buildSlotContents($wordbox, menuList);  
        buildSlotContents($wordbox, menuList);  
        
        setInterval(animate, 2000);
    };
}