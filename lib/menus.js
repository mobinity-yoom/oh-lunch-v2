
export function getAllMenus() {
    // const fileNames = fs.readdirSync(postsDirectory)
    const menuList = ["갈비찜", "국밥", "국수", "김밥", "김치볶음밥", "김치찜", "냉면", "닭갈비", "닭볶음탕", "도시락", "돈까스", "라멘", "라면", "리소토", "보쌈", "볶음밥", "분식", "불고기", "비빔밥", "삼계탕", "샌드위치", "생선구이", "수제비",  "스테이크", "쌀국수", "알밥", "양꼬치", "연어덮밥", "우동", "월남쌈", "제육볶음", "짬뽕", "쭈꾸미", "찌개", "찜닭", "초밥", "추어탕", "치킨", "칼국수", "타코", "탕수육", "파스타", "팟타이", "피자", "한정식", "해장국", "햄버거", "순대","떡볶이"]
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return menuList.map(menu => {
      return {
        params: {
          id: menu
        }
      }
    })
  }