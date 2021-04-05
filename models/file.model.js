/**
 * Sequelize the file so it can be reconstructed to the original.
 */
module.exports = (sequelize, Sequelize) => {
	const File = sequelize.define('file', {
		type: {
			type: Sequelize.STRING
		},
		name: {
			type: Sequelize.STRING
		},
		data: {
			type: Sequelize.BLOB('long')
		}
	});
	
	return File;
}