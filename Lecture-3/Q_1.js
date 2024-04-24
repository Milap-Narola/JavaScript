/*Q.1 If the value stored in N is less than 13, 
print "1 Kms", without quotes﻿﻿﻿Else if the age of the person is greater than or equal to 13,
 but less than 18, print "5 Kms", without quotes﻿﻿﻿Else if the age of the person is greater than or equal to 18, 
 but less than 30, print "10 Kms", without quotes﻿﻿﻿Else print "You can have friends from anywhere", without quotes */

 let n = Number(process.argv[2])
 if (n < 13) {
     console.log("1 kms");
 }
 else if (n >= 13 && n <= 18) {
     console.log("5 Kms");
 }
 else if (n >= 18 && n <= 30) {
     console.log("10 Kms");
 }
 else {
     console.log("You can have friends from anywhere ");
 
 }