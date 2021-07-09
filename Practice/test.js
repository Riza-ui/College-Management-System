/**
* Create table Object
*/
function clickme(){
console.log("you click me")
}

const table={
    name : "Everyday use",
    brand :  "Ikea",
    dimension :{
        height : 20,
        length :44,
        width :20,
    },
movable = false,
movingTable: function(status){
    this.movable=status;
},
newDimension: function(height, length, width){
    this.dimension.height = height;
    this.dimension.length = length;
    this.dimension.width = width;
},
};

console.log("The table is:", table);
console.log("The dimensionis", table.dimension);
