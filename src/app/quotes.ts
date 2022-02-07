export class Quotes {
    showDescription:boolean;
    constructor(public id:number,public name:string, public description:string,public postDate:Date
        ,public like:number,public dislike:number,) {
            
        this.showDescription=false;
    }
}
