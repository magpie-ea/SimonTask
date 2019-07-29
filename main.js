// initialises a magpie experiment with magpieInit
$("document")
  .ready(function () {
    // prevent scrolling when space is pressed
    window.onkeydown = function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
      views_seq: [
            intro,
            instructions,
            instruction_practice,
            practice_session,
            instruction_test,
            test_session,
            instructionsPostTest,
            post_test,
            thanks,
        ],
      deploy: {
        experimentID: "52",
        serverAppURL: "https://mcmpact.ikw.uni-osnabrueck.de/magpie/api/submit_experiment/",
        deployMethod: "debug",
        contact_email: "michael.franke@uni-osnabrueck.de",
        prolificURL: "unnecessary"
      },
      progress_bar: {
        in: [
                // list the view-names of the views for which you want a progress bar
                "practice_session",
                "test_session"
            ],
        style: "separate",
        width: 100
      }
    });
  });
