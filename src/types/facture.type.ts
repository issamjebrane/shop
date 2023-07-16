export type facture ={
    id : number;
    ref : string;
    date : Date;
    id_client : number;
    id_produit : number;
    montantHT : number;
    montantTTC : number;
    tva: number;
}