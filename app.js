//                     CHAPTER 14 TO 16


// QUESTION NO:1  Declare an empty array using JS literal notation to store student names in future

// ANSWER:

// var a=[];

// QUESTION NO:2 Declare an empty array using JS object notation to store student names in future.

// ANSWER:

// var b=new Array();

// QUESTION NO: 3 Declare and initialize a strings array.

// ANSWER:

// var a=["zain","arreba","java script"];


// QUESTION NO: 4 Declare and initialize a number array.

// ANSWER:

// var b=[12,546,762];


// QUESTION NO: 5 Declare and initialize a boolean array.

// ANSWER:

// var b=[true,false,false,true];


// QUESTION NO: 6 Declare and initialize a mixed array.

// ANSWER:

// var b=["zain",8900,true,"javascript "];


// QUESTION NO: 7 Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// ANSWER:

// var qualification=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write(qualification[0]+"<br>");
// document.write(qualification[1]+"<br>");
// document.write(qualification[2]+"<br>");
// document.write(qualification[3]+"<br>");
// document.write(qualification[4]+"<br>");
// document.write(qualification[5]+"<br>");
// document.write(qualification[6]+"<br>");
// document.write(qualification[7]+"<br>");

// QUESTION NO: 8 Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// ANSWER:

// var names=["zain","areeba","maryam"];
// var marks=[320,230,480];
// var total_marks=500;
// var percenatage_1=(320*100)/500;
// var percenatage_2=(230*100)/500;
// var percenatage_3=(480*100)/500;
// document.write("score of "+names[0]+" is "+marks[0]+" percenatage :"+percenatage_1+"%"+"<br>");
// document.write("score of "+names[1]+" is "+marks[1]+" percentage :"+percenatage_2+"%"+"<br>");
// document.write("score of "+names[2]+" is "+marks[2]+" percentage :"+percenatage_3+"%"+"<br>");

// QUESTION NO:9 Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.c. Add two more color to the beginning of the array.Display the updated array in your browser.d. Delete the first color in the array. Display the updatedarray in your browser.e. Delete the last color in the array. Display the updated array in your browser.f. Ask the user at which index he/she wants to add a color& color name. Then add the color to desiredposition/index. . Display the updated array in your browser. g. Ask the user at which index he/she wants to deletecolor(s) & how many colors he/she wants to delete. Thenremove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// ANSWER:

// var color_names=["black ","green","yellow","red"];
// document.write("the array is "+color_names+"<br>");
// var name_of_color_to_enter_beginning=prompt("enter the color name to add at beginning ");
// color_names.unshift(name_of_color_to_enter_beginning);
// document.write("after adding the enter color at beginning the array is :"+color_names+"<br>");
// var name_of_color_to_enter_end=prompt("enter the color name to add at end");
// color_names.push(name_of_color_to_enter_end);
// document.write("after adding the enter color at beginning the array is :"+color_names+"<br>");
// var color1=prompt("enter the color1 name ");
// var color2=prompt("enter the color2 name ");
// color_names.unshift(color1,color2);
// document.write("after adding the values the array became :"+color_names+"<br>");
// color_names.shift();
// document.write("after deleting from beginning the array is :"+color_names+"<br>");
// color_names.pop();
// document.write("after deleting from last the array is :"+color_names+"<br>");
// var index1=prompt("enter the index no to add the color");
// var color3=prompt("enter the color name ");
// color_names[index1]=color3;
// document.write("the arrays is  :"+color_names+"<br>");
// var index2=prompt("enter the index no to delete the color");
// var quantity=prompt("how many to delete ");
// color_names.splice(index2,quantity);
// document.write("the final array  is  :"+color_names+"<br>");

// QUESTION NO: 10 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// ANSWER:

// var scores=[320,230,480,120];
// scores.sort();
// document.write("the sorted array is "+scores);

// QUESTION NO:11 Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// ANSWER:

// var cities_name=["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
// document.write("cities is : "+"<br>");
// document.write(cities_name+"<br>"+"<br>"+"<br>"+"<br>"+"<br>");
// document.write("selected cities is : "+"<br>");
// document.write("the array is "+cities_name.slice(2,4));

// QUESTION NO:12  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// ANSWER:

// var a=["This","is","a","Cat"];
// document.write("array is"+"<br>"+a+"<br>"+"<br>"+"<br>");
// var c=a.join(" ");
// document.write("string :"+"<br>"+c);

// QUESTION NO:13 Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// ANSWER:

// var a=[];
// a[0]="keyboard";
// a[1]="mouse";
// a[2]="printer";
// a[3]="monitor";
// document.write("Devices:"+"<br>"+a+"<br>"+"<br>");
// var i;
// for(i=0;i<a.length;i++){
//     document.write("out:"+"<br>"+a[i]+"<br>");
// }

// QUESTION NO: 14  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

// ANSWER:

// var a=[];
// a[0]="keyboard";
// a[1]="mouse";
// a[2]="printer";
// a[3]="monitor";
// document.write("Devices:"+"<br>"+a+"<br>"+"<br>");
// var i;
// b=a.length-1;
// for(i=b;i>=0;i--){
//     document.write("out:"+"<br>"+a[i]+"<br>");
// }

// QUESTION NO: 15  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method

// ANSWER:

var a=["Apple","Samsung", "Motorola", "Nokia", "Sony "," Haier"];
document.write("<select><option>"+a[0]+"</option><option>"+a[1]+"</option><option>"+a[2]+"</option><option>"+a[3]+"</option><option>"+a[4]+"</option><option>"+a[5]+"</option></select>");




















