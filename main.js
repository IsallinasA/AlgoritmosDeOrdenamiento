function generateRandomNumbers(algorithm) {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100)); 
    }
    displayResult(arr, algorithm);
}

function sortArray(algorithm) {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push(parseInt(prompt("Ingrese el número " + (i + 1))));
    }
    displayResult(arr, algorithm);
}

function displayResult(arr, algorithm) {
    var resultDiv = document.getElementById(algorithm + "-result");
    resultDiv.innerHTML = "<p>Arreglo Original: " + arr.join(", ") + "</p>";
    var sortedArr;
    switch (algorithm) {
        case "bubble":
            sortedArr = bubbleSort(arr.slice());
            break;
        case "selection":
            sortedArr = selectionSort(arr.slice());
            break;
        case "insertion":
            sortedArr = insertionSort(arr.slice());
            break;
        default:
            sortedArr = arr;
    }
    resultDiv.innerHTML += "<p>Arreglo Ordenado: " + sortedArr.join(", ") + "</p>";
}

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var min = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function insertionSort(arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

