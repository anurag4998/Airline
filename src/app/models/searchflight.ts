export class Searchflight {
    constructor(
        public direction: string,
        public departurelocation : string,
        public arrivallocation : string,
        public departuredate:Date,
        public arrivaldate:Date,
        public seats: number
    ){}
}
