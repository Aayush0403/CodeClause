var questions = [
    {
        question: "Who is the father of Computers?",
        answer: "Charles Babbage",
        options: [
            "James Gosling",
            "Charles Babbage",
            "Dennis Ritchie",
            "Bjarne Stroustrup"
        ]
    },
    {
        question: "What is the full form of CPU?",
        answer: "Central Processing Unit",
        options: [
            "Computer Processing Unit",
            "Computer Principle Unit",
            "Central Processing Unit",
            "Control Processing Unit"
        ]
    },
    {
        question: "Which of the following language does the computer understand?",
        answer: "only Binary Language",
        options: [
            "only C Language",
            "only Assembly Language",
            "only Binary Language",
            "only BASIC"
        ]
    },
    {
        question: "Which of the following is the smallest unit of data in a computer?",
        answer: "Bit",
        options: [
            "Bit",
            "KB",
            "Byte",
            "Nibble"
        ]
    },
    {
        question: "Which of the following device use positional notation to represent a decimal number?",
        answer: "Abacus",
        options: [
            "Pascaline",
            "Calculator",
            "Computer",
            "Abacus"
        ]
    },
]
var count=0;
var i=0;
var k=5;

function funx()
{
    
    no.innerHTML=(j)+"/"+k;
    var question=document.querySelector(".que");
    var self =document.querySelector(".btn");
    var quest=document.querySelector("#quest");
    var first=document.querySelector("#first");
    var second=document.querySelector("#second");
    var third=document.querySelector("#third");
    var fourth=document.querySelector("#fourth");
    question.style.visibility="visible";
    self.style.visibility="hidden";
    quest.innerHTML=questions[0].question; 
    first.innerHTML=questions[0].options[0]; 
    second.innerHTML=questions[0].options[1];
    third.innerHTML=questions[0].options[2];
    fourth.innerHTML=questions[0].options[3];
     
}
var no=document.querySelector("#no");
function funy()
{
    var user=document.querySelector("#username");
    var pass=document.querySelector("#password");
    console.log(user);
    user.value="";
    pass.value="";
    console.log(user);
    var question=document.querySelector(".login");
    var self =document.querySelector(".btn");
    question.style.visibility="visible";
    self.style.visibility="hidden";
   
}

function funz()
{
    var list=document.querySelector('#list');
    list.innerHTML="";
    var next=document.querySelector(".admin");
    var cur=document.querySelector(".login");
    var sp=document.querySelector("#sp")
    var user=document.querySelector("#username").value;
    var pass=document.querySelector("#password").value;
    var list=document.querySelector('#list');
    if(user=="admin" && pass=="1234")
    {
        next.style.visibility="visible";
        cur.style.visibility="hidden"; 
        for(var h=0;h<questions.length;h++)
        {
            var parag=document.createElement('p');
            parag.innerHTML=questions[h].question;
            list.append( "Question:"+ (h+1) );
            list.appendChild(parag);
            var arr=[questions[h].options[0],
                     questions[h].options[1],
                     questions[h].options[2],
                     questions[h].options[3]]
            for(var n=0;n<arr.length;n++)
              {   list.append(arr[n]);
                  var br=document.createElement('br');
                  list.appendChild(br);
             }
             var br=document.createElement('br');
             list.appendChild(br);
             list.append( "Ans: "+ questions[h].answer);
            var hr=document.createElement('hr')
            list.append(hr);   
        }
    }
    else
    {  
        if(i==0)
        {
           const para=document.createElement('p');
           para.classList.add('para');
           para.innerText="Incorrect Credentials";
           sp.appendChild(para);
           i=1;
        }
    }
}
var j=1;
var d=0;
var dup=0;
function funk()
{   
    var app;
    var one=document.querySelector(".one");
    var two=document.querySelector(".two");
    var three=document.querySelector(".three");
    var four=document.querySelector(".four");
    var first=document.querySelector("#first");
    var second=document.querySelector("#second");
    var third=document.querySelector("#third");
    var fourth=document.querySelector("#fourth");
    var sec1=document.querySelector("#sec1");
    var sec2=document.querySelector("#sec2");
    var sec3=document.querySelector("#sec3");
    var sec4=document.querySelector("#sec4");
     
  if(d==0)
  {
    d=1;
    var ans=questions[j-1].answer;
    app=document.createElement('img');
    app.classList.add('img');
    if(one.checked==true )
    {
         if( first.innerHTML==ans)
         {
                count++;
                app.src="images/accept.png";
                first.appendChild(app);
         }
         else
         {
               app.src="images/close.png";
               first.appendChild(app);

         }
    }
    else if(two.checked==true )
    {
         if( second.innerHTML==ans)
         {
                count++;
                app.src="images/accept.png";
                second.appendChild(app);
         }
         else
         {
               app.src="images/close.png";
               second.appendChild(app);
         }
    }
    else if(three.checked==true )
    {
         if( third.innerHTML==ans)
         {
                count++;
                app.src="images/accept.png";
                third.appendChild(app);
         }
         else
         {
               app.src="images/close.png";
               third.appendChild(app);
         }
    }
    else if(four.checked==true )
    {
         if( fourth.innerHTML==ans)
         {
                count++;
                app.src="images/accept.png";
                fourth.appendChild(app);
         }
         else
         {
               app.src="images/close.png";
               fourth.appendChild(app);
         }
    }
        if(ans==first.innerText)
             sec1.style.backgroundColor ="rgb(46, 249, 36)";
        else if(ans==second.innerText)
             sec2.style.backgroundColor ="rgb(46, 249, 36)";
        else if(ans==third.innerText)
             sec3.style.backgroundColor ="rgb(46, 249, 36)";
        else if(ans==fourth.innerText)
             sec4.style.backgroundColor ="rgb(46, 249, 36)";
  }  
    one.checked=false;
    two.checked=false;
    three.checked=false;
    four.checked=false;
    
}

function funj()
{
    var one=document.querySelector(".one");
    var two=document.querySelector(".two");
    var three=document.querySelector(".three");
    var four=document.querySelector(".four");
    one.checked=false;
    two.checked=false;
    three.checked=false;
    four.checked=false;
    sec1.style.backgroundColor ="transparent";
    sec2.style.backgroundColor ="transparent";
    sec3.style.backgroundColor ="transparent";
    sec4.style.backgroundColor ="transparent";
      no.innerHTML=(j+1)+"/"+k;
      d=0;
      var quest=document.querySelector("#quest");
      if(j<k)
      { 
        quest.innerHTML=questions[j].question; 
        first.innerHTML=questions[j].options[0]; 
        second.innerHTML=questions[j].options[1];
        third.innerHTML=questions[j].options[2];
        fourth.innerHTML=questions[j].options[3];
      }
      else
      {
        var question=document.querySelector(".status");
        var self =document.querySelector(".que");
        question.style.visibility="visible";
        self.style.visibility="hidden";
        var correct=document.querySelector("#correct");
        var incorrect=document.querySelector("#incorrect");
        var efficiency=document.querySelector("#efficiency");
       
        correct.innerHTML=count;
        incorrect.innerHTML=k-count;
        efficiency.innerHTML=(count/k)*100+"%";
        count=0;
      }
        
    j++;
}
function funa()
{
    var question=document.querySelector(".btn");
    var self =document.querySelector(".status");
    question.style.visibility="visible";
    self.style.visibility="hidden";
    j=1;
}
function funt()
{
    var question=document.querySelector(".extra");
    var self =document.querySelector(".admin");
    question.style.visibility="visible";
    self.style.visibility="hidden";

}
function funq()
{
    k++;
    var extaque=document.querySelector("#nextque").value;
    var opt1=document.querySelector("#option1").value;
    var opt2=document.querySelector("#option2").value;
    var opt3=document.querySelector("#option3").value;
    var opt4=document.querySelector("#option4").value;
    var nextans=document.querySelector("#nextans").value;
    var list=document.querySelector('#list');
    var prev=document.querySelector("#prev");

    var parag=document.createElement('p');
    parag.innerHTML=extaque;
    list.append( "Question:"+ (k) );
    list.appendChild(parag);
    var arr=[opt1,
             opt2,
             opt3,
             opt4]
    for(var n=0;n<arr.length;n++)
      {   list.append(arr[n]);
          var br=document.createElement('br');
          list.appendChild(br);
     }
     var br=document.createElement('br');
     list.appendChild(br);
     list.append( "Ans: "+ nextans);
    var hr=document.createElement('hr')
    list.append(hr);
    var question=document.querySelector(".admin");
    var self =document.querySelector(".extra");
    question.style.visibility="visible";
    self.style.visibility="hidden";
    var but=document.createElement('button');
    but.innerHTML="START QUIZ";
    but.classList.add('prev');
    but.onclick=function()
    {
        
       var questionk=document.querySelector(".btn");
       var selfk =document.querySelector(".admin");
       questionk.style.visibility="visible";
       selfk.style.visibility="hidden";
      var b= 
      {
        question: extaque,
        answer: nextans,
        options:
         [
            opt1,
            opt2,
            opt3,
            opt4 
         ]
      };
      questions.push(b);
    }
    if(dup==0)
       {
        prev.appendChild(but);
        dup=1;
       } 
}
function fune()
{
      
       var questionk=document.querySelector("#remove");
       var selfk =document.querySelector(".admin");
       questionk.style.visibility="visible";
       selfk.style.visibility="hidden";

}
function funo()
{
    var remove=document.querySelector("#rem").value;
    questions.splice(remove-1,1);
    k=0;
    var but=document.createElement('button');
    but.innerHTML="START QUIZ";
    but.classList.add('prev');
    but.onclick=function()
    {
        
       var questionk=document.querySelector(".btn");
       var selfk =document.querySelector(".admin");
       questionk.style.visibility="visible";
       selfk.style.visibility="hidden";
    }
    if(dup==0)
    {
    prev.appendChild(but);
    dup=1;
    } 
    var list=document.querySelector('#list');
    list.innerHTML="";

    for(var h=0;h<questions.length;h++)
    {
        k++;
        var parag=document.createElement('p');
        parag.innerHTML=questions[h].question;
        list.append( "Question:"+ (h+1) );
        list.appendChild(parag);
        var arr=[questions[h].options[0],
                 questions[h].options[1],
                 questions[h].options[2],
                 questions[h].options[3]]
        for(var n=0;n<arr.length;n++)
          {   list.append(arr[n]);
              var br=document.createElement('br');
              list.appendChild(br);
          }
         var br=document.createElement('br');
         list.appendChild(br);
         list.append( "Ans: "+ questions[h].answer);
        var hr=document.createElement('hr')
        list.append(hr);
        
    }

    var questionk=document.querySelector(".admin");
    var selfk =document.querySelector("#remove");
    questionk.style.visibility="visible";
    selfk.style.visibility="hidden";

}