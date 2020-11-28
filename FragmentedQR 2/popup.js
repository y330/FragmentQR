// Yonah Aviv 2020: for resuse with modification, insert the following at the top of your code: "originally by Yonah Aviv mm/dd/yyyy email: avivyonah@gmail.com"

"use strict";

$(function () {
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
    // download
    $(".download").attr("href", d),
      $(".download").attr("download", "qr-" + s + "-" + c + ".png");
  }

  function i(e) {
    $(".alert").html(e).show();

    setTimeout(function () {
      $(".alert").slideUp(400);
    }, 3e3);
  }

  function l() {
    var e = localStorage.getItem("qrcodeextensions12345");

    if (e) {
      var t = JSON.parse(e);

      return console.log(t), t;
    }

    return !1;
  }

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
  //get version
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
  //expansion
  $(document).on("click", "#qr", function () {
    $(".contets").hasClass("expansion")
      ? $(".contets").removeClass("expansion")
      : $(".contets").addClass("expansion");
  }),
    //textarea keydown
    $("textarea").on("keydown", function () {
      clearTimeout(t),
        (t = setTimeout(function () {
          var e = $("textarea").val().toString();

          e.match(/[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]/)
            ? (console.log("JP", e), a((e = Encoding.convert(e, "SJIS"))))
            : (console.log("EN", e), a(encodeURI(e))),
            $("textarea").removeClass("bit-mode");
        }, 300)),
        $(".undo").show();
    }),
    //textarea click
    $("textarea").on("click", function () {
      $(this).addClass("click-open");
    }),
    //undo
    $(".undo").on("click", function () {
      $("textarea").val(r),
        a(encodeURI($("textarea").val())),
        $("textarea").removeClass("bit-mode"),
        $(".copy").hide();
      clearTimeout(t),
        (t = setTimeout(function () {
          ".undo".hide();
        }, 300));
    }),
    //copy
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
      $("textarea").addClass("bit-mode");
      setTimeout(() => {
        $("textarea").removeClass("bit-mode");
      }, 4000);
    }),
    //history
    $(".options").on("click", function () {
      // $(".contets_inline").addClass("options"),
      $(".history-list").toggle(),
        $(".back").show(),
        $(".history-clear").show(),
        $(".options").show(),
        $("p.options").hide(),
        $(".app_ttl").show(),
        (function () {
          var e = l();

          if ((e.reverse(), e))
            for (var t in ($(".history-list ul").html(""), e))
              $(".history-list ul").append(
                '<li data-obj="' +
                  e[t].url +
                  '"><dl><dt>' +
                  e[t].title +
                  "</dt><dd>" +
                  e[t].url +
                  "</dd></dl></li>"
              );
        })();
    }),
    //go back
    $("i.r").on("click", function () {
      $(".contets_inline").removeClass("options"),
        $(".history-list").hide(),
        $(".app_ttl").hide(),
        $("i.").slideToggle(),
        $(".options").show();
        // $(".contets").remove("scrolll");
    }),
    $("i.q").on("click", function () {
      $(".contets_inline").addClass("options"),
      $(".history-list").show(),
      $("i.r").slideToggle();

    });
  //     (function(){
  //     $(".contets_inline").hasClass("options")
  //         ? $("p.options, .app_ttl").hide()
  //         : $("p.options, .app_ttl").show();
  //     }),
  //click history list
  $(document).on("click", ".history-list li", function () {
    var e = $(this).data("obj");

    $(".back").hide(),
      $(".app_ttl").hide(),
      $("textarea").val(e),
      a(encodeURI($("textarea").val())),
      $(".contets_inline").removeClass("options");
  }),
    //options
    $(".settings").on("click", function () {
      chrome.runtime.openOptionsPage
        ? chrome.runtime.openOptionsPage()
        : window.open(chrome.runtime.getURL("options.html"));
    }),
    $("button.bright").html("<i class='material-icons'>brightness_4</i>"),
    //bright
    $(".bright").on("click", function () {
      $("*").toggleClass("light"),
        $("button.bright").hasClass("light")
          ? $(this).html("<i class='material-icons'>brightness_5</i>")
          : $(this).html("<i class='material-icons'>brightness_4</i>");
    }),
    $(".donate").on("click", function () {
      chrome.runtime.open();
    }),
    $(".qr_wrap").on("mouseover", function () {
      clearTimeout(t),
        (t = setTimeout(function () {
          $(".qr_wrap").addClass("zoom");
        }, 200)),
        clearTimeout(t),
        (t = setTimeout(function () {
          $(".qr_wrap").removeClass("zoom");
        }, 200));
    }),
    new PerfectScrollbar(".qr_wrap", {}),
    new PerfectScrollbar("textarea", {}),
    new PerfectScrollbar(".history-list", {});
});
function a(e) {
  $("#qr").html(""), $("#qr").qrcode(e);
}
//get clipboard
var elText = document.getElementById("text");
var elPaste = document.getElementById("paste");
var tabUrl;
var code;

chrome.tabs.getSelected(null, function (tab) {
  tabUrl = tab.url;
  elText.value = tabUrl;

  elPaste.addEventListener("click", function (e) {
    e.preventDefault();
    $("textarea").val(""), elText.focus();
    document.execCommand("paste");
  });
}),
  //scrollbar

  //get selection
  function pasteSelection() {
    //Select current tab to send message
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
        status: "complete",
        _windowType: "normal",
        get windowType() {
          return this._windowType;
        },
        set windowType(value) {
          this._windowType = value;
        },
      },
      function (tabs) {
        //It returns array so looping over tabs result
        for (tab in tabs) {
          //Send Message to a tab
          chrome.tabs.sendMessage(tabs[tab].id, {
            method: "getSelection",
          });
        }
      }
    );
  };
//Adding a handler when message is recieved from content scripts
chrome.extension.onMessage.addListener(function (response, sender) {
  //Set text to text area
  var text = document.getElementById("text");
  text.value = response.data;
});
// Bind On click event to pasteSelection() function
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit").onclick = pasteSelection;
});
