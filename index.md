<HEAD markdown="1">
 <meta name="google-site-verification" content="Ay7DuHomj_FffCIPkk06PMst9-V1kwZij44bLz5SeuI" />
      
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-178685535-2"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-178685535-2');
            </script>
</HEAD>
 <section id="downloads">
            
            <a href=" https://bit.ly/GetFragmentedQR" class="btn" title="Get it on the Chrome Web Store" padding="0">
            <img src="https://developer.chrome.com/webstore/images/ChromeWebStore_Badge_v2_496x150.png" alt="Available on the Chrome Webstore"></a>
           <a class="btn" href="https://github.com/y330/FragmentQR/issues" rel="noopener" target="_blank" aria-label="Issue y330/FragmentQR on GitHub" title="Report an issue in FragmentQR"><svg viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-issue-opened" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg><span> Report Issue</span></a>
 </section>
<h1 id="title">FragmentQR - Generate QR codes for Text Fragments</h1>
<em id="Yonah Aviv" style="color: orange; font-family: times;"><strong>Yonah Aviv</strong></em><p><p>
<b>FragmentQR is a web extension that generates QR codes linking to Text Fragments(arbitrary selected text) on any webpage. </b>
<p> When scanning such a QR code, the text fragment will be scrolled into view and/or highlighted in yellow when opene, depending on the browser.<p>
<hr>
<h2 id="embe">Tutorial<a href="https://bit.ly/GetFragmentedQR" title="View this as a sideshow on the Chrome Web Store"><img src="https://lh3.googleusercontent.com/pw/ACtC-3f7FGuESSm9z3SPDAbhQHSr3YYL03r1gGBeSWYqbG8NyXxtg3gMWO4dbrM8yuhsMsCuf_JLqLSUWfSSodKzYR8mg6FkX5PmxXgfG8iPANMsQpsiE6GTlWFIRsHIZqi2ZBX0btMnBlUltWArYFdlTrhbhQ=w1210-h448-no?authuser=0" width="fit-content" alt="FragmentQR infographic of intructions"/></a></h2>

To learn how to QR encode text fragments using FragmentQR, you can examine the infographic above. Alternatively, read the instructions below:
 <hr style="width:70%; align: middle;">

<h3>Instructions</h3><p>
 <ol>
  <li>Select text</li>
  <li>Ctrl/Cmd + Shift + L to copy the text fragment. Wait for your selected text fragment be highlighted in yellow.</li>
  <li>Ctrl/Cmd+Q to open the extension popup</li>
  <li>Click the paste button</li>
  <li>Scan it on your mobile device using a QR code scanner such as Google Lens or some default camera apps. Check compatible browsers below.</li>
 </ol>
 If steps 1 or 2 do not work, go to chrome://extensions/shortcuts to reconfigure the shortcuts<p>
 <hr width="70%">
<h3>Browser Compatibility:</h3>
<b>Scrolling + Highlighting:</b> (Mac, Windows, Android, Linux) on Chromium 80+<p>
<b>Scrolling:</b> iOS on Latest version of Google Chrome, must enable #shared-highlighting-ios on chrome://flags.<p>
<a href="https://chromestatus.com/feature/4733392803332096#status" title="Check compatability of scroll to text fragment" target="_blank">Check current status</a>
<h3>Demo of FragmentQR v1.0</h3>
<iframe width="400" height="250" src="https://www.youtube.com/embed/10U6ycpN3CQ?modestbranding=1&controls=0&loop=1&rel=0&showinfo=0" frameborder="0"></iframe>
<a href="http://bit.ly/youtubeFragQR" title="Watch FragmentQR v1.0.0 demo on YouTube">
![Watch on YouTube]( \https://lh3.googleusercontent.com/pw/ACtC-3cera_XKIXLjEw9LyZh93DtSKTDoQsyF2aYR0Y_L-PCeMttnP3Gr1OiOIxL4nLN_ltCioZyQMUwizFb2wyZLzytBktmEuWRptUGYOFoChSq_bQpZ_g5TEnbb_ZG__Y0rjNbj2oUiHBPotXUOP6X2NID3g=w512-h212-no? authuser="0" width="200px" alt=")</a>
 <hr>

## More Info
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
FragmentQR uses Scroll to Text Fragment, a feature in Chromium 80+. Read more about it <a href="https://github.com/WICG/scroll-to-text-fragment/" title="Scroll to text fragment github documentation">here</a>

<b>© 2020 MIT license Yonah Aviv.</b>

Contributions welcome.<p>
<!--stackedit_data:
eyJoaXN0b3J5IjpbNjE2MzA0MjM1LC0xMDYzNjI1OTUzXX0=
-->