(function($, undefined) {

$.fn.geokbd = function(options) {
	var
	isOn,
	inputs = $([]),
	switchers = $([]),
	defaults = {
		on: true,
		hotkey: '~'
	},
	settings = (typeof options === 'object' ? $.extend({}, defaults, options) : defaults);

	// first come up with affected set of input elements
	this.each(function() {

		var $this = $(this);

		if ($this.is(':text, textarea')) {
			inputs = inputs.add($this);
		} else if ($this.is('form')) {
			inputs = inputs.add($this.find(':text, textarea'));
		} else if ($this.is(':button')) {
			switchers = switchers.add($this);
		}

	});

	// mutate switchers
	switchers
		.click(function() {
			if ($(this).data('switch') === 'on') {
				isOn = true;
				$('.switch').removeClass('active-kbd');
				$(this).addClass('active-kbd');
			}else{
				$('.switch').removeClass('active-kbd');
				$(this).addClass('active-kbd');
				isOn = false;
			}
		});

	toggleLang(isOn = true);

	$(document).keypress(function(e) {

		var ch = String.fromCharCode(e.which), kach;

		if (settings.hotkey === ch) {
			toggleLang();
			e.preventDefault();
		}


		if (!isOn) {
			return;
		}

		kach = translateToKa.call(ch);

		if (ch !== kach) {
			if (navigator.appName.indexOf("Internet Explorer")!=-1) {
				window.event.keyCode = kach.charCodeAt(0);
			} else {
				pasteTo.call(kach, e.target);
				e.preventDefault();
			}
        }
	});

	function toggleLang() {
		isOn = arguments[0] !== undefined ? arguments[0] : !isOn;
		switchers
			.closest('.gk-switcher')[isOn ? 'addClass' : 'removeClass']('gk-on');
	}


	function translateToKa() {
		var index, chr, text = [], symbols = "abgdevzTiklmnopJrstufqRySCcZwWxjh";

		for (var i = 0; i < this.length; i++) {
			chr = this.substr(i, 1);
			if ((index = symbols.indexOf(chr)) >= 0) {
				text.push(String.fromCharCode(index + 4304));
			} else {
				text.push(chr);
			}
		}
		return text.join('');
	}

	function pasteTo(field) {
		field.focus();
		if (document.selection) {
			var range = document.selection.createRange();
			if (range) {
				range.text = this;
			}
		} else if (field.selectionStart !== undefined) {
			var scroll = field.scrollTop, start = field.selectionStart, end = field.selectionEnd;
			var value = field.value.substr(0, start) + this + field.value.substr(end, field.value.length);
			field.value = value;
			field.scrollTop = scroll;
			field.setSelectionRange(start + this.length, start + this.length);
		} else {
			field.value += this;
			field.setSelectionRange(field.value.length, field.value.length);
		}
	}
};

}(jQuery));
