export interface Pins {
    Title: string;
    // titre de la note
    Content: string;
    // contenu de la note
    Author: string;
    // auteur de la note
    Tags: string[];
    // tags de la note
    Insight: number;
    // nombre de vues de la note
    CreationDate: string;
    // date de création de la note
    id: number;
    // identifiant de la note
}
  
const pins: Pins[] = [
  {
      Title:'Sample Title',
      Content:'Hello world lorem ipsum etc..',
      Author:'Sample Author',
      Tags:["Sample Tag1","Sample Tag2", "Sample Tag3"],
      Insight:9,
      CreationDate: "16/03/2023",
      id:0
  }
];
  
  export const getPins = () => pins;
  
  export const getPin = (id: number) => pins.find(m => m.id === id);