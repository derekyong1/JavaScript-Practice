/**
 * Create a Backpack object.
 */

 const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };

  // Dot Notation
  console.log("The backpack object:", backpack);
  console.log("The pocketNum value:", backpack.pocketNum);
  console.log("Strap length L:", backpack.strapLength.left);

  // Bracket Notation
  console.log("The pocketNum value:", backpack["pocketNum"]);


  // Difference between Dot and Bracket is that Bracket allows us to do more advance things. In addition, Bracket can use variables with non-standard names.
  var query = "pocketNum";
  console.log("The pocketNum value:", backpack[query]);


  console.log("Left before:", backpack.strapLength.left);

  backpack.newStrapLength(10, 15);

  console.log("Left after:", backpack.strapLength.left);