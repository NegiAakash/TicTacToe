turn = 1;
gameOver = false;
player1 = 0;
player2 = 0;
count = 0;
tie = 0;
$( document ).ready(function() {

    $('td').click(function()
    {

        if(count === 9)
        {
            alert("Game Tied !!");
            tie++;
            $('.tie').text(tie);
            reset();
            return;
        }
        if(gameOver)
        {
            return;
        }
        if(turn===1 && !($(this).hasClass('O') || $(this).hasClass('X')))
        {
            //console.log('inside X')
            $(this).text('X');
            $(this).addClass('X');
            turn = 2;
            count++;
            checkAll();

        }
        else if(turn===2 && !($(this).hasClass('O') || $(this).hasClass('X')))
        {
            //console.log('inside Y')
            $(this).text('O');
            $(this).addClass('O');
            turn = 1;
            count++;
            checkAll();
        }

       
        
    })
  
    

});


function checkAll()
{
    if(check('X'))
            {
                gameOver=true
                alert("Player 1 wins")    
                player1 = player1+1;
                window.setTimeout( reset(), 10000000 );
            }
            else if(check('O'))
            {
                gameOver=true
                alert("Player 2 wins")        
                player2 = player2+1;
                window.setTimeout( reset(), 10000000 );
            }
            $('.player1').text(player1);
            $('.player2').text(player2);
}

function reset()
{
    $(".r").text('');
    $('.r').removeClass('X')
    $('.r').removeClass('O')
    $('.r').css("background-color", "#387780"); 
    turn=1;
    count=0;
    gameOver=false;
}



function check(symbol) {
    //console.log("Check") 
    if ($(".sq1").hasClass(symbol) &&  
        $(".sq2").hasClass(symbol) && 
        $(".sq3").hasClass(symbol)) 
    { 
        $(".sq1").css("background-color", "green"); 
        $(".sq2").css("background-color", "green"); 
        $(".sq3").css("background-color", "green"); 
        return true; 
    } else if ($(".sq4").hasClass(symbol) 
            && $(".sq5").hasClass(symbol) 
            && $(".sq6").hasClass(symbol)) 
    { 
        $(".sq4").css("background-color", "green"); 
        $(".sq5").css("background-color", "green"); 
        $(".sq6").css("background-color", "green"); 
        return true; 
    } else if ($(".sq7").hasClass(symbol) 
            && $(".sq8").hasClass(symbol) 
            && $(".sq9").hasClass(symbol)) 
    { 
        $(".sq7").css("background-color", "green"); 
        $(".sq8").css("background-color", "green"); 
        $(".sq9").css("background-color", "green"); 
        return true; 
    } else if ($(".sq1").hasClass(symbol) 
            && $(".sq4").hasClass(symbol) 
            && $(".sq7").hasClass(symbol))  
    { 
        $(".sq1").css("background-color", "green"); 
        $(".sq4").css("background-color", "green"); 
        $(".sq7").css("background-color", "green"); 
        return true; 
    } else if ($(".sq2").hasClass(symbol) 
            && $(".sq5").hasClass(symbol) 
            && $(".sq8").hasClass(symbol)) 
    { 
        $(".sq2").css("background-color", "green"); 
        $(".sq5").css("background-color", "green"); 
        $(".sq8").css("background-color", "green"); 
        return true; 
    } else if ($(".sq3").hasClass(symbol) 
            && $(".sq6").hasClass(symbol) 
            && $(".sq9").hasClass(symbol))  
    { 
        $(".sq3").css("background-color", "green"); 
        $(".sq6").css("background-color", "green"); 
        $(".sq9").css("background-color", "green"); 
        return true; 
    } else if ($(".sq1").hasClass(symbol) 
            && $(".sq5").hasClass(symbol) 
            && $(".sq9").hasClass(symbol))  
    { 
        $(".sq1").css("background-color", "green"); 
        $(".sq5").css("background-color", "green"); 
        $(".sq9").css("background-color", "green"); 
        return true; 
    } else if ($(".sq3").hasClass(symbol) 
            && $(".sq5").hasClass(symbol) 
            && $(".sq7").hasClass(symbol))  
    { 
        $(".sq3").css("background-color", "green"); 
        $(".sq5").css("background-color", "green"); 
        $(".sq7").css("background-color", "green"); 
        return true; 
    } else { 
        return false; 
    } 
} 