// index.ts
import "./index.css";
import { controller, signal } from "./utils/abortSignal.ts";
import App from "./app.ts";
import SlytherinBot from "./model/SlytherinBot.ts";
import SlytherinUser from "./model/SlytherinUser.ts"

window.addEventListener("unload", unloadHandler, { once: true });
window.addEventListener("load", loadHandler, { once: true });

function unloadHandler() {
  controller.abort();
}

async function loadHandler() {
  const app = getApp();

  if (!app) {
    return;
  }

  window.addEventListener("pushstate", app.render, { signal });
  window.addEventListener("popstate", app.render, { signal });

  await app.render();
}

function getApp() {
  const appEl = document.getElementById("app");

  if (!appEl) {
    return null;
  }

  const players = getPlayers();

  return new App(appEl, players);
}
// Бот против юзера, если правильно поняла, то должно быть ок
function getPlayers() {
  const slytherinBot = new SlytherinBot();
  const user = new SlytherinUser();

  return [slytherinBot, user];
}
