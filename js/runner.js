// 예외처리
// 에러메시지
const errorMessage = {
  pleaseInput: "값을 입력해주세요!",
  pleaseUseNumber: "숫자만 입력가능합니다!",
};

//공백 에러
function getInputLengthError() {
  const errorResult = [...arguments].some((each) => {
    if (each.length === 0) {
      출력(errorMessage.pleaseInput);
      return true;
    }
  });

  return errorResult;
}

//숫자 에러
function getCheckIsNumber(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return true;
  }
  return false;
}

// 미션코드
function mission1_1() {
  const [입력1] = arguments;
  출력(입력1);
}
// 공백을 넣을 떄 " " <- 이거보단 `${} ${}` 템플릿리터럴이 더 효율적
function mission1_2() {
  const [입력1, 입력2] = arguments;
  const 더하기 = `${입력1} ${입력2}`;
  출력(더하기);
}

function mission1_3() {
  const [입력1, 입력2] = arguments;
  const 곱하기 = "곱하기 결과 입니다 -> " + (입력1 * 입력2).toFixed(1);
  const 나누기 = "나누기 결과 입니다 -> " + (입력1 / 입력2).toFixed(1);
  const 결과 = `${곱하기}<br>${나누기}`;
  출력(결과);
}

function mission2_1() {
  const [입력1, 입력2] = arguments;
  const sum = parseInt(입력1) + parseInt(입력2);
  const div = (입력1 / 입력2).toFixed(2);
  출력(sum + ", " + div);
}

function mission2_2() {
  const [입력1, 입력2] = arguments;
  const [x1, y1] = 입력1.split(",");
  const [x2, y2] = 입력2.split(",");
  const dist1 = (x1 - x2) ** 2;
  const dist2 = (y1 - y2) ** 2;
  const res = Math.sqrt(dist1 + dist2);
  출력(res);
}

function mission2_3() {
  const [입력1, 입력2] = arguments;

  if (isNaN(입력2)) {
    출력("숫자를 입력하세요");
  } else if (입력2 > 100) {
    출력("너무 큰 숫자입니다");
  } else {
    const vol = ((Math.PI * 입력1 ** 2 * 입력2) / 3).toFixed(1);
    res = `반지름이 ${입력1} 이고 높이가 ${입력2}인 원뿔의 부피는 ${vol} 입니다.`;
    출력(res);
  }
}

// Uncaught TypeError: 입력1.toFixed is not a function
// 입력1을 parseInt로 숫자로 바꿔줌
function mission2_4() {
  let [입력1] = arguments;
  입력1 = parseInt(입력1).toFixed();
  const price = 25000 * 0.8;
  let res = price + 2500;

  if (isNaN(입력1)) {
    출력("숫자를 입력하세요");
  } else if (입력1 == 1) {
    출력(res);
  } else {
    res += (입력1 - 1) * 21500;
    출력(res);
  }
}

// const 와 let의 차이
// const -> 재할당 불가능
// let -> 재할당 가능
// 변수에 재할당이 필요할 때 let으로 선언해준다!
