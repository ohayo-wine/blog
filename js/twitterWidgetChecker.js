function changeTwitterWidgetDesign　()　 {
    var $twitter_widget = $('iframe.twitter-timeline');
    var $twitter_widget_contents = $twitter_widget.contents();

    if ($twitter_widget.length > 0 && $twitter_widget[0].contentWindow.document.body.innerHTML !== "") {
        $twitter_widget_contents.find('head').append('<link href="../css/twitterWidget.css" rel="stylesheet" type="text/css">');
    } else {
        setTimeout(function () {
            changeTwitterWidgetDesign();
        }, 350);
    }
}

changeTwitterWidgetDesign();