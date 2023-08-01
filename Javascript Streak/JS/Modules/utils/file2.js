
export const myAge=19;

export class Animal{
    constructor(name,isDomestic,canClimb){
        this.name=name;
        this.isDomestic=isDomestic;
        this.canClimb=canClimb
    }
    canClimbTree=()=>{
        console.log(this.canClimb);
    }
}