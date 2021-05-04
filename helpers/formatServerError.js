const formatServerError = (error) => `
	  code: ${error.code}
		errno: ${error.errno}
		syscall: ${error.syscall}
		address: ${error.address}
		message: ${error.message}
	`;

module.exports = formatServerError;
