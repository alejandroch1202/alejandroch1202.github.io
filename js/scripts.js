document.querySelector("#video").playbackRate = 0.8;

document.querySelector("#gmail").addEventListener("click", () => {
  let msg = document.querySelector("#msg");
  let email = "alejandrochavez1202@gmail.com";

  navigator.clipboard.writeText(email);
  msg.textContent = "Copied!";
});

document.querySelector("#gmail").addEventListener("mouseout", () => {
  let msg = document.querySelector("#msg");

  msg.textContent = "Copy to clipboard";
});