// Story defined here as a dictionary of states
var story = {
"start":{title:"loop",text:"You are asleep",options:[{text:"Wake up",link:"amBedroomWake1"}]},

"amBedroomWake1":{title:"Bedroom",text:"You are lying in bed",options:[{text:"Get up",link:"amBedroomMain1"},{text:"Look around room",link:"amBedroomLook1"}]},
"amBedroomLook1":{title:"Bedroom",text:"There are doors leading to the bathroom and the living room. There is a single bed against the wall, a painting of the ocean above the bed, a clothes rail, and a window though which you can see a tree.",options:[{text:"Get up",link:"amBedroomMain1"}]},
"amBedroomLook2":{title:"Bedroom",text:"There are doors leading to the bathroom and the living room. There is a single bed against the wall, a painting of the ocean above the bed, a clothes rail, and a window though which you can see a tree.",options:[{text:"Back",link:"amBedroomMain1"}]},
"amBedroomMain1":{title:"Bedroom",text:"You are stood in your bedroom",options:[{text:"Look around",link:"amBedroomLook2"},{text:"Go to bathroom",link:"amBathroomMain1"},{text:"Get dressed",link:"amBedroomClothes2"},{text:"Go to living room",link:"amBedroomClothes1"},]},
"amBedroomMain2":{title:"Bedroom",text:"You are stood in your bedroom",options:[{text:"Look around",link:"amBedroomLook2"},{text:"Go to bathroom",link:"amBathroomMain1"},{text:"Go to living room",link:"end"},]},
"amBedroomClothes1":{title:"Bedroom",text:"You haven't got dressed yet.",options:[{text:"Back",link:"amBedroomMain1"},]},
"amBedroomClothes2":{title:"Bedroom",text:"You put on your work uniform.",options:[{text:"Back",link:"amBedroomMain2"},]},

"amBathroomMain1":{title:"Bathroom",text:"You are stood in your bathroom",options:[{text:"Look around",link:"amBathroomLook1"},{text:"Go to bedroom",link:"amBedroomMain1"},{text:"Use shower",link:"amBathroomShower1"}]},
"amBathroomMain2":{title:"Bathroom",text:"You are stood in your bathroom",options:[{text:"Look around",link:"amBathroomLook1"},{text:"Go to bedroom",link:"amBedroomMain1"}]},
"amBathroomLook1":{title:"Bathroom",text:"There is a door behind you leading to your bedroom. The room is lined with grubby white tiles, on your right is a shower with a glass door, on your left is the toilet, and in front of you is a sink above which is a mirror.",options:[{text:"Back",link:"amBathroomMain1"}]},
"amBathroomShower1":{title:"Bathroom",text:"The water in the shower is warm and soothing",options:[{text:"Wash",link:"amBathroomMain1"}]},

"blank":{title:null,text:null,options:[{text:"",link:"end"}]},

"end":{title:"End",text:"This is the end, there are no more options",options:null},
            };

// Game state machine
function loadState(state) {
  // Get reference to UI elements
  var title = document.getElementById("title");
  var text = document.getElementById("text");
  var options = document.getElementById("options");
  // Update UI
  if (state.title) {
    title.innerHTML = state.title;
  }
  if (state.text) {
    text.innerHTML = state.text;
  }
  if (state.options) {
    var temp = "";
    for(var option of state.options){
      temp += `<div class="option" onclick=loadState(story["${option.link}"])>${option.text}</div>`;
    }
    options.innerHTML = temp;
  } else {
    options.innerHTML = ""; // Clear options
  }
}

loadState(story["start"]); // Load starting state
