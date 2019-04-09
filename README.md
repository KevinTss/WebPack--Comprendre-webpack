# Webpack--Comprendre-webpack
  
[Here](https://www.grafikart.fr/formations/webpack) is the link to the video tutorial
  
## Part 1
  
```
First try to understand what do webpack for you
```
  
- Add Webpack to the project using --> `npm install --save-dev webpack`
  
On that point you just create a `node_modules` directory
  
- Compile with webpack --> `./node_modules/.bin/webpack assets/js/app.js dist/bundle.js`
  
Here you basically use the webpack script in node_module to execute the compile with the input file and the output
  
## Part 2
  
```
Here use the configuration file of webpack and avoid using command line to complie
```
  
- Add a `webpack.config.js` file exporting the config js object
  
You just create an object exporting a js object, in it you can configure lot of thing see the doc [here](https://webpack.js.org/configuration)

- You need to use `path` from NodeJS to resolve path's and make them absolute (commit: [31ca845](https://github.com/KevinTss/WebPack--Comprendre-webpack/commit/31ca84593681f69b23156a425bfb4dc3d869e602))
