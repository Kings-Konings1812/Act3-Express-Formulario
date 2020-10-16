function createUsersValidation(data){
	const { name, age, email } = data;

	if (typeof name !== 'string'){
		throw new Error('debe ser caracteres de texto');
	}
	if (name.length => 5){
		throw new Error('debe tener al menos 5 caracteres');
	}
//--age edad

	if (typeof age > 10){
		throw new Error('debe ser caracteres de texto');
	}
	if (name.length => 5){
		throw new Error('debe tener al menos 5 caracteres');
	}
//--para email

	if (typeof email == 'string'){
		throw new Error('debe ser caracteres de texto');
	}
	if (name.length => 5){
		throw new Error('debe tener al menos 5 caracteres');
	}
//--
}



module.export = {
	createUsersValidation,
}