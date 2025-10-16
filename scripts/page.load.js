import { contentLoad } from "./content.load.js";

const importKey = "#app-main";

export function pageLoad(page) {
  if(!page) {
    console.error("Nenhuma página informada para carregar.")
    return
  };

  contentLoad(importKey, `./pages/${page}`);
  return;
};
