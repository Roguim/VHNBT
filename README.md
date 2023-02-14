# VHNBT
A publicly available web-based NBT Editor, specifically designed for modifying Vault Hunters 3rd Edition files.

# PROJECT IS STILL WORK IN PROGRESS. DO NOT EXPECT A FUNCTIONAL PRODUCT AS OF YET.

# Processes
Fill in the UUID in the HTML document, Upload your NBT file onto the button, then press start.
This will simply load the NBT file properly so that you can modify it using filters (e.g. Delete where UUID = XXXYYYZZZ)

## It says no mapping found? / Other mapping errors
Open the mappings/mapping.js file, check the schema to make sure it matches on the essential fields at the minimum and has been added to the mappings object, under the correct file name for your nbt file.

# Open Source Libraries Used:
nbtparser.js:
Retrieved from https://github.com/sjmulder/nbt-js/blob/master/nbt.js
Date: 26/11/2022; Commit 083400a

pako.min.js:
Retrieved from https://github.com/nodeca/pako/blob/master/dist/pako.es5.min.js
Date: 2/12/2022; Commit b61f524
