# FragmentQR Extension
 <a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store" padding="0">
   <img src="https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_496x150.png" width="100px" alt="Available on the Chrome Webstore">
</a>
   
## _Yonah Aviv_

**FragmentQR is a Chrome extension that swiftly shares just the relevant parts of a webpage by generating QR codes from your selection, as a text fragment such that it will look like [...(click to see)](https://example.com/#:~:text=this,-domain%20in)** 

<hr width=50%>

Report an bug: [🐞(click)](https://github.com/y330/FragmentQR/issues/new) 

Install and Rate it: [⭐(click)](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/#:~:text=1)

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=CBYMNSA8XYYY2&item_name=To+continue+doing+whatever+I+am+doing&currency_code=CAD&source=url"><img src="https://camo.githubusercontent.com/d5d24e33e2f4b6fe53987419a21b203c03789a8f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d50617950616c2d677265656e2e737667" /></a>


<hr width=50%>

### What does FragmentQR do? {#whatisit?}

FragmentQR provides you the ability to select only the important text on a webpage, and convey this to anyone through simply ```selecting text``` to select a text fragment, ```Ctrl/⌘ + ⇧ + L``` to copy the text fragment to your clipboard,  ```Ctrl/⌘ + Q``` to open the extension popup, and ```click the 📋 button``` to paste the link into the textbox to generate a QR code. 

When someone scans that QR or just goes to the link you copied, A feature called Scroll to text fragment allows the text fragment to be detected when they load the webpage, and cause your selection to scroll⇅ into view and be highlighted in 🟨, to emphasize that part of the page.

Currently Scroll to text fragment only works Android, Mac, Windows and Linux running at least Chromium 80 browsers. More on that later.

### Other Features

+ Automatically Generate QR for current tab when opening extension popup
+ text box to edit QR code
+ Paste, copy and clear buttons
+ Light and dark themes
+ Popup can be made larger
+ Button to download QR as png
+ Material design
 
<hr width=50%>

### **What are Text Fragments?** {#textfragment?}

<block class="fragd"><a class="foot" name="myfootnote1"><sup>[1]</sup></a> **Text Fragment** : Part of a URL that specifies a piece of text emphasized on page load and scrolled into view, not unlike a text anchor.
</block>

>    "Text Fragments let you specify a text snippet in the URL fragment. When navigating to a URL with such a text fragment, the browser can emphasize and/or bring it to the user's attention." [Web Developers](HTTPS://web.dev)	

The text fragment is specified in the fragment(```#```) portion of the URL after ```:~:text=```.

Syntax: ```https://loren.ipsum/#:~:text=textfragment```

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
 
 If steps 1 or 2 do not work, go to [chrome://extensions/configureCommands](chrome://extensions/configureCommands)to reconfigure the shortcuts
 
 <hr style="width:70%; align: middle;"> 

### Demo of Using FragmentQR(Old)

[
![
](https://lh3.googleusercontent.com/pw/ACtC-3cera_XKIXLjEw9LyZh93DtSKTDoQsyF2aYR0Y_L-PCeMttnP3Gr1OiOIxL4nLN_ltCioZyQMUwizFb2wyZLzytBktmEuWRptUGYOFoChSq_bQpZ_g5TEnbb_ZG__Y0rjNbj2oUiHBPotXUOP6X2NID3g=w212-h112-no?)
](http://bit.ly/youtubeFragQR)

<hr width=50%>

## FAQ

### **What browsers/platforms are compatible with Text Fragments?**
- Browsers per platform required to use text fragments are defined in the table below. Examples of Chromium browsers include MS Edge and Google Chrome.


<hr width="25%">...

|OS |Minimum Browser Version|
|--|--|
|Android 5.5 or later|Chrome 85, Android WebView 81|
|Windows 7 or later|Chromium 80|
|Linux | Chromium 80| 
|Mac OS X 10.10 or later|Chromium 80|

<a href="https://caniuse.com/url-scroll-to-text-fragment#tab-container:~:text=content%2Dvisibility-,Can%20I%20use" title="Check compatability of scroll to text fragment" target="_blank">Check current status</a>

-----

### **I scanned the QR code on my iPhone and nothing happened! What gives?**

+ That feature of scroll to text fragment is not avaialbele on iOS yet. Since Chrome for iOS is powered by Apple WebKit as opposed to Blink , this feature will surface only if Apple allows it. Unfortunately Apple only had a neutral stance on integration of text fragments in Safari😞, so logicaly, it is unlikly text fragments will roll out to Chrome for iOS soon. 

**Other Browsers Opinion on Text Fragments:**

Firefox: 😱(negative)

Edge: 😀

Safari: 😐(neutral)

Web Developers: 😀

<hr>


## Issues and Changelog

### Known Issues
 + [QR does not update automatically when typing in the text box #5](https://github.com/y330/FragmentQR/issues/5#issue-720348982)
   - Until fixed, a workaround is: After you finish typing click the copy button and then the paste button. The QR code will only update when the paste button is clicked.
   
### _Changelog v1.65_
+ Fixed Issue # 5: QR code does not update automatically when typing in the text box

### _Changelog v1.6_

<ol>
    <li>Fix issue when system theme is set to light</li>
    <li>Minor improvements</li>
  
</ol>
  
---- 
### _Changelog v1.5_

 <ol>  
  <li>New icon and name changes to FragmentQR</li>
  <li>Paste button now works.</li>
  <li>Vast UI and functionality improvements</li>
  <li>Added support for copying text framents</li>
  <li>Added keyboard shortcuts</li>
  <li>Light theme(currently does not save between sessions)</li>
 </ol>
 
 -----
 
### TODO sometime in the future

  - [ ] combine all the steps to into one keyboard shortcut

----

## More Info

[Go to code](/FragmentQR)


[Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)
 
 
 [Dialogue between web developers at companies such as Google, Mozilla, Microsoft, and Apple disputing over text fragments](https://github.com/w3ctag/design-reviews/issues/392)
 
The way this extension selects text fragments is based on Google's [Link to text fragment](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg?hl=en) Chrome extension.


<hr><hr><hr>


<b>© 2020 MIT license Yonah Aviv.</b>

