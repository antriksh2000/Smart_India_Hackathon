{/* <input type="text" id="txtAadhar" onblur="AadharValidate();" /> */}
let form = document.getElementById("form");
let aadhar = document.getElementById("Aadhar").value;

// function AadharValidate(e) {
//         var adharcardTwelveDigit = /^\d{12}$/;
//         var adharSixteenDigit = /^\d{16}$/;
//         if (aadhar != '') {
//             if (aadhar.match(adharcardTwelveDigit)) {
//                 return true;
//             }
//             else if (aadhar.match(adharSixteenDigit)) {
//                 return true;
//             }
//             else {
//                 e.preventDefault();
//                 alert("Enter valid Aadhar Number");
//                 btn.disabled = true;
//                 return false;
//             }
//         }
//     }
 const d = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
        [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
        [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
        [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
        [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
        [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
        [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
        [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
      ];

      // permutation table
      const p = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
        [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
        [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
        [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
        [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
      ];

      // validates Aadhar number received as string
      function validate(aadharNumber) {
        let c = 0;
        let invertedArray = aadharNumber.split("").map(Number).reverse();

        invertedArray.forEach((val, i) => {
          c = d[c][p[i % 8][val]];
        });

        return c === 0;
      }

      function AadharValidate() {
        var message = document.getElementById("message");
        var aadharNo = document.getElementById("exampleInputAadharCard").value;
        if (validate(aadharNo)) {
          message.innerHTML = "Your aadhar card no. valid";
        } else {
          message.innerHTML = "Your aadhar card no. not valid";
        }
      }

    aadhar.addEventListener("submit", AadharValidate);
