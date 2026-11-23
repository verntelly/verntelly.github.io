// A painting's page: tap to enlarge, drag around, tap again (or close, or Escape) to go back.
const big = document.getElementById("big");
if (big) {
  const pan = big.querySelector(".pan"), im = pan.querySelector("img");
  const middle = () => pan.scrollTo((pan.scrollWidth - pan.clientWidth) / 2, (pan.scrollHeight - pan.clientHeight) / 2);
  document.getElementById("enlarge").addEventListener("click", e => {
    e.preventDefault();
    big.showModal();
    if (im.complete) middle(); else im.addEventListener("load", middle, { once: true });
  });
  big.addEventListener("click", e => { if (e.target.closest("img, #close")) big.close(); });
}
