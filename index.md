---
layout: default
title: FragmentQR
---

<h1> FragmentQR</h1>
<h2><img src="https://lh3.googleusercontent.com/4fpffHEr-iRbm4s91wp4y6LfI5Qc1dV-vFhaAhPP9Qp8X_TUxTn7XOg9fhmebiZ9PXDP1B5cAqtqDbwnTIe-7CuvXg=w128-h128-e365-rj-sc0x00ffffff" width ="64" style="position: relative; padding-bottom: 5px; vertical-align:bottom"  alt="FragmentQR Logo"><img src="https://img.shields.io/chrome-web-store/v/cabodnfakameckfbbgkciiifempglloj?color=informational&style=for-the-badge&label=FragmentQR%20Release" width="auto" height="auto" alt="Version" /> </b text-align="center" ></h2>



_____
<button style="color: blue; background: white 0%;border-radius: 1px; border: 0px">
<a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store"><img src="https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/YT2Grfi9vEBa2wAPzhWa.png" width="200px"style="margin: -35px 10px 10px -35px; vertical-align: bottom" ></a>
</button>



____


**Text Fragment** = Text that your browser highlights in yellow

_______


## Summary

**FragmentQR is a web extension that allows linking to relevant text on a webpage to share with other computers and mobile devices by generating a QR code for it, that will highlight the text in yellow when scanned.**


## [](#upcoming-features)Upcoming features 🔮

To see upcoming features, go to the **[FragmentQR regular and 2.0](https://github.com/users/y330/projects/2)** project.

## Introduction

FragmentQR adds a an option to the context menu to copy a text fragment when selecting text(I be referring to the URL that contains the text you selected as a text fragment URL or text fragment link), and enables generating a QR code for the text fragment link in an extension popup by clicking the FragmentQR toolbar button.


## [](#getting-started)Getting Started

### [](#install-fragmentqr)Installation

## Installation

FragmentQR is available on 2 different extension stores:

[Install on ![](https://static.wikia.nocookie.net/logopedia/images/c/c5/Google_Chrome_Web_Store_icon_2015.svg/revision/latest/top-crop/width/25/height/25?cb=20190930194931)](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/) 

[Install on ![](https://avatars0.githubusercontent.com/u/11354582?s=25&v=4)](https://microsoftedge.microsoft.com/addons/detail/fragmentqr/jbghofoedadhaaepolpeoepofdbckfni)


After you open the extension installation page, click "Add to \_insert\_browser\_name\_here\_" to install FragmentQR to your browser.

## Keyboard Shortcuts and instructions


### Tutorial

<a href="https://bit.ly/FragmentQRv17_tutorial" title="View this as a sideshow on the Chrome Web Store"><img src="https://lh3.googleusercontent.com/pw/ACtC-3f7FGuESSm9z3SPDAbhQHSr3YYL03r1gGBeSWYqbG8NyXxtg3gMWO4dbrM8yuhsMsCuf_JLqLSUWfSSodKzYR8mg6FkX5PmxXgfG8iPANMsQpsiE6GTlWFIRsHIZqi2ZBX0btMnBlUltWArYFdlTrhbhQ=w1210-h448-no?authuser=0" width="fit-content" alt="FragmentQR infographic of intructions"/></a>

- `Ctrl/⌘ + ⇧ + L` to copy text fragment to clipboard after you select relevant text
- `Ctrl/⌘ + Q` to open the extension popup
- `📋`(Paste) button in the popup to paste the text fragment link into the popup to generate a QR code.
- You can now share the link you copied or scan the QR code to see the relevant text highlighted.

When someone scans that QR or just goes to the link you copied, A feature called Scroll to text fragment allows the text fragment to be detected when they load the webpage, and will scroll your selected text into view and be highlighted in yellow 🟨.

Currently scanning the QR code to see the highlights will only work Android.

## [](#features)Features

-   Automatically Generate QR for current tab when opening extension popup
-   Text box to edit QR code
-   Paste, copy and clear buttons
-   Copy URL with text fragment from selected text and generate QR code for it
-   Light and dark themes
-   QR code can be made larger
-   Button to download QR as png
-   Material design

---

## [](#background)Background


### [](#what-are-text-fragments)**What are Text Fragments?**

**[Text Fragments](https://wicg.github.io/scroll-to-text-fragment/)**: Part of a URL that specifies a piece of text emphasized on page load and scrolled into view, not unlike a text anchor.

> "Text Fragments adds support for specifying a text snippet in the URL fragment. When navigating to a URL with such a fragment, the user agent can quickly emphasise and/or bring it to the user’s attention."[\[1\]](#ref_frag)

Syntax: `https://foo.bar/#:~:text=yourtext`

The text fragment can be specified in the fragment directive, which will always be after in the [URL fragment](https://en.wikipedia.org/wiki/URI_fragment) of the URL, after `#`. The fragment directive delimiter is the following string: `:~:`. You can specify `text=yourtext` after it and in some browsers, such as Google Chrome, `yourtext` will be scrolled into view and highlighted, when opened.

Example:

> [https://en.wikipedia.org/wiki/Probability\_distribution#cite\_ref\-:1\_3\-0:~:text=Examples %20of%20random%20phenomena%20include%20the, the%20results%20of%20a%20survey%2C%20etc.%5B4%5D](https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples%20of%20random%20phenomena%20include%20the,the%20results%20of%20a%20survey%2C%20etc.%5B4%5D)

The above link to [Probability Distribution](https://en.wikipedia.org/wiki/Probability_distribution) on [Wikipedia, the Free Encyclopedia](https://en.wikipedia.org/wiki/Main_Page) will highlight the following text snippet:

> Examples of random phenomena include the weather condition in a future date, the height of a person, the fraction of male students in a school, the results of a survey, etc.\[4\]


\**Update on text fragments:** In Chrome 87, there is a new flag in chrome://flags that adds "copy link to text" to the context menu on Android and Desktop. However in the latest version of chrome as of November 23, 2020, it does not work.

***Update Dec 2020:*** Chrome 88(beta) by default has the copy link to text item in the context menu and it works! Hopefully if it get's carried to the stable version they release some sort of documentation or API.

### [](#what-browsers-and-oss-see-the-text-highlighted-in-yellow-when-they-scan-the-qr-code-or-open-the-link)**What browsers and OSs see the text highlighted in yellow when they scan the QR code or open the link?**

**I am not affiliated with any of these browsers.**

Since the QR code contains the text fragment link, the QR code and the link are the same. The yellow highlight comes from the **Scroll to text fragment** feature, so the question is:

> *Which browsers and OSs support Scroll to text fragment or a feature similar to it?*

Scroll to text fragment is a feature in Chromium\-based browsers[\[2\]](#ref2) . There may be similar features in other browsers.

Mobile operating systems(that support scanning the QR code)

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

If you can't send code to anybody with a browser mentioned above, FragmentQR still works great as a regular QR code generator(not biased 👍)!

## [](#more-questions)More Questions?

### [](#FAQs-on-the-FragmentQR-wiki)More FAQs on the [Fragment QR Wiki](https://github.com/y330/FragmentQR/wiki)

If you still are in need of an answer feel free to [email me](mailto:avivyonah@gmail.com) with your question

---

## [](#issues-and-changelog)Issues and Changelog

### [](https://github.com/y330/FragmentQR)Known issues

- Theme does not save when changed in options
- Due to a dependancy on material icon font library, the icon font turns into whatever the icon is called when offline and the library is inaccesibe, so the buttons are messed up when offline
-  🔎 Help find issues by installing and using FragmentQR.
    + If you find an issue, [open a new issue on GitHub](https://github.com/y330/FragmentQR/issues/new)
        *  If you don't have a GitHub profile, post it in the [support tab](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/support) on the Web Store

### [](https://github.com/y330/FragmentQR)*Changelog v1.8*(Coming soon)

1.  Imporved UI
2.  Recently generated QR coded are available in the popup
3.  Added more buttons
4.  changed button icons
5.  Theme will now be remembered after popup closes
6.  Added side navigation

### [](https://github.com/y330/FragmentQR)*Changelog v1.7.2*

1.  Changed options page
2.  New icon
3.  Now available on Microsoft Edge Add\-ons
4.  Updated description

### [](https://github.com/y330/FragmentQR)*Changelog v1.7.1*

- Fixed Issue # 9: [Unable to copy text fragments in version 1.7 #9](https://github.com/y330/FragmentQR/issues/9)

### [](https://github.com/y330/FragmentQR)*Changelog v1.7*

1.  Fixed Issue # 5: QR now update automatically when typing in the text box
2.  Revamped options page
3.  minor fixes

### [](https://github.com/y330/FragmentQR)*Changelog v1.6*

- Fix issue when system theme is set to light

- Minor improvements

- [QR does not update automatically when typing in the text box #5](https://github.com/y330/FragmentQR/issues/5)

    + Until fixed, a workaround is: After you finish typing click the copy button and then the paste button. The QR code will only update when the paste button is clicked.

### [](https://github.com/y330/FragmentQR)*Changelog v1.5*

1.  New icon and name changes to FragmentQR
2.  Paste button now works.
3.  Vast UI and functionality improvements
4.  Added support for copying text framents
5.  Added keyboard shortcuts
6.  Light theme(currently does not save between sessions)

### [](https://github.com/y330/FragmentQR)TODO

-   **Fragmenter**, the new and revised FragmentQR built using some Front End framework.
    + Following the release of Framenter: [**FragmenTLDR**](https://github.com/y330/FragmenTLDR).
-   Clean code(I will have clean code in Fragmenter, which is one of the reasons I am rebuilding it)
-   actually use source control

---

## [](https://github.com/y330/FragmentQR)More Info

### [](https://github.com/y330/FragmentQR)References

1.  \[1\] Burris, N., & Bokan, D. (Eds.). (2020, November 24). Scroll\-to\-text\-fragment. Retrieved November 28, 2020, from [wicg.github.io/scroll\-to\-text\-fragment](https://wicg.github.io/scroll-to-text-fragment/)
2.  \[2\] Chromium\* 80 and above uses text fragments in a feature [Scroll to Text Fragment](/WICG/scroll-to-text-fragment/ "Scroll-to-Text Fragment on GitHub"). Text fragments may be owned by W3C or WICG.

### [](https://github.com/y330/FragmentQR)Links

I'm "making" a WordPress site for FragmentQR with a more attractive design and better interface than the current one. Currently it is unfinished, but you can check it out at [fragmentqr.wordpress.com](https://fragmentqr.wordpress.com).

[**View source code**](https://github.com/y330/FragmentQR/tree/master/FragmentQR): May be unorganized

[**FragmentQR Repository**](https://github.com/y330/FragmentQR): The center of operations.
**Article about text fragments**: [Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)

#### [](https://github.com/y330/FragmentQR)Similar extensions:

1.  [Link to text fragment](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg)
2.  [STTF Url Generator](https://chrome.google.com/webstore/detail/sttf-url-generator/mlihnffnlcfgjkkmigdgahgpfpfddafo)

---

Report an [issue 🐞](https://github.com/y330/FragmentQR/issues/new) or Suggest a [new feature 🔮](https://github.com/y330/FragmentQR/issues/new)

### [](https://github.com/y330/FragmentQR)Developed by Yonah Aviv

<a href="https://www.buymeacoffee.com/yonahaviv" target="_blank"><img src="https://camo.githubusercontent.com/c58c9d4d7884c99daada0f44b7cf6a362f8c4fc7430aa860b5065e2c2d86b3af/68747470733a2f2f63646e2e6275796d6561636f666665652e636f6d2f627574746f6e732f76322f64656661756c742d677265656e2e706e67" width="200px"/></a>

**Privacy policy**

As the developers of FragmentQR, we take your privacy very seriously. To ensure it's integrity, we do not collect any personal identification information whatsoever, and all other data FragmentQR collects is for the sole purpose of providing better functionality to the user, and is stored locally on the user's machine, with the potential option of syncing to their profile. 

For the updated privacy policy, go to [the privacy policy](https://raw.githubusercontent.com/y330/FragmentQR/master/PRIVACY_POLICY)

---

FragmentQR uses icons from the Material icons library.

***FragmentQR* Copyright © 2021 Yonah Aviv**. Licensed under the terms of the [MIT License](https://raw.githubusercontent.com/y330/FragmentQR/master/LICENSE)
