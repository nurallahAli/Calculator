let Par = document.createElement("div");
let Inp =  document.createElement("input");
document.body.appendChild(Par);
Par.className = "parent";
Par.appendChild(Inp);
Inp.id = "calc";
Inp.setAttribute("type", "text");
Inp.setAttribute("placeholder", "0");
let boD = document.querySelector("body");
let Bo = document.querySelector("*");
boD.style.cssText = "display: flex;justify-content: center;align-items: center;height: 100vh;background-color: #444;";
Bo.style.cssText = "-webkit-box-sizing: border-box; padding: 0;margin: 0;";   
let Inpp = document.querySelector("input");
console.log(Inpp);
Inpp.style.cssText = "width: 210px;border: none;height: 100px;outline: none;text-align: end;padding: 0 15px;font-size: 35px;font-family: monospace;";
// ###################################################################################################################
let Cal = document.createElement("div");
Par.appendChild(Cal);
Cal.className = "calculator";
let dCalC = document.querySelector(".calculator");
dCalC.style.cssText = "display: grid;grid-template-columns: repeat(4, 60px);";
let Bot1 = document.createElement("button");
let Bot2 = document.createElement("button");
let Bot3 = document.createElement("button");
let Bot4 = document.createElement("button");
let Bot5 = document.createElement("button");
let Bot6 = document.createElement("button");
let Bot7 = document.createElement("button");
let Bot8 = document.createElement("button");
let Bot9 = document.createElement("button");
let Bot10 = document.createElement("button");
let Bot11 = document.createElement("button");
let Bot12 = document.createElement("button");
let Bot13 = document.createElement("button");
let Bot14 = document.createElement("button");
let Bot15 = document.createElement("button");
let Bot16 = document.createElement("button");
let Bot17 = document.createElement("button"); 
let Bot18 = document.createElement("button"); 
let Bot19 = document.createElement("button"); 
Bot1.className = "btn1";
Bot2.className = "btn2";
Bot3.className = "btn3";
Bot4.className = "btn4";
Bot5.className = "btn5";
Bot6.className = "btn6";
Bot7.className = "btn7";
Bot8.className = "btn8";
Bot9.className = "btn9";
Bot10.className = "btn10";
Bot11.className = "btn11";
Bot12.className = "btn12";
Bot13.className = "btn13";
Bot14.className = "btn14";
Bot15.className = "btn15";
Bot16.className = "btn16";
Bot17.className = "btn17";
Bot18.className = "btn18";
Bot19.className = "btn19";
Cal.appendChild(Bot1);
Cal.appendChild(Bot2);
Cal.appendChild(Bot3);
Cal.appendChild(Bot4);
Cal.appendChild(Bot5);
Cal.appendChild(Bot6);
Cal.appendChild(Bot7);
Cal.appendChild(Bot8);
Cal.appendChild(Bot9);
Cal.appendChild(Bot10);
Cal.appendChild(Bot11);
Cal.appendChild(Bot12);
Cal.appendChild(Bot13);
Cal.appendChild(Bot14);
Cal.appendChild(Bot15);
Cal.appendChild(Bot16);
Cal.appendChild(Bot17);
Cal.appendChild(Bot18);
Cal.appendChild(Bot19);
Bot1.textContent = "Cl";
Bot2.textContent = "Del";
Bot3.textContent = "%";
Bot4.textContent = "/";
Bot5.textContent = "7";
Bot6.textContent = "8";
Bot7.textContent = "9";
Bot8.textContent = "*";
Bot9.textContent = "4";
Bot10.textContent = "5";
Bot11.textContent = "6";
Bot12.textContent = "-";
Bot13.textContent = "1";
Bot14.textContent = "3";
Bot15.textContent = "4";
Bot16.textContent = "+";
Bot17.textContent = "0";
Bot18.textContent = ".";
Bot19.textContent = "=";

Bot1.setAttribute("onclick", "Clear()");
Bot2.setAttribute("onclick", "Delete()");
Bot3.setAttribute("onclick", "display('%')");
Bot4.setAttribute("onclick", "display('/')");
Bot5.setAttribute("onclick", "display('7')");
Bot6.setAttribute("onclick", "display('8')");
Bot7.setAttribute("onclick", "display('9')");
Bot8.setAttribute("onclick", "display('*')");
Bot9.setAttribute("onclick", "display('4')");
Bot10.setAttribute("onclick", "display('5')");
Bot11.setAttribute("onclick", "display('6')");
Bot12.setAttribute("onclick", "display('-')");
Bot13.setAttribute("onclick", "display('1')");
Bot14.setAttribute("onclick", "display('2')");
Bot15.setAttribute("onclick", "display('3')");
Bot16.setAttribute("onclick", "display('+')");
Bot17.setAttribute("onclick", "display('0')");
Bot18.setAttribute("onclick", "display('.')");
Bot19.setAttribute("onclick", "Equals('=')");
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let button3 = document.querySelector(".btn3");
let button4 = document.querySelector(".btn4");
let button5 = document.querySelector(".btn5");
let button6 = document.querySelector(".btn6");
let button7 = document.querySelector(".btn7");
let button8 = document.querySelector(".btn8");
let button9 = document.querySelector(".btn9");
let button10 = document.querySelector(".btn10");
let button11 = document.querySelector(".btn11");
let button12 = document.querySelector(".btn12");
let button13 = document.querySelector(".btn13");
let button14 = document.querySelector(".btn14");
let button15 = document.querySelector(".btn15");
let button16 = document.querySelector(".btn16");
let button17 = document.querySelector(".btn17");
let button18 = document.querySelector(".btn18");
let button19 = document.querySelector(".btn19");
button1.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #19c8fa;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button2.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button3.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button4.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button5.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button6.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button7.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button8.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button9.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button10.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button11.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button12.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button13.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button14.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button15.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button16.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button17.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button18.style.cssText = "width: 60px;height: 60px;border: none;outline: none;background-color: #252525;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
button19.style.cssText = "width: 120px;height: 60px;border: none;outline: none;background-color: red;font-size: 20px;color: #ccc;padding: 10px;font-family: monospace;";
// ################################################################################################################################################################################
let outPut = document.getElementById("calc");

function display(num) {
    outPut.value += num;
};
function Clear() {
    outPut.value = "";
};
function Delete() {
    outPut.value = outPut.value.slice(0, -1);
};
function Equals() {
  try{
    outPut.value = eval(outPut.value)
  }catch(err){
    outPut.value = "Error"
  }
};










// // create element
// let header = document.createElement("header");
// let logo = document.createElement("logo");
// let menu = document.createElement("menu");
// let content = document.createElement("content");
// let footer = document.createElement("footer");

// // create classes

// header.className = "webite-head";
// logo.className = "logo";
// menu.className = "menu";
// content.className = "content";
// footer.className = "footer";

// // add to page

// document.body.appendChild(header) ;
// document.body.appendChild(content);
// document.body.appendChild(footer) ;
// header.appendChild(logo) ;
// header.appendChild(menu) ;
// // loop for menu and content
// for(i = 1;i <= 15; i++){
//   if(i <= 4){
//     let menuList = document.createElement("li");
//     menuList.className = `menu-list-${i}`;
//     menu.appendChild(menuList);
//   };
//   let prodBox = document.createElement("div");
//   let prodNum = document.createElement("span");
//   prodBox.className = "product";
//   prodBox.textContent = "product";
//   prodBox.prepend(prodNum);
//   prodNum.textContent = `${i}`;
//   content.appendChild(prodBox);
// }



