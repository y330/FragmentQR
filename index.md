---
layout: default
title: FragmentQR
---


<style> .frag:{background-color: yellow; color: black;}</style>
# FragmentQR Chrome Extension


###### *Yonah Aviv*

 -----

<a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store" padding="0">
  <img src="https://github.com/y330/FragmentQR/blob/master/FragmentQR/img/512.png?raw=true" width ="110px" alt="FragmentQR Logo">
   <img src="https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_496x150.png" width="400px" alt="Available on the Chrome Webstore">
</a>

----  

**FragmentQR is a Chrome extension that simplifies linking to certain text on a webpage by letting you select text and copy it as a text fragment to generate a QR code for it, that will highlight the text in yellow when scanned. [Like this](https://example.com/#:~:text=use%20in%20illustrative%20examples%20in%20documents.%20You%20may%20use%20this%20domain%20in%20literature%20without)**





### What does FragmentQR do?

FragmentQR adds a an option to the context menu to copy a text fragment when selecting text, and enables generating a QR code for the text fragment in an extension popup by clicking the FragmentQR toolbar button.
 To make the process easier, I added keyboard shortcuts:

```Ctrl/⌘ + ⇧ + L``` to copy the text fragment to your clipboard,  ```Ctrl/⌘ + Q``` to open the extension popup, and a ```📋```(Paste) button in the popup to paste the text fragment link into the popup to generate a QR code. 

When someone scans that QR or just goes to the link you copied, A feature called Scroll to text fragment allows the text fragment to be detected when they load the webpage, and will scroll your selected text into view and be highlighted in yellow🟨.

Currently scanning the QR code to see the highlights will only work Android.

### Other Features

+ Automatically Generate QR for current tab when opening extension popup
+ text box to edit QR code
+ Paste, copy and clear buttons
+ Light and dark themes
+ Popup can be made larger
+ Button to download QR as png
+ Material design

 
<hr width=50%>

***Update on text fragments:** In Chrome 87, there is a new flag in chrome://flags that adds "copy link to text" to the context menu on Android and Desktop. However in the latest version of chrome as of November 23, 2020, it does not work.

### **What are Text Fragments?** 

**[Text Fragments](https://wicg.github.io/scroll-to-text-fragment/)**: Part of a URL that specifies a piece of text emphasized on page load and scrolled into view, not unlike a text anchor. 


>    "Text Fragments adds support for specifying a text snippet in the URL fragment. When navigating to a URL with such a fragment, the user agent can quickly emphasise and/or bring it to the user’s attention."<sup>[[1]](#ref_frag)</sup>


Syntax: ```https://foo.bar/#:~:text=yourtext```

The text fragment can be specified in the fragment directive, which will always be after in the [URL fragment](https://en.wikipedia.org/wiki/URI_fragment) of the URL, after `#`. The fragment directive delimiter is the following string: ```:~:```. You can specify ```text=yourtext``` after it and in some browsers, such as Google Chrome, ```yourtext``` will be scrolled into view and highlighted, when opened.


Example:

>[https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples
%20of%20random%20phenomena%20include%20the,
the%20results%20of%20a%20survey%2C%20etc.%5B4%5D](https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples%20of%20random%20phenomena%20include%20the,the%20results%20of%20a%20survey%2C%20etc.%5B4%5D)

The aforementioned link to [Probability Distribution](https://en.wikipedia.org/wiki/Probability_distribution) on [Wikipedia, the Free Encyclopedia](https://en.wikipedia.org/wiki/Main_Page) will highlight the following text snippet:
> Examples of random phenomena include the weather condition in a future date, the height of a person, the fraction of male students in a school, the results of a survey, etc.[4]


Chromium 80 and above uses text fragments in a feature called <a href="https://github.com/WICG/scroll-to-text-fragment/" title="Scroll-to-Text Fragment on GitHub">Scroll-to-Text Fragment</a>. Text fragments may be owned by W3C or WICG.




## Tutorial

<a href="https://bit.ly/GetFragmentedQR" title="View this as a sideshow on the Chrome Web Store"><img src="https://lh3.googleusercontent.com/pw/ACtC-3f7FGuESSm9z3SPDAbhQHSr3YYL03r1gGBeSWYqbG8NyXxtg3gMWO4dbrM8yuhsMsCuf_JLqLSUWfSSodKzYR8mg6FkX5PmxXgfG8iPANMsQpsiE6GTlWFIRsHIZqi2ZBX0btMnBlUltWArYFdlTrhbhQ=w1210-h448-no?authuser=0" width="fit-content" alt="FragmentQR infographic of intructions"/></a>

To learn how to QR encode text fragments using FragmentQR, you can examine the infographic above, or, read on:

### Instructions

 <ol>
  <li>Select text</li>
  <li>Ctrl/Cmd + Shift + L to copy the text fragment. your selected text fragment should be highlighted in yellow.</li>
  <li>Ctrl/Cmd+Q to open the extension popup</li>
  <li>Click the paste button</li>
  <li>Scan it on your mobile device or just share the link in your clipboard for that particalar text to be scrolled into view and highlighted in yellow.</li>
 </ol>
 
If steps 1 or 2 do not work, follow these extra instructions

1. Select the link below

```chrome://extensions/configureCommands``` 

2. Drag into address bar to open the extension shortcuts page
3. Configure keyboard shortcuts for FragmentQR
  

### Demo of Using FragmentQR(Old)

[ 
![
](https://lh3.googleusercontent.com/pw/ACtC-3cera_XKIXLjEw9LyZh93DtSKTDoQsyF2aYR0Y_L-PCeMttnP3Gr1OiOIxL4nLN_ltCioZyQMUwizFb2wyZLzytBktmEuWRptUGYOFoChSq_bQpZ_g5TEnbb_ZG__Y0rjNbj2oUiHBPotXUOP6X2NID3g=w212-h112-no?)
](http://bit.ly/youtubeFragQR)



## FAQ

### **What browsers/platforms are compatible with Text Fragments?**
- Check browser compatibility in the table below. Note: these are the browsers cab use the scroll to text fragment feature. This extension is still available on all Chromium browsers and works great as a regular QR code generator.
Examples of Chromium browsers include MS Edge and Google Chrome.



|OS |Minimum Browser Version|
|--|--|
|Android| Chrome 85, Android WebView 81|
|Windows|Chromium 80(i.e. Chrome, MS Edge, Opera, etc.)|
|Linux| Chromium 80| 
|Mac OS X| Chromium 80|
|iOS| None :P|


**Update:**
Chrome 87 on iOS has some new, albeit nonfunctional options in chrome://flags for text fragments.

<a href="https://bit.ly/can_i_use_text_frags" title="Check compatability of scroll to text fragment" target="_blank">Check current status</a>


**Update:**
Chrome 87 on iOS has some new, albeit nonfunctional options in chrome://flags for text fragments.


### **Why does the QR code not scroll or highlight anything on my iPhone?**
+ That feature of scroll to text fragment is not available on Chrome for iOS yet.





## Issues and Changelog

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

  - [ ] Rewrite the whole thing using a JavaScript framework, probably with Vuejs. Not sure yet.
  - [ ] Better version control(already started this; check releases tab)

----

## More Info
### References
 1. <sup id="ref_frag">[1]</sup> Burris, N., &amp; Bokan, D. (Eds.). (2020, November 24). Scroll-to-text-fragment. Retrieved November 28, 2020, from https://wicg.github.io/scroll-to-text-fragment/
 
### Links

[**View source code**](/FragmentQR): I added some basic comments to some of the .js files so feel free to check them out.


[**FragmentQR Repository(or just click the green button at the top)**](https://bit.ly/FragmentedQRrepository): It's useful. Go check it out.

**Article**: [Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)

Similar extensions: 
 1. [Link to text fragment](https://bit.ly/LinktoTextFragmentUnofficialshortURL)
 2. [STTF Url Generator](https://chrome.google.com/webstore/detail/sttf-url-generator/mlihnffnlcfgjkkmigdgahgpfpfddafo)


 ----
 
Report an [issue 🐞](https://bit.ly/issue_long) or Suggest a [new feature 🔮](https://bit.ly/suggest_fragQR) 


_[![](https://static.wikia.nocookie.net/logopedia/images/c/c5/Google_Chrome_Web_Store_icon_2015.svg/revision/latest/scale-to-width-down/25?cb=20190930194931)Install FragmentQR](https://bit.ly/GetFragmentedQR)_ on the Chrome Web Store

---- 

_Disclaimer: Text fragments is not owned by FragmentQR_


 
**Copyright © 2020 Yonah Aviv**. Licensed under the [MIT License](https://raw.githubusercontent.com/y330/FragmentQR/master/LICENSE)
