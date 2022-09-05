export enum Waste_Type_Enum {
  General_Waste = "General_Waste",
  Recycling = "Recycling",
}

let wasteItemsMap = new Map<string, Waste_Type_Enum>([  // Ref: https://howtodoinjava.com/typescript/maps/
    ["gwaste_plastic_straws", Waste_Type_Enum.General_Waste],
    ["gwaste_toy", Waste_Type_Enum.General_Waste],
    ["recycle_cardboard", Waste_Type_Enum.Recycling],
    ["recycle_plastic_bottles", Waste_Type_Enum.Recycling]
]);

export default wasteItemsMap;


// const wastes = [
//   {
//     name: "gwaste_plastic_straws",
//     type: Waste_Type_Enum.General_Waste,
//   },
//   {
//     name: "gwaste_toy",
//     type: Waste_Type_Enum.General_Waste,
//   },
//   {
//     name: "recycle_cardboard",
//     type: Waste_Type_Enum.Recycling,
//   },
//   {
//     name: "recycle_plastic_bottles",
//     type: Waste_Type_Enum.Recycling,
//   },
// ];

//  //If more complext waste definition: 
// type Waste = {
//     name: string
//     type: Waste_Type_Enum
// }
// const wastesList: {[name: string]: Waste} = {}

// const wastesList: {[name: string]: Waste_Type_Enum} = {}
// wastesList.gwaste_plastic_straws = Waste_Type_Enum.General_Waste
// wastesList.gwaste_toy = Waste_Type_Enum.General_Waste
