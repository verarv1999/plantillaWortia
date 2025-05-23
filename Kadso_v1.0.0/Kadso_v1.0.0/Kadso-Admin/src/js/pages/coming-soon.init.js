/*
Template Name: Kadso - Responsive Bootstrap 5 Admin Dashboard
Author: Zoyothemes
Version: 1.0.0
Website: https://zoyothemes.com/
File: Countdown init js
*/


$('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
        $(this).html(event.strftime(''
        + '<div class="coming-box">%D <span>Days</span></div> '
        + '<div class="coming-box">%H <span>Hours</span></div> '
        + '<div class="coming-box">%M <span>Minutes</span></div> '
        + '<div class="coming-box">%S <span>Seconds</span></div> '));
    });
});