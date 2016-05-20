(function(){
    function bubbleSort(data) {
        var arr = data.slice()
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
        }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

    function recursiveList () {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        //
        //Работа с нодами
        // Li
        var arr = [1,2,[3,4,[6,7,8],9],10,11];
        var arrText = document.createElement('p');
        function recursive(data) {
            var newlist = document.createElement("ul"),
            item;
            for (var i = 0; i < data.length; i++) {
                if (typeof data[i] == "object") item = recursive(data[i]);
                else {
                    item = document.createElement("li");
                    item.appendChild(document.createTextNode(data[i]))
                }
                newlist.appendChild(item)
            }
            return newlist
        };
        arrText.innerHTML = 'Nested list: ';
        document.getElementById('list').appendChild(arrText);
        document.getElementById('list').appendChild(recursive(arr));

    }

    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation(form) {
        //@todo при сабмите формы проверять поля на пустотое значение. 
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы

        // Главное проверить что что то есть не важно что и выделить не прошедшую валидацию
     }
	
	//вызывать функции здесь!
    sortHandler();
    recursiveList ();
})();