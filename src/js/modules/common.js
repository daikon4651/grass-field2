// 共通


// const test2 = document.querySelector('.test2');
// test2.style.color = 'green';




// jQuery
// import $ from 'jquery';

// $('.test2').css('color', 'red');




// ES Modules

// 変数
// const color = 'red';

// 関数（あいさつ）
// const greet = (name) => {
//   console.log(`おはよう。${name}さん。`);
// };

// export { color, greet };




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




// 入力内容の確認するボタンのオンオフ
const privacyCheckbox = document.querySelector('.contactForm__checkbox');

const privacyCheckboxLabel = document.querySelector('.contactForm__checkboxLabel');

const privacyCheckboxLabelText = document.querySelector('.contactForm__checkboxLabelText');

const confirmBtn = document.querySelector('.contactForm__confirmBtn');


privacyCheckbox.addEventListener('click', function(e) {
  console.log(privacyCheckbox.checked);

  confirmBtn.disabled = !privacyCheckbox.checked;
}, false);
