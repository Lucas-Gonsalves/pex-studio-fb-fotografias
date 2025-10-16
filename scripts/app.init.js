import { pageLoad } from "./page.load.js";


(function rootInit() {
  window.pageLoad = pageLoad; 
  document.addEventListener("DOMContentLoaded", () => {
    pageLoad("home");
  });
})();
