// You are given a string with results of NBA teams (see the data in "Sample Tests") separated by commas e.g:

// r = Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112, Los Angeles Clippers 100 Boston Celtics 120.

// A team name is composed of one, two or more words built with letters or digits: Atlanta Hawks, Philadelphia 76ers...

// Given a string of results and the name of a team (parameter : to_find) your function nba_cup (or nbaCup or ...) will return as a string

// the name of the team followed by : and
// the number of matches won by the team
// the number of draws
// the number of matches lost by the team
// the total number of points scored by the team
// the total number of points conceded by the team
// and finally a kind of marks in our ranking system

// a team marks 3 if it is a win
// a team marks 1 if it is a draw
// a team marks 0 if it is a loss.
// The return format is:

// "Team Name:W=nb of wins;D=nb of draws;L=nb of losses;Scored=nb;Conceded=nb;Points=nb"
// Remarks:
// The team name "" returns "".

// If a team name can't be found in the given string of results you will return "Team Name:This team didn't play!" (See examples below).

// The scores must be integers. If a score is a float number (abc.xyz...) you will return: "Error(float number):the concerned string"

// Examples:
// nba_cup(r, "Los Angeles Clippers") -> "Los Angeles Clippers:W=1;D=0;L=1;Scored=204;Conceded=208;Points=3"

// nba_cup(r, "Boston Celtics") -> "Boston Celtics:W=1;D=0;L=0;Scored=120;Conceded=100;Points=3"

// nba_cup(r, "") -> ""

// nba_cup(r, "Boston Celt") -> "Boston Celt:This team didn't play!"

// r0="New York Knicks 101.12 Atlanta Hawks 112"
// nba_cup(r0, "Atlanta Hawks") -> "Error(float number):New York Knicks 101.12 Atlanta Hawks 112"

const nbaCup = (resultSheet, toFind) => {
  if (toFind === '') return ''
  const teamsScores = {}
  const scoreObj = { wins: 0, draws: 0, losses: 0, scoredPoints: 0, concededPoints: 0, mark: 0 }

  for (const r of resultSheet.split(',')) {
    const scores = r.split(' ').filter((s) => /^\d+$/.test(s))

    const firstTeam = r.substring(0, r.indexOf(scores[0])).trim()
    const secondTeam = r.substring(r.indexOf(scores[0]) + scores[0].length, r.indexOf(scores[1])).trim()
    const firstTeamScore = parseInt(scores[0])
    const secondTeamScore = parseInt(scores[1])

    if (scores.length < 2) {
      const scoresWithFloats = r.split(' ').filter((s) => parseInt(s))
      return `Error(float number):${r.substring(0, r.indexOf(scoresWithFloats[0])).trim()} ${scoresWithFloats[0]} ${r
        .substring(r.indexOf(scoresWithFloats[0]) + scoresWithFloats[0].length, r.indexOf(scoresWithFloats[1]))
        .trim()} ${scoresWithFloats[1]}`
    }

    if (!teamsScores[firstTeam]) teamsScores[firstTeam] = { ...scoreObj }
    if (!teamsScores[secondTeam]) teamsScores[secondTeam] = { ...scoreObj }

    teamsScores[firstTeam].scoredPoints += firstTeamScore
    teamsScores[secondTeam].scoredPoints += secondTeamScore
    teamsScores[firstTeam].concededPoints += secondTeamScore
    teamsScores[secondTeam].concededPoints += firstTeamScore

    if (firstTeamScore > secondTeamScore) {
      teamsScores[firstTeam].wins += 1
      teamsScores[firstTeam].mark += 3
      teamsScores[secondTeam].losses += 1
    } else if (secondTeamScore > firstTeamScore) {
      teamsScores[secondTeam].wins += 1
      teamsScores[secondTeam].mark += 3
      teamsScores[firstTeam].losses += 1
    } else if (firstTeamScore === secondTeamScore) {
      teamsScores[secondTeam].draws += 1
      teamsScores[firstTeam].draws += 1
      teamsScores[firstTeam].mark += 1
      teamsScores[secondTeam].mark += 1
    }
  }
  return teamsScores[toFind]
    ? `${toFind}:W=${teamsScores[toFind].wins};D=${teamsScores[toFind].draws};L=${teamsScores[toFind].losses};Scored=${teamsScores[toFind].scoredPoints};Conceded=${teamsScores[toFind].concededPoints};Points=${teamsScores[toFind].mark}`
    : `${toFind}:This team didn't play!`
}

nbaCup('Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 105 Atlanta Hawks 112', 'Atlanta Hawks')
