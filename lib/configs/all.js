var merge = require( 'merge' );

module.exports = {

	plugins: [
		'wordpress',
	],

	rules: merge(
		require( './rules/best-practices' ),
		require( './rules/es6' ),
		require( './rules/node' ),
		require( './rules/possible-errors' ),
		require( './rules/stylistic-issues' ),
		require( './rules/variables' ),
		require( './rules/wordpress' )
	),
};
