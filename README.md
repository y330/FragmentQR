<h1> FragmentQR</h1>
<h2><img src="https://lh3.googleusercontent.com/4fpffHEr-iRbm4s91wp4y6LfI5Qc1dV-vFhaAhPP9Qp8X_TUxTn7XOg9fhmebiZ9PXDP1B5cAqtqDbwnTIe-7CuvXg=w128-h128-e365-rj-sc0x00ffffff" width ="64" style="position: relative; padding-bottom: 5px; vertical-align:bottom"  alt="FragmentQR Logo"><img src="https://img.shields.io/chrome-web-store/v/cabodnfakameckfbbgkciiifempglloj?color=informational&style=for-the-badge&label=FragmentQR%20Release" width="auto" height="auto" alt="Version" /> </b text-align="center" ></h2>



_____
<button style="color: blue; background: white 0%;border-radius: 1px; border: 0px">
<a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store"><img src="https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/YT2Grfi9vEBa2wAPzhWa.png" width="200px"style="margin: -35px 10px 10px -35px; vertical-align: bottom" ></a>
</button>





____

 **Text Fragment** = Text that your browser highlights in yellow or the URL which contains a text fragment

____

## Summary

**FragmentQR is a web extension that allows linking to relevant text on a webpage to share with other computers and mobile devices by generating a QR code for it, that will highlight the text in yellow when scanned.**

____


## Installation

FragmentQR is available on 2 different extension stores:

[Install on ![](https://static.wikia.nocookie.net/logopedia/images/c/c5/Google_Chrome_Web_Store_icon_2015.svg/revision/latest/top-crop/width/25/height/25?cb=20190930194931)](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/) 

[Install on ![](https://avatars0.githubusercontent.com/u/11354582?s=25&v=4)](https://microsoftedge.microsoft.com/addons/detail/fragmentqr/jbghofoedadhaaepolpeoepofdbckfni)


After you open the extension installation page, click "Add to \_insert\_browser\_name\_here\_" to install FragmentQR to your browser.

____
## Getting started

To get started, first familiarize yourself with the keyboard shortcuts.

- ```Ctrl/⌘ + ⇧ + L```: copy the text fragment to your clipboard when selecting text
- ```Ctrl/⌘ + Q```: Open the extension popup
- (Shortcut coming soon) ```📋``` button to paste the text fragment link into the popup 

Now that you know the shortcuts, try selecting the ```boring text right here on your screen```, and then use the keyboard shortcut to copy a text fragment and paste the link in a new tab.

If  your on a supported browser, you will see the now not so boring text highlighted in yellow.

Same thing goes for mobile, but just open the popup and do the shortcut to paste the url to generate a QR code. Now your all set to start generating Fragment QR Codes!



Currently, the feature of highlighting the text in yellow only work on Android in Chrome version 85+.

----

## Features

+ Automatically Generate QR for current tab when opening extension popup
+ Text box to edit QR code
+ Paste, copy and clear buttons
+ Copy URL with text fragment from selected text and generate QR code for it
+ Light and dark themes
+ QR code can be made larger
+ Button to download QR as png
+ Clean and attractive design + smooth animations
____

## Specifics

FragmentQR adds a an option to the context menu to copy a text fragment when selecting text, and enables generating a QR code for the text fragment in an extension popup by clicking the FragmentQR toolbar button.

## Background

### **What are Text Fragments?**

**[Text Fragments](https://wicg.github.io/scroll-to-text-fragment/)**: Part of a URL that specifies a piece of text emphasized on page load and scrolled into view, not unlike a text anchor.


>    "Text Fragments adds support for specifying a text snippet in the URL fragment. When navigating to a URL with such a fragment, the user agent can quickly emphasise and/or bring it to the user’s attention."<sup>[[1]](#ref_frag)</sup>


Syntax: ```https://foo.bar/#:~:text=yourtext```

The text fragment can be specified in the fragment directive, which will always be after in the [URL fragment](https://en.wikipedia.org/wiki/URI_fragment) of the URL, after `#`. The fragment directive delimiter is the following string: ```:~:```. You can specify ```text=yourtext``` after it and in some browsers, such as Google Chrome, ```yourtext``` will be scrolled into view and highlighted, when opened.


Example:

>[https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples
%20of%20random%20phenomena%20include%20the,
the%20results%20of%20a%20survey%2C%20etc.%5B4%5D](https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples%20of%20random%20phenomena%20include%20the,the%20results%20of%20a%20survey%2C%20etc.%5B4%5D)

The above link to [Probability Distribution](https://en.wikipedia.org/wiki/Probability_distribution) on [Wikipedia, the Free Encyclopedia](https://en.wikipedia.org/wiki/Main_Page) will highlight the following text snippet:
> Examples of random phenomena include the weather condition in a future date, the height of a person, the fraction of male students in a school, the results of a survey, etc.[4]





<hr width=50%>

***Update on text fragments:** In Chrome 87, there is a new flag in chrome://flags that adds "copy link to text" to the context menu on Android and Desktop. However in the latest version of chrome as of November 23, 2020, it does not work.

***Update Dec 2020:*** Chrome 88(beta) by default has the copy link to text item in the context menu and it works! Hopefully if it get's carried to the stable version they release some sort of documentation or API.


## FAQ

### **What browsers and OSs see the text highlighted in yellow when they scan the QR code or open the link?**

*I do not hold the rights nor do I affiliate myself with any of these browsers.

Since the QR code contains the text fragment link, the QR code and the link are the same. The yellow highlight comes from the **Scroll to text fragment** feature, so the question is:

> _which browsers and OSs support Scroll to text fragment or a feature similar to it?_

Scroll to text fragment is a feature in Chromium-based browsers<sup>[[2]](#ref2)</sup>
. There may be similar features in other browsers.


Mobile operating systems(that support scanning the QR code)
1. **Android works**(check browsers below)
2. **iOS doesn't work**
3. **IPadOS to be determined**

All other devices(Link that is copied to clipboard)
4. Pretty much the same browsers work on Mac, Windows, and Linux but still check to make sure whoever you send the link to is running one of the OS/browser combination below.

[Let me know](https://bit.ly/feature_request_form) if you want your operating system or browser to appear in the table below.




|Operating System|Browser Version|
|--|--|
|Android| Chrome 85, Android WebView 81, Samsung Internet latest.(could be more)|
|Windows|Microsoft Edge 83, Chrome 80, Opera 68|
|Linux|Microsoft Edge 83, Chrome 80, Opera 68|
|Mac OS X|Microsoft Edge 83, Chrome 80, Opera 68|
|iOS|N/A. Could come in early 2021.|


<a href="https://caniuse.com/url-scroll-to-text-fragment#tab-container:~:text=content%2Dvisibility-,Can%20I%20use" title="Check compatability of scroll to text fragment" target="_blank">Check current status</a>

If you can't send code to anybody with a browser mentioned above, FragmentQR still works great as a regular QR code generator(not biased👍)!

## More Questions?
### Go check out [more Frequently Asked Questions](https://github.com/y330/FragmentQR/wiki/FAQ) on [Fragment QR's Wiki](https://github.com/y330/FragmentQR/wiki)

If you still are in need of an answer feel free to [email me](mailto:avivyonah@gmail.com) with your question

<hr width=50%>

## Issues and Changelog

### Known issues 
 - [ ] Theme does not save when changed in options
 - [ ] Due to a dependancy on material icon font library, the icon font turns into whatever the icon is called when offline and the library is inaccesibe, so the buttons are messed up when offline
 - 🔎 Help find issues by installing and using FragmentQR. 
      + If you find an issue, [open a new issue on GitHub](https://github.com/y330/FragmentQR/issues/new?title=Report%20a%20bugssue%3F**%0A%0A**Screen%20recording%20or%20screenshot**%0A%0A%20)
          * If you don't have a GitHub profile, post it in the [support tab](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/support) on the Web Store

### _Changelog v1.8_(Coming soon)
1. Imporved UI
2. Recently generated QR coded are available in the popup
3. Added more buttons
4. changed button icons
5. Theme will now be remembered after popup closes
6. Added side navigation




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

  - [ ] __Fragmenter__, the new and revised FragmentQR built using some Front End framework.
       + [ ] Following the release of Framenter: [**FragmenTLDR**](https://github.com/y330/FragmenTLDR).
  - [x] Clean code(I will have clean code in Fragmenter, which is one of the reasons I am rebuilding it)
  - [ ] actually use source control  
----

## More Info
### References
 1. <sup id="ref_frag">[1]</sup> Burris, N., &amp; Bokan, D. (Eds.). (2020, November 24). Scroll-to-text-fragment. Retrieved November 28, 2020, from https://wicg.github.io/scroll-to-text-fragment/
 2. <sup id=ref2>[2]</sup> Chromium\* 80 and above uses text fragments in a feature  <a href="https://github.com/WICG/scroll-to-text-fragment/" title="Scroll-to-Text Fragment on GitHub">Scroll to Text Fragment</a>. Text fragments may be owned by W3C or WICG.

### Links

I'm "making" a WordPress site for FragmentQR with a more attractive design and better interface than the current one. Currently it is unfinished, but you can check it out at [fragmentqr.wordpress.com](https://fragmentqr.wordpress.com).
^Edit: I'm not using wordpress anymore. Back to gh pages.

[**View source code**](https://github.com/y330/FragmentQR/tree/master/FragmentQR): May be unorganized


[**FragmentQR website**](https://y330.github.io/FragmentQR): Includes a visual tutorial on how to use FragmentQR. Go check it out.

**Article about text fragments**: [Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)

#### Similar extensions:
 1. [Link to text fragment](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg)
 2. [STTF Url Generator](https://chrome.google.com/webstore/detail/sttf-url-generator/mlihnffnlcfgjkkmigdgahgpfpfddafo)


 ----

Report an [issue 🐞](https://github.com/y330/FragmentQR/issues/new?title=Report%20a%20bug&body=%22%3Cdetails%3E%0A%3Csummary%3EDetails%3C/summary%3E%0A%0A-%20Operating%20system*%3A%0A-%20Extension%20version*%3A%20%0A-%20Browser*%3A%0A%0A%3C/details%3E%0A%0A**Steps%20to%20reproduce%20the%20bug**%0A%0A**What%20is%20the%20bug/issue%3F**%0A%0A**Screen%20recording%20or%20screenshot**%0A%0A%22) or Suggest a [new feature 🔮](https://github.com/y330/FragmentQR/issues/new?title=Suggest%20a%20new%20feature%F0%9F%94%AE&body=%23%23%23%20Idea%3A%0A%3E%20your%20idea%20here%0A%0A%23%23%23%20Code%3A%0A%60input%20your%20code%28optional%29%60)




### Developed by Yonah Aviv

  <p><a href="https://www.buymeacoffee.com/yonahaviv"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" height="50" width="210" alt="yonahaviv" /></a></p>

**Privacy policy**

I, the developer, attest to the claim that the browser extension FragmentQR does not collect any personal identification information of users whatsoever, and that all other data is stored locally on the user's device.

For the updated privacy policy, go to [the privacy policy](https://raw.githubusercontent.com/y330/FragmentQR/master/PRIVACY_POLICY)



----




**_FragmentQR_ 
Copyright © 2021 Yonah Aviv**. Licensed under the terms of the [MIT License](https://raw.githubusercontent.com/y330/FragmentQR/master/LICENSE)
