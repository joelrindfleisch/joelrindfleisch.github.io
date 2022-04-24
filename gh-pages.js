import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/joelrindfleisch/joelrindfleisch.github.io.git',
		user: {
			name: 'joelrindfleisch',
			email: 'joelrindfleisch@gmail.com'
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);