
<h1> FragmentQR(FQR)</h1>

![Chrome Web Store](https://img.shields.io/chrome-web-store/users/cabodnfakameckfbbgkciiifempglloj)
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cabodnfakameckfbbgkciiifempglloj)
![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/cabodnfakameckfbbgkciiifempglloj)
![GitHub](https://img.shields.io/github/license/y330/FragmentQR)

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

__Latest Stable version:__ FragmentQR v1.8.1(See [Releases](../../releases) tab(coming soon))

<button style="color: blue; background: white 0%;border-radius: 1px; border: 0px">
<a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store"><img src="https://github.com/y330/FragmentQR/blob/master/FragmentQR/img/icon-512.png?raw=true" width="200px"style="margin: -35px 10px 10px -35px; vertical-align: bottom" ></a>
</button>

## *README and website are being revised*



## Summary

**FragmentQR is a QR-code generator that can additionally copy links to snippets of text on a webpage.(See image below)**

<img src="https://lh3.googleusercontent.com/RunMp0HF3eMndmo8M6fFxiwGRH7yEmafekBuxkStSdxZqSAmp4FVZ9wu4_XoyojJvTJM6VgEy9_Y9lzUKgAXdZJ3eA=w640-h400-e365-rj-sc0x00ffffff" width="auto" border-radius="5px"/>


## Introduction

FragmentQR adds a an option to the context menu to copy a link to a snippet of text on a webpage, and within the extension popup you can share that that link usinga QR code.


## [](#getting-started)Getting Started
    
### Installation

FragmentQR is available on 2 different extension stores:

[<h4>![](https://www.google.com/images/icons/product/chrome_web_store-32.png) Installation for Chrome</h4>](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/)(and any other chromium browser)

[<h4>![](https://avatars0.githubusercontent.com/u/11354582?s=32&v=4) Installation for Edge</h4>](https://microsoftedge.microsoft.com/addons/detail/fragmentqr/jbghofoedadhaaepolpeoepofdbckfni)


After you open the extension installation page, click "Add to \_insert\_browser\_name\_here\_" to install FragmentQR to your browser.

### Keyboard Shortcuts and instructions


#### Instructions

<a href="https://bit.ly/FragmentQRv17_tutorial" title="View this as a sideshow on the Chrome Web Store"><img src="https://lh3.googleusercontent.com/pw/ACtC-3f7FGuESSm9z3SPDAbhQHSr3YYL03r1gGBeSWYqbG8NyXxtg3gMWO4dbrM8yuhsMsCuf_JLqLSUWfSSodKzYR8mg6FkX5PmxXgfG8iPANMsQpsiE6GTlWFIRsHIZqi2ZBX0btMnBlUltWArYFdlTrhbhQ=w1210-h448-no?authuser=0" width="fit-content" alt="FragmentQR infographic of intructions"/></a>


1. Select some text
2. Open context menu and click "copy link .... to selected text" 
  + tip: use <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> to copy text fragment
3. Click the extension toolbar icon to open the popup
  + tip: use <kbd>Alt</kbd> + <kbd>Q</kbd> to Open Popup
4. Click the "paste" button the text fragment link into the popup to generate a QR code.
5. You can now share the link you copied or scan the QR code to see the relevant text highlighted.

When someone scans that QR or just goes to the link you copied, A feature called Scroll to text fragment allows the text fragment to be detected when they load the webpage, and will scroll your selected text into view and be highlighted in yellow 🟨.

_Note: Currently scanning the QR code to see the highlights will mostly only work on Android, but there may be functionality on iOS soon_

Once either you or someone else scans the QR code and opens the URL, the browser will open the original webpage and scorll to the selected text which will be highlighted in yellow. 🎉




----

### Supported Browsers

Currently, text fragments are supports in these browsers:
*note: these are all chromium browsers*
 - Chrome 81+ and Microsoft Edge 83+ on all major desktop platforms(mac/win/lin)
 - Google Chrome 90+ on Android
 - Chrome 90+ for Android WebView
 - Opera 62+
 - (Partial)Chrome for iOS: latest version, must enable in chrome://flags




Remember, Fragment is also a functional QR code generator, so even if you cannot use text fragments, you can skip to step 3 of the instructions steps

____

## [](#more-questions)More Questions?

### [](#FAQs-on-the-FragmentQR-wiki)More FAQs on the [Fragment QR Wiki](https://github.com/y330/FragmentQR/wiki)

If you still are in need of an answer feel free to [email me](mailto:avivyonah@gmail.com) with your question

---

## [](#issues-and-changelog)Issues and Changelog

### [](https://github.com/y330/FragmentQR)Known issues

- Theme does not save when changed in options
- Due to a dependancy on material icon font library, the icon font turns into whatever the icon is called when offline and the library is inaccesibe, so the buttons are messed up when offline
- 🛑If you find an issue, [open a new issue](https://github.com/y330/FragmentQR/issues/new) in this repository or post it in the [support tab](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/support) on the Chrome Web Store



### _Changelog v1.8.1_
- (Released on ✔Chrome Web Store, ✔Updated code in repository, ❌Github release, ❌Edge Add-ons)
-  _✔documentation for how to use, ✔/2 updated pictures, and ❌tutorial video, are coming soon_
1. You can now use the paste button, however there is still a bug that i will fix next release so be aware
2. Added 1 updated screenshot

### _Changelog v1.8.0_
- (Released on ✔chrome web store, ✔Updated code in repository, and ❌Github release + ❌Edge Add-ons will be coming soon)

-  _❌documentation for how to use, ❌updated pictures, and ❌tutorial video, are coming soon_
1. Feature improvements, and interface redesigns.
2. There are some bugs: For now, do not use the paste button, I am working on something that will be much better than it as a replacement.
3. new logo
4. _Full changelog coming soon_



### _Changelog v1.7.2_

1. Changed options page
2. New icon
3. Now available on Microsoft Edge Add-ons
4. Updated description


### _Changelog v1.7.1_

   - [X] Fixed Issue # 9: [Unable to copy text fragments in version 1.7 #9](https://github.com/y330/FragmentQR/issues/9)


### _Changelog v1.7_

1. Fixed Issue # 5: QR now update automatically when typing in the text box
2. Revamped options page
3. minor fixes


### _Changelog v1.6_

   - Fix issue when system theme is set to light</li>
   - Minor improvements

   - [X] [QR does not update automatically when typing in the text box #5](https://github.com/y330/FragmentQR/issues/5#issue-720348982)
      - Until fixed, a workaround is: After you finish typing click the copy button and then the paste button. The QR code will only update when the paste button is clicked.


### _Changelog v1.5_

 <ol>
  <li>New icon and name changes to FragmentQR</li>
  <li>Paste button now works.</li>
  <li>Vast UI and functionality improvements</li>
  <li>Added support for copying text framents</li>
  <li>Added keyboard shortcuts</li>
  <li>Light theme(currently does not save between sessions)</li>
 </ol>


### TODO

 -  For Version 1.8.x
 - [X] Chrome Web Store
 - [ ] Edge Add-ons
 - [X] GitHub Repo
 - [X] 1/2 Revise description on extension web store listing 
 - [ ] Fix History bug
 - [ ] Fix paste button bug
 - [ ] 1/2 Update screenshots on store listing(Main picture is updated)
 - [X] 1/2 Update documentation on Extension webpage
 - [ ] Make a tutorial video for 1.8.x([Watch tutorial for v1.7.x on YouTube](https://youtu.be/MaE4CgMyn9Y))
 - [X] Add screenshots to the README.md
 - [ ] Make new GitHub Release(Zip file in the Releases tab)
 - [X] Organize main popup code: `popup.js`, `popup.css`
- [ ] configure extension with rollup.js for development
----

- [**View source code**](https://github.com/y330/FragmentQR/tree/master/FragmentQR)

- [**FragmentQR website**](https://y330.github.io/FragmentQR)


### Links

- [Check here if your browser supports text fragments](https://caniuse.com/url-scroll-to-text-fragment)

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)

#### Similar extensions related to text fragments, but have no user interfaces:

 1. [Link to text fragment(by Google. Also inspired this extension)](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg)
 2. [STTF Url Generator](https://chrome.google.com/webstore/detail/sttf-url-generator/mlihnffnlcfgjkkmigdgahgpfpfddafo)


 -----




**Privacy policy**

I, the developer, attest to the claim that the browser extension FragmentQR does not collect any personal identification information of users whatsoever, and that all other data is stored locally on the user's device.

For the full privacy policy, go to [the privacy policy](https://raw.githubusercontent.com/y330/FragmentQR/master/PRIVACY_POLICY.html)



----

#### Developed and Designed by Yonah Aviv


<a href="https://www.buymeacoffee.com/yonahaviv" title="Buy Yonah a coffee">__Buy me a coffee__

<img class="bmc-logo" src="https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP25hbWU9WW9uYWgrQXZpdiZzaXplPTMwMCZiZy1pbWFnZT1ibWMmYmFja2dyb3VuZD03OUQ2QjU=&creator=Yonah+Aviv&is_creating=computer%20programming&design_code=1&design_color=%2379D6B5&slug=yonahaviv" alt="Buy me a coffee" width="400px"><a>
    
<em>Fragment QR uses some icons from Google's Material Design Icons</em>
    
Copyright © 2021 <a class="author-link" href="https://y330.github.io" target="_blank" rel="noopener noreferrer" title="Yonah's website" > Yonah Aviv</a>
