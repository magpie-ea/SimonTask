/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

//Defining the views (instructions, begin, post questionnaire and thanks)
const intro = babeViews.intro({
    trials: 1,
    name: 'intro',
    title: 'Welcome, nice to see you',
    text:   `<b>Thank you for participating in advance! </b><br>
	<br>
	In the following you will conduct a so-called <b>Simon Task</b>, where your task will be ask to press a certain key dependent on the presented picture.<br>
    <br>
	You will need around <b>13 min</b> to complete the experiment.<br>
	<br>
	If you want to <b>start</b> please click on the button below to proceede with <b>detailed instructions</b>.
    `,
    buttonText: 'Begin the experiment'
});

const instructions = babeViews.instructions({
	trials:1,
	name: 'instructions',
	text: `In this experiment you will be shown a <b>square</b> or a <b>circle</b>, either on the <b>left or right</b> part of your screen.
            <br>
			Whenever you see a <b>square</b>, please press the <strong>"q"</strong> key on your keyboard, whenever you see 
            a <b>circle</b>, please press the <strong>"p"</strong> key - regardless of the position of the symbol. 
            <br>
            Plese try to press the key as <b>soon as possible</b> while also trying to make as <b>few errors</b> as you can.
            <br> 
            <br>
            Before the actual experiment starts, a <b>practice session</b> will give you the possibility to familiarize with the task.
			An information site after the practice session will announce when the test session starts.`
});
			

const instruction_practice = babeViews.instructions({
    trials: 1,
	name: 'instruction_practice',
	title: 'Instruction Practice Session',
    text: `<br>Press  <strong>"p"</strong> whenever you see a <b>square</b> and
	<br>
	press <strong>"q"</strong> whenever you see a <b>circle</b>.
	<br>
	<br>
	Be as <b>fast</b> and as <b>accurate</b> as possible.`,
	buttonText: 'Start practice'
});


const instruction_test = babeViews.begin({
    trials: 1,
	name: 'instruction_test',
	title: 'Instruction Test Session',
    text: `<b>Very good!</b><br>
		The next part will be the test session.
		<br>
		<br>Press  <strong>"p"</strong> whenever you see a <b>square</b> and
	press <strong>"q"</strong> whenever you see a <b>circle</b>.
	<br>
	<br>
	Be as <b>fast</b> and as <b>accurate</b> as possible.`,
	buttonText: 'Start Test'
});

const instructionsPostTest = babeViews.instructions({
    trials: 1,
    name: 'instructions_post_test',
    title: 'Post Questionnaire',
    text: `<b>Thank you so far, you are almost done!</b>
	<br>
	In the following you will receive a <b>post questionnaire</b>, please answer the questions. `
});

// the post questionnaire can be translated
const post_test = babeViews.postTest({
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
	
    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// the 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.thanks({
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/

// Defining the trial sessions (practice and test)
const practice_session = keyPress_simontask({
    trials: 10,
    name: 'practice_session',
    trial_type: 'KeyPress',
    data: simonTask_info.keyPress_practice,
	fix_duration: 100,
	stim_duration: 200,
	pause: 400,
	hook: {
		after_response_enabled: count_time
		}
});

const test_session = keyPress_simontask({
	trials: 48,
	name: 'test_session',
	trial_type: 'KeyPress',
	data: simonTask_info.keyPress_test,
	fix_duration: 100,
	stim_duration: 200,
	pause: 400,
	hook: {
		after_response_enabled: count_time
		}
});