// MAPPING FORMAT:
// {"player": String, "compounds": String, "root": String}
//  REQ player: Where we can find the player mappings - Splits at `/` character, treating that as another traversal down the tree.
//  REQ compounds: Where we can find the compound mappings (e.g. AbilityMappings) - Splits at `/` character, treating that as another traversal down the tree.
//      root: Where Player and Compounds both root off. If not specified, will be taken as root.
const essentialFields = {"player": "test", "compounds": "text"};

//Modify in here please :)
//Feel free to use another JS file for this too, just as long as it gets imported into the mappings object properly!
let asdMap = {"player": "9123",
            "compounds": "east/9123",
            "root": "abs"};

var mappings = {"asdf": asdMap};
