const NwBuilder = require('nw-builder');

const nw = new NwBuilder({
	files: ['./package.json', './dist/**/*', './assets/**/*', './index.html'],
	version: '0.68.1',
	mode: 'build',
	flavor: 'normal',
});

nw.build()
	.then((msg) => {
		console.log('info:', msg);
	})
	.catch((error) => {
		console.log('error:', error);
	});
