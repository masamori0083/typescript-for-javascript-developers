export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Butter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OtiaiHiromitu: Butter1 = {
  battingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Butter1;

const Ootani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
