import { db } from "../database/database.connection";
import { CreateGame, Game } from "../protocols/game-protocol";

const games: Game[] = [];

async function getGames() {
  const games = await db.query<Game>(`SELECT * FROM games`)
  return games.rows
}

async function createGame(game: Game) {
  await db.query<CreateGame>(`INSERT INTO games (title, platform) VALUES ($1, $2);`, [game.title, game.platform])
}

function getGameByTitleAndPlatform(game: Game) {
  return games.find(({ title, platform }) => {
    return game.title === title && game.platform === platform;
  })
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;