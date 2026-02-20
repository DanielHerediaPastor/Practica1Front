

export type GenderT = "male" | "female" | "n/a" | "hermaphrodite" | "unknown";


export type CharacterT = {
  name: string;
  gender: GenderT;
  birth_year: string;
};
