// class Personne {
//   id: number;
//   nom: string;
//   prenom: string;

//   constructor(id: number, nom: string, prenom: string) {
//     this.id = id;
//     this.nom = nom;
//     this.prenom = prenom;
//   }
// }
export class Personne {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {}
}
