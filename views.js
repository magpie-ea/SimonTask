/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

* More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views
*/

//Defining the views (instructions, begin, post questionnaire and thanks)
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome, nice to see you!',
  text: `<b>Thank you for participating in our experiment! </b><br>
	<br>
	You will need around <b>10 min</b> to complete the experiment. Please <strong>make sure that you will not be distracted</strong>. Switch off all messaging systems, your phone, any background music etc., and try to concentrate as much as possible on the task at hand.
  <br>
	<br>
	Click on the button below to <b>receive instructions</b>.
    `,
  buttonText: 'Show instructions'
});

const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  text: `In this experiment you will be shown two types of geometric figures: a square and a circle. On each trial, you will first see a fixation cross in the middle of the screen, which prompts you that the next trial is about to start. Please <strong>center your gaze at the fixation cross at the start of each trial</strong>. When the fixation cross disappears, exactly one of the shapes (square or circle) will be displayed, either on the <b>left or right</b> part of your screen.
            <br><br>` + key_press_instruction_message +
    `<br><br> Please try to <strong>press the key as soon as possible while also trying to make as few errors as you can</strong>.
            <br> <br> Before the actual experiment starts, a practice session will give you the possibility to familiarize yourself with the task.
			`
});


const instruction_practice = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instruction_practice',
  title: 'Instructions Practice Session',
  text: `We are now going to practice the task.<br><br>` + key_press_instruction_message_short + `<br><br>Be as <strong>fast</strong> and as <strong>accurate</strong> as possible.`,
  buttonText: 'Start practice'
});


const instruction_test = magpieViews.view_generator("begin", {
  trials: 1,
  name: 'instruction_test',
  title: 'Instructions Test Session',
  text: `<b>Very good!</b> The next part will be the actual test session.<br><br>` +
    key_press_instruction_message_short +
    `<br><br>Be as <b>fast</b> and as <b>accurate</b> as possible.`,
  buttonText: 'Start Test'
});

const instructionsPostTest = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions_post_test',
  title: 'Post Questionnaire',
  text: `We are almost done! Please finish the experiment by leaving some (optional) information. Make sure that you leave your student ID (a.k.a. Matrikelnummer) and the course you are doing this experiment for.`
});

const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, except that <strong>you have to enter your student ID  and indicate the course you are doing this experiment for, if you need course credit.</strong>',
  languages_question: '<strong>Student ID</strong>',
  languages_more: '(obligatory for course credit!)',
  edu_question: 'Which course are you taking part in?',
  edu_graduated_high_school: 'Intro Cogn. Neuro-Psychology',
  edu_graduated_college: 'Experimental Psych Lab',
  edu_higher_degree: 'both'
});

// the 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});
/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

// Defining the trial sessions (practice and test)

/*
 Do we actually want to hide the stimulus again? DeHower (2003) didn't:
    "A white fixation cross for 500 ms; the word until a correct response was given;
     if the participant made an incorrect response, a red cross appeared underneath
     the word until the participant pressed the correct key."
For that reason, I also increased the durations a bit towards those numbers.
*/
const practice_session = keyPress_simontask({
  trials: nr_trials_practice,
  name: 'practice_session',
  trial_type: 'practice',
  data: trial_info_practice,
  fix_duration: 200,
  //stim_duration: 500, // this hides the stimulus after 500ms!
  //pause: 500, // random pause generated in the custom_view
  hook: {
    after_response_enabled: count_time
  }
});

const test_session = keyPress_simontask({
  trials: nr_trials_test,
  name: 'test_session',
  trial_type: 'main',
  data: trial_info_test,
  fix_duration: 200,
  //stim_duration: 500, // this hides the stimulus after 500ms!
  //pause: 500, // random pause generated in the custom_view
  hook: {
    after_response_enabled: count_time
  }
});
