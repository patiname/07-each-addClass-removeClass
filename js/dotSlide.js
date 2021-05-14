$(document).ready(function () {
  $(".btn")
    .each(function (index) {
      $(this).attr("data-btn", index);
    })
    .click(function () {
      var num = $(this).attr("data-btn");
      //=>내가 클릭한 버튼 인덱스 순서를 저장함
      $(".img_wrap").animate({
        left: -600 * num,
      });
    });
}); //end
