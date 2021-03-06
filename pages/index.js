// index.js

import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import { shareKakao } from '../lib/kakao/shareKakao';
import translator from "../lib/Translator";
import * as ga from "../lib/ga";
import ReloadLottie from '../lib/lottie/reload';
import LocationLottie from '../lib/lottie/location';
import ShareLottie from '../lib/lottie/share';
import ClickLottie from '../lib/lottie/click';
import { useRouter } from "next/router";

const isServer = () => typeof window === 'undefined';

// const NoSSRComponent = dynamic(() => import("./slotMachine"), {
//   loading: () => <p>.....</p>,
//   ssr: false,
// });

export default function Home() {

  const router = useRouter();

  var menuList = ["갈비찜", "국밥", "국수", "김밥", "김치볶음밥", "김치찜", "냉면", "닭갈비",
                  "닭볶음탕", "도시락", "돈까스", "라멘", "라면", "리소토", "보쌈", "볶음밥",
                  "분식", "불고기", "비빔밥", "삼계탕", "샌드위치", "생선구이", "수제비",  "스테이크", "쌀국수", "알밥", "양꼬치", "연어덮밥", "우동", "월남쌈", "제육볶음",
                  "짬뽕", "쭈꾸미", "찌개", "찜닭", "초밥", "추어탕", "치킨", "칼국수", "타코", "탕수육", "파스타", "팟타이", "피자", "한정식", "해장국", "햄버거" //"순대","떡볶이",
                ]  
  useEffect(() => {
    // useEffect() 는 초기 빌드에는 실행되지 않으므로
    // 처음 ssr시에는 window 객체를 불러오지 않도록
    window.Kakao.init('96a24fa84b8245d9c5ef14fd911fba9a');
  }, []);

  // [state(ui 바뀌는)변수, 해당 변수를 갱신하는 함수]
  const [items, setItems] = useState('???');
  const [links, setLinks] = useState("https://map.naver.com/v5/search/");
  const [imgs, setImgs] = useState("/logo_back.JPG");

  // useEffect(() => {
  //   const selectedLink = "https://map.naver.com/v5/search/" + items;
  //   setLinks(selectedLink)
  //   const selectedImg = `${process.env.IMAGE_URL}${translator(items)}.jpg`
  //   setImgs(selectedImg);
  // }, [items]);

  const clickHandler = () => {
    const selected = menuList[Math.floor(Math.random() * menuList.length)];
    if ( items !== "???") { // * 첫 메뉴 고르기가 아니라면..
      ga.event({
        action: "한번더 버튼 클릭",
        params: {
          event_category : "한번더 클릭 전 메뉴",
          event_label : items
        }
      })
    }
    setItems(selected);
    console.log("setItem finished")
    const selectedLink = "https://map.naver.com/v5/search/" + selected;
    setLinks(selectedLink);
    console.log("setLink finished")
    const selectedImg = `${process.env.IMAGE_URL}${translator(selected)}.jpg`
    setImgs(selectedImg);
    console.log("setImgs finished")
  }

  // const databyItems = () => {
  //   if (router.query.menu !== undefined) {
  //     setItems(router.query.menu)
  //     console.log("setItems finished", items)
      // const selectedLink = "https://map.naver.com/v5/search/" + items;
      // setLinks(selectedLink);
      // console.log("setLink finished")
      // const selectedImg = `${process.env.IMAGE_URL}${translator(items)}.jpg`
      // setImgs(selectedImg);
      // console.log("setImgs finished")
  //   }
  // }

  const clickHandlerKakao = () => {
    ga.event({
      action: "공유 버튼 클릭",
      params: {
        event_category: "공유한 메뉴",
        event_label : items
      }
    })
    if (typeof window != 'undefined') {
      // const title = items;
      // const sharelink = links;
      shareKakao(items, links, imgs);
    }
  }

  // console.log("imgs,", imgs);
  return (
    <div className={styles.container}>
      <Head>
        <title>오늘 점심 뭐먹지?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          오늘 점심은
        </h1>

        {/* <NoSSRComponent /> */}
        {/* {!isServer() ? <AnimationButton></AnimationButton> : 'null'} */}

        <div
          // onClick={() => {
          //   const selected = menuList[Math.floor(Math.random() * menuList.length)];
          //   // setItems(selected)
          //   router.push(
          //     `/?menu=${selected}`
          //   );
          //   databyItems();
          // }}
          onClick={clickHandler}
          className={styles.item}>
            {items}
            {/* {items == "logo" ? "???" : items} */}
            { items == "???" && 
          <ClickLottie className={styles.clicklottie}></ClickLottie>
          }
        </div>

        <h1 className={styles.title}>
          어떠세요?
        </h1>

        <div className={styles.bgWrap}>
          <img className={styles.bgWrap}
            src={imgs}
            alt={items}
          ></img>
          {/* <Image 
            src={imgs}
            alt={items}
            layout="fill"
            objectFit="cover"
            priority
          ></Image> */}
        </div>
        
        {items !== "???" && <>
          <div className={styles.grid1}>
            <a
              onClick={clickHandler}
              className={styles.card1}>
              <h2><ReloadLottie></ReloadLottie>한 번 더!</h2>
            </a>
          </div>

          <div className={styles.grid2}>
            <a href={links} target="_blank" className={styles.card2} rel="noreferrer" 
              onClick={()=>{
                ga.event({ 
                action: "찾아보기 버튼 클릭",
                params: {
                  event_category : "지도에서 찾아본 메뉴",
                  event_label : items
                }})}}
            >
              <h2><LocationLottie></LocationLottie>찾아보기</h2>
            </a>
            <a onClick={clickHandlerKakao} className={styles.card2}>
              <h2><ShareLottie></ShareLottie>알려주기</h2>
            </a>
          </div>
          </>
        }
      </main>

      <footer className={styles.footer}>
        <a>Powered by &nbsp;{' '}{' '}</a>
          <a
            href="https://info.oh-lunch.com/"
            target="_blank">
              <img src="/logo.png" alt="Logo" width={40} height={40} />
          </a>
          <a
            href="https://mobinity.io/"
            target="_blank">
              <img src="/moby.png" alt="Logo" width={40} height={40} />
          </a>
      </footer>
    </div>
  );
}

