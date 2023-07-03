function Factorial(n) {
  fact = 1;
  for (i = 2; i <= n; i++) fact *= i;
  return fact;
}
function Perm(n, r) {
  perm = n;
  for (i = n - 1; i > n - r; i--) perm *= i;
  return perm;
}
function Comb(n, r) {
  return Perm(n, r) / Factorial(r);
}
function invalidtop(n, r) {
  if (parseInt(n) < 0 || isNaN(parseInt(n))) {
    document.getElementById("n").focus();
    return true;
  } else if (parseInt(r) < 0 || isNaN(parseInt(r))) {
    document.getElementById("r").focus();
    return true;
  }
  return false;
}

function computeAlltop() {
  document.getElementById("resPermutation").innerHTML = "";
  document.getElementById("resCombination").innerHTML = "";
  document.getElementById("resArrangement").innerHTML = "";
  document.getElementById("resSelectrofn").innerHTML = "";
  n = document.getElementById("n").value;
  r = document.getElementById("r").value;
  if (invalidtop(n, r)) return;
  clickPerm();
  clickComb();
  clickArra();
  clickSele();
}

function clickPerm() {
  document.getElementById("resPermutation").innerHTML = "";
  n = document.getElementById("n").value;
  r = document.getElementById("r").value;
  if (invalidtop(n, r)) return;
  document.getElementById("resPermutation").innerHTML = Perm(n, r);
}

function clickComb() {
  document.getElementById("resCombination").innerHTML = "";
  n = document.getElementById("n").value;
  r = document.getElementById("r").value;
  if (invalidtop(n, r)) return;
  document.getElementById("resCombination").innerHTML = Comb(n, r);
}

function clickArra() {
  document.getElementById("resArrangement").innerHTML = "";
  n = document.getElementById("n").value;
  r = document.getElementById("r").value;
  if (invalidtop(n, r)) return;
  document.getElementById("resArrangement").innerHTML = Math.pow(n, r);
}

function clickSele() {
  document.getElementById("resSelectrofn").innerHTML = "";
  n = parseInt(document.getElementById("n").value);
  r = parseInt(document.getElementById("r").value);
  if (invalidtop(n, r)) return;
  document.getElementById("resSelectrofn").innerHTML = Comb(n + r - 1, r);
}

///第二部分開始////////
function computeAllreturn() {
  document.getElementById("resTriangular").innerHTML = "";
  document.getElementById("resHarmonic").innerHTML = "";
  document.getElementById("resFibonacci").innerHTML = "";
  document.getElementById("resLucas").innerHTML = "";
  n = document.getElementById("nreturn").value;
  if (invalidreturn(nreturn)) return;
  clickTriangular();
  clickHarmonic();
  clickFibonacci();
  clickLucas();
  clickCatalan();
}

function invalidreturn(n) {
  if (parseInt(n) < 0) {
    document.getElementById("n").focus();
    return true;
  }
  return false;
}

function clickTriangular() {
  document.getElementById("resTriangular").innerHTML = "";
  n = parseInt(document.getElementById("nreturn").value);
  var result = "";
  for (var i = 1; i <= n; i++) {
    var triangularNumber = (i * (i + 1)) / 2;
    result += triangularNumber + " ";
  }
  document.getElementById("resTriangular").innerHTML = result;
}

function clickHarmonic() {
  document.getElementById("resHarmonic").innerHTML = "";
  n = parseInt(document.getElementById("nreturn").value);
  var result = "";
  var harmonicNumber = 0;
  for (var i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
    result +=
      harmonicNumber % 1 === 0
        ? harmonicNumber.toFixed(0)
        : harmonicNumber.toFixed(2);
    result += " ";
  }
  document.getElementById("resHarmonic").innerHTML = result;
}

function clickFibonacci() {
  document.getElementById("resFibonacci").innerHTML = "";
  n = parseInt(document.getElementById("nreturn").value);

  var result = "";
  var fibArray = [0, 1]; // 費波那契數列的起始值

  if (n >= 1) {
    result += fibArray[0] + " ";
  }
  if (n >= 2) {
    result += fibArray[1] + " ";
  }

  for (var i = 2; i < n; i++) {
    var fibNumber = fibArray[i - 1] + fibArray[i - 2];
    result += fibNumber + " ";
    fibArray.push(fibNumber);
  }

  document.getElementById("resFibonacci").innerHTML = result;
}

function clickLucas() {
  document.getElementById("resLucas").innerHTML = "";
  n = parseInt(document.getElementById("nreturn").value);

  var result = "";
  var lucasArray = [2, 1]; // 盧卡斯數列的起始值

  if (n >= 1) {
    result += lucasArray[0] + " ";
  }
  if (n >= 2) {
    result += lucasArray[1] + " ";
  }

  for (var i = 2; i < n; i++) {
    var lucasNumber = lucasArray[i - 1] + lucasArray[i - 2];
    result += lucasNumber + " ";
    lucasArray.push(lucasNumber);
  }

  document.getElementById("resLucas").innerHTML = result;
}

function clickCatalan() {
  document.getElementById("resCatalan").innerHTML = "";
  n = parseInt(document.getElementById("nreturn").value);

  var result = "";
  for (var i = 1; i <= n; i++) {
    result += catalan(i) + " ";
  }

  document.getElementById("resCatalan").innerHTML = result;
}

function catalan(n) {
  if (n === 0) {
    return 1;
  }

  var catalanNumber = 0;
  for (var i = 0; i < n; i++) {
    catalanNumber += catalan(i) * catalan(n - i - 1);
  }

  return catalanNumber;
}
///第二部分結束////

///弟三部分開始/////
function clickEulerian() {
  var m = parseInt(document.getElementById("mValue").value);
  var k = parseInt(document.getElementById("kValue").value);

  var eulerianNumber = calculateEulerianNumber(m, k);

  // Display the result
  document.getElementById("resEulerian").textContent = eulerianNumber;
}

function calculateEulerianNumber(n, k) {
  // Base case: E(n, 0) = 1 for all n >= 0
  if (k === 0) {
    return 1;
  }

  // Base case: E(0, k) = 0 for all k > 0
  if (n === 0 && k > 0) {
    return 0;
  }

  // Recursive calculation using the Eulerian number formula
  return (
    (n - k) * calculateEulerianNumber(n - 1, k - 1) +
    (k + 1) * calculateEulerianNumber(n - 1, k)
  );
}
/////弟三部分結束//////

/////弟四部份開始///////
function clickStirlingNumberSecondKind() {
  var m = parseInt(document.getElementById("mfour").value);
  var n = parseInt(document.getElementById("nfour").value);

  if (m === 0 && n === 0) {
    return 1;
  } else if (m === 0 || n === 0) {
    return 0;
  } else {
    var dp = new Array(m + 1);
    for (var i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0);
    }

    dp[0][0] = 1;

    for (var i = 1; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
        dp[i][j] = j * dp[i - 1][j] + dp[i - 1][j - 1];
      }
    }

    document.getElementById("resStirling").innerHTML = dp[m][n];
  }
}
///弟四部分結束/////
