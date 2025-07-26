//  const userInput = document.querySelector(".date");
//         userInput.max = new Date().toISOString().split("T")[0];
//         const result = document.querySelector(".result");

//         function CalculateAge() {
//             const birthdate = new Date(userInput.value);

//             const d1 = birthdate.getDate();
//             const m1 = birthdate.getMonth() + 1;
//             const y1 = birthdate.getFullYear();

//             const today = new Date();

//             const d2 = today.getDate();
//             const m2 = today.getMonth() + 1;
//             const y2 = today.getFullYear();

//             let d3, m3, y3;

//             y3 = y2 - y1;

//             if (m2 >= m1) {
//                 m3 = m2 - m1;
//             } else {
//                 y3--;
//                 m3 = 12 + m2 - m1;
//             }

//             if (d2 >= d1) {
//                 d3 = d2 - d1;
//             } else {
//                 m3--;
//                 d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
//             }

//             if (m3 < 0) {
//                 m3 = 11;
//                 y3--;
//             }
//             result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
//         }
//         function getDaysInMonth(year, month) {
//             return new Date(year, month + 1, 0).getDate();
//         }