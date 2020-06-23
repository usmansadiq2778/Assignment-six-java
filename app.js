 
        //   chp 21 - 25 task 1 
        var first_name=prompt("Enter first name");
        var last_name=prompt("Enter last name");
        var fullName;
        fullName=first_name+last_name
       
        document.write(fullName) 

        
        
            //   chp 21 - 25 task 2 
              var a =prompt("Enter your favoright Mobile phone");

              document.write("<h1>My favoright phone is </h1>" + a)
              var b =a.length;
              document.write("<h1>Leangth of String : </h1>" + b)



               // //   chp 21 - 25 task 3

               var a="pakistan";
               var b =a.indexOf('n');
               document.write("<h1> Strings : Pakistani</h1>"+"<h1>Index of N : </h1>");
               document.write(b);
               

             // //   chp 21 - 25 task 4 
               
                
             var a="Hello world";
                var b =a.indexOf('l',6);
                document.write("<h1> Strings Hello world: </h1>"+"<h1>Last  Index of  l: </h1>");
                document.write(b);


                // //   chp 21 - 25 task 5 

            var a="Pakistani"
            b=a[3];
            document.write("<h1>String : Pakistani </h1>" + " <h1>Charecter at Index 3 : </h1>" + b)


    
                    //    chp 21 - 25 task 6 
                       

                    var first_name=prompt("Enter first name");
                    var last_name=prompt("Enter last name");
                    var fullName=first_name.concat(last_name);
                    document.write(fullName)


                  
                        // //    chp 21 - 25 task 7


 var text=" Hyderabad " 
 document.write("<h1> City : Hyederabad</h1>")
 document.write("<h1>After Replacement : </h1>")
 var indxNm=text.indexOf('Hyderabad');
 var firsttext=text.slice(0,indxNm,)
        var replacingtext='<h1>islamabad</h1>'
        var thirdtext=text.slice(indxNm+9)
 document.write(firsttext + replacingtext + thirdtext)



        //  for(var i = 0;i <text.length;i++){
        //      if(text.slice(i,i+9)==="Hyderabad"){
        //           text=text.slice(0,i)+"<h1>islamabad</h1>"+text.slice(i+9);
        //          document.write(text)

        //            }
        //           }




        //                     chp 21 - 25 task 8

                    
     var message = "Ali and Sami are best friends. They play cricket and football together.";
    document.write(message)
     document.write("<h1> Before : and</h1>")
     document.write("<h1>After Replacement : </h1>")
     var replacee=message.replace(/and/g,'&');
     document.write(replacee)
 
         




                        //  chp 21 - 25 task 9

                   
                    var str='555';
                    
                    var b=parseInt(str)
                   
                    document.write("<h1>this is parsint Method USE : </h1>")
                    var typ1=typeof str;
                    document.write("Type Is : "+ typ1 + "<br>" )
                    document.write(b + " <br>")
                    document.write("<h1>this is Number Method USE : </h1>")
                    var num='473'
                   var c=Number(num)

                    document.write(c +"<br>")
                    var typ =typeof b;
                    document.write("Type Is : "+ typ)
         




                    //  chp 21 - 25 task 10

                    var a =prompt("Enter your text");
                     a = a.toUpperCase();
                     document.write(a)




                      // //  chp 21 - 25 task 11
                      
                      var input=prompt("Enter a string");

                      var First_letter=input.slice(0,1);
                      First_letter=First_letter.toUpperCase();
                      var other_letter=input.slice(1)
                      other_letter=other_letter.toLowerCase();
                      var add=First_letter+other_letter;
                      document.write(add)





                    
                   
                      // //  chp 21 - 25 task 12
                    var num =10.55;
                    var b =num.toString()
                    document.write(b)




                       //  chp 21 - 25 task 13
                    
                var username=prompt("Enter your input")
                if(username== '@'||username== '$' ||username== '!' || username=='#' ){
                   document.write("Enter a Valid User Name " )
                   var n =username. charCodeAt();
                   document.write("The Ascii code is :" + n)
                }
              





                                            //   // //  chp 21 - 25 task 14
                  var   A = ['cake', ' apple pie', 'cookie', 'chips', 'atties']
                   var  b=prompt("enter you find our bakry items")
                  
                    var c=b.toLowerCase();
                    for(var i =0;i < A.length; i++ ){

                      if (A[i]===c ){
                        document.write("<h1>Thanku For Oder  items is Available : </h1>"+ " Index is : "+ i )
                        break;
                     }
                  else{
                     document.write("<h1>We Are Sorry .</h1>" + c +" : is Not Available Our Bakery : </h1>")
                    break ;
                  }}
              



                      //   // //  chp 21 - 25 task 15

              
               var limit=['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
               var password =prompt("Enter a password");
                   var c=password.toLowerCase();
               for(var i = 0; i<limit.length; i++){
                  // limit=limit[i]+1
                       if(limit[i]===c ){ 

                               document.write("<h1>You Enter storong password</h1>")
                               break;
                       }
                     
               }


        
           

                
             
             
                //   // //  chp 21 - 25 task 16
                   var a= 'University of Karachi';
                   a=a.split("");
                   for(var i=0;i<a.length;i++){
                       document.write(a[i] + "<br>")
                   }
                   
         
         
         
         
            //   // //  chp 21 - 25 task 17
            var user_input = 'pakistan';
            document.write('<span><h1>User input : Pakistan </h1>' )
            b=user_input[7]
            document.write('<span><h1>Last charecter of input :   </h1>' +b )



             //   // //  chp 21 - 25 task 18

             var a = 'the';
             var b =a.split("").length;
   
             document.write("<h1>The quick brown fox jumps over the lazy dog </h1>" + " there are " + b + " occurance of word 'the' ")



       
                    //          chepter 26 - 30 task 1
                      //     

                      var num =prompt("Enter a Possitive Number");
                      document.write( "<h1>Number : </h1>"+num +" <br>");
                      var round=Math.round(num)
                      document.write("<h1>round of value : </h1>" + round+"<br> ");
                      var floor = Math.floor(num);
                      document.write("<h1>Floor value of :</h1>" + floor +"<br>");
                      var ceel=Math.ceil(num)
                      document.write("<h1> Ciel value of :</h1>" + ceel +"<br>")

               
                //       chepter 26 - 30 task 2


                         var num =prompt("Enter a Possitive Number");
                      document.write( "<h1>Number : </h1>"+num +" <br>");
                      var round=Math.round(num)
                      document.write("<h1>round of value : </h1>" + round+"<br> ");
                      var floor = Math.floor(num);
                      document.write("<h1>Floor value of :</h1>" + floor +"<br>");
                      var ceel=Math.ceil(num)
                      document.write("<h1> Ciel value of :</h1>" + ceel +"<br>")



                         
                       // chepter 26 - 30 task 3
                     var a= -6.777;
                     var b=Math.abs(a);
                     document.write("<h1>The Absolule value of -6.777 :  </h1>" + b)



                // // chepter 26 - 30 task 4
                var a ;
                a = Math.random()*6
                var d=Math.floor(a)
                b=Math.random()*6
                var c=Math.floor(b)
                document.write("<h1>Random dice Value : </h1>" +d)

                document.write("<h1>Random dice Value : </h1>" +c)



                // // // chepter 26 - 30 task 5
                 var head =prompt("Enter Head User Name");
                 var tail =prompt("Enter Tail User Name");

                var toss;
                Toss = Math.random()*3 
                var d=Math.floor(Toss);
              
                if( d == 2){
                        document.write("<h1>Random Coin value Head is : 2 </h1> " + head + " win the game Yup  ")
                }
                else if( d == 1) {
                        document.write("<h1>Random Coin Value Tail  is : 1</h1>" + tail + " win the game yup")
                }




                   // // // chepter 26 - 30 task 6    
                
                    var a;
                a = Math.random()*99 
                var d=Math.ceil(a);
              
               document.write("<h1>Random Number Between 1 to 99 : </h1>  " + d);

                
         // // // chepter 26 - 30 task 7
         var a=prompt("Enter your weight in Kilograms")
        
         document.write("<h1>The weight of user is : </h1>" + a  );    
                
         // var a=prompt("Enter your weight in Kilograms")
        
         document.write("<h1>The weight of user is : </h1>" + a+"Kgs"  );    
         document.write("<h1>The weight of user is : </h1>" + a+".2Kgs"  );   
         document.write("<h1>The weight of user is : </h1>" + a+".2Kilograms"  );   
                





         
          // // // chepter 26 - 30 task 8
          var a=prompt("Enter a random number Choose Between 1 to 10: ");
          var b=Math.random()*9;
          var d=Math.ceil(b);
          if(a==d){
                  document.write("<h1>Congratulation </h1>")
          }
          



               



                    //   chp 31 - 34 task 1



               var a = new Date();

                document.write(a)



                  // //   chp 31 - 34 task 2
                  
        var monthNames = ['jan','Feb','Mar','April','May','june','July','Aug','Sep','Oct','Nov','Dec' ];
        var now = new Date();
        var themonth = now.getMonth(); 
        var nameOfcurrent = monthNames[themonth];
        alert("Current Month is : " + nameOfcurrent)
            
       
        
        
        // //   chp 31 - 34 task 3
   
        var a = new Date();
        var b = a.toString();
        var c= b.slice(0,3);
        alert("Today is " + c) 



     // // //   chp 31 - 34 task 4
        var day = [ "Sunday", "Mon", "Tue", "Wed", "Thu", "Fri", "Saturday"];
        var now = new Date();
        var theday = now.getDay(); 
        var nameOfcurrent = day[theday];
        
        if(nameOfcurrent==='Sunday' || nameOfcurrent === "Saturday") {
         document.write("<h1>It's Fun Day </h1>")
        }
        
            
                
           // // //   chp 31 - 34 task 5


             var a = new Date();
             var b= a.getDate();
             if (b<16){
                 document.write("<h1>First fifteen  days of the month</h1>")
             }
            else{
                document.write("<h1>Last   days of the month</h1>")
            }
                                        
         
         //    // // //   chp 31 - 34 task 6

         var a = new Date();
         document.write("<h1>Current Date : </h1>" +a  );
         var b=a.getTime()
         document.write("<h1>Elapsed Millisecond since January 1 , 1970 : </h> " + b +"<br>");
         var minut_1970;
         
         minut_1970=b/(1000*60*60);
         document.write("<h1>Elapsed Minuts since January 1 , 1970 : </h> " + minut_1970)



         //    // // //   chp 31 - 34 task 7
        var d = new Date();
        var currentHrs = d.getHours();
        // document.write(currentHrs)
        if (currentHrs >= 12){
            document.write("<h1>It's AM</h1>")
        }
        else { 
            document.write("<h1>It's PM</h1>")
        }


           // // //   chp 31 - 34 task 8

    
        var time = new Date();
        document.write(time + " <br>")  
       document.write("<h1>Latter Date :</h1>")
        var d = time.setSeconds(00);
        var e = time.setMinutes(00);
        var f = time.setHours(00);
        var c=time.setMonth(11);
        var aa=time.setFullYear(2020);
        var bb =time.setDate(31)
       
        document.write("LatterDate : "+time + "<br>")  
        // document.write(d)


//       //                // // //   chp 31 - 34 task 9


           var dob=new Date( prompt("Enter you Date of Birth","june 18,2015" )) ;
           var dobmili= dob.getTime();
         //   document.write(dobmili)
           var today=new Date();
           var todaymili = today.getTime();
           var diff = todaymili - dobmili;
           var accurate = Math.floor(diff /(1000*60*60*24))
           document.write(accurate +" " + "<h1> Days have Passed Since 1st Remzan ,2015</h1>" )
       




          // //   chp 31 - 34 task 10



              var dob=new Date( ) ;        
           document.write( "On Refrence Date  " + dob + " <br>")
           document.write("<br>")

           var dob=new Date( prompt("Enter you Date of Birth","2015" )) ;
           var dobmili= dob.getTime();
           //   document.write(dobmili)
           var today=new Date();
           var todaymili = today.getTime();
           var diff = todaymili - dobmili;
           var accurate = Math.floor(diff /(1000*60*60))
           document.write(accurate +" " + " Second had Passed Since beginning of. 2015" )
                  

        


          // //   chp 31 - 34 task 11

        var time =new Date();
        document.write(time + " <br> ")
        var b=time.setHours(24   )
                 
        document.write("<h1>Hour Ahead</h1>" +  time)



                // //   ---- chp 31 - 34 task 12
                        var time =new Date();
                        document.write(time + " <br> ")
                        var b=time.setFullYear( 1920  )
                        var c = time.setDate(21)
                           
                        document.write("<h1>100 year Back :</h1> " + time)
                  

             // //   ---- chp 31 - 34 task 13


             
                       var dob=prompt("Enter your age is : " );
       
          var today =new Date();
          var todaytime =today.getFullYear();
         
          var diff = todaytime-dob;
       
          document.write( " <h1> Your Birth Year Is :   </h1> "  +  diff)


               
                    
                     // // ---- chp 31 - 34 task 14

                   var cName ="Mian Usman Sadiq";
                   document.write("<h1> Custmer Name : </h1>" + cName)

                   var cmonth ="June";
                   document.write("<h1> Current Month  : </h1>" + cmonth)

                   var N_unit =500;
                   document.write("<h1> Number Of Unit   : </h1>" +  N_unit )
                   
                   var charges_unit =17;
                   document.write("<h1>Charges Per Unit   : </h1>" +  charges_unit )
                   var net_amont=500*17;
                   document.write("<h1>Net Amount Payable (within Due Date)   : </h1>" +  net_amont )
                   
                   var late_P_amont=300;
                   document.write("<h1>Late Payment Surcharge   : </h1>" +  late_P_amont )
                   
                   var Gross_amont=net_amont + late_P_amont ;
                   document.write("<h1>  Gross Amount Payable (after Due Date) : </h1>" +  Gross_amont )
                   







         //   ---------    //  Function-----------

                

               // chp   36 _-40    Task 1
              
               function C_date( ){
               var a =new Date();
               document.write(a);
               }
               C_date();


                            
         //       // chp   36 _-40    Task  2


            
               function Name(first_name,last_name ){
               var greek =first_name+last_name;
               return greek;
               
               }
              var g =     Name('Muhammad Usman ',' Sadiq');
               alert(g);



              //       // chp   36 _-40    Task  3

            
              function Sum(a,b){
            var a;
            var b;
           
            return a + b;
         }
            var add=   Sum((+prompt("Enter Your 1st Number")),(+prompt("Enter Your 2nd Number") ));
            alert("The Sum is"+  add);



         //       // chp   36 _-40    Task  4

               //   calculator

         function cal(a,sign,b){
         var a =+prompt("Enter you 1st Number");
        
         var sign = prompt("Enter your opratore");
         var b =  +prompt("Enter you 2nd Number");
         if(sign==='+'){
          return("<h1> The Sum Of Two Number : </h1>" + (a+b))  
         }
        else if(sign==='-'){
          return ("<h1> The sabtrating Of Two Number : </h1>" + (a-b))  
           }
         else  if(sign==='*'){
          return ("<h1> The Multiplication Of Two Number : </h1>" + (a*b))  
           }
         else  if(sign==='/'){
            return ("<h1> The Deviding Of Two Number : </h1>" + (a/b))  
           }
         else  if(sign==='%'){
            return ("<h1> The Sum Of Two Number : </h1>" + ((a/b)*100))  

           }
         
         }

         var g=  cal();
         document.write(g)

      

         //       // chp   36 _-40    Task  5

         function sqr(a){
           var b=a*a;
            return b; 
         }
         var b = sqr((+prompt("Enter a Number u want to squre")));
         alert(b)



   
                          // chp   36 _-40    Task  6
                
                          the     //  Factorial


             function fac(b) {       
             
            var answer =1;
            if(b==0 || b==1){
              return answer;
              
            }
            else{
            for(var i = b; i >= 1; i--){
                      answer = answer * i;
                    }
                    return(answer)} }

                    var b;
                    var c=+prompt("Enter your number of factorial ")
                    var g=fac(c)
                    document.write("The factorial of " + c + " is " + g)

            


         // //       // chp   36 _-40    Task  7




         function conting(c,d) {
            for(var i=c;i<=d;i++){
           document.write(i +" <br>")   
            }
           
            
         }
         var c=+prompt("Enter your starting counting");
         var d=+prompt("Enter your ending number ");
         
          conting(c,d);



         // //       // chp   36 _-40    Task 9
         
         
         function arg(w,h){
            var A =w*h;
            return A;

           
         }
         var b=arg(45,55);
         document.write(b);





           //       // chp   36 _-40    Task 10
                        function poli(a){

                  //  var word =prompt("enter your word");
                    var check="";

                    for(var i = a.length - 1; i >=0; i--){
                        check+=a[i]
                     
                    }
                    console.log(a,check)
                    if(check===a){
                        console.log(a +" is a palinndrome word");
                    }
                    else{
                        console.log("this is nat polinndrom word")
                    }
                  }
                  poli('maham');




                         //       // chp   36 _-40    Task 11


            function uppr_lover(text){

                          
               var first = text.slice(0,1);
               var firstother=text.slice(1,3);
               var sec=text.slice(4,5);
               var secother =text.slice(5,9)
               var thirdtext=text.slice(10,11)
               var thirdother=text.slice(11,15)
               var four =text.slice(16,17);
               var forother=text.slice(17,19)

               
               var a=first.toUpperCase();
               var b=sec.toUpperCase();
               var c=thirdtext.toUpperCase();
               var d=four.toUpperCase();

               var ao=firstother.toLowerCase();
               var bo=secother.toLowerCase();
               var co=thirdother.toLowerCase();
               var doo = forother.toLowerCase();

               var aadd = a +ao;
               var badd=b+bo;
               var cadd=c+co;
               var dadd=d+doo;
               var all_add=aadd +" " + badd + " " + cadd +" "+ dadd; 
              
               return all_add;
            }

         var rtn= uppr_lover('the quick brown fox');
      document.write(rtn) 




                    //       // chp   36 _-40    Task 12

                 function larger_str(str) {
                    
                
                  //   var str=['Web',' Development ', 'Tutorial'];
                    var a = str[0].length;
                    var b = str[1].length;
                    var c = str[2].length;
                    if(a > b && a > c) {
                       document.write(str[0] + " " + " : Is a  longest word within the string")
                    }
                   else if(b > a && b > c) {
                     document.write(str[1] + " " + " : Is a  longest word within the string")
                  }
                  else if(c > a && c > b ) {
                     document.write(str[2] + " " + " : Is a  longest word within the string")
                  }
               }


               larger_str([' Web ',' Development ', '  Tutorial']);
                    
                    



                  //       // chp   36 _-40    Task 13

                function str(a,b) {
                  var a;
                  var b;
                   var c =a.length;
                   var d = b.length;
                   document.write("The Count Number of String  : " + c + "<br>" + " Count Number Of Letter : " + d  + "<br>" )
             
                  }


                 
                   str('JSResourceS.com','o');
                  
      
                  
                
                  
                   
                




            
            
            
            
                            // //       // chp   36 _-40    Task 14

                //   calculate   circumference

           function calcCircumference(ab){
              var pii=Math.PI 
              document.write("The radius is : " + ab + "<br>")
              var circmf= 2 * pii * ab
              return circmf;

           }
        

           var a=calcCircumference (30);
        
           document.write("The circumference is " + a)




                  //  Calculate the area

         
           function calcArea(ab){
              var pii=Math.PI 
              document.write("The radius is : " + ab + "<br>")
              var CArea= pii *( ab*ab);
              return CArea;

           }
        

           var a=calcArea(20);
        
           document.write(" The Area of Circle Is :  " + a);



       


    