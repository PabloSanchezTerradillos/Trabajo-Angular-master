export interface CarrerasAlonso {
  driverId: string;
  Races: Array<Races>;
}
// carrerasAlonso
export interface Races {
  season: string;
  round: string;
  url: string;
  Circuit: Circuit;
  date: Date;
  Results: Array<Results>;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    lat: string;
    long: string;
    locality: string;
    country: string;
  };
}

export interface Results {
  number: string;
  position: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
}

export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
