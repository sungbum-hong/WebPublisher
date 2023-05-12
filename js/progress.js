$(function () {
  // 1. 컨트롤러 생성
  var controller = new ScrollMagic.Controller();

  // 2. 애니메이션 설정
  var bar1 = $("#skill .c-box ul li:nth-child(1) .determinate");
  var bar2 = $("#skill .c-box ul li:nth-child(2) .determinate");
  var bar3 = $("#skill .c-box ul li:nth-child(3) .determinate");
  var bar4 = $("#skill .c-box ul li:nth-child(4) .determinate");

  var bar5 = $("#skill .d-box ul li:nth-child(1) .determinate");
  var bar6 = $("#skill .d-box ul li:nth-child(2) .determinate");
  var bar7 = $("#skill .d-box ul li:nth-child(3) .determinate");
  var tl = new TimelineMax();

  tl.fromTo(bar1, 1, { width: "0%" }, { width: "85%" }, 0.5);
  tl.fromTo(bar2, 1, { width: "0%" }, { width: "85%" }, 1)
    .fromTo(bar3, 1, { width: "0%" }, { width: "30%" }, 1.5)
    .fromTo(bar5, 1, { width: "0%" }, { width: "70%" }, 2.5)
    .fromTo(bar6, 1, { width: "0%" }, { width: "80%" }, 3)
    .fromTo(bar7, 1, { width: "0%" }, { width: "80%" }, 3.5);

  // 3. 장면 설정
  var scene = new ScrollMagic.Scene({
    triggerElement: "#skill",
    triggerHook: 0.5,
  })
    .setTween(tl) // 4. 애니메이션 장면에 연결
    .addTo(controller); // 5. 컨트롤러 연결
});
