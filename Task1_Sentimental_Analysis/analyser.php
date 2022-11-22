<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sentimental Analysis</title>
    <style>
        .head
        {
            color:red;
            font-weight: bolder;
        }
        .container
        {
            margin-top: 60px;
            height: 550px;
            background-color: wheat; 
            width: 85%; 
        }
        .input-box
        {
            
            display: flex;
            justify-content: center;
        }
        .sentiments
        {
            
            display:flex;
            justify-content: center; 
            align-items: center;   
        }
        .emoji
        {
           
            display: flex;
            justify-content: center;
            margin: 0px 40px;    
        }
        .emoji img
        {
            border-radius: 50%;    
        }
        .dp
        {
           display: flex;
           justify-content: center;
        }    
        .sp
        {
            margin: 0px 47px;
            margin-top: -25px;
            font-size: 15px;
            font-weight: bolder;
            color:red;
        } 
        .output
        {
            width:100%;
        }
        
        #btn
        {
           width:90px ;
           font-weight:bolder;
           background-color:#4fa3a5;
           border: 1px solid black;
           border-radius:3px;
           color:#fff; 
           cursor:pointer
        }
        #btn:hover
        {
          background-color: #4eb1b8;
        }  
    </style>
</head>
<body>

<?php
if($_SERVER['REQUEST_METHOD']=='POST')
{
   $inp=$_POST['sent'];
}
else
{
    $inp=" ";
}
include('vendor/autoload.php');
use Sentiment\Analyzer;
$obj=new Analyzer();
$result=$obj->getSentiment("$inp");
echo "<pre>";
?>
<center>
    <div class="container">
            <h1 style="color:#4eb1b3;">WRITE YOUR SENTENCE HERE</h1>
                <form name="form" action="" method="post" class="input-box">
                     <input type="text" name="sent" id="text" placeholder="Enter text here" style="width: 500px ;height:30px; font-size:large;">
                     <input type="submit" value="enter"  id="btn">
                </form>

            <div class="output">
                <p style="color:red ; font-size:20px; font-weight:bolder; width:inherit; white-space:pre-wrap;padding-top:-20px;">Sentimental Analysis for "<span style="color:#4fa3a5"><?=$inp?></span>" is:</p>
                <div class="sentiments">
                    
                       <div class="emoji">
                          <img src="images/happy.jpeg" alt="happy" style="height:100px; width:100px;" >
                       </div>
                       <div class="emoji">
                          <img src="images/neutral.jpeg" alt="neutral" style="height:100px; width:100px;" >
                       </div>
                       <div class="emoji">
                          <img src="images/sad.jpeg" alt="sad" style="height:100px; width:100px;" >
                       </div>
                </div>
                <div class="dp">
                   <h4 class="sp">happy<span> <?=$result['pos']*100?></span>%</h4> 
                   <h4 class="sp"> neutral<span> <?=$result['neu']*100?></span>%</h4>
                   <h4 class="sp"> sad<span> <?=$result['neg']*100?></span>%</h4>
                </div>
            </div>
    </div>
</center>
</body>
</html>
