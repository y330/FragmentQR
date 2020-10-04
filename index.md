
 <meta name="google-site-verification" content="Ay7DuHomj_FffCIPkk06PMst9-V1kwZij44bLz5SeuI" />

   <!-- Global site tag (gtag.js) - Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=UA-178685535-2"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());   </script>
 <section id="downloads">
            
   <a href=" https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store" padding="0">
   <img src="https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_496x150.png" width="100px" alt="Available on the Chrome Webstore"></a>
  <a class="btn" href="https://github.com/y330/FragmentQR/issues" rel="noopener" target="_blank" aria-label="Issue y330/FragmentQR on GitHub" title="Report an issue in FragmentQR"><svg viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-issue-opened" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg><span> Report Issue</span></a>
 </section>
<style>h1{color: orange;}</style>

# FragmentQR



<em><b>Coded by Yonah Aviv</b></em>





**FragmentQR is a web extension that generates QR codes linking to Text Fragments(arbitrary selected text) on any webpage.**


<p> When scanning such a QR code, the text fragment will be scrolled into view and/or highlighted in yellow when opened, depending on the browser and/or platform.
 
<hr>

##  Tutorial

<a href="https://bit.ly/GetFragmentedQR" title="View this as a sideshow on the Chrome Web Store"><img src="https://lh3.googleusercontent.com/pw/ACtC-3f7FGuESSm9z3SPDAbhQHSr3YYL03r1gGBeSWYqbG8NyXxtg3gMWO4dbrM8yuhsMsCuf_JLqLSUWfSSodKzYR8mg6FkX5PmxXgfG8iPANMsQpsiE6GTlWFIRsHIZqi2ZBX0btMnBlUltWArYFdlTrhbhQ=w1210-h448-no?authuser=0" width="fit-content" alt="FragmentQR infographic of intructions"/></a>

To learn how to QR encode text fragments using FragmentQR, you can examine the infographic above. Alternatively, read the instructions below:
 <hr style="width:70%; align: middle;">

### Instructions

 <ol>
  <li>Select text</li>
  <li>Ctrl/Cmd + Shift + L to copy the text fragment. Wait for your selected text fragment be highlighted in yellow.</li>
  <li>Ctrl/Cmd+Q to open the extension popup</li>
  <li>Click the paste button</li>
  <li>Scan it on your mobile device using a QR code scanner such as Google Lens or some default camera apps. Check compatible browsers below.</li>
 </ol>
 If steps 1 or 2 do not work, go to chrome://extensions/shortcuts to reconfigure the shortcuts<p>
 <hr width="70%">
 
<h3>Demo of FragmentQR v1.0</h3>
[![](https://img.youtube.com/vi/10U6ycpN3CQ/hqdefault.jpg)]
(https://youtu.be/10U6ycpN3CQ)

[
![](https://lh3.googleusercontent.com/pw/ACtC-3cera_XKIXLjEw9LyZh93DtSKTDoQsyF2aYR0Y_L-PCeMttnP3Gr1OiOIxL4nLN_ltCioZyQMUwizFb2wyZLzytBktmEuWRptUGYOFoChSq_bQpZ_g5TEnbb_ZG__Y0rjNbj2oUiHBPotXUOP6X2NID3g=w512-h212-no?)
](http://bit.ly/youtubeFragQR)

## More Info
### FAQ

#### **What are Text Fragments?**

A Text Fragment is a part of a URL that specifies a piece of text to be scrolled into view and highlighted in yellow(by default). In Chromium 80+, this feature is known as <a href="https://github.com/WICG/scroll-to-text-fragment/" title="Scroll to text fragment on GitHub">Scroll to text fragment</a>.

**Technical:** it is a part of a URL defined in a URI fragment ` your-url/#URI-fragment` that defines a text snippet. The syntax for a text fragment is `  your-url/#:~:text="text-snippet"  `.


#### **What really is FragmentQR, and why should I get it?**

FragmentQR is a Chrome extesion that lets the user select any text on a webpage and convert it into a text fragment, which is then appended as to the end of the pages URL. 


#### **What browsers/platforms are compatible with FragmentQR?**
The following are compatible with Minimum requirements as of 10/02/2020:
   - MacOS X 10.10: Chromium 80 
   - Android 5.5: Chrome 85, Android WebView 81
   - Windows 7: Chromium 80

    -  **iOS**: iOS 12: Google Chrome, Coming soon, but enabling #shared-highlighting-ios on chrome://flags allows scrolling to the fragment. The availability on iOS is up to Apple as Chrome for iOS uses Apple WebKit.
<a href="https://chromestatus.com/feature/4733392803332096#status" title="Check compatability of scroll to text fragment" target="_blank">Check current status</a>
[Compatibility info: https://caniuse.com/url-scroll-to-tex...
](https://www.youtube.com/watch?v=10U6ycpN3CQ#:~:text=Compatibility%20info%3A%20https%3A%2F%2Fcaniuse.com%2Furl-scroll-to-tex...)

### <em>Changelog v1.6</em>
<ol>
    <li>Fix issue when system theme is set to light</li>
    <li>Minor improvements</li>
  </ol>
  
### <em>Changelog v1.5</em>
 <ol>  
  <li>New icon and name changes to FragmentQR</li>
  <li>Paste button now works.</li>
  <li>Vast UI and functionality improvements</li>
  <li>Added support for copying text framents</li>
  <li>Added keyboard shortcuts</li>
  <li>Light theme(currently does not save between sessions)</li>
 </ol>
 
### TODO
  <ol>
    <li>add keyboard shorcut to open popup with link to text fragment as a placeholder in the textarea</li>
  </ol>
  

<hr> 
<block>
FragmentQR uses Scroll to Text Fragment, a feature in Chromium 80+. 

<b>© 2020 MIT license Yonah Aviv.</b>

Contributions welcome.
<!--stackedit_data:
eyJwcm9wZXJ0aWVzIjoidGl0bGU6IEZyYWdtZW50IFFSXG5hdX
Rob3I6IFlvbmFoXG50YWdzOiAndGV4dCBmcmFnbWVudCwgcXIg
Y29kZSdcbiIsImhpc3RvcnkiOlstNTQyNjU1MTMxLC0xODI1Nz
EyNjczLDExNTA2ODEwNjIsMjA4MDMyMjQ1OCwzMzI1NTU0Nzks
MTQwMDA3NTY3NCwtMjAwMDIwMDY5NSw2NjIyNjQwMjgsODE4OD
k2ODYzLC0yMDkxMzE3MzYzLC0xMzgzMzE5MTcxLC02NDQ0MDc5
OTgsMTM4Mzc3MTAzNywxMTAwODU1OTEsLTEwNjM2MjU5NTNdfQ

-->
<!--stackedit_data:
eyJwcm9wZXJ0aWVzIjoidGl0bGU6IEZyYWdtZW50IFFSXG5hdX
Rob3I6IFlvbmFoXG50YWdzOiAndGV4dCBmcmFnbWVudCwgcXIg
Y29kZSdcbiIsImhpc3RvcnkiOlsxNjYzOTI2MDgzLC0xNTE1MD
MyNDUwLC0zNzc0MDYxMzgsMTQ4Mzg1NzM3LC0xODMxNTUxMDg3
LDY1NjM2NjA1MSwxMDQzMDg2OTE4LC0xNzQ5NjgyNjU2LC01ND
I2NTUxMzEsLTE4MjU3MTI2NzMsMTE1MDY4MTA2MiwyMDgwMzIy
NDU4LDMzMjU1NTQ3OSwxNDAwMDc1Njc0LC0yMDAwMjAwNjk1LD
Y2MjI2NDAyOCw4MTg4OTY4NjMsLTIwOTEzMTczNjMsLTEzODMz
MTkxNzEsLTY0NDQwNzk5OF19
-->