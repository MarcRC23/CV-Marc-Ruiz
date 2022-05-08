if (!Modernizr.adownload) {
    var $link = $('a');

    $link.each(function() {
        var $download = $(this).attr('pdfdescargar');

        if (typeof $download !== typeof undefined && $download !== false) {
            var $el = $('<div>').addClass('DOWNLOAD').text('DOWNLOAD');
            $el.insertAfter($(this));
        }

    });
}