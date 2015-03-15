jQuery(function($){
    $(document).on("click", ".sn-scalable", function(e){
        $(".permalink #posts").toggleClass("zooming");
        $(this).toggleClass("zooming");

        $body = $(document.body);
        if ($body.hasClass("ios") || $body.hasClass("android")) {
            if ($(this).hasClass("sn-zooming-image")) {
                $(this).remove();
                return;
            }

            $target = $(this).siblings(".sn-target-image");
            var largeImage = $target.clone();
            largeImage.css({
                position : "absolute",
                top: 0,
                left: 0,
                width: "auto",
                zIndex: 9999
            }).addClass("sn-scalable sn-zooming-image");
            $body.append(largeImage);

            // add noop event for custom browser
            largeImage.on("click", function (e) {});

            var factorX = (largeImage.width() - window.innerWidth) / $target.width();
            var factorY = (largeImage.height() - window.innerHeight) / $target.height();
            window.scrollTo(e.offsetX * factorX, e.offsetY * factorY);
        }
    })
});
