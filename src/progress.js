var ProgressBar = require('progressbar.js');

var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
    }
});

bar.animate(0.7);

