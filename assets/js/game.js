$(document).ready(function() {

	var charOne = {
		name: 'X-Wing',
		hp: 125,
		atk: 8,
		cAtk: 14,
		// img: ,

		setup: function() {
			$('#charOneName').text(charOne.name);
			$('#charOneHp').text('HP: ' + charOne.hp);
		},

		player: function() {
			$('#playerName').text(charOne.name);
			$('#playerHp').text('HP: ' + charOne.hp);

		},

		enemy: function() {
			$('#enemyName').text(charOne.name);
			$('#enemyHp').text('HP: ' + charOne.hp);
		}
	}

	var charTwo =  {
		name: 'TIE Defender',
		hp: 150,
		atk: 6,
		cAtk: 12,
		// img: ,

		setup: function() {
			$('#charTwoName').text(charTwo.name);
			$('#charTwoHp').text('HP: ' + charTwo.hp);
		},

		player: function() {
			$('#playerName').text(charTwo.name);
			$('#playerHp').text('HP: ' + charTwo.hp);
		},

		enemy: function() {
			$('#enemyName').text(charTwo.name);
			$('#enemyHp').text('HP: ' + charTwo.hp);
		}
	}

	var charThree =  {
		name: 'TIE Interceptor',
		hp: 75,
		atk: 12,
		cAtk: 16,
		// img: ,

		setup: function() {
			$('#charThreeName').text(charThree.name);
			$('#charThreeHp').text('HP: ' + charThree.hp);
		},

		player: function() {
			$('#playerName').text(charThree.name);
			$('#playerHp').text('HP: ' + charThree.hp);
		},

		enemy: function() {
			$('#enemyName').text(charThree.name);
			$('#enemyHp').text('HP: ' + charThree.hp);

		}
	}

	var charFour =  {
		name: 'A-Wing',
		hp: 100,
		atk: 10,
		cAtk: 14,
		// img: ,

		setup: function() {
			$('#charFourName').text(charFour.name);
			$('#charFourHp').text('HP: ' + charFour.hp);
		},

		player: function() {
			$('#playerName').text(charFour.name);
			$('#playerHp').text('HP: ' + charFour.hp);
		},

		enemy: function() {
			$('#enemyName').text(charFour.name);
			$('#enemyHp').text('HP: ' + charFour.hp);
		}
	}

	var playerChosen;
	var enemyChosen;
	var playerChar;
	var enemyChar;

	function reset() {
		playerChosen = false;
		enemyChosen = false;
		playerChar = 0;
		enemyChar = 0;
		
		charOne.setup();
		charTwo.setup();
		charThree.setup();
		charFour.setup();
	}

	function choosePlayer() {
		if (playerChar === 'charOne') {
			charOne.player();
			playerChosen = true;
		}
		else if (playerChar === 'charTwo') {
			charTwo.player();
			playerChosen = true;
		}
		else if (playerChar === 'charThree') {
			charThree.player();
			playerChosen = true;
		}
		else if (playerChar === 'charFour') {
			charFour.player();
			playerChosen = true;
		}
	}

		function chooseEnemy() {
		if (enemyChar === 'charOne') {
			charOne.enemy();
			enemyChosen = true;
		}
		else if (enemyChar === 'charTwo') {
			charTwo.enemy();
			enemyChosen = true;
		}
		else if (enemyChar === 'charThree') {
			charThree.enemy();
			enemyChosen = true;
		}
		else if (enemyChar === 'charFour') {
			charFour.enemy();
			enemyChosen = true;
		}
	}
// set up game board
reset();

// character select
$('.char').on('click', function() {
	if (playerChosen === false) {
		playerChar = $(this).attr('value');
		choosePlayer();
	}
	else if (playerChosen) {
		if (enemyChosen === false) {
			enemyChar = $(this).attr('value');
			chooseEnemy();
		}
	}
	if (playerChosen && enemyChosen) {
		$('#attack').css('visibility', 'visible');
	}
})






});