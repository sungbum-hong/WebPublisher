// /////// 타이핑 Js /////// //

const $text = document.querySelector(".text");

// 글자 모음
const letters = ["Developer", "Designer", "Planner"];

// 글자 입력 속도
const speed = 50;
let i = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(500);

  if (i === 2) {
    i = 0;
    await wait(500);
    $text.innerHTML = "";
    typing();
  } else {
    if (letters[i + 1]) remove();
  }
  // 지우는 효과
};

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[i].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    $text.innerHTML = letter.join("");
  }

  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i++;
  typing();
};

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

// 초기 실행
setTimeout(typing, 10);


