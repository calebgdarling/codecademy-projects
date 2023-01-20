const team = {
  _players: [
    {firstName: 'Karl', lastName: 'Anthony-Towns', age: 27},
    {firstName: 'Anthony', lastName: 'Edwards', age: 21},
    {firstName: 'D\'Angelo', lastName: 'Russell', age: 26}
  ],
  _games: [
    {opponent: 'Nuggets', teamPoints: 118, opponentPoints: 122},
    {opponent: 'Jazz', teamPoints: 125, opponentPoints: 126},
    {opponent: 'Cavaliers', teamPoints: 102, opponentPoints: 110}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    return team._players.push({firstName: newFirstName, lastName: newLastName, age:newAge});
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    return team._games.push({opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints});
  }
}

team.addPlayer('Bugs','Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team._players);
console.log(team._games);
