(function($) {

	$.fn.fancybox = function() {
		var $link = this;
		var $body = $('body');
		var $modal;
		var $overlay;

		function showModal(e) {

			e.preventDefault();

			var href = $link.attr('href');
			$modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>');
			$overlay = $('<div class="fancybox-overlay"></div>')

			$body.append($modal);
			$body.append($overlay);
			$overlay.one('click', hideModal)

		};

		function hideModal() {

			$modal.remove();
			$overlay.hide();

		};

		$link.on('click', showModal);

		return this;
	}

})(jQuery);