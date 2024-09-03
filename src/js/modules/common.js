// 共通


// const lv2Heading = document.querySelector('.lv2Heading');
// lv2Heading.style.color = 'red';




// jQuery
// import $ from 'jquery';

// $('.lv2Heading').css('color', 'plum');




// 関数（あいさつ）
// const greet = (name) => {
//   console.log(`ありがとう。${name}さん。`);
// };

// export { greet };




// グローバルナビゲーションの開閉
const gNavBtn = document.querySelector('.gNavBtn');
const gNav = document.querySelector('.gNav');


// gNavBtn.addEventListener('click', function(e) {
//   document.documentElement.classList.toggle('is-gNavOpen');
// }, false);

// or

gNavBtn.addEventListener('click', function(e) {
  document.documentElement.classList.toggle('is-gNavOpen');

  if (gNav.style.height) {
    gNav.style.height = null;
  } else {
    gNav.style.height = document.documentElement.clientHeight - 50 + 'px';
  }
}, false);




// 画面横幅を変更した場合
const minWidth992 = window.matchMedia('(min-width: 992px)');

minWidth992.addEventListener('change', (e) => {
  document.documentElement.classList.remove('is-gNavOpen');

  if (e.matches) {
    gNav.style.height = null;
  }
}, false);
