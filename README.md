# FragmentQR Chrome Extension
 <a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store" padding="0">
   <img src="https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_496x150.png" width="400px" alt="Available on the Chrome Webstore">
</a>
   
# *Yonah Aviv*

<img src="FragmentedQR 2/img/qr-code (2).png" width ="200px" alt="FragmentQR v2.0 Logo">

**FragmentQR is a Chrome extension that makes sharing the relevant parts of a webpage easy by taking selected text and copying it to a text fragment to generate a QR code that will highlight the chosen text from the users selection in yellow[(Like this)](https://example.com/#:~:text=this,-domain%20in)** 



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

### **What are Text Fragments?** 

<block class="fragd"><a class="foot" name="myfootnote1"><sup>[1]</sup></a> **Text Fragment** : Part of a URL that specifies a piece of text emphasized on page load and scrolled into view, not unlike a text anchor.
</block>

>    "Text Fragments let you specify a text snippet in the URL fragment. When navigating to a URL with such a text fragment, the browser can emphasize and/or bring it to the user's attention." [Web Developers](HTTPS://web.dev)	

The text fragment can be specified in the fragment(```#```) directive of the URL after ```:~:text=```, and it will be highlighted in yellow when opened.

Syntax: ```https://foo.bar/#:~:text=textfragment```

Example:

>[https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples
%20of%20random%20phenomena%20include%20the,
the%20results%20of%20a%20survey%2C%20etc.%5B4%5D](https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples%20of%20random%20phenomena%20include%20the,the%20results%20of%20a%20survey%2C%20etc.%5B4%5D)

 In Chromium 80+, this feature is known as <a href="https://github.com/WICG/scroll-to-text-fragment/" title="Scroll-to-Text Fragment on GitHub">Scroll-to-Text Fragment</a>.





<hr width=50%>

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

**Update:**
Chrome 87 on iOS has some new, albeit unfunctional options in chrome://flags for text fragments.


|OS |Minimum Browser Version|
|--|--|
|Android| Chrome 85, Android WebView 81|
|Windows|Chromium 80(i.e. Chrome,MS Edge, Opera etc.)|
|Linux| Chromium 80| 
|Mac OS X| Chromium 80|

<a href="https://caniuse.com/url-scroll-to-text-fragment#tab-container:~:text=content%2Dvisibility-,Can%20I%20use" title="Check compatability of scroll to text fragment" target="_blank">Check current status</a>



### **Why does the QR code not scroll or highlight anything on my iPhone?**
+ That feature of scroll to text fragment is not available on Chrome for iOS yet.




## Issues and Changelog

### (Unreleased) _Changelog v1.7_
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

  - [ ] combine all the steps to into one keyboard shortcut

----

## More Info

[view source code](/FragmentQR)

[FragmentQR website](https://y330.github.io/FragmentQR)

Article on Text Fragments: [Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)
 
Report an [issue 🐞](https://github.com/y330/FragmentQR/issues/new?title=Report%20a%20bug&body=%22%3Cdetails%3E%0A%3Csummary%3EDetails%3C/summary%3E%0A%0A-%20Operating%20system*%3A%0A-%20Extension%20version*%3A%20%0A-%20Browser*%3A%0A%0A%3C/details%3E%0A%0A**Steps%20to%20reproduce%20the%20bug**%0A%0A**What%20is%20the%20bug/issue%3F**%0A%0A**Screen%20recording%20or%20screenshot**%0A%0A%22) or Suggest a [new feature 🔮](https://github.com/y330/FragmentQR/issues/new?title=Suggest%20a%20new%20feature%F0%9F%94%AE&body=%23%23%23%20Idea%3A%0A%3E%20your%20idea%20here%0A%0A%23%23%23%20Code%3A%0A%60input%20your%20code%28optional%29%60) 

[![](https://static.wikia.nocookie.net/logopedia/images/c/c5/Google_Chrome_Web_Store_icon_2015.svg/revision/latest/top-crop/width/50/height/50?cb=20190930194931) Install FragmentQR](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/#:~:text=1) on the Chrome Web Store

This extension uses some code from Google’s <a href="https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg?hl=en">Link to text fragment</a> Chrome extension.

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=CBYMNSA8XYYY2&item_name=To+continue+doing+whatever+I+am+doing&currency_code=CAD&source=url">
 <img src="https://camo.githubusercontent.com/d5d24e33e2f4b6fe53987419a21b203c03789a8f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d50617950616c2d677265656e2e737667" />
</a>

Disclaimer: Please note this extension is NOT made by Google and is made by an independent developer. All copyrights belong to their respective owners. Google doesn’t endorse or sponsor this Chrome extension. FragmentQR is not owned by, is not licensed by and is not a subsidiary of Google Inc.


<b>© 2020 MIT license Yonah Aviv.</b>

