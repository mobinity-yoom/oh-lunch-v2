import React from "react";
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";

export default function slotMachine({ target = 0 }) {

    const wordlist = ["한정식", "국밥", "찜닭", "찌개","비빔밥", "해장국", "쭈꾸미", "김치찜", "도시락", "불고기",
"월남쌈", "갈비찜", "족발/보쌈", "닭갈비", "생선구이", "탕", "삼계탕", "수제비", "닭볶음탕", "알밥", "제육볶음", "김치볶음밥", "냉면",
"칼국수", "국수", "김밥", "떡볶이", "순대", "라면", "짬뽕", "볶음밥", "탕수육", "양꼬치",
"초밥", "돈까스", "우동", "라멘", "연어덮밥", "스테이크", "리조또", "피자", "햄버거", "파스타", "타코/브리또", "샌드위치", "쌀국수", "팟타이"];

    const imgPositionInWheel = idx => -idx * (360 / wordlist.length);

    return(
        <motion.div className-="Slot">
            {wordlist.map((url, idx) => (
                <motion.div
                    className={styles.stringdiv}
                    key={idx}
                    style={{
                        originZ: -350,
                        rotateX: imgPositionInWheel(idx),
                    }}
                    animate={{
                        rotateX: -360 * (target +1 ) + imgPositionInWheel(idx + target),
                    }}
                    transition={{ type: "tween", duration: 2 }}
                >
                    {url}
                </motion.div>
            ))}
        </motion.div>
    )
}
/*
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
}*/