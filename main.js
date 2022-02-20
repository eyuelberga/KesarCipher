import "./style.css";
import { encrypt, decrypt } from "./cipher";
import KeywriteWeb from "@keywrite/web";
import { Amharic } from "@keywrite/ethiopic-input-methods";

const encryptButton = document.querySelector("#encrypt_btn");
const decryptButton = document.querySelector("#decrypt_btn");
const keyInput = document.querySelector("#key_input");
const textInput = document.querySelector("#text_input");
const output = document.querySelector("#output");
const keyboardToggle = document.querySelector("#toggle_keyboard_btn");
encryptButton.addEventListener("click", () => {
  output.innerText = encrypt(textInput.value, parseInt(keyInput.value));
});
decryptButton.addEventListener("click", () => {
  output.innerText = decrypt(textInput.value, parseInt(keyInput.value));
});
const isDisabled = (text, key) => {
  if (text && key) {
    encryptButton.classList.replace("hidden", "visible");
    decryptButton.classList.replace("hidden", "visible");
  } else {
    encryptButton.classList.replace("visible", "hidden");
    decryptButton.classList.replace("visible", "hidden");
  }
};
keyInput.addEventListener("input", (e) => {
  const val = e.target.value;
  isDisabled(textInput.value, val);
});
textInput.addEventListener("input", (e) => {
  const val = e.target.value;
  isDisabled(val, keyInput.value);
});
const keyboardOnIndicator = (isOn) => {
  const OFF_COLOR = "bg-gray-200";
  const ON_COLOR = "bg-green-200";
  if (isOn) {
    keyboardToggle.classList.replace(OFF_COLOR, ON_COLOR);
  } else {
    keyboardToggle.classList.replace(ON_COLOR, OFF_COLOR);
  }
};
const instance = new KeywriteWeb(textInput, {
  Amharic: Amharic.inputMethod,
});
keyboardOnIndicator(instance.on);
keyboardToggle.addEventListener("click", () => {
  instance.on = !instance.on;
  keyboardOnIndicator(instance.on);
});
