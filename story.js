// Story defined here as a dictionary of states
var story = {
"start":{title:"Start",text:"This is the start",options:[{text:"Next",link:"middle1"}]},
"middle1":{title:"Middle",text:"You can fork the examples in this repo and make your own games",options:[{text:"Next",link:"middle2"}]},
"middle2":{title:"Middle",text:"You can have multiple options",options:[{text:"Like this",link:"end"},{text:"Or this",link:"end"}]},
"end":{title:"End",text:"This is the end, there are no more options",options:null}
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
