in order to create the code:
1. remove "type": "module", from line 18 of package.json
2. run yarn generate-code

Note that this does not work with the beta versions of babylon js. You will get errors with materials.

For the beta 4 build we:
1. copied code from react-babylon
2. updated package.json so that the name and version is correct for kadshow
3. Updated the versions of babylonjs to version 5 beta 4
4. updated paths within the generated code files to fix the build
5. ran yarn build to build the code

TESTING within Kadshow

Note that yarn link DOES NOT WORK for this package.
Instead, copy the dist folder, Licence, package.json and readme.md into the fe\client\node_modules\react-babylonjsv5 location directly after it is built

Uploading to npm

In order to ensure that only the required files are uploaded to npm:
1. copy the following to kadshow-reactBabylonjsv5\toNpm:
  a. dist folder
  b. LICENSE
  c. package.json
  d. README.md
2. open a windows terminal in the kadshow-reactBabylonjsv5\toNpm folder
3. log in to npm using the command: npm login
3. upload the package to npm with the command: npm publish --access public