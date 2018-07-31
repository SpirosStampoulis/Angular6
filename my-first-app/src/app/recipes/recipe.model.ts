export class Recipe {
//   vanilla typescript create model for recipe
   public name: string;
   public description: string;
   public imagePath: string;

   constructor(name: string, desc: string, imagePath: string) {
       this.name = name;
       this.description = desc;
       this.imagePath = imagePath;

   }
}
