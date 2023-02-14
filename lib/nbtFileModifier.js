/**
* Receives the file from the local computer and turns it into a JS Array if it's a valid NBT File
* @return Promise<void>
*/
async function loadFile() {
    let buff = await document.getElementById('nbtFile').files[0].arrayBuffer();
    let arr = new Uint8Array(buff);
    let data = pako.inflate(arr);
    nbt.parse(data, function (error, data) {
        if (error) throw error;
        NBTRead = data;
        return NBTRead;
    });
}


/**
 * Retrieves the mapping for the mapping name
 * @param String
 * @return Object in format {"playerPath": String, "compoundPath": String}
 */
function getMapping(mappingName) {
    const mapping = mappings[mappingName];
    
    // Just check if the mapping exists for the name.
    if(mapping === null) {
        return new Error("No Mapping Found.");
    }

    // Validate mapping has required fields
    let essentialMappings = Object.entries(essentialFields);
    let errors = 0;

    for(i = 0; i < essentialMappings.length; i++) {
        if(mapping[essentialMappings[i][0]] === undefined) {
            console.log(new Error(`Missing essential field ${essentialMappings[i][0]}`));
            errors++;
        } else if(typeof(mapping[essentialMappings[i][0]]) !== typeof(essentialMappings[i][1])) {
            console.log(new Error(`Incorrect type for ${essentialMappings[i][0]}. Expected: ${typeof(essentialMappings[i][1])}`));
            errors++;
        }
    }

    if(errors > 0) {
        return new Error(`Improperly structured mapping for ${mappingName}. See console for errors.`);
    }

    // Now let's check optional fields are valid!
    let optMappings = Object.entries(optionalFields);

    let optFields = [];
    for(i = 0; i < optMappings.length; i++) {
        if(mapping[optMappings[i][0]] !== undefined) {
            if(typeof(mapping[optMappings[i][0]]) !== typeof(optMappings[i][1])) {
                console.warn(`Incorrect type for optional field ${optMappings[i][0]} in ${mappingName} mapping. Expected: ${typeof(optMappings[i][1])}. Continuing on with default values.\nYou may want to fix this, though.`);
            } else {
                optFields.push(optMappings[i][0]);
            }
        }
    }
}