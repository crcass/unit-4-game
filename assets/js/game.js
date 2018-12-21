$(document).ready(function() {

   // game character objects
   var charOne = {
      name: 'X-Wing',
      hp: 125,
      atk: 12,
      cAtk: 14,
      // img: ,

      setup: function() {
         $('#charOneName').text(this.name);
         $('#charOneHp').text(this.hp);
         $('#charOneAtk').text(this.atk);
         $('#charOneCatk').text(this.cAtk);
      },

      player: function() {
         $('#playerName').text(this.name);
         $('#playerHp').text(this.hp);
         $('#playerAtk').text(this.atk);
         $('#playerCatk').text(this.cAtk);
         $('#charOne').css('visibility', 'hidden');

      },

      enemy: function() {
         $('#enemyName').text(this.name);
         $('#enemyHp').text(this.hp);
         $('#enemyAtk').text(this.atk);
         $('#enemyCatk').text(this.cAtk);
         $('#charOne').css('visibility', 'hidden');
      }
   }

   var charTwo = {
      name: 'TIE Defender',
      hp: 150,
      atk: 9,
      cAtk: 12,
      // img: ,

      setup: function() {
         $('#charTwoName').text(charTwo.name);
         $('#charTwoHp').text(charTwo.hp);
      },

      player: function() {
         $('#playerName').text(this.name);
         $('#playerHp').text(this.hp);
         $('#playerAtk').text(this.atk);
         $('#playerCatk').text(this.cAtk);
         $('#charTwo').css('visibility', 'hidden');
      },

      enemy: function() {
         $('#enemyName').text(this.name);
         $('#enemyHp').text(this.hp);
         $('#enemyAtk').text(this.atk);
         $('#enemyCatk').text(this.cAtk);
         $('#charTwo').css('visibility', 'hidden');
      }
   }

   var charThree = {
      name: 'TIE Interceptor',
      hp: 75,
      atk: 18,
      cAtk: 16,
      // img: ,

      setup: function() {
         $('#charThreeName').text(charThree.name);
         $('#charThreeHp').text(charThree.hp);
      },

      player: function() {
         $('#playerName').text(this.name);
         $('#playerHp').text(this.hp);
         $('#playerAtk').text(this.atk);
         $('#playerCatk').text(this.cAtk);
         $('#charThree').css('visibility', 'hidden');
      },

      enemy: function() {
         $('#enemyName').text(this.name);
         $('#enemyHp').text(this.hp);
         $('#enemyAtk').text(this.atk);
         $('#enemyCatk').text(this.cAtk);
         $('#charThree').css('visibility', 'hidden');

      }
   }

   var charFour = {
      name: 'A-Wing',
      hp: 100,
      atk: 15,
      cAtk: 14,
      // img: ,

      setup: function() {
         $('#charFourName').text(charFour.name);
         $('#charFourHp').text(charFour.hp);
      },

      player: function() {
         $('#playerName').text(this.name);
         $('#playerHp').text(this.hp);
         $('#playerAtk').text(this.atk);
         $('#playerCatk').text(this.cAtk);
         $('#charFour').css('visibility', 'hidden');
      },

      enemy: function() {
         $('#enemyName').text(this.name);
         $('#enemyHp').text(this.hp);
         $('#enemyAtk').text(this.atk);
         $('#enemyCatk').text(this.cAtk);
         $('#charFour').css('visibility', 'hidden');
      }
   }

   // global variables
   var playerChosen;
   var enemyChosen;
   var playerChar;
   var enemyChar;
   var playerHp;
   var enemyHp;
   var playerAtk;
   var atkMod = 1;
   var enemiesDefeated = 0;

   // global functions
   function setup() {
      $('h1').text('Choose Your Ship');
      playerChosen = false;
      enemyChosen = false;
      playerChar = 0;
      enemyChar = 0;
      atkMod = 1;
      enemiesDefeated = 0;

      charOne.setup();
      charTwo.setup();
      charThree.setup();
      charFour.setup();
   }

   function choosePlayer() {
      if (playerChar === 'charOne') {
         charOne.player();
         playerChosen = true;
      } else if (playerChar === 'charTwo') {
         charTwo.player();
         playerChosen = true;
      } else if (playerChar === 'charThree') {
         charThree.player();
         playerChosen = true;
      } else if (playerChar === 'charFour') {
         charFour.player();
         playerChosen = true;
      }
      $('h1').text('Choose Your Opponent!');
      $('#hp').css('visibility', 'visible');
   }

   function chooseEnemy() {
      if (enemyChar === 'charOne') {
         charOne.enemy();
         enemyChosen = true;
      } else if (enemyChar === 'charTwo') {
         charTwo.enemy();
         enemyChosen = true;
      } else if (enemyChar === 'charThree') {
         charThree.enemy();
         enemyChosen = true;
      } else if (enemyChar === 'charFour') {
         charFour.enemy();
         enemyChosen = true;
      }
      $('h1').css('visibility', 'hidden');
   }

   function reset() {
      location.reload(true);
   }

   // set up game board
   setup();

   // character select
   $('.char').on('click', function() {
      if (playerChosen === false) {
         playerChar = $(this).attr('value');
         choosePlayer();
         $('#vs').css('visibility', 'visible');
      } else if (playerChosen) {
         if (enemyChosen === false) {
            enemyChar = $(this).attr('value');
            chooseEnemy();
         }
      }
      if (playerChosen && enemyChosen) {
         $('#attack').css('visibility', 'visible');
         $('#he').css('visibility', 'visible');
      }
   })

   // main game loop
   var gameLoop = $('#attack').on('click', function() {
      playerHp = parseInt($('#playerHp').text());
      enemyHp = parseInt($('#enemyHp').text());
      playerAtk = parseInt($('#playerAtk').text());
      var enemyCatk = parseInt($('#enemyCatk').text());
      var enemyName = $('#enemyName').text();

      if (enemyHp > 0) {
         playerAtk = playerAtk * atkMod;
         atkMod++;

         enemyHp = enemyHp - playerAtk;
         playerHp = playerHp - enemyCatk;


         $('#playerHp').text(playerHp);
         $('#enemyHp').text(enemyHp);

         $('#reportP').text(`You hit the ${enemyName} for ${playerAtk} damage!`);
         $('#reportE').text(`The ${enemyName} hit you for ${enemyCatk} damage!`);
      }
      if (enemyHp <= 0) {
         enemiesDefeated++;
         enemyChosen = false;
         $('#reportCond').text(`You defeated the ${enemyName}!`);
         $('h1').text('Choose Your Opponent!');
         $('h1').css('visibility', 'visible');
         $('#attack').css('visibility', 'hidden');
      }
      if (playerHp <= 0) {
         $('#reportCond').text(`You were defeated by the ${enemyName}!`);
         $('#reset-text').text('Click the Reset button to try again!');
         $('.reset').css('visibility', 'visible');
      }
      if (enemiesDefeated === 3) {
         $('h1').text('You Win! May the Force be with you!');
         $('.reset').css('visibility', 'visible');
      }
   })
   $('#reset-btn').on('click', function() {
      reset();
   });
});