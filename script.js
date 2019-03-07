$(document).ready( function() {
    var initGame = false;
    var userScore = 0
    var compScore = 0

    if (initGame === true) {
        playGame();
    } 

    function init() {
        $('#game').hide();
        $('#title2').hide();
    }
    init();

    $('#start-btn').on('click', function (){
        $('.init').hide();
        $('#game').show();
        $('#walkthrough').text('Click a floating hand to select your choice!')
        playGame();
    })

    function playGame() {
        $('#rps-image1').on('click', function() {
            var compMath = Math.floor(Math.random() * 3 + 1)
            rock = 1
            paper = 2
            scissors = 3
            //if else statement you dumb high idiot
            if (compMath == 1) {
                $('#result').text('tie')
            } else if (compMath == 2) {
                compScore++
                $('#result').text('loser')
            } else {
                userScore++
                $('#result').text('winner')
            }
            updateDisplay();
        })
        
        $('#rps-image2').on('click', function() {
            var compMath = Math.floor(Math.random() * 3 + 1)
            if (compMath == 2) {
                $('#result').text('tie')
            } else if (compMath == 3) {
                compScore++
                $('#result').text('loser')
            } else {
                userScore++
                $('#result').text('winner')
            }
            updateDisplay();
        })
        
        $('#rps-image3').on('click', function() {
            var compMath = Math.floor(Math.random() * 3 + 1)
            if (compMath == 3) {
                $('#result').text('tie')
            } else if (compMath == 1) {
                compScore++
                $('#result').text('loser')
            } else {
                userScore++
                $('#result').text('winner')
            }
            updateDisplay();
         })
    }
    

    function updateDisplay() {
        var rock = $('#rps-image1')
        var paper = $('#rps-image2')
        var scissors = $('#rps-image3')
        $('#walkthrough').css({
            display: 'none'
        })
        $('#title2').show();
        paper.hide(3000);
        scissors.hide(3000);
        rock.show(3000);
        paper.show(3000);
        scissors.show(6000);
        // if shoot has already been called ignore this shit.
        //if shoot equals true - displayResult();
        //else run shoot()
        shoot(); 
    }

    function shoot() {
        setInterval(function(){ 
            $('#title2').css({
                display: 'none'
            })
            $('#shoot').text('... S H O O T!');
         }, 3000);
         displayResult();
    }

    function displayResult() {
        $('#comp-results').text('Computer:' + compScore)
        $('#user-results').text('User:' + userScore)

    }
})
