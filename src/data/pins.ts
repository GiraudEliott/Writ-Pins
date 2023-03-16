export interface Node {
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
    CreationDate: Date;
    // date de création de la note
    id: number;
    // identifiant de la note
}
  
const data: Node[] = [
  {
      Title:'Sample Title',
      Content:'Hello world lorem ipsum etc..',
      Author:'Sample Author',
      Tags:["Sample Tag1","Sample Tag2", "Sample Tag3"],
      Insight:9,
      CreationDate:new Date(),
      id:0
  }
];
  
  export const getNodes = () => data;
  
  export const getNode = (id: number) => data.find(m => m.id === id);