// 예외처리
// 에러메시지
const errorMessage = {
  pleaseInput: "값을 입력해주세요!",
  pleaseUseNumber: "숫자만 입력가능합니다!",
  pleaseInputSpecialSymbol: "특수문자를 포함해주세요.",
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
// 공백을 넣을 떄 " " <- 이거보단 `${} ${}` 템플리리터럴이 더 효율적
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
  if (getInputLengthError(...arguments)) return;

  const sum = parseInt(입력1) + parseInt(입력2);
  const div = (입력1 / 입력2).toFixed(2);
  출력(sum + ", " + div);
}

function mission2_2() {
  const [[x1, y1], [x2, y2]] = [...arguments].map((each) =>
    each.split(",").map((e) => Number(e))
  );
  if (getInputLengthError(...arguments)) return;

  const res = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  출력(res);
}

function mission2_3() {
  const [입력1, 입력2] = arguments;
  if (getInputLengthError(...arguments)) return;
  if (getCheckIsNumber(arguments)) return 출력(errorMessage.pleaseUseNumber);

  if (입력2 > 100) {
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

function sum(a, b) {
  return a + b;
}

function powWithSum(number) {
  return Math.pow(number, 2);
}

function mission3_1() {
  const [입력1, 입력2] = [...arguments].map((each) => Number(each));

  const result = powWithSum(sum(입력1, 입력2));
  출력(result);
}

function removeLastChat(입력) {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

  if (!regExp.test(입력)) {
    return errorMessage.pleaseInputSpecialSymbol;
  } else {
    return 입력.slice(0, -1);
  }
}

function mission3_2() {
  const [입력1] = arguments;
  const result = removeLastChat(입력1);
  출력(result);
}

function calculate(반지름, 높이) {
  const 밑면넓이 = 2 * Math.PI * Math.pow(반지름, 2);
  const 측면넓이 = 2 * Math.PI * 반지름 * 높이;
  const 전체넓이 = 밑면넓이 + 측면넓이;

  return 전체넓이;
}

function mission3_3() {
  const [반지름, 높이] = arguments;
  const 넓이 = calculate(반지름, 높이).toFixed(1);

  const result = `반지름 ${반지름}, 높이가 ${높이}인 원통의 넓이는 ${넓이} 입니다.`;
  출력(result);
}

// 연속된 함수 호출과 stack

function from10To2(number) {
  const bin = number.toString(2);
  return from2To8(bin);
}
function from2To8(number) {
  const oct = parseInt(number, 2).toString(8);
  return from8To16(oct);
}
function from8To16(number) {
  const hex = parseInt(number, 8).toString(16);
  return from16To10(hex);
}
function from16To10(number) {
  const dec = parseInt(number, 16).toString(10);
  return dec;
}

function mission4_1() {
  const [입력1] = [...arguments].map((each) => Number(each));

  if (getInputLengthError(...arguments)) return;

  // const 이진수 = 입력1.toString(2);
  // const 팔진수 = parseInt(이진수, 2).toString(8);
  // const 십육진수 = parseInt(팔진수, 8).toString(16);
  // const 십진수 = parseInt(십육진수, 16).toString(10);
  // const programme = `${입력1}을 2진수로 바꾼 수 ${이진수}, 8진수로 바꾼 수 ${팔진수}, 16진수로 바꾼 수 ${십육진수}`;

  const result = from10To2(입력1);
  출력(result);
}

//mission5

function mission5_1() {
  const [num] = [...arguments].map((each) => Number(each));
  if (getInputLengthError(...arguments)) return;

  let even_array = [];
  console.log(even_array);
  console.log("-----------------------------");
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      even_array.push(Math.pow(i, 2));
      console.log(even_array);
    }
  }

  출력(even_array);
}

function mission5_2() {
  const [text] = [...arguments];
  if (getInputLengthError(...arguments)) return;

  let result_array = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] == "_") {
      result_array.push(" ");
    } else if (text[i] == "$" || text[i] == "#") {
      continue;
    } else if (text[i - 1] == "_") {
      result_array.push(text[i].toUpperCase());
    } else {
      result_array.push(text[i]);
    }
  }

  const result_text = result_array.join("");
  출력(result_text);
}

function mission5_3() {
  const [text] = [...arguments];
  if (getInputLengthError(...arguments)) return;

  let result_array = [];
  let i = 0;

  while (i < text.length) {
    if (text[i] == "_") {
      result_array.push(" ");
    } else if (text[i] == "$" || text[i] == "#") {
      continue;
    } else if (text[i - 1] == "_") {
      result_array.push(text[i].toUpperCase());
    } else {
      result_array.push(text[i]);
    }
    i++;
  }

  const result_text = result_array.join("");
  출력(result_text);
}

// mission 6

function mission6_1() {
  let [arr] = arguments;
  // JSON.parse = string객체를 json객체로 변환시켜주는 메소드
  arr = JSON.parse(arr);

  const sumOfArr = arr.reduce((prev, cur) => prev + cur, 0);
  const aver = sumOfArr / arr.length;
  const nums = arr.join("+");
  const result = `결과 ${aver} < (${nums}) / ${arr.length}>`;

  출력(result);
}

function mission6_2() {
  let [arr] = arguments;
  const array = flatten(JSON.parse(arr));

  const sumOfArr = array.reduce((prev, cur) => prev + cur, 0);
  const aver = sumOfArr / array.length;
  const nums = array.join("+");
  const result = `결과 ${aver} < (${nums}) / ${array.length}>`;

  출력(result);
}

//첫번째인자: 배열, 두번째인자: 함수
//반환값 : 새로운 배열
function map(arr, fn) {}

//중첩된 배열을 평탄화해서 반환한다.
//반환값 : 평탄화된 배열
//ex) [1,2,[3,5],5] -> [1,2,3,5,5]
function flatten(arr) {
  let new_array = [].concat.apply([], arr);
  return new_array;
}
// console.log(flatten([1,2,[3,5],5]))

//숫자를 입력받아 소수점을 없애는 함수
//반환값 : 소수점이 제거된 숫자
function runFloor(num) {}

function mission6_3() {
  let [arr] = arguments;
  arr = JSON.parse(arr);
  const flattenedArr = flatten(arr);
  const integerArr = map(flattenedArr, runFloor);
  출력(integerArr);
}
