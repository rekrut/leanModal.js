/**
 *
 * @param   {Object} root
 * @param   {function} factory
 *
 * @returns {Object}
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('jquery'));
    } else {
        factory(root.jQuery);
    }
}(this, function ($) {
    "use strict";

    $.fn.extend({
        leanModal: function (options) {
            var $ovlay = $("#lean_overlay"),
                defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            };

            if (! $ovlay.length) {
                $ovlay = $('<div id="lean_overlay"></div>');
                $("body").append($ovlay);
            }

            options = $.extend(defaults, options);

            return this.each(function () {
                var o = options;

                $(this).click(function (e) {
                    var modal_id = $(this).attr('href');

                    $ovlay.click(function (e) {
                        close_modal(modal_id);
                        e.preventDefault();
                    });

                    $(o.closeButton).click(function (e) {
                        close_modal(modal_id);
                        e.preventDefault();
                    });

                    $ovlay.css({
                        'display': 'block',
                        'opacity': 0
                    }).fadeTo(200, o.overlay);

                    $(modal_id).css({
                        'display': 'block',
                        'position': 'fixed',
                        'opacity': 0,
                        'z-index': 11000,
                        'left': 50 + '%',
                        'margin-left': -($(modal_id).outerWidth(false) / 2) + 'px',
                        'top': o.top + 'px'
                    }).fadeTo(200, 1).trigger('open.leanModal');

                    e.preventDefault();
                });
            });

            function close_modal(modal_id) {
                $ovlay.fadeOut(200);

                $(modal_id).css({
                    'display': 'none'
                }).trigger('close.leanModal');
            }
        }
    });
}));
