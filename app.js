const PALETTE = [
    "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen"
  ]

for (let i = 0; i < PALETTE.length; i++) {

    let nextColor = PALETTE[i]
    let newButton = $('<button>').css("background-color", nextColor)
    $('.palette').append(newButton)

}
function makePalette() {

for (let i = 0; i < PALETTE.length; i++) {

    let nextColor = PALETTE[i]
    let newButton = $('<button>').css("background-color", nextColor)
    $('.palette').append(newButton)
    }
    $('.palette button').first().addClass('active');
  }
makePalette();

function makeGrid(){
    for(let i = 0; i < 64; i++){
        let newDiv = $('<div>').addClass("cell")
        $('.grid').append(newDiv)
    }
}
makeGrid();

function onPaletteClick(){
    $('.palette button').removeClass('active')
    $(this).click(onPaletteClick).addClass('active')
}
$('.palette button').click(onPaletteClick);

var mouseIsDown = false;
function onGridClick(){
    mouseIsDown = true;
    let theColor = $('.palette .active').css('background-color')
    $(this).css('background-color', theColor)
}
$('.grid .cell').mousedown(onGridClick)

function mouseDrag(){
    if(mouseIsDown){
        let theColor = $('.palette .active').css('background-color')
        $(this).css('background-color', theColor)
    }
}
$('.grid .cell').mouseenter(mouseDrag)

function onMouseUp(){
    mouseIsDown = false;
}
$(document).mouseup(onMouseUp)



function onClearClick(){
    $('.grid .cell').css('background-color', '');
}
$('.controls .clear').click(onClearClick)

function onFillAllClick(){
    let theColor = $('.palette .active').css('background-color')
    $('.grid .cell').css('background-color', theColor);
}
$('.controls .fill-all').click(onFillAllClick)

function onFillEmptyClick(){
    const theGridCells = $('.grid .cell')
    let theColor = $('.palette .active').css('background-color')

    console.log(theColor)
 for (let i = 0; i < theGridCells.length; i++) {
   let nextElement = $(theGridCells[i])

   if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
    $(nextElement).css('background-color', theColor)
    console.log("HELLOOOOO")
    }
  }

}
let theColor = $('.palette .active').css('background-color')
$('.controls .fill-empty').click(onFillEmptyClick)

function createWithInput(){
    let createWithText = $('.controls .searchButton').val()
    let newButton = $('<button>').css("background-color", createWithText)
    $('.palette').prepend(newButton)
    $('.palette button').removeClass('active')
    newButton.click(onPaletteClick).addClass('active')


    $('.palette button').click(onPaletteClick);

}
$('.controls .create').click(createWithInput)
