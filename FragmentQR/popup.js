/*MIT License

Copyright (c) 2020 Yonah Aviv

*/

"use strict";
//  func
$(function () {
  // encode the QR code. this is a mess
  function a(e) {
    $("#qr").html(""), $("#qr").qrcode(e);

    var t,
      o,
      n,
      a,
      i,
      r,
      l,
      c = e.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1],
      s =
        ((t = new Date()),
        (o = t.getFullYear().toString()),
        (n = (t.getMonth() + 1).toString()),
        (a = t.getDate().toString()),
        (i = t.getHours().toString()),
        (r = t.getMinutes().toString()),
        (l = t.getSeconds().toString()),
        o + n + a + i + r + l),
      d = $("canvas")[0].toDataURL();
    // download button
    $(".download").attr("href", d),
      $(".download").attr("download", "qr-" + s + "-" + c + ".png");
  }
  //  set theme based on the user settings from options page(not working)
  class FragmentQR {
    initQuickSettings() {
      this.chrome.storage.sync.get(["dark_mode"], (items) => {
        // enable dark mode
        this.darkMode = items.dark_mode;
        if (this.darkMode) {
          document.body.classList.add("light");
        }
      });
    }
  }
  let fqr = new FragmentQR();

  if (this.chrome) {
    if (this.chrome) {
      tsp.setChrome(chrome);
      tsp.initQuickSettings();
    }
  }
  //
  function i(e) {
    $(".alert").html(e).show();

    setTimeout(function () {
      $(".alert").slideUp(400);
    }, 3e3);
  }
  //
  function l() {
    var e = localStorage.getItem("qrcodeextensions12345");

    if (e) {
      var t = JSON.parse(e);

      return console.log(t), t;
    }

    return !1;
  }
  //non functional feature(records history of tabs) see FragmentQR 2 for this feature to work
  function n(e, t) {
    var o = l(),
      n = [];

    console.log("historyListObj", o);

    var a = !1;

    if (o)
      for (var i in o)
        n.push({
          url: o[i].url,

          title: o[i].title,

          date: o[i].date,
        }),
          e == o[i].url && (a = !0);

    a ||
      n.push({
        url: e,

        title: t,

        date: new Date(),
      }),
      30 < n.length && n.shift();

    var r = JSON.stringify(n);

    localStorage.setItem("qrcodeextensions12345", r);
  }

  var r,
    e = (function () {
      var e = {};

      if (1 < document.location.search.length)
        for (
          var t = document.location.search.substring(1).split("&"),
            o = 0,
            n = t.length;
          o < n;
          o++
        ) {
          var a = t[o].split("="),
            i = decodeURIComponent(a[0]),
            r = decodeURIComponent(a[1]);

          e[i] = decodeURIComponent(r);
        }

      return e;
    })(),
    c = "",
    s = "";
  //get clipboard
  var elText = document.getElementById("text");
  var elPaste = document.getElementById("paste");
  var tabUrl;
  // paste into text area
  function pasteAct(tab) {
    tabUrl = tab.url;
    elText.value = tabUrl;

    elPaste.addEventListener("click", function (e) {
      e.preventDefault();
      $("textarea").val(""), elText.focus();
      document.execCommand("paste");
      a(encodeURI($("textarea").val()));
      $("textarea").addClass("bit-mode");
      setTimeout(() => {
        $("textarea").removeClass("bit-mode");
      }, 4000);
    });
  }

  chrome.tabs.getSelected(null, pasteAct),
    $(".version").append(chrome.runtime.getManifest().version);

  var t,
    d = $("textarea"),
    o = $(".contets"),
    u = $("body");

  if (e.url) {
    var h = e.url,
      m = e.title;

    a(h),
      d.val(h),
      n(h, m),
      o.addClass("expansion"),
      u.addClass("context_mode");
  } else if (chrome.tabs)
    chrome.tabs.getSelected(null, function (e) {
      var t = decodeURIComponent(e.url),
        o = e.title;

      a(t), d.val(t), n(t, o);
    });
  else {
    var p = decodeURIComponent(window.location.href);

    $("#qr").qrcode(p), d.val(p);
  }
  //expansion mode(click QR canvas)
  $(document).on("click", "#qr", function () {
    $(".contets").hasClass("expansion")
      ? $(".contets").removeClass("expansion")
      : $(".contets").addClass("expansion");
  }),
    //textarea update QR on type
    $("textarea").on("keydown", function () {
      clearTimeout(t),
        (t = setTimeout(function () {
          var e = $("textarea").val().toString();

          e.match(/[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]/)(
            console.log("EN", e),
            a(encodeURI(e))
          ),
            $("textarea").removeClass("bit-mode");
        }, 300)),
        $(".undo").show();
    }),
    //textarea click effect
    $("textarea").on("click", function () {
      $(this).addClass("click-open");
    }),
    //clear textarea
    $(".undo").on("click", function () {
      $("textarea").val(r),
        a(encodeURI($("textarea").val())),
        $("textarea").removeClass("bit-mode"),
        $(".copy").hide();
      clearTimeout(t),
        (t = setTimeout(function () {
          $(".undo").hide();
        }, 300));
    }),
    //copy text
    $(".copy").on("click", function () {
      !(function (e) {
        var t = document.createElement("div"),
          o = document.createElement("pre");

        (o.style.userSelect = "auto"), (t.appendChild(o).textContent = e);

        var n = t.style;

        (n.position = "fixed"),
          (n.right = "200%"),
          document.body.appendChild(t),
          document.getSelection().selectAllChildren(t);

        var a = document.execCommand("copy");

        return document.body.removeChild(t), a;
      })($("textarea").val())
        ? i("ERROR! Please retry.")
        : i("COPIED");
    }),
    // set theme button icon
    $("button.bright").html("<i class='material-icons'>brightness_7</i>"),
    // $("button.bright").addClass("icons"),
    //toggle theme
    $(".bright").on("click", function () {
      $("*").toggleClass("light"),
        $("button.bright").hasClass("light")
          ? $(this).html("<i class='material-icons'>brightness_3</i>")
          : $(this).html("<i class='material-icons'>brightness_7</i>");
    }),
    // insert version number into header of popup
    $(".header").on("click", function () {
      $(".auth").slideToggle(200, function () {
        clearTimeout(t),
          ((t = setTimeout(function () {
            $(".version").toggle(True, function () {});
          })),
          100);
      });
    }),
    // go to website button
    $(".webs").on("click", function () {
      $(".memo").toggle(function () {
        $(".memo").html(
          "<a class='rr' href='#' target='_blank'>Go to Website</a>"
        );
      });
    }),
    //link to repo
    $(".memo").on("click", function () {
      window.open("http://bit.ly/FragmentQRrepository", "_blank");
    }),
    // // not in use
    new PerfectScrollbar(".history-list", {}),
    new perfectScrollbar(".contets_inline", {});
  // new PerfectScrollbar(".contets", {}),
  // new PerfectScrollbar(".contets_inline", {});
});
