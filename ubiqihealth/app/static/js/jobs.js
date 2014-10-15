$(function () {
    $(".job-title").click(function () {
        $(this).parents(".job-item").find('.job-description').toggle();
    });
});