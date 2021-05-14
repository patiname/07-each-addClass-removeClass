$(document).ready(function () {
  // *오른쪽 버튼을 클릭했을때
  // img_wrap이 옆으로 부드럽게 움직이기

  // *선택자, 클릭이벤트, 애니메이트, 변수

  var i = 0;

  //   $(".right").click(function () {
  //     if (i === 0) {
  //       $(".img_wrap").animate({
  //         left: -600,
  //       });
  //       i++;
  //     } else if (i === 1) {
  //       $(".img_wrap").animate({
  //         left: -1200,
  //       });
  //       i++;
  //     } else if (i === 2) {
  //       $(".img_wrap").animate({
  //         left: 0,
  //       });
  //       i = 0;
  //     }
  //   });

  $(".right").click(function () {
    i++;
    if (i > 2) {
      i = 0;
    }
    $(".img_wrap")
      .stop()
      .animate({
        top: -400 * i,
      });
  });

  //   .stop()
  //   =>애니메이션 동작시 딜레이현상을 막아줌
  //   =>애니메이션과 같이 붙여서 사용하는걸 추천

  $(".left").click(function () {
    i--;
    if (i < 0) {
      i = 2;
    }
    $(".img_wrap")
      .stop()
      .animate({
        top: -400 * i,
      });
  });

  //   setInterval(function () {
  //     $(".right").trigger("click");
  //   }, 1000);

  setInterval(function () {
    i++;
    if (i > 2) {
      i = 0;
    }
    $(".img_wrap")
      .stop()
      .animate({
        top: -400 * i,
      });
  }, 1000);
}); //end
