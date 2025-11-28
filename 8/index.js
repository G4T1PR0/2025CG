// main.js
function primeFactorization() {
    let input = document.getElementById("numberInput").value;
    let number;

    document.getElementById("calcProcess").innerText = "";
    document.getElementById("result").innerText = "";

    try {
        number = BigInt(input);
    } catch (e) {
        alert("有効な整数を入力してください。");
        return;
    }

    if (number <= 0n) {
        alert("正の整数を入力してください。");
        return;
    }

    const factors = [];
    let n = number;

    // 2で割り切れるだけ割る
    while (n % 2n === 0n) {
        document.getElementById("calcProcess").innerText += n + "を2で割りました: " + n / 2n + "\n";
        factors.push(2n);
        n /= 2n;
    }

    // 3以上の奇数で割っていく
    for (let i = 3n; i * i <= n; i += 2n) {
        while (n % i === 0n) {
            document.getElementById("calcProcess").innerText += n + "を" + i + "で割りました" + n / i + "\n";
            factors.push(i);
            n /= i;
        }
    }

    // ループの後にnが2より大きい場合、n自身が素数
    if (n > 2n) {
        factors.push(n);
    }

    document.getElementById("result").innerText = "素因数: " + factors.join(", ");
}
