export class Quotes {
    showDescription:boolean;
    constructor(public id:number,public quotename:string, public author:string,public postDate:Date
        ,public like:number,public dislike:number,) {
            
        this.showDescription=false;
    }
}
