export interface PlayerInfo {
  name: string;
  score: number;
}

export interface GameObject {
  id: number;
  name: string;
  image: string;
  hidden: boolean;
}

export interface PlayerSelectionProps {
  setPlayers: (arg0: PlayerInfo[]) => void;
}

export interface BoardProps {
  players: PlayerInfo[];
  setPlayers: (arg0: PlayerInfo[]) => void;
}

export interface CircleProps {
  name: string;
  image: string;
  hidden: boolean;
  onClick: () => void;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: (arg0: boolean) => void;
}
