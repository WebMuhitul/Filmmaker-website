! function(e) {
    e.fn.menumaker = function(s) {
        var n = e(this),
            t = e.extend({
                title: "Menu",
                format: "dropdown",
                breakpoint: 991,
                sticky: !1
            }, s);
        return this.each(function() {
            if (n.find("li ul").parent().addClass("has-sub"), "select" != t.format) n.prepend('<div id="menu-button">' + t.title + "</div>"), e(this).find("#menu-button").on("click", function() {
                e(this).toggleClass("menu-opened");
                var s = e(this).next("ul");
                s.hasClass("open") ? s.hide().removeClass("open") : (s.show().addClass("open"), "dropdown" === t.format && s.find("ul").show())
            }), multiTg = function() {
                n.find(".has-sub").prepend('<span class="submenu-button"></span>'), n.find(".submenu-button").on("click", function() {
                    e(this).toggleClass("submenu-opened"), e(this).siblings("ul").hasClass("open") ? e(this).siblings("ul").removeClass("open").hide() : e(this).siblings("ul").addClass("open").show()
                })
            }, "multitoggle" === t.format ? multiTg() : n.addClass("dropdown");
            else if ("select" === t.format) {
                n.append('<select style="width: 100%"/>').addClass("select-list");
                var s = n.find("select");
                s.append("<option>" + t.title + "</option>", {
                    selected: "selected",
                    value: ""
                }), n.find("a").each(function() {
                    var n = e(this),
                        t = "";
                    for (i = 1; i < n.parents("ul").length; i++) t += "-";
                    s.append('<option value="' + e(this).attr("href") + '">' + t + n.text() + "</option")
                }), s.on("change", function() {
                    window.location = e(this).find("option:selected").val()
                })
            }
            return !0 === t.sticky && n.css("position", "fixed"), resizeFix = function() {
                e(window).width() > t.breakpoint && (n.find("ul").show(), n.removeClass("small-screen"), "select" === t.format ? n.find("select").hide() : n.find("#menu-button").removeClass("menu-opened")), e(window).width() <= t.breakpoint && !n.hasClass("small-screen") && (n.find("ul").hide().removeClass("open"), n.addClass("small-screen"), "select" === t.format && n.find("select").show())
            }, resizeFix(), e(window).on("resize", resizeFix)
        })
    }
}(jQuery);