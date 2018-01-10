$(function () {
    var timeCircles = $(".someTimer").TimeCircles();

    // Fade in and fade out are examples of how chaining can be done with TimeCircles
    $(".fadeIn").click(function () {
        timeCircles.elements.last().fadeIn();
    });

    $(".fadeOut").click(function () {
        timeCircles.elements.last().fadeOut();
    });

    // Start and stop are methods applied on the public TimeCircles instance
    $(".startTimer").click(function () {
        $(".someTimer").eq(1).TimeCircles().start();
    });

    $(".stopTimer").click(function () {
        $(".someTimer").eq(1).TimeCircles().stop();
    });
});