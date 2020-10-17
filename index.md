---
layout: default
---

<meta name="google-site-verification" content="Ay7DuHomj_FffCIPkk06PMst9-V1kwZij44bLz5SeuI" />
     
 <section id="downloads">
     <button><a href="https://github.com/y330/FragmentQR/issues/new" title="Issues on GitHub">
          {% octicon logo-github height:16 %}
          </a>
          </button
          
   <button>
     <a href = "https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/#:~:text=FragmentQR" title="Get it on Chrome"><img src="https://www.nicepng.com/png/full/223-2231461_chrome-web-store-icon-chrome-web-store-logo.png" alt="Webstore logo"/></a>
   </button>
   <iframe src="https://ghbtns.com/github-btn.html?user=y330&amp;repo=FragmentQR&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="150" height="40" title="Star this Repo on GitHub"> </iframe>
  
 </section>
 


<style> .frag:{background-color: yellow; color: black;}</style>

# FragmentQR Extension

   
## _Yonah Aviv_

**FragmentQR is a Chrome extension that swiftly shares just the relevant parts of a webpage by generating QR codes from your selection, as a text fragment such that it will look like <span class="frag">this</span>** 

<hr width="50%">

Report an bug: [🐞(click)](https://github.com/y330/FragmentQR/issues/new) 

Rate it: [⭐(click)](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/#:~:text=FragmentQR)

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=CBYMNSA8XYYY2&item_name=To+continue+doing+whatever+I+am+doing&currency_code=CAD&source=url"><img src="https://camo.githubusercontent.com/d5d24e33e2f4b6fe53987419a21b203c03789a8f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f6e6174652d50617950616c2d677265656e2e737667" /></a>


<hr>

### What does FragmentQR dO?

FragmentQR provides you the ability to select only the important text on a webpage, and share it with anyone by simply ```selecting text``` to select a text fragment, ```Ctrl/⌘ + ⇧ + L``` to copy the text fragment,  ```Ctrl/⌘ + Q``` to open the extension popup, and a ```click the 📋``` to paste the link into the textbox to generate a QR code. When someone scans that QR, the text fragment will be detected when they load the webpage, and your selection will scroll📜⇅ into view and be highlighted🟨, to emphasize that part of the page.

In short, you can select any given text on a webpage and copy it as a text fragment to generate a QR code for sharing just the essential component of your webpage.
 
Currently Scroll to text fragment only works on these platform and browsers: 

✔Android: Chrome for Android 85+

✔Mac, ✔Windows, and ✔Linux: Any Chromium 80+ browser

❌iOS: Coming soon. When available it will  be on the latest release of Chrome for iOS powered by Apple WebKit 

(more details on supported platforms later)

### **What are Text Fragments?**

<span class=frag> <b>Text Fragment</b>: Part of a URL that specifies a piece of text emphasized on page load and scrolled into view, not unlike a text anchor.
</span>

>    "Text Fragments let you specify a text snippet in the URL fragment. When navigating to a URL with such a text fragment, the browser can emphasize and/or bring it to the user's attention." web.dev	


Syntax:
```https://example.com/#:~:text=text-fragment```

Example:

>[https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples
%20of%20random%20phenomena%20include%20the,
the%20results%20of%20a%20survey%2C%20etc.%5B4%5D](https://en.wikipedia.org/wiki/Probability_distribution#cite_ref-:1_3-0:~:text=Examples%20of%20random%20phenomena%20include%20the,the%20results%20of%20a%20survey%2C%20etc.%5B4%5D)

 In Chromium 80+, this feature is known as <a href="https://github.com/WICG/scroll-to-text-fragment/" title="Scroll-to-Text Fragment on GitHub">Scroll-to-Text Fragment</a>.



<hr width="50%">

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

<hr width="50%">

## FAQ

### **What browsers/platforms are compatible with Text Fragments?**
- Browsers per platform required to use text fragments are defined in the table below. I would like to point out that Chromium 80 is the bear minimum for all devices to use text fragments with the intended functionality.
<hr>

|OS |Minimum Browser Version|
|--|--|
|Android 5.5 or later|Chrome 85, Android WebView 81|
|Windows 7 or later|Chromium 80|
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
 + [QR does not update automatically when typing #5](https://github.com/y330/FragmentQR/issues/5#issue-720348982)
   - Workarounds: Click the copy button, then click the paste button when updating the QR code

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
 
### TODO in the unforeseeable future

  - [ ] add keyboard shorcut to open popup with link to text fragment as a placeholder in the textarea
  
----

## More Info

[Go to code](/FragmentQR)


[Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)
 
 
 [Professional dialogue between web developers at companies such as Google, Mozilla, Microsoft, and Apple on text fragments](https://github.com/w3ctag/design-reviews/issues/392)
 
The way this extension selects text fragments is based on Google's [Link to text fragment](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg?hl=en) Chrome extension.


<hr><hr><hr>

 <a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store" padding="0">
   <img src="https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_496x150.png" width="100px" alt="Available on the Chrome Webstore">
</a>
<b>© 2020 MIT license Yonah Aviv.</b>

