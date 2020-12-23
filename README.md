# FragmentQR
 ## *Browser Extension*
  ### *Yonah Aviv*

 

![Chrome Web Store](https://img.shields.io/chrome-web-store/v/cabodnfakameckfbbgkciiifempglloj?color=informational&style=for-the-badge&label=Chrome%20Web%20Store%20Version)
![Chrome Web Store](https://img.shields.io/chrome-web-store/stars/cabodnfakameckfbbgkciiifempglloj?color=yellow&style=for-the-badge&link=https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/#:~:text="Reviews")
 
<img src="https://lh3.googleusercontent.com/4fpffHEr-iRbm4s91wp4y6LfI5Qc1dV-vFhaAhPP9Qp8X_TUxTn7XOg9fhmebiZ9PXDP1B5cAqtqDbwnTIe-7CuvXg=w128-h128-e365-rj-sc0x00ffffff" width ="64" alt="FragmentQR Logo">
 <span>
<a href="https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store" padding="0">


<img src="https://www.thiscodeworks.com/images/get-on-chrome.png" width ="110" alt="FragmentQR Logo">
</a>
</span>



 
**FragmentQR is a chromium extension that allows linking to relevant text on a webpage and generating a QR code for it, that will highlight the text in yellow when scanned.** 

### Highlight of FragmentQR

FragmentQR adds a an option to the context menu to copy a text fragment when selecting text, and enables generating a QR code for the text fragment in an extension popup by clicking the FragmentQR toolbar button.
In addition to this keyboard shortcuts are available to preforms the actions.
The default ones are below:

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

The above link to [Probability Distribution](https://en.wikipedia.org/wiki/Probability_distribution) on [Wikipedia, the Free Encyclopedia](https://en.wikipedia.org/wiki/Main_Page) will highlight the following text snippet:
> Examples of random phenomena include the weather condition in a future date, the height of a person, the fraction of male students in a school, the results of a survey, etc.[4]






<hr width=50%>

### **Where do I install FragmentQR?**

You can install it from the **Chrome Web Store** or **Microsoft Edge Add-ons**:

1. [Install on the Chrome Web Store](https://bit.ly/FQRinstall)
2. [Install from Microsoft Edge Add-ons](https://bit.ly/FQRinstall_edge)


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



## Issues and Changelog

### Known issues

 - Still searching 🔍
   + Help find issues by installing and testing FragmentQR. If you find an issue, post it in the [support tab](https://bit.ly/FQRinstall) on the Web Store

### _Changelog v1.7.2_ (Released in all but the MS add-on store)
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

  - [ ] FragmentQR Pro(Built using React)
       + Pro meaning new and improved, not paid
  - [ ] Organize code 
  - [ ] Version control 
----

## More Info
### References
 1. <sup id="ref_frag">[1]</sup> Burris, N., &amp; Bokan, D. (Eds.). (2020, November 24). Scroll-to-text-fragment. Retrieved November 28, 2020, from https://wicg.github.io/scroll-to-text-fragment/
 2. <sup id=ref2>[2]</sup> Chromium\* 80 and above uses text fragments in a feature  <a href="https://github.com/WICG/scroll-to-text-fragment/" title="Scroll-to-Text Fragment on GitHub">Scroll to Text Fragment</a>. Text fragments may be owned by W3C or WICG.
 
### Links

[**View source code**](/FragmentQR): I added comments to the majority of so feel free to check them out.


[**FragmentQR website**](https://y330.github.io/FragmentQR): Includes a visual tutorial on how to use FragmentQR. Go check it out.

**Article about text fragments**: [Boldly link where no one has linked before: Text Fragments](https://web.dev/text-fragments/#:~:text=Boldly%20link%20where%20no%20one%20has%20linked%20before:%20Text%20Fragments)

Similar extensions: 
 1. Inspired by [Link to text fragment](https://chrome.google.com/webstore/detail/link-to-text-fragment/pbcodcjpfjdpcineamnnmbkkmkdpajjg)
 2. [STTF Url Generator](https://chrome.google.com/webstore/detail/sttf-url-generator/mlihnffnlcfgjkkmigdgahgpfpfddafo)


 ----
 
Report an [issue 🐞](https://github.com/y330/FragmentQR/issues/new?title=Report%20a%20bug&body=%22%3Cdetails%3E%0A%3Csummary%3EDetails%3C/summary%3E%0A%0A-%20Operating%20system*%3A%0A-%20Extension%20version*%3A%20%0A-%20Browser*%3A%0A%0A%3C/details%3E%0A%0A**Steps%20to%20reproduce%20the%20bug**%0A%0A**What%20is%20the%20bug/issue%3F**%0A%0A**Screen%20recording%20or%20screenshot**%0A%0A%22) or Suggest a [new feature 🔮](https://github.com/y330/FragmentQR/issues/new?title=Suggest%20a%20new%20feature%F0%9F%94%AE&body=%23%23%23%20Idea%3A%0A%3E%20your%20idea%20here%0A%0A%23%23%23%20Code%3A%0A%60input%20your%20code%28optional%29%60) 


[![](https://static.wikia.nocookie.net/logopedia/images/c/c5/Google_Chrome_Web_Store_icon_2015.svg/revision/latest/top-crop/width/25/height/25?cb=20190930194931) Install FragmentQR](https://chrome.google.com/webstore/detail/fragmentqr/cabodnfakameckfbbgkciiifempglloj/#:~:text=1) on the Chrome Web Store

It is now available on the Microsoft Edge Add-ons store: [FragmentQR - Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/fragmentqr/jbghofoedadhaaepolpeoepofdbckfni)


### Developed by Yonah Aviv

  <p><a href="https://www.buymeacoffee.com/yonahaviv"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="yonahaviv" /></a></p>

**Privacy policy**

I, the developer, attest to the claim that the browser extension FragmentQR does not collect any personal identification information of users whatsoever, and that all other data is stored locally on the user's device.



---- 



 
**Copyright © 2020 Yonah Aviv**. Licensed under the [MIT License](https://raw.githubusercontent.com/y330/FragmentQR/master/LICENSE)
<!--stackedit_data:
eyJwcm9wZXJ0aWVzIjoiYXV0aG9yOiBZb25haCBBdml2XG50YW
dzOiAnWW9uYWggQXZpdixGcmFnbWVudFFSLCB0ZXh0IGZyYWdt
ZW50LCBRUiBjb2RlJ1xuZXh0ZW5zaW9uczpcbiAgcHJlc2V0Oi
BnZm1cbiIsImhpc3RvcnkiOlstMjAwMjUxOTk5LC0xMTM1NDE3
MjE1LC04OTU4NTk1MTYsMjEyMDkwNzEyNV19
-->
