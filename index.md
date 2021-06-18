---
layout: default
title: FragmentQR
---

<h1>FragmentQR</h1>

<h6>Developed by Yonah Aviv</h6>

<a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store"><img src="https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/YT2Grfi9vEBa2wAPzhWa.png" width="200px" style="border: slategrey 2px outset; border-radius: 20px; vertical-align: middle"/></a><img src="https://github.com/y330/FragmentQR/blob/master/FragmentQR/img/icon-512.png?raw=true" width="64px" alt="FragmentQR Logo"/>

<img src="https://img.shields.io/chrome-web-store/v/cabodnfakameckfbbgkciiifempglloj?color=informational&style=default&label=Chrome%20Web%20Store%20Release: " height="auto" alt="Version" /> 
    
## Summary

**FragmentQR is a QR-code generator that can additionally copy links to snippets of text on a webpage.**

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


### Instructions

<a href="https://bit.ly/FragmentQRv17_tutorial" title="View this as a sideshow on the Chrome Web Store"><img src="https://lh3.googleusercontent.com/pw/ACtC-3f7FGuESSm9z3SPDAbhQHSr3YYL03r1gGBeSWYqbG8NyXxtg3gMWO4dbrM8yuhsMsCuf_JLqLSUWfSSodKzYR8mg6FkX5PmxXgfG8iPANMsQpsiE6GTlWFIRsHIZqi2ZBX0btMnBlUltWArYFdlTrhbhQ=w1210-h448-no?authuser=0" width="fit-content" alt="FragmentQR infographic of intructions"/></a>

- Select some text
- Open context menu and click "copy link .... to selected text" 
  + `tip: use `<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd>` to copy text fragment`
- Click the extension toolbar icon to open the popup
  + `tip: use `<kbd>Alt</kbd> + <kbd>Q</kbd>` to copy text fragment`
- Click the "paste" button the text fragment link into the popup to generate a QR code.
- You can now share the link you copied or scan the QR code to see the relevant text highlighted.

When someone scans that QR or just goes to the link you copied, A feature called Scroll to text fragment allows the text fragment to be detected when they load the webpage, and will scroll your selected text into view and be highlighted in yellow 🟨.

Currently scanning the QR code to see the highlights will only work Android.

----

## [](#background)Background


### [](#what-are-text-fragments)**What are Text Fragments?**

**ℹ[Text Fragments](https://wicg.github.io/scroll-to-text-fragment/)**: Part of a URL that specifies a piece of text emphasized on page load and scrolled into view, not unlike a text anchor.

> "Text Fragments adds support for specifying a text snippet in the URL fragment. When navigating to a URL with such a fragment, the user agent can quickly emphasise and/or bring it to the user’s attention."<a href="#ref_frag"><sup>1</sup></a>


##### Syntax of Text Fragment URL
   
Syntax: `https://foo.bar/#:~:text=yoursnippet`

The text fragment can be specified in the fragment directive, which will always be after in the [URL fragment](https://en.wikipedia.org/wiki/URI_fragment) of the URL, after `#`(there may be a word after the `#` but before `:~:`, and that would be another kind of fragment, but it's all good). The fragment directive delimiter is the following string: `:~:`. You can specify `text=yoursnippet` after it and in chromium browsers, and some other browsers, `yoursnippet` will be scrolled into view and highlighted, when opened.

##### Example

Consider the following URL:

[https://en.wikipedia.org/wiki/Probability\_distribution#cite_ref-:1_3-0__:~:textStart=Examples of random phenomena include the weather condition in a future date__](https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples%20of%20random%20phenomena%20include%20the%20weather%20condition%20in%20a%20future%20date)

If we take our previous url(`https://foo.bar/#:~:text=yourtext`) and map it out to this URL, we would get:
 1. `foo.bar` > `en/wikipedia.org`
 2. `#` > `#cite_ref-:1_3-0`
 3. `yoursnippet` > `Examples of random phenomena include the weather condition in a future date`


**Update on text fragments:** In Chrome 87, there is a new flag in chrome://flags that adds "copy link to text" to the context menu on Android and Desktop. However in the latest version of chrome as of November 23, 2020, it does not work.

***Update Dec 2020:*** Chrome 88(beta) by default has the copy link to text item in the context menu and it is functional. Hopefully if it get's carried to the stable version and get more documentation and an API.



### [](#what-browsers-and-oss-see-the-text-highlighted-in-yellow-when-they-scan-the-qr-code-or-open-the-link)**What browsers and Operating Systems see the text fragments highlighted in yellow when they scan the QR code or open the link?**


Since the QR code contains the text fragment link, the QR code and the link are the same. The yellow highlight comes from the **Scroll to text fragment** feature, so the question is:

> *Which browsers and OSs support Scroll to text fragment or a feature similar to it?*

Scroll to text fragment is a feature in Chromium\-based browsers[\[2\]](#ref2) . There may be similar features in other browsers.

Mobile operating systems(I need to recheck these, so they may be out of date)

1.  **Android works**(check browsers below)
2.  **iOS doesn't work(yet)**  
3.  **IPadOS to be determined**

All other devices(using the text fragment URL) 4. Pretty much the same browsers work on Mac, Windows, and Linux but still check to make sure whoever you send the link to is running one of the OS/browser combination below.

[Let me know](https://bit.ly/feature_request_form) if you want your operating system or browser to appear in the table below.

| Operating System | Browser Version |
| --- | --- |
| Android | Chrome 85, Android WebView 81, Samsung Internet latest.(could be more) |
| Windows | Microsoft Edge 83, Chrome 80, Opera 68 |
| Linux | Microsoft Edge 83, Chrome 80, Opera 68 |
| Mac OS X | Microsoft Edge 83, Chrome 80, Opera 68 |
| iOS | N/A. Could come in early 2021. |

[Check current status](https//caniuse.com/url-scroll-to-text-fragment#tab-container:~:text=content%2Dvisibility-,Can%20I%20use "Check compatability of scroll to text fragment")

Remember, Fragment is also a functional QR code generator, so even if you cannot use text fragments, you can skip to step 3 of the instructions steps

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


 ----
## References
[](#ref-1)
1: - [Scroll-to-text-fragment(WICG)](https://wicg.github.io/scroll-to-text-fragment/)





**Privacy policy**

I, the developer, attest to the claim that the browser extension FragmentQR does not collect any personal identification information of users whatsoever, and that all other data is stored locally on the user's device.

For the full privacy policy, go to [the privacy policy](https://raw.githubusercontent.com/y330/FragmentQR/master/PRIVACY_POLICY.html)



----

#### Developed and Designed by Yonah Aviv


<a href="https://www.buymeacoffee.com/yonahaviv" title="Buy Yonah a coffee">__Buy me a coffee__

<img class="bmc-logo" src="https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP25hbWU9WW9uYWgrQXZpdiZzaXplPTMwMCZiZy1pbWFnZT1ibWMmYmFja2dyb3VuZD03OUQ2QjU=&creator=Yonah+Aviv&is_creating=computer%20programming&design_code=1&design_color=%2379D6B5&slug=yonahaviv" alt="Buy me a coffee" width="400px"><a>
    
<em>Fragment QR uses some icons from Google's Material Design Icons</em>
    
Copyright © 2021 <a class="author-link" href="https://y330.github.io" target="_blank" rel="noopener noreferrer" title="Yonah's website" > Yonah Aviv</a>



