var panel = $('#quiz-area');

$(document).on('click', '#start', function(e){
  game.start();
});

$(document).on('click', '#done', function(e){
  game.done();
});

//question set

var questions = [{
  question: "What is my name?",
  answers: ['Jeff', 'Darren', 'Andrew', 'Jimmy'],
  correctAnswer: "Jeff"
}, {
  question: "Where do i live?",
  answers: ['Fair Lawn', 'Ridgewood', 'Englewood'],
  correctAnswer: "Fair Lawn"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls"
}];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }
    panel.append('<button id="done">Done</button>');
  },
  done: function(){

    $.each($("input[name='question-0']:checked"), function(){
       if ($(this).val() == questions[0].correctAnswer) {
        console.log(this);
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-1']:checked"), function(){
       if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-2']:checked"), function(){
       if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    this.results();
  },


    results:function(){
      clearInterval(timer);

      $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');

    }


  };











