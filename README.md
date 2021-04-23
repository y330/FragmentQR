
<h1> FragmentQR</h1>

![Chrome Web Store](https://img.shields.io/chrome-web-store/users/cabodnfakameckfbbgkciiifempglloj)
![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cabodnfakameckfbbgkciiifempglloj)
![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/cabodnfakameckfbbgkciiifempglloj)
![GitHub](https://img.shields.io/github/license/y330/FragmentQR)

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)


<button style="color: blue; background: white 0%;border-radius: 1px; border: 0px">
<a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store"><img src="https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/YT2Grfi9vEBa2wAPzhWa.png" width="200px"style="margin: -35px 10px 10px -35px; vertical-align: bottom" ></a>
</button>



<h1 {color: red;} >Stay tuned for upcoming changes</hello>




## Summary

**Fragment QR generates links that highlight relevant text on a webpage in yellow (See image below).**

____
 **Text Fragment**: text that you add to a link to instruct it to highlight said text in yellow when opened.
 
Given link 
`https://foo.bar/page`
that contains the snippet "_Hello World_", `https://foo.bar/page/#:~:text=Hello%20World`  would be the link to the text fragment "_Hello World_".

[1]: %20 is the URL encoding of a space character
____
## Installation

FragmentQR is available on chromium browsers:

[Install on ![](https://static.wikia.nocookie.net/logopedia/images/c/c5/Google_Chrome_Web_Store_icon_2015.svg/revision/latest/top-crop/width/25/height/25?cb=20190930194931)](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/) 

[Install on ![](https://avatars0.githubusercontent.com/u/11354582?s=25&v=4)](https://microsoftedge.microsoft.com/addons/detail/fragmentqr/jbghofoedadhaaepolpeoepofdbckfni)



____
## Getting started
1. select text
2. context menu --> "copy text fragment. next: open popup", which will copy a link to the selected text to your clipboard
3. (optional)open popup and paste into text area to generate QR code

Once someone opens the URL, they will be scrolled to the selected text which will be highlighted in yellow.

Currently, the feature of highlighting the text in yellow only work on Android in Chrome version 85+, mac, linux, and windows. May be available in beta or alpha versions of browsers on other platforms.

----

## Features

+ Automatically Generate QR for current tab's URL
+ Copy URL with text fragment from user's selection on any webpage

+ Text box to edit QR code
+ Paste, copy and clear buttons
+ QR code generator

____


## Issues and Changelog

### Known issues 
 - [ ] Theme does not save when changed in options
 - [ ] Due to a dependancy on material icon font library, the icon font turns into whatever the icon is called when offline and the library is inaccesibe, so the buttons are messed up when offline
 - 🔎 Help find issues by installing and using FragmentQR. 
      + If you find an issue, [open a new issue on GitHub](https://github.com/y330/FragmentQR/issues/new?title=Report%20a%20bugssue%3F**%0A%0A**Screen%20recording%20or%20screenshot**%0A%0A%20)
          * If you don't have a GitHub profile, post it in the [support tab](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/support) on the Web Store

### _Changelog v1.8_(Unreleased)
1. Feature improvements, and interface redesigns.



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

 - [ ] release new version
 - [ ] clean up code ~ add comments to functions, rename variables.
----

### Internal info

- [**View source code**](https://github.com/y330/FragmentQR/tree/master/FragmentQR): *__note:__ as of april 10, popup.js is unacceptably messy.*

- [**FragmentQR website**](https://y330.github.io/FragmentQR)


### External rescources

- **Documentation on text fragments**: [Scroll-to-text-fragment(WICG)](https://wicg.github.io/scroll-to-text-fragment/)

- **Read article on text fragments**: [Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)

#### Similar extensions:
 1. [Link to text fragment](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg)
 2. [STTF Url Generator](https://chrome.google.com/webstore/detail/sttf-url-generator/mlihnffnlcfgjkkmigdgahgpfpfddafo)


 ----



NEW: instagram account https://instagram.com/fragmentqr

**Privacy policy**

I, the developer, attest to the claim that the browser extension FragmentQR does not collect any personal identification information of users whatsoever, and that all other data is stored locally on the user's device.

For the updated privacy policy, go to [the privacy policy](https://raw.githubusercontent.com/y330/FragmentQR/master/PRIVACY_POLICY)



----

#### Yonah Aviv
  <p><a href="https://www.buymeacoffee.com/yonahaviv"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" height="50" width="210" alt="yonahaviv" /></a></p>




**_FragmentQR_ 
Copyright © 2021 Yonah Aviv**. Licensed under the terms of the [MIT License](https://raw.githubusercontent.com/y330/FragmentQR/master/LICENSE)
