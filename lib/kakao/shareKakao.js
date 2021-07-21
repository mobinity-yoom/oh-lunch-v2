
export const shareKakao = (items, links, imgs) => {

  var title = "오늘은 " + items + " 먹자!"
  if (items == "👆 눌러서 확인하기") {
    title = "오늘 점심은 뭘 먹지?"
  }
  
  // window객체가 undefined 아닐 시에 실행하도록
    if (typeof window != 'undefined') {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: title,
              description: '마법의 소라고동님, 오늘 점심은 또 뭘 먹어야 하나요 ..',
              imageUrl: imgs,
              link: {
                webUrl: 'https://oh-lunch.com/',
                mobileWebUrl: 'https://oh-lunch.com/',
              },
            },
            buttons: [
              {
                title: '오늘 점심이 고민된다면?',
                link: {
                  webUrl: 'https://oh-lunch.com/',
                  mobileWebUrl: 'https://oh-lunch.com/',
                },
              },
            ],
          });
    }

};
