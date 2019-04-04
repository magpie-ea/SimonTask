/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

const intro = babeViews.intro({
    trials: 1,
    name: 'intro',
    text:   `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br>
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</strong>
    <br>
	<br>
	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br>
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</strong>
    `,
    buttonText: 'begin the experiment'
});

const instructions = babeViews.instructions({
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br>
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
    buttonText: 'Next'
});

const instruction_practice = babeViews.instructions({
    trials: 1,
	name: 'instruction_practice',
	title: 'Instruction Practice Session',
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br>
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
	buttonText: 'Start practice'
});

const instruction_test = babeViews.begin({
    trials: 1,
	name: 'instruction_test',
	title: 'Instruction Test Session',
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br>
			eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
	buttonText: 'Start Test'
});

const instructionsPostTest = babeViews.instructions({
    trials: 1,
    name: 'instructions_post_test',
    title: 'Post Questionnaire',
    text: `Next you will see a sample <a href='/'>Post Test view</a>. 
    The default questions and answer options are in English, however, the whole questionnaire can be translated. In the following Post Test
    sample the questions are in German.`
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

// part of the practice sample

const practice_session = babeViews.keyPress({
    trials: 4,
    name: 'practice_session',
    trial_type: 'KeyPress',
    data: _.shuffle(condition_one.practice),
	fix_duration: 500,
	pause: 500
});

const test_session = babeViews.keyPress({
	trials: 8,
	name: 'test_session',
	trial_type: 'KeyPress',
	data: _.shuffle(condition_one.test),
	fix_duration: 500,
	pause: 500
});