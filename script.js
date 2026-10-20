// JavaScript

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();

    console.log(randomNumber); // ランダムな数字をコンソールに表示する（確認用）

    // 既存のクラスを削除
    resultDisplay.className = '';
    document.body.className = '';

    // 0.3 未満だったら
    if (randomNumber < 0.3) {
        resultDisplay.textContent = '大凶';
        document.body.classList.add('daikyou');

    // 0.8 未満だったら
    } else if (randomNumber < 0.5) {
        resultDisplay.textContent = '中凶';
        document.body.classList.add('chukyou');

        } else if (randomNumber < 0.7) {
        resultDisplay.textContent = '小凶';
        document.body.classList.add('shoukyou');


    // どちらでもない場合
    } else {
        resultDisplay.textContent = '凶';
        document.body.classList.add('kyou');
    }

});