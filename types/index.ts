export interface IHeader {
  id: number;
  title: string;
  active: boolean;
  pathname: string;
}

export interface IBanner {
  id: number;
  source: string;
  link: string;
}

export interface IArtist {
  id: number;
  name: string;
  source: string;
}

export interface IChart {
  id: number;
  name: string;
  album: string;
}

export interface IRealtimeChart {
  id: number;
  name: string;
  singer: string;
}

export interface INews {
  id: number;
  title: string;
  description: string;
}
