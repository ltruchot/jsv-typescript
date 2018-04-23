// npm init a project

// TSLINT have the abaility to check our code on the fly, like a grammar tool
// npm install --save-dev typescript tslint
// write tslint.json
// marioScore = 2 ++ 1 + 'points"; // a lot of error here
const peachScore = 2 + 1 + ' points'; // clean code

// AUTOMATED PROCESS TO BUILD & WATCH
// npm i --save-dev webpack-cli webpack
// write webpack.config.js
// write index.html
// create a build job
console.log('peach à déjà ' + peachScore);
// set webpack to autorun tsc
// npm i awesome-typescript-loader --save-dev
// create a watch job
console.log('peach à déjà ' + peachScore + ', wahou !');

// AUTOMATED PROCESS TO WATCH & RELOAD
// npm i --save-dev webpack-dev-server
// add HTML plugin
// npm i --save-dev html-webpack-plugin
// create a start:dev job
console.log('peach à déjà ' + peachScore + ', incroyable !');

// add port 4200, mode development
console.log(`peach à déjà ${peachScore}, c'est la meilleure !`);
throw new Error();
