// Soundboard logic in JavaScript

const soundMap = {
  pizza: "/sound/pizza.mp3",
  robot: "/sound/robot.mp3",
  dog: "/sound/dog.mp3",
  // Add more default sounds here if desired
};

function assignSoundToButton(soundName, soundUrl) {
  soundMap[soundName] = soundUrl;
}

function setupSoundboard() {
  const buttons = document.querySelectorAll(".sound-btn");
  buttons.forEach((btn) => {
    const soundName = btn.getAttribute("data-sound-name") || "";
    btn.onclick = () => {
      const url = soundMap[soundName];
      if (url) {
        const audio = new Audio(url);
        audio.play();
      } else {
        alert(`No sound assigned for '${soundName}'.`);
      }
    };
  });
}

function setupAssignSoundForm() {
  const form = document.getElementById("assign-sound-form");
  const nameInput = document.getElementById("sound-name");
  const urlInput = document.getElementById("sound-url");
  if (!form || !nameInput || !urlInput) return;
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const url = urlInput.value.trim();
    if (name && url) {
      assignSoundToButton(name, url);
      alert(`Assigned sound '${name}'!`);
      nameInput.value = "";
      urlInput.value = "";
    }
  };
}

window.addEventListener("DOMContentLoaded", () => {
  setupSoundboard();
  setupAssignSoundForm();
});