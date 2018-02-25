// document.addEventListener('keydown', function(event) {
//     if (event.ctrlKey) {
//         // Toggle the background grid display
//           var layout = document.getElementById('layout')
//           if (layout.classList.contains('off')) {
//            layout.classList.remove('off');
//            layout.classList.add('on');
//           } else {
//             layout.classList.remove('on');
//             layout.classList.add('off');
//           }
//     }
// });

// Adds fadeOut and fadeIn to Zepto
$(document).ready(function() {
    (function($) {
        $.extend($.fn, {
            fadeIn: function(ms) {
                if (typeof(ms) === 'undefined') ms = 500;

                $(this).css({
                    display: 'block',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, ms);

                return this;
            },

            fadeOut: function(ms) {
                if (typeof(ms) === 'undefined') ms = 500;

                $(this).css({
                    opacity: 1
                }).animate({
                    opacity: 0
                }, ms, 'linear', function() {
                    $(this).css('display', 'none');
                });

                return this;
            }
        })
    })(Zepto)
});
