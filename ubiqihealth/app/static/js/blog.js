$(function () {
    $('.side-block .small_arrow_icon').click(function () {
        $(this).siblings('.category-entries').toggle();
    });

    $('.col-blog-main').on('click', '.comments-section-toggle', function () {
        $(this).parents('p').siblings('.comments-section').toggle();
        return false;
    });

});
