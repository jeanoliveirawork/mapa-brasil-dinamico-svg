(function ($) {
	$(function () {
		function moveUpestado(thisObject) {
			thisObject.appendTo(thisObject.parents('svg>g'));
		}

		$('.mapa-svg-estados').click(function () {
			$(this).siblings().removeClass('mapa-svg-estados-active');
			$(this).addClass('mapa-svg-estados-active');
			$('.class-select').val($(this).attr('id')).trigger('change');
			moveUpestado($(this));
		});

		$('.class-select > option').each(function () {
			$(this).addClass($(this).attr('value'));
		});

		$('.class-select').change(function () {
			$('.' + $(this).val() + '-class').siblings().removeClass('mapa-svg-estados-active');
			$('.' + $(this).val() + '-class').addClass('mapa-svg-estados-active');
			moveUpestado($('.' + $(this).val() + '-class'));
		});

	});
})(jQuery);
