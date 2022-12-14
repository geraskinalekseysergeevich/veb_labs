function createTable() {
	
	let first = document.getElementById('table').getElementsByTagName('table').length;

	if (first == undefined || first == 0) {
		let table = document.createElement('table'); /*создали <table>*/
		let tr = document.createElement('tr'); /*создали <tr>*/
		let td1 = document.createElement('td'); /*создали <td>*/
		let td2 = document.createElement('td'); /*создали <td>*/

		td1.innerHTML = '1.';
		td2.innerHTML = '<br>';

		tr.append(td1);
		tr.append(td2);
		table.append(tr);

		table.setAttribute('id', 'table_structure');
		document.getElementById('table').append(table);
		
		document.getElementById('add_line_button').removeAttribute('disabled');
		document.getElementById('delete_line_button').removeAttribute('disabled');
		document.getElementById('line_number').removeAttribute('disabled');

		console.log('table created');
	} else {
		alert('Извините, таблица уже создана')
	}
}

let numeration = 2;

function addLine() {
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');

	td1.innerHTML = numeration + '.';
	td2.innerHTML = '<br>';

	tr.append(td1);
	tr.append(td2);

	document.getElementById('table_structure').append(tr);
	numeration += 1;
	console.log('line added');
}

function deleteLine() {
	let line_number = Number(document.getElementById('line_number').value); /*берем номер строки из input*/

	let line = document.getElementById('table_structure').getElementsByTagName('tr')[line_number-1]; /*ищем такую по номеру строку*/

	if (line != undefined) {/*если строка нашлась*/

		let line_value = line.getElementsByTagName('td')[0].innerHTML; /*берем ее содержимое*/

		if (line_value == (line_number + '.')) {/*сравниваем с номером*/
			line.remove();	/*если все совпало удаляем*/
			console.log('line deleted');
		} else {
			alert('Строка с таким номером уже удалена, введите другое число');	/*если строка нашлась но содержимое не совпало*/
		}
	} else {
		alert('Строки с таким номером не существут, введите другое число')	/*если строка не нашлась*/
	}
}