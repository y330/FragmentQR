
let initSettings = () => {
  chrome.storage.sync.get([
    'dark_mode'
  ], (items) => {

    if (items.dark_mode) {
      document.querySelector('#config input[name=dark_mode]').setAttribute('checked', 'checked');
      document.body.classList.add('light');
    }
    else {
      document.querySelector('#config input[name=dark_mode]').removeAttribute('checked');
      document.body.classList.remove('light');
    }


  });
}


let onSettingsSubmit = (e) => {
  e.preventDefault();
  let dark_mode = document.querySelector('#config input[name=dark_mode]').checked;

  chrome.storage.sync.set({
    'dark_mode': dark_mode
  }, () => {
    document.querySelector('#message').textContent = 'Setting saved!';
    document.querySelector('#message2').textContent = 'Setting saved!';

    // check if dark mode is enabled
    // lol has no effect on actual theme yet.
    if (dark_mode) document.body.classList.add('light');
    else document.body.classList.remove('light');
  });
}


document.querySelector('#config').onsubmit = onSettingsSubmit;

// because an protected pages like href=chrom://extension/configureCommands are not permitted in chrome
let onKeyboardShortcuts = (e) => {
  e.preventDefault();
  chrome.tabs.create({ url: 'chrome://extensions/configureCommands' });
}

document.querySelector('.shortcuts').onclick = onKeyboardShortcuts;

document.querySelector('#version').textContent = 'v' + chrome.runtime.getManifest().version;

initSettings();
