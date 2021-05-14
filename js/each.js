$(document).ready(function () {
  $("li")
    .each(function (index) {
      $(this).attr("data-index", index + 1);
    })
    .click(function () {
      var i = $(this).attr("data-index");
      document.write("클릭한 인덱스 순서는" + i + "입니다");
    });

  //   *each(function(){})
  //   =>each함수 안에 있는 내용을 반복함

  //   *index
  //   =>인덱스 순서라고 하며 0부터 시작함
}); //end
