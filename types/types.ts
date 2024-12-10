export interface Itinerary {
    hotel : Hotel ;
    
}

export interface ItineraryItem {
    day : number ;
    place : string ;
    description : string ;
    image : string ;
    visited : number ;
}

export interface Hotel {
    name : string ;
    image : string ;
}
