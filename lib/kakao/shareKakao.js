
export const shareKakao = (title, sharelink) => {
  // window객체가 undefined 아닐 시에 실행하도록
    if (typeof window != 'undefined') {
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: title,
              description: '마법의 소라고동님, 오늘 점심은 또 뭘 먹어야 하나요 ..',
              imageUrl: 'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png', // 메인으로 보여질 이미지 주소
              link: {
                webUrl: sharelink,
                mobileWebUrl: sharelink,
              },
            },
            buttons: [
              {
                title: '오늘 점심 뭐 먹지?',
                link: {
                  webUrl: 'https://oh-lunch.com/',
                  mobileWebUrl: 'https://oh-lunch.com/',
                },
              },
            ],
          });
    }

};
