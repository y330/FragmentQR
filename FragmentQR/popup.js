/*MIT License

Copyright (c) 2021 Yonah Aviv

 */

"use strict";

$(function() {
    // encode the QR code. this is a mess
    function a(e) {
        $("#qr").html(""), $("#qr").qrcode(e);

        var t, o, n, a, i, r, l, c;
        c = e == undefined ? e.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1] : null;
        var s =
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
    $("#btn-download").click(function() {
        $(this).toggleClass("downloaded");
    });

    /*---------------------------------------------------------*/

    //  set theme based on the user settings from options page(not working)
    class Theme {
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
    /*----------------*/

    if (this.chrome) {
        if (this.chrome) {
            tsp.setChrome(chrome);
            tsp.initQuickSettings();
        }
    }
    /*---------------------------------------------------------*/
    function log(message_ok) {
        console.log(message_ok)
    }
    /*---------------------------------------------------------*/
    function i(e) {
        $(".alert").html(e).show();

        setTimeout(function() {
            $(".alert").slideUp(500);
        }, 2000);
    }
    /*---------------------------------------------------------*/
    function l() {
        var e = localStorage.getItem("FQRhistoryList");

        if (e) {
            var t = JSON.parse(e);

            return console.log(`FragmentQR History list:`, t), t;
        }

        return !1;
    }
    /*---------------------------------------------------------*/

    //history is stored here
    // stores url, tab title, and date
    function n(e, t) {
        var o = l(),
            n = [];

        // 		console.log("historyList-entryObj", o);

        var a = !1;

        if (o)
            for (var i in o)
                n.push({
                    url: o[i].url,

                    title: o[i].title,

                    date: o[i].date,

                    // 					fragment: o[i].fragment,
                }),
                e == o[i].url && (a = !0);

        a ||
            n.push({
                url: e,

                title: t,

                date: new Date(),

                // 			fragment
            }),
            30 < n.length && n.shift();

        var r = JSON.stringify(n);

        localStorage.setItem("FQRhistoryList", r);
    }
    /*---------------------------------------------------------*/

    var r,
        e = (function() {
            var e = {};

            if (1 < document.location.search.length)
                for (
                    var t = document.location.search.substring(1).split("&"),
                        o = 0,
                        n = t.length; o < n; o++
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
    /*---------------------------------------------------------*/
    var count = 0;
    var parent = document.getElementById("inputs_contained");

    /*---------------------------------------------------------*/

    function add_input() {
        count++;
        if (count >= 10) {
            return false;
        }
        var input = document.createElement("input");
        input.name = "generated_input";
        parent.appendChild(input);
    }
    /*---------------------------------------------------------*/
    // allows users to input text to be a text fragment
    /*
    	  1. they see the link of the webpage(in a textarea.textarea),
    	  2. in a seperate input element, they type in some textarea.textarea
    	  3. then the link turn into a text fragment
    	  */
    function fragment(userTxt) {
        var is_hashed = str.substring(str.lastIndexOf("/") + 1);

        var link;
        if (str(is_hashed) != "#") {
            link += "#";
        }
        link = link + ":~:text=" + userTxt;
        var newLink = JSON.stringify(link);
        return newLink;
    }


    function getHash(a) {
        if (a.hash) {
            var hash = a.hash.substring(1);

            if (hash.length === 0) {
                return false;
            } else {
                return hash;
            }
        } else {
            return false;
        }
    }

    /*---------------------------------------------------------*/
    //get clipboard
    var elText = document.getElementById("text");
    var elPaste = document.getElementById("paste");
    var tabUrl;
    /*----------------*/
    /*---------------------------------------------------------*/

    // paste into text area
    function pasteAct(tab) {
        tabUrl = tab.url
        tab.fragment = "hrllo";
        var fragID = "/#:~:text=";
        var fragURL = tab.url + fragID + tab.fragment;
        log(fragURL);

        // 		tab = `:~:text={userTxt}`;

        // 		fragURL = tab.url + fragID;
        // 		elText.value = tabUrl;

        $(elPaste).on("click", function(e) {
            e.preventDefault();
            let textval = elText.value;
            // 			elText.focus();

            // 						document.execCommand("paste");
            // 			elText.blur();
            a(encodeURI(fragURL));
            elText.value = fragURL;

            $(elText).addClass("bit-mode");
            i("Pasted");

            setTimeout(() => {
                $(elText).removeClass("bit-mode");
            }, 4000);
        });
    }
    /*----------------------*/

    chrome.tabs.getSelected(null, pasteAct),
        $(".version").append(chrome.runtime.getManifest().version);
    /*---------------------------------------------------------*/

    var t,
        d = $("textarea.textarea"),
        o = $(".contets"),
        u = $("body");
    /*---------------------------------------------------------*/

    if (e.url) {
        var h = e.url,
            m = e.title;

        a(h),
            d.val(h),
            n(h, m),
            o.addClass("expansion"),
            u.addClass("context_mode");
    } /*-----------------------------*/
    else if (chrome.tabs)
        chrome.tabs.getSelected(null, function(e) {
            var t = decodeURIComponent(e.url),
                o = e.title;

            a(t), d.val(t), n(t, o);
        });
    /*-----------------------------*/
    else {
        var p = decodeURIComponent(window.location.href);

        $("#qr").qrcode(p), d.val(p);
    }
    /*---------------------------------------------------------*/

    //expansion mode(click QR canvas)
    $(document).on("click", "#qr", function() {
            $(".contets").hasClass("expansion") ?
                $(".contets").removeClass("expansion") :
                $(".contets").addClass("expansion");
            $("body").hasClass("expansion") ?
                $("body").removeClass("expansion") :
                $("body").addClass("expansion");
        }),
        /*---------------------------------------------------------*/

        //textarea.textarea update QR on type
        $("textarea.textarea").on("keydown", function() {
            clearTimeout(t),
                (t = setTimeout(function() {
                    var e = $("textarea.textarea").val().toString();
                    a(encodeURI(e)),
                        $("textarea.textarea").removeClass("bit-mode");
                }, 300)),
                $(".undo").show();
        }),
        /*---------------------------------------------------------*/

        //textarea.textarea click effect
        $("textarea.textarea").on("click", function() {
            $(this).addClass("click-open");
        }),
        /*---------------------------------------------------------*/

        //clear textarea.textarea
        $(".undo").on("click", function() {
            $("textarea.textarea").val(r),
                a(encodeURI($("textarea.textarea").val())),
                $("textarea.textarea").removeClass("bit-mode"),
                $(".copy").hide();
            clearTimeout(t),
                (t = setTimeout(function() {
                    $(".undo").hide();
                }, 300));
        }),
        /*---------------------------------------------------------*/
        /*
        Copy
        */
        /*---------------------------------------------------------*/
        //copy text
        $(".copy").on("click", function() {
            !(function(e) {
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
            })($("textarea.textarea").val()) ?
            i("ERROR! Please retry."): i("COPIED");
        });
    /*---------------------------------------------------------*/
    /*
      PASTE
      */
    // Bind On click event to pasteSelection() function
    document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("submit").onclick = pasteSelection;
            i("Pasted");
        }),
        /*---------------------------------------------------------*/
        /*===== back button =====*/

        $(".back").click(function() {
            $(".qr ").slideDown(), $(".contets_inline").removeClass("memory_view");
            //         $(".qr >").slideToggle();
            //         $("")
        }),
        /*---------------------------------------------------------*/
        /*Info card*/
        $(".hint").click(function() {
            $(this).toggleClass("show");
            $(".extension-info").html('<h1>FragmentQR</h1>');

        });
    /*---------------------------------------------------------*/
    /*favicon insert*/
    function linkFaviconView(t) {
        console.log(e[t].faviconUrl);
    }
    /*---------------------------------------------------------*/
    function QR_view() {
        // 			$(".contents_inline").t("memory_view"),
        $(".history_block").hide(),

            $(".qr").slideDown();
        $(".memory" + " svg").html(`<path d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08V8M13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.896 8.896 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9" Fffffill="white" ></path><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" ></rect>`);

        // 		$(".history-clear").hide(),
        // 			$(".history-list ul").empty(),
        // 		$(".back").hide();
    };

    function History_view() {
        // 		$(".contents_inline").addClass("memory_view"),

        // 		$(".contents .expansion").scrollLeft(-400),
        // 		$(".history-clear").show(),
        // 		$(".back").show(),
        $(".qr").hide(),

            $(".history_block").slideDown(),
            $(".memory" + " svg").html('<path d=M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H15V15H17V13H15V11M19,19V15H17V19H19M15,3H21V9H15V3M17,5V7H19V5H17M3,3H9V9H3V3M5,5V7H7V5H5M3,15H9V21H3V15M5,17V19H7V17H5Z" />'),

            (function() {
                    var e = l();

                    if ((e.reverse(),
                            e))
                        for (var t in ($(".history-list ul").html(""),
                                e))
                            $(".history-list ul").append('<li data-obj="' + e[t].url + '"><dl><dt>' + e[t].title + "</dt><dd>" + e[t].url + "</dd><dd>jjjjjjj</dd></dl></li>");
                }

            )();

    }; /*++++++++++++++++++++*/
    // on click history button
    function toggle_memory_page(time = 0) {
        $(".contents_inline").toggleClass("memory_view"),

            $(".contents_inline").hasClass("memory_view") ?

            function() {
                History_view();
            } : function() {
                QR_view();
            }
    };
    $(".memory").on("click", function() {
            toggle_memory_page;

        }),

        // 		$(".qr").fade(200),
        // 		$(".history_block").hide(),
        // 		$(".history_block").fadeIn(1000);
        // 		$(".contents").scrollLeft(-400);
        // 		$(".history-clear").show(),
        // 		History_view();

        /*---------------------------------------------------------*/
        // on click history list item
        $(document).on("click", ".history-list li", function() {
            var e = $(this).data("obj");

            $(".back").hide(),
                // 		$(".app_ttl").hide(),
                $("textarea").val(e),
                a($("textarea").val()),
                toggle_memory_page(200);

        }),

        /*---------------------------------------------------------*/

        $(".back").on("click", function() {
            //         $(".qr").hide();
            //         $(".history-clear").hide();

            //             $(".history-clear").slideUp(),
            $(".qr").slideUp();
            $(".contents_inline").addClass("memory_view");
            $(".history-bock").show();
        }),
        /*---------------------------------------------------------*/
        /*====toggle theme======*/

        $("button.bright").on("click", function() {
            $("*").toggleClass("light"),
                // $(".bright").hasClass("light")
                $("svg.dark_mode path").attr("filter", "invert(100%");
            // : $("svg.dark_mode").filter("invert(0%)");
        }),
        /*---------------------------------------------------------*/

        $("#config input[name=dark_mode]").on("click", function() {
            dark_mode = !dark_mode;
        }),
        // insert version number into header of popup
        $(".header").on("click", function() {
            $(".auth").slideToggle(200, function() {
                clearTimeout(t),
                    ((t = setTimeout(function() {
                            $(".version").toggle(true, function() {});
                        })),
                        100);
            });
        }),
        /*---------------------------------------------------------*/

        /*insert history svg into memory button */
        /*---------------------------------------------------------*/

        // go to website button
        $(".webs").on("click", function() {
            $(".memo").toggle(function() {
                $(".memo").html(
                    "<a class='rr' href='#' target='_blank'>Go to Website</a>"
                );
            });
        });
    /*---------------------------------------------------------*/

    //link to repo
    $(".memo").on("click", function() {
        window.open("http://bit.ly/FragmentQRrepository", "_blank");
    });
    /*---------------------------------------------------------*/

    $(".settings").on("click", function() {
        chrome.runtime.openOptionsPage ?
            chrome.runtime.openOptionsPage() :
            window.open(chrome.runtime.getURL("options.html"));
    });
    /*---------------------------------------------------------*/

    // creates a perfect scrollbar ;)

    new PerfectScrollbar(".history-list", {});
});