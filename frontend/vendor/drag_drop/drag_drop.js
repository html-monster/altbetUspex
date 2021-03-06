/*! jQuery UI - v1.11.4 - 2016-05-12
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, sortable.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)})(function (t) {
	function e(e, s) {
		var n, a, o, r = e.nodeName.toLowerCase();
		return "area" === r ? (n = e.parentNode, a = n.name, e.href && a && "map" === n.nodeName.toLowerCase() ? (o = t("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled : "a" === r ? e.href || s : s) && i(e)
	}

	function i(e) {return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {return "hidden" === t.css(this, "visibility")}).length}

	t.ui = t.ui || {}, t.extend(t.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA    : 188,
			DELETE   : 46,
			DOWN     : 40,
			END      : 35,
			ENTER    : 13,
			ESCAPE   : 27,
			HOME     : 36,
			LEFT     : 37,
			PAGE_DOWN: 34,
			PAGE_UP  : 33,
			PERIOD   : 190,
			RIGHT    : 39,
			SPACE    : 32,
			TAB      : 9,
			UP       : 38
		}
	}), t.fn.extend({
		scrollParent  : function (e) {
			var i = this.css("position"), s = "absolute" === i, n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, a = this.parents().filter(function () {
				var e = t(this);
				return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
			}).eq(0);
			return "fixed" !== i && a.length ? a : t(this[0].ownerDocument || document)
		},
		uniqueId      : function () {
			var t = 0;
			return function () {return this.each(function () {this.id || (this.id = "ui-id-" + ++t)})}
		}(),
		removeUniqueId: function () {return this.each(function () {/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")})}
	}), t.extend(t.expr[":"], {
		data     : t.expr.createPseudo ? t.expr.createPseudo(function (e) {return function (i) {return !!t.data(i, e)}}) : function (e, i, s) {return !!t.data(e, s[3])},
		focusable: function (i) {return e(i, !isNaN(t.attr(i, "tabindex")))},
		tabbable : function (i) {
			var s = t.attr(i, "tabindex"), n = isNaN(s);
			return (n || s >= 0) && e(i, !n)
		}
	}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (e, i) {
		function s(e, i, s, a) {return t.each(n, function () {i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), a && (i -= parseFloat(t.css(e, "margin" + this)) || 0)}), i}

		var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], a = i.toLowerCase(), o = {
			innerWidth : t.fn.innerWidth,
			innerHeight: t.fn.innerHeight,
			outerWidth : t.fn.outerWidth,
			outerHeight: t.fn.outerHeight
		};
		t.fn["inner" + i] = function (e) {return void 0 === e ? o["inner" + i].call(this) : this.each(function () {t(this).css(a, s(this, e) + "px")})}, t.fn["outer" + i] = function (e, n) {return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function () {t(this).css(a, s(this, e, !0, n) + "px")})}
	}), t.fn.addBack || (t.fn.addBack = function (t) {return this.add(null == t ? this.prevObject : this.prevObject.filter(t))}), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {return function (i) {return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)}}(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
		focus           : function (e) {
			return function (i, s) {
				return "number" == typeof i ? this.each(function () {
					var e = this;
					setTimeout(function () {t(e).focus(), s && s.call(e)}, i)
				}) : e.apply(this, arguments)
			}
		}(t.fn.focus),
		disableSelection: function () {
			var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function () {return this.bind(t + ".ui-disableSelection", function (t) {t.preventDefault()})}
		}(),
		enableSelection : function () {return this.unbind(".ui-disableSelection")},
		zIndex          : function (e) {
			if (void 0 !== e)return this.css("zIndex", e);
			if (this.length)for (var i, s, n = t(this[0]); n.length && n[0] !== document;) {
				if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s))return s;
				n = n.parent()
			}
			return 0
		}
	}), t.ui.plugin = {
		add    : function (e, i, s) {
			var n, a = t.ui[e].prototype;
			for (n in s)a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
		}, call: function (t, e, i, s) {
			var n, a = t.plugins[e];
			if (a && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))for (n = 0; a.length > n; n++)t.options[a[n][0]] && a[n][1].apply(t.element, i)
		}
	};
	var s = 0, n = Array.prototype.slice;
	t.cleanData = function (e) {
		return function (i) {
			var s, n, a;
			for (a = 0; null != (n = i[a]); a++)try {
				s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
			}
			catch (o) {
			}
			e(i)
		}
	}(t.cleanData), t.widget = function (e, i, s) {
		var n, a, o, r, h = {}, l = e.split(".")[0];
		return e = e.split(".")[1], n = l + "-" + e, s || (s = i, i = t.Widget), t.expr[":"][n.toLowerCase()] = function (e) {return !!t.data(e, n)}, t[l] = t[l] || {}, a = t[l][e], o = t[l][e] = function (t, e) {return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)}, t.extend(o, a, {
			version           : s.version,
			_proto            : t.extend({}, s),
			_childConstructors: []
		}), r = new i, r.options = t.widget.extend({}, r.options), t.each(s, function (e, s) {
			return t.isFunction(s) ? (h[e] = function () {
				var t = function () {return i.prototype[e].apply(this, arguments)}, n = function (t) {return i.prototype[e].apply(this, t)};
				return function () {
					var e, i = this._super, a = this._superApply;
					return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = a, e
				}
			}(), void 0) : (h[e] = s, void 0)
		}), o.prototype = t.widget.extend(r, {widgetEventPrefix: a ? r.widgetEventPrefix || e : e}, h, {
			constructor   : o,
			namespace     : l,
			widgetName    : e,
			widgetFullName: n
		}), a ? (t.each(a._childConstructors, function (e, i) {
			var s = i.prototype;
			t.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete a._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
	}, t.widget.extend = function (e) {
		for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)for (i in a[o])s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
		return e
	}, t.widget.bridge = function (e, i) {
		var s = i.prototype.widgetFullName || e;
		t.fn[e] = function (a) {
			var o = "string" == typeof a, r = n.call(arguments, 1), h = this;
			return o ? this.each(function () {
				var i, n = t.data(this, s);
				return "instance" === a ? (h = n, !1) : n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + a + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + a + "'")
			}) : (r.length && (a = t.widget.extend.apply(null, [a].concat(r))), this.each(function () {
				var e = t.data(this, s);
				e ? (e.option(a || {}), e._init && e._init()) : t.data(this, s, new i(a, this))
			})), h
		}
	}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
		widgetName         : "widget",
		widgetEventPrefix  : "",
		defaultElement     : "<div>",
		options            : {
			disabled: !1,
			create  : null
		},
		_createWidget      : function (e, i) {i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {remove: function (t) {t.target === i && this.destroy()}}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()},
		_getCreateOptions  : t.noop,
		_getCreateEventData: t.noop,
		_create            : t.noop,
		_init              : t.noop,
		destroy            : function () {this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")},
		_destroy           : t.noop,
		widget             : function () {return this.element},
		option             : function (e, i) {
			var s, n, a, o = e;
			if (0 === arguments.length)return t.widget.extend({}, this.options);
			if ("string" == typeof e)if (o = {}, s = e.split("."), e = s.shift(), s.length) {
				for (n = o[e] = t.widget.extend({}, this.options[e]), a = 0; s.length - 1 > a; a++)n[s[a]] = n[s[a]] || {}, n = n[s[a]];
				if (e = s.pop(), 1 === arguments.length)return void 0 === n[e] ? null : n[e];
				n[e] = i
			}
			else {
				if (1 === arguments.length)return void 0 === this.options[e] ? null : this.options[e];
				o[e] = i
			}
			return this._setOptions(o), this
		},
		_setOptions        : function (t) {
			var e;
			for (e in t)this._setOption(e, t[e]);
			return this
		},
		_setOption         : function (t, e) {return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this},
		enable             : function () {return this._setOptions({disabled: !1})},
		disable            : function () {return this._setOptions({disabled: !0})},
		_on                : function (e, i, s) {
			var n, a = this;
			"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, o) {
				function r() {return e || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0}

				"string" != typeof o && (r.guid = o.guid = o.guid || r.guid || t.guid++);
				var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + a.eventNamespace, u = h[2];
				u ? n.delegate(u, l, r) : i.bind(l, r)
			})
		},
		_off               : function (e, i) {i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())},
		_delay             : function (t, e) {
			function i() {return ("string" == typeof t ? s[t] : t).apply(s, arguments)}

			var s = this;
			return setTimeout(i, e || 0)
		},
		_hoverable         : function (e) {
			this.hoverable = this.hoverable.add(e), this._on(e, {
				mouseenter: function (e) {t(e.currentTarget).addClass("ui-state-hover")},
				mouseleave: function (e) {t(e.currentTarget).removeClass("ui-state-hover")}
			})
		},
		_focusable         : function (e) {
			this.focusable = this.focusable.add(e), this._on(e, {
				focusin : function (e) {t(e.currentTarget).addClass("ui-state-focus")},
				focusout: function (e) {t(e.currentTarget).removeClass("ui-state-focus")}
			})
		},
		_trigger           : function (e, i, s) {
			var n, a, o = this.options[e];
			if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], a = i.originalEvent)for (n in a)n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(t.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, t.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (e, i) {
		t.Widget.prototype["_" + e] = function (s, n, a) {
			"string" == typeof n && (n = {effect: n});
			var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
			n = n || {}, "number" == typeof n && (n = {duration: n}), o = !t.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {t(this)[e](), a && a.call(s[0]), i()})
		}
	}), t.widget;
	var a = !1;
	t(document).mouseup(function () {a = !1}), t.widget("ui.mouse", {
		version          : "1.11.4",
		options          : {
			cancel  : "input,textarea,button,select,option",
			distance: 1,
			delay   : 0
		},
		_mouseInit       : function () {
			var e = this;
			this.element.bind("mousedown." + this.widgetName, function (t) {return e._mouseDown(t)}).bind("click." + this.widgetName, function (i) {return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0}), this.started = !1
		},
		_mouseDestroy    : function () {this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)},
		_mouseDown       : function (e) {
			if (!a) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
				var i = this, s = 1 === e.which, n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
				return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {i.mouseDelayMet = !0}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {return i._mouseMove(t)}, this._mouseUpDelegate = function (t) {return i._mouseUp(t)}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), a = !0, !0)) : !0
			}
		},
		_mouseMove       : function (e) {
			if (this._mouseMoved) {
				if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button)return this._mouseUp(e);
				if (!e.which)return this._mouseUp(e)
			}
			return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp         : function (e) {return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), a = !1, !1},
		_mouseDistanceMet: function (t) {return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance},
		_mouseDelayMet   : function () {return this.mouseDelayMet},
		_mouseStart      : function () {},
		_mouseDrag       : function () {},
		_mouseStop       : function () {},
		_mouseCapture    : function () {return !0}
	}), t.widget("ui.sortable", t.ui.mouse, {
		version                    : "1.11.4",
		widgetEventPrefix          : "sort",
		ready                      : !1,
		options                    : {
			appendTo            : "parent",
			axis                : !1,
			connectWith         : !1,
			containment         : !1,
			cursor              : "auto",
			cursorAt            : !1,
			dropOnEmpty         : !0,
			forcePlaceholderSize: !1,
			forceHelperSize     : !1,
			grid                : !1,
			handle              : !1,
			helper              : "original",
			items               : "> *",
			opacity             : !1,
			placeholder         : !1,
			revert              : !1,
			scroll              : !0,
			scrollSensitivity   : 20,
			scrollSpeed         : 20,
			scope               : "default",
			tolerance           : "intersect",
			zIndex              : 1e3,
			activate            : null,
			beforeStop          : null,
			change              : null,
			deactivate          : null,
			out                 : null,
			over                : null,
			receive             : null,
			remove              : null,
			sort                : null,
			start               : null,
			stop                : null,
			update              : null
		},
		_isOverAxis                : function (t, e, i) {return t >= e && e + i > t},
		_isFloating                : function (t) {return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))},
		_create                    : function () {this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0},
		_setOption                 : function (t, e) {this._super(t, e), "handle" === t && this._setHandleClassName()},
		_setHandleClassName        : function () {this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function () {(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")})},
		_destroy                   : function () {
			this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--)this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_mouseCapture              : function (e, i) {
			var s = null, n = !1, a = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {return t.data(this, a.widgetName + "-item") === a ? (s = t(this), !1) : void 0}), t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {this === e.target && (n = !0)}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart                : function (e, i, s) {
			var n, a, o = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
						top : this.offset.top - this.margins.top,
						left: this.offset.left - this.margins.left
					}, t.extend(this.offset, {
						click   : {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
						parent  : this._getParentOffset(),
						relative: this._getRelativeOffset()
					}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
						prev  : this.currentItem.prev()[0],
						parent: this.currentItem.parent()[0]
					}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)for (n = this.containers.length - 1; n >= 0; n--)this.containers[n]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag                 : function (e) {
			var i, s, n, a, o = this.options, r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), e.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
				if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))break;
				this._rearrange(e, s), this._trigger("change", e, this._uiHash());
				break
			}
			return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop                 : function (e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this, n = this.placeholder.offset(), a = this.options.axis, o = {};
					a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {s._clear(e)})
				}
				else this._clear(e, i);
				return !1
			}
		},
		cancel                     : function () {
			if (this.dragging) {
				this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper      : null,
				dragging    : !1,
				reverting   : !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize                  : function (e) {
			var i = this._getItemsAsjQuery(e && e.connected), s = [];
			return e = e || {}, t(i).each(function () {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}), !s.length && e.key && s.push(e.key + "="), s.join("&")
		},
		toArray                    : function (e) {
			var i = this._getItemsAsjQuery(e && e.connected), s = [];
			return e = e || {}, i.each(function () {s.push(t(e.item || this).attr(e.attribute || "id") || "")}), s
		},
		_intersectsWith            : function (t) {
			var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, a = t.left, o = a + t.width, r = t.top, h = r + t.height, l = this.offset.click.top, u = this.offset.click.left, c = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + u > a && o > e + u, p = c && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer     : function (t) {
			var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), s = e && i, n = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
			return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
		},
		_intersectsWithSides       : function (t) {
			var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
			return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
		},
		_getDragVerticalDirection  : function () {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function () {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh                    : function (t) {return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this},
		_connectWith               : function () {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery          : function (e) {
			function i() {r.push(this)}

			var s, n, a, o, r = [], h = [], l = this._connectWith();
			if (l && e)for (s = l.length - 1; s >= 0; s--)for (a = t(l[s], this.document[0]), n = a.length - 1; n >= 0; n--)o = t.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
			for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
				options: this.options,
				item   : this.currentItem
			}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)h[s][0].each(i);
			return t(r)
		},
		_removeCurrentsFromItems   : function () {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function (t) {
				for (var i = 0; e.length > i; i++)if (e[i] === t.item[0])return !1;
				return !0
			})
		},
		_refreshItems              : function (e) {
			this.items = [], this.containers = [this];
			var i, s, n, a, o, r, h, l, u = this.items, c = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]], d = this._connectWith();
			if (d && this.ready)for (i = d.length - 1; i >= 0; i--)for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (c.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {item: this.currentItem}) : t(a.options.items, a.element), a]), this.containers.push(a));
			for (i = c.length - 1; i >= 0; i--)for (o = c[i][1], r = c[i][0], s = 0, l = r.length; l > s; s++)h = t(r[s]), h.data(this.widgetName + "-item", o), u.push({
				item    : h,
				instance: o,
				width   : 0,
				height  : 0,
				left    : 0,
				top     : 0
			})
		},
		refreshPositions           : function (e) {
			this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i, s, n, a;
			for (i = this.items.length - 1; i >= 0; i--)s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
			if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);
			else for (i = this.containers.length - 1; i >= 0; i--)a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder         : function (e) {
			e = e || this;
			var i, s = e.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
				element: function () {
					var s = e.currentItem[0].nodeName.toLowerCase(), n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
				},
				update : function (t, n) {(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))}
			}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
		},
		_createTrPlaceholder       : function (e, i) {
			var s = this;
			e.children().each(function () {t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)})
		},
		_contactContainers         : function (e) {
			var i, s, n, a, o, r, h, l, u, c, d = null, p = null;
			for (i = this.containers.length - 1; i >= 0; i--)if (!t.contains(this.currentItem[0], this.containers[i].element[0]))if (this._intersectsWith(this.containers[i].containerCache)) {
				if (d && t.contains(this.containers[i].element[0], d.element[0]))continue;
				d = this.containers[i], p = i
			}
			else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
			if (d)if (1 === this.containers.length)this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
			else {
				for (n = 1e4, a = null, u = d.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", c = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--)t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, e[c] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[c] - h) && (n = Math.abs(e[c] - h), a = this.items[s], this.direction = l ? "up" : "down"));
				if (!a && !this.options.dropOnEmpty)return;
				if (this.currentContainer === this.containers[p])return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
				a ? this._rearrange(e, a, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
			}
		},
		_createHelper              : function (e) {
			var i = this.options, s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
				width   : this.currentItem[0].style.width,
				height  : this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top     : this.currentItem.css("top"),
				left    : this.currentItem.css("left")
			}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
		},
		_adjustOffsetFromHelper    : function (e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top : +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset           : function () {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top : 0,
				left: 0
			}), {
				top : e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset         : function () {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top : t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {top: 0, left: 0}
		},
		_cacheMargins              : function () {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top : parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions    : function () {
			this.helperProportions = {
				width : this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment            : function () {
			var e, i, s, n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo         : function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1, n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, a = /(html|body)/i.test(n[0].tagName);
			return {
				top : i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition          : function (e) {
			var i, s, n = this.options, a = e.pageX, o = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top : o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange                 : function (t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function () {n === this.counter && this.refreshPositions(!s)})
		},
		_clear                     : function (t, e) {
			function i(t, e, i) {return function (s) {i._trigger(t, s, e._uiHash(e))}}

			this.reverting = !1;
			var s, n = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			}
			else this.currentItem.show();
			for (this.fromOutside && !e && n.push(function (t) {this._trigger("receive", t, this._uiHash(this.fromOutside))}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {this._trigger("update", t, this._uiHash())}), this !== this.currentContainer && (e || (n.push(function (t) {this._trigger("remove", t, this._uiHash())}), n.push(function (t) {return function (e) {t._trigger("receive", e, this._uiHash(this))}}.call(this, this.currentContainer)), n.push(function (t) {return function (e) {t._trigger("update", e, this._uiHash(this))}}.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
				for (s = 0; n.length > s; s++)n[s].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !this.cancelHelperRemoval
		},
		_trigger                   : function () {t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()},
		_uiHash                    : function (e) {
			var i = e || this;
			return {
				helper          : i.helper,
				placeholder     : i.placeholder || t([]),
				position        : i.position,
				originalPosition: i.originalPosition,
				offset          : i.positionAbs,
				item            : i.currentItem,
				sender          : e ? e.element : null
			}
		}
	})
});