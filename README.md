
<h1> FragmentQR(FQR)</h1>

![Chrome Web Store](https://img.shields.io/chrome-web-store/users/cabodnfakameckfbbgkciiifempglloj)
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cabodnfakameckfbbgkciiifempglloj)
![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/cabodnfakameckfbbgkciiifempglloj)
![GitHub](https://img.shields.io/github/license/y330/FragmentQR)

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)

__Latest Stable version:__ FragmentQR v1.8.1(See [Releases](../../releases) tab)

<button style="color: blue; background: white 0%;border-radius: 1px; border: 0px">
<a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store"><img src="https://github.com/y330/FragmentQR/blob/master/FragmentQR/img/icon-512.png?raw=true" width="200px"style="margin: -35px 10px 10px -35px; vertical-align: bottom" ></a>
</button>

## *README and website are being revised*



## Summary

**Fragment QR generates links that highlight relevant text on a webpage in yellow (See image below).**

____
 **Text Fragment**: text that you add to a link to instruct it to highlight said text in yellow when opened.
 
Given link 
`https://some.site/page`
that contains the snippet "_Hello World_", `https://some.site/page/#:~:text=Hello` `%20`<sup>1</sup>`World`  would be the link to the text "_Hello World_" on some.site/page.

[1]: `%20` is the URL encoding of a space character

----

### Features

+ Automatically Generate QR for current tab's URL
+ Copy URL with text fragment from user's selection on any webpage

+ Text box to edit QR code
+ Paste, copy and clear buttons
+ QR code generator

____
### Installation

Install FragmentQR from Chrome web store, or Edge Add-ons Store:

[CHrome Web Store ![](https://static.wikia.nocookie.net/logopedia/images/c/c5/Google_Chrome_Web_Store_icon_2015.svg/revision/latest/top-crop/width/25/height/25?cb=20190930194931)](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/) 

[Microsoft Edge Add-ons Store ![](https://avatars0.githubusercontent.com/u/11354582?s=25&v=4)](https://microsoftedge.microsoft.com/addons/detail/fragmentqr/jbghofoedadhaaepolpeoepofdbckfni)



____
### Steps to copy text fragment
1. Select text you want to highlight
2. Open context menu >> "copy text fragment...", which will copy a link to the selected text
3. (optional)open popup and paste into textbox to generate QR code, so mobile user can easily see the text you highlighted.

Once someone opens the URL, they will be scrolled to the selected text which will be highlighted in yellow.

### Supported Browsers

Currently, text fragments are supports in these browsers:
*note: these are all chromium browsers*
 - Chrome 81+ and Microsoft Edge 83+ on all major desktop platforms(mac/win/lin)
 - Google Chrome 90+ on Android
 - Chrome 90+ for Android WebView
 - Opera 62+
 - (Partial)Chrome for iOS: latest version, must enable in chrome://flags


____


## Issues and Changelog

### Known issues 
 - [ ] Theme is not stored only in options page and not popup when changing it in options page.
 - [ ] Paste button is not stable
 - [ ] History pane is not visiible. will fix in next micro release.
 - [X] 🔎 Help find issues by installing and using FragmentQR. 


### _Changelog v1.8.x 
- (Released on ✅chrome web store, ✅Updated code in repository, and ❌Github release + ❌Edge Add-ons will be coming soon)

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

 - Version 1.8.0
 - [X] Chrome Web Store
 - [ ] Edge Add-ons
 - [X] GitHub Repo
 - [ ] Revise description on extension web store listing 
 - [ ] Update from beta version to stable version
 - [ ] Update screenshots on store listing
 - [ ] Update documentation on Extension webpage
 - [ ] Make a tutorial video
 - [ ] Add screenshots to the README.md
 - [ ] GitHub Releases
 - [X] Organize main popup code: `popup.js`, `popup.css`
- [ ] configure extension with rollup.js for development
----

### Links

- [**View source code**](https://github.com/y330/FragmentQR/tree/master/FragmentQR)
- 
- [**FragmentQR website**](https://y330.github.io/FragmentQR)


### External rescources
- [Check if your browser supports text fragments](https://caniuse.com/url-scroll-to-text-fragment)

- [Scroll-to-text-fragment(WICG)](https://wicg.github.io/scroll-to-text-fragment/)

- [Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)

#### Similar extensions related to text fragments, but have no user interfaces:

 1. [Link to text fragment(by google)](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg)
 2. [STTF Url Generator](https://chrome.google.com/webstore/detail/sttf-url-generator/mlihnffnlcfgjkkmigdgahgpfpfddafo)


 ----




**Privacy policy**

I, the developer, attest to the claim that the browser extension FragmentQR does not collect any personal identification information of users whatsoever, and that all other data is stored locally on the user's device.

For the full privacy policy, go to [the privacy policy](https://raw.githubusercontent.com/y330/FragmentQR/master/PRIVACY_POLICY.html)



----

#### Yonah Aviv
  <p><a href="https://www.buymeacoffee.com/yonahaviv"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" height="50" width="210" alt="yonahaviv" /></a></p>




**_FragmentQR_ 
Copyright © 2021 Yonah Aviv**. Licensed under the terms of the [MIT License](https://raw.githubusercontent.com/y330/FragmentQR/master/LICENSE)
