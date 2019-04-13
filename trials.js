//Rotation of conditions (key press to circle/square)
const key_targets = _.shuffle(['circle', 'square']);
const p_target = key_targets[0];
const q_target = key_targets[1];
console.log("The shape for key P is " + p_target);

// text for general instructions
const instructions_p_is_circle = "<strong>Whenever you see a <b>square</b>, please press the 'q' key </strong> on your keyboard, <strong>whenever you see a <b>cirlce</b>, please press the 'p' key</strong> - regardless of the position of the shape.";
const instructions_p_is_square = "<strong>Whenever you see a <b>circle</b>, please press the 'q' key </strong> on your keyboard, <strong>whenever you see a <b>square</b>, please press the 'p' key</strong> - regardless of the position of the shape.";
const key_press_instruction_message = p_target == 'circle' ?
      instructions_p_is_circle :
      instructions_p_is_square ;

// text for short (recap) instructions
const short_instructions_p_is_circle = "Remember that <strong>'q'</strong> is for <strong>square</strong>, and <strong>'p'</strong> is for <strong>circle</strong>.";
const short_instructions_p_is_square = "Remember that <strong>'q'</strong> is for <strong>circle</strong>, and <strong>'p'</strong> is for <strong>square</strong>.";
const key_press_instruction_message_short = p_target == 'circle' ?
      short_instructions_p_is_circle :
      short_instructions_p_is_square ;

//Error feedback if participants exceeds the time for responding, and hides stimulus
const count_time = function(data, next) {
    console.log("function call count_time");
    if (typeof window.timeout === 'undefined'){
        console.log("inside first Boolean");
        window.timeout = [];
    }
    // add the timeout to the timeoutarray
    window.timeout.push(setTimeout(function(){
         $(".babe-view-stimulus").addClass("babe-invisible");
    }, 500));
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 3000));
    next();
 };

// all 2x2 major conditions
const conditions = [
    { // target: circle, position: left
        key1: 'q',
        key2: 'p',
			  q: q_target,
			  p: p_target,
        target_object: "circle",
        target_position: "left",
        condition: q_target == "circle" ? 'congruent' : 'incongruent',
			  canvas: {
            focalColor: 'blue',
            focalShape: 'circle',
            focalNumber: 1,
            elemSize: 100,
            total: 2,
            start_with: 'focal',
            otherShape: 'square',
            otherColor: 'white',
            sort: 'split_grid'
			  }
    },
    { // target: circle, position: right
        key1: 'q',
        key2: 'p',
			  q: q_target,
			  p: p_target,
        target_object: "circle",
        target_position: "right",
        condition: q_target == "circle" ? 'incongruent' : 'congruent',
			  canvas: {
            focalColor: 'blue',
            focalShape: 'circle',
            focalNumber: 1,
            elemSize: 100,
            total: 2,
            start_with: 'other',
            otherShape: 'square',
            otherColor: 'white',
            sort: 'split_grid'
			  }
    },
    { // target: square, position: left
        key1: 'q',
        key2: 'p',
			  q: q_target,
			  p: p_target,
        target_object: "square",
        target_position: "left",
        condition: q_target == "square" ? 'congruent' : 'incongruent',
			  canvas: {
            focalColor: 'blue',
            focalShape: 'square',
            focalNumber: 1,
            elemSize: 100,
            total: 2,
            start_with: 'focal',
            otherShape: 'circle',
            otherColor: 'white',
            sort: 'split_grid'
			  }
    },
    { // target: square, position: right
        key1: 'q',
        key2: 'p',
			  q: q_target,
			  p: p_target,
        target_object: "square",
        target_position: "right",
        condition: q_target == "square" ? 'incongruent' : 'congruent',
			  canvas: {
            focalColor: 'blue',
            focalShape: 'square',
            focalNumber: 1,
            elemSize: 100,
            total: 2,
            start_with: 'other',
            otherShape: 'circle',
            otherColor: 'white',
            sort: 'split_grid'
			  }
    }
 ];

const nr_trials_practice = 20;
const nr_trials_test = 80;

create_n_trials = function(nr_trials) {
    return _.map(_.range(nr_trials), function() {return _.sample(conditions);});
}

trial_info_practice = create_n_trials(nr_trials_practice);
trial_info_test = create_n_trials(nr_trials_test);
