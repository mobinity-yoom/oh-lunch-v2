// const {Kakao} = window;

export const initialize = () => {
  // window객체가 undefined 아닐 시에 실행하도록
  if (typeof window != 'undefined') {
    window.Kakao.init('96a24fa84b8245d9c5ef14fd911fba9a');
  }
}