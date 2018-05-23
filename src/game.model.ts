export type Player = {
  name: string;
  age: number;
};

export type PlayerService = {
  id: string;
  getPlayer: (s: string) => Player;
};

export interface IRequestService extends IService {
  get: (s: string) => string;
}
export interface IService {
  id: string;
}

export interface IGame {
  players: Player[];
  playerService: PlayerService;
  requestService: IRequestService;
  isRunning?: boolean;
  history: IGameData;
}

interface IGameData {
  [key: string]: string;
}

export interface IGameItem {
  type: string;
  logType: () => string;
}
