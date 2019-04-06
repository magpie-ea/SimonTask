 const condition_one =  {
    // maybe don't display a question (thus having less overall stimuli on screen")?
    // as it is now, it might interfere with the experiment
    practice:[
        {
            question: "Press <strong>q</strong> for circle and <strong>p</strong> for square",
            picture: "images/circle_right.png",
            key1: 'q',
            key2: 'p',
			q: 'circle',
			p: 'square',
			expected: 'circle'
        },
        {
            question: "Press <strong>q</strong> for circle and <strong>p</strong> for square",
            picture: "images/circle_left.png",
            key1: 'q',
            key2: 'p',
			q: 'circle',
			p: 'square',
			expected: 'circle'
        },
		{
			question: "Press <strong>q</strong> for circle and <strong>p</strong> for square",
            picture: "images/square_right.png",
            key1: 'q',
            key2: 'p',
			q: 'circle',
			p: 'square',
			expected: 'square'
		},
		{
			question: "Press <strong>q</strong> for circle and <strong>p</strong> for square",
            picture: "images/square_left.png",
            key1: 'q',
            key2: 'p',
			q: 'circle',
			p: 'square',
			expected: 'square'
		}
    ],
    // the following is the counter-balance, maybe don't call it 'test' but 'counter' or similar
    // same goes for 'practice' above in that case
	test:[
        {
            question: "Press <strong>q</strong> for square and <strong>p</strong> for circle",
            picture: "images/circle_right.png",
            key1: 'q',
            key2: 'p',
			q: 'square',
			p: 'circle',
			expected: 'circle'
        },
        {
            question: "Press <strong>q</strong> for square and <strong>p</strong> for circle",
            picture: "images/circle_left.png",
            key1: 'q',
            key2: 'p',
			q: 'square',
			p: 'circle',
			expected: 'circle'
        },
		{
			question: "Press <strong>q</strong> for square and <strong>p</strong> for circle",
            picture: "images/square_right.png",
            key1: 'q',
            key2: 'p',
			q: 'square',
			p: 'circle',
			expected: 'square'
		},
		{
			question: "Press <strong>q</strong> for square and <strong>p</strong> for circle",
            picture: "images/square_left.png",
            key1: 'q',
            key2: 'p',
			q: 'square',
			p: 'circle',
			expected: 'square'
		}
    ]
 }
 

