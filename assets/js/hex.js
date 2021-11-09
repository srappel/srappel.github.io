console.log("js has been read")
var canvas=document.getElementById("myCanvas");
var context=canvas.getContext('2d');

function createImage(i){   // load an image function 
               // creates a new i each time it is called
    var image = new Image();  // create a new image variable 
    image.src = hexes[i][0];
    image.onload = function(){  // now the onload will have the correct variables 
        context.drawImage(image,hexes[i][1],hexes[i][2]);
        } 
}
var hexes = [
    ['images/hex/ubuntu.png',0,0],
    ['images/hex/carpentries-datacarpentry.png',184,0],
    ['images/hex/carpentries-librarycarpentry.png',368,0],
    ['images/hex/carpentries-softwarecarpentry.png',552,0],
    ['images/hex/carpentries.png',92,160],
    ['images/hex/eff.png',286,160],
    ['images/hex/geoblacklight.png',460,160],
    ['images/hex/geohipster.png',644,160],
    ['images/hex/opengeometadata.png',0,320],
    ['images/hex/privacybadger.png',184,320],
    ['images/hex/rstudio.png',368,320],
    ['images/hex/antifa.png',552,320]
];
for(var i = 0; i < hexes.length; i += 1){
    createImage(i); // call the function so it can create unique variables for each image
};