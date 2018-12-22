$(document).ready(function() {

   // game character objects
   var charOne = {
      name: 'X-Wing',
      hp: 115,
      atk: 10,
      cAtk: 14,
      img: './assets/images/xwing.png',

      setup: function() {
         $('#charOneName').text(this.name);
         $('#charOneHp').text(this.hp);
         $('#charOneAtk').text(this.atk);
         $('#charOneCatk').text(this.cAtk);
         $('#charOneImg').attr('src', this.img);
      },

      player: function() {
         $('#playerName').text(this.name);
         $('#playerHp').text(this.hp);
         $('#playerAtk').text(this.atk);
         $('#playerCatk').text(this.cAtk);
         $('#playerImg').attr('src', this.img);
         $('#charOne').css('visibility', 'hidden');

      },

      enemy: function() {
         $('#enemyName').text(this.name);
         $('#enemyHp').text(this.hp);
         $('#enemyAtk').text(this.atk);
         $('#enemyCatk').text(this.cAtk);
         $('#enemyImg').attr('src', this.img);
         $('#charOne').css('visibility', 'hidden');
      }
   }

   var charTwo = {
      name: 'TIE Defender',
      hp: 150,
      atk: 7,
      cAtk: 12,
      img: './assets/images/td.png',

      setup: function() {
         $('#charTwoName').text(charTwo.name);
         $('#charTwoHp').text(charTwo.hp);
         $('#charTwoAtk').text(this.atk);
         $('#charTwoCatk').text(this.cAtk);
         $('#charTwoImg').attr('src', this.img);
      },

      player: function() {
         $('#playerName').text(this.name);
         $('#playerHp').text(this.hp);
         $('#playerAtk').text(this.atk);
         $('#playerCatk').text(this.cAtk);
         $('#playerImg').attr('src', this.img);
         $('#charTwo').css('visibility', 'hidden');
      },

      enemy: function() {
         $('#enemyName').text(this.name);
         $('#enemyHp').text(this.hp);
         $('#enemyAtk').text(this.atk);
         $('#enemyCatk').text(this.cAtk);
         $('#enemyImg').attr('src', this.img);
         $('#charTwo').css('visibility', 'hidden');
      }
   }

   var charThree = {
      name: 'TIE Interceptor',
      hp: 75,
      atk: 26,
      cAtk: 16,
      img: './assets/images/ti.png',

      setup: function() {
         $('#charThreeName').text(charThree.name);
         $('#charThreeHp').text(charThree.hp);
         $('#charThreeAtk').text(this.atk);
         $('#charThreeCatk').text(this.cAtk);
         $('#charThreeImg').attr('src', this.img);
      },

      player: function() {
         $('#playerName').text(this.name);
         $('#playerHp').text(this.hp);
         $('#playerAtk').text(this.atk);
         $('#playerCatk').text(this.cAtk);
         $('#playerImg').attr('src', this.img);
         $('#charThree').css('visibility', 'hidden');
      },

      enemy: function() {
         $('#enemyName').text(this.name);
         $('#enemyHp').text(this.hp);
         $('#enemyAtk').text(this.atk);
         $('#enemyCatk').text(this.cAtk);
         $('#enemyImg').attr('src', this.img);
         $('#charThree').css('visibility', 'hidden');

      }
   }

   var charFour = {
      name: 'A-Wing',
      hp: 100,
      atk: 15,
      cAtk: 14,
      img: './assets/images/awing.png',

      setup: function() {
         $('#charFourName').text(charFour.name);
         $('#charFourHp').text(charFour.hp);
         $('#charFourAtk').text(this.atk);
         $('#charFourCatk').text(this.cAtk);
         $('#charFourImg').attr('src', this.img);
      },

      player: function() {
         $('#playerName').text(this.name);
         $('#playerHp').text(this.hp);
         $('#playerAtk').text(this.atk);
         $('#playerCatk').text(this.cAtk);
         $('#playerImg').attr('src', this.img);
         $('#charFour').css('visibility', 'hidden');
      },

      enemy: function() {
         $('#enemyName').text(this.name);
         $('#enemyHp').text(this.hp);
         $('#enemyAtk').text(this.atk);
         $('#enemyCatk').text(this.cAtk);
         $('#enemyImg').attr('src', this.img);
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
      $('#selText').text('Choose Your Ship');
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
      $('#selText').text('Choose Your Opponent!');
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
      $('#selText').css('visibility', 'hidden');
      $('#reportP').empty();
      $('#reportE').empty();
      $('#reportCond').empty();
   }

   function reset() {
      $('#charOne').css('visibility', 'visible');
      $('#charTwo').css('visibility', 'visible');
      $('#charThree').css('visibility', 'visible');
      $('#charFour').css('visibility', 'visible');
      $('#playerName').text('');
      $('#playerHp').text('');
      $('#playerAtk').text('');
      $('#playerCatk').text('');
      $('#playerImg').attr('src', '');
      $('#enemyName').text('');
      $('#enemyHp').text('');
      $('#enemyAtk').text('');
      $('#enemyCatk').text('');
      $('#enemyImg').attr('src', '');
      $('#reportP').empty();
      $('#reportE').empty();
      $('#reportCond').empty();
      $('.reset').css('visibility', 'hidden');
      $('#vs').css('visibility', 'hidden');
      $('#hp').css('visibility', 'hidden');
      $('#he').css('visibility', 'hidden');
      setup();

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
         $('#selText').text('Choose Your Opponent!');
         $('#selText').css('visibility', 'visible');
         $('#attack').css('visibility', 'hidden');
      }
      if (playerHp <= 0) {
         $('#reportCond').text(`You were defeated by the ${enemyName}!`);
         $('#selText').css('visibility', 'hidden');
         $('#reset-text').text('Click the Reset button to try again!');
         $('.reset').css('visibility', 'visible');
         $('#attack').css('visibility', 'hidden');
      }
      if (enemiesDefeated === 3) {
         $('#selText').text('You Win! May the Force be with you!');
         $('#reset-text').text('Click the Reset button to try again!');
         $('.reset').css('visibility', 'visible');
      }
   })
   $('#reset-btn').on('click', function() {
      reset();
   });
});