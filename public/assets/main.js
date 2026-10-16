// WebとA4プレビューは同じHTMLを使用します。
const webButton = document.querySelector('#web');
const paperButton = document.querySelector('#paper');
function setMode(isA4) {
  document.body.classList.toggle('a4', isA4);
  webButton.setAttribute('aria-pressed', String(!isA4));
  paperButton.setAttribute('aria-pressed', String(isA4));
}
webButton.addEventListener('click', () => setMode(false));
paperButton.addEventListener('click', () => setMode(true));
// フォント・画像を読み込んでから印刷。Ctrl+Pにも対応します。
document.querySelector('#print').addEventListener('click', async () => {
  await document.fonts.ready;
  await Promise.all(Array.from(document.images, (image) => image.decode().catch(() => {})));
  window.print();
});
let wasA4BeforePrint = false;
window.addEventListener('beforeprint', () => {
  wasA4BeforePrint = document.body.classList.contains('a4');
  setMode(true);
});
window.addEventListener('afterprint', () => setMode(wasA4BeforePrint));
