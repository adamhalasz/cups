var cups = require('../')
var assert = require('assert')

function arraysEqual(array1, array2){
	var result = true;
	for(var i = 0; i < array1.length; i++){
		if(array1[i] != array2[i]){
			console.error(array1[i], 'is not equal', array2[i])
			result = false;
			break;
		}
	}
	return result;
}

function generateArray(size){
	var array = []
	for(var i = 0; i < size; i++){
		array[i] = Math.floor(Math.random(i) * size)
	}
	return array
}

function sortArray(array){
	return array.concat().sort(function(a,b){
		return a-b;
	})
}

describe('Sorting', function(){
	describe('BubbleSort()', function(){
		it('Should sort Array with BubbleSort and match the generic sortedArray', function(){
			var array = generateArray(10000)
			var bubbleSortedArray = cups.BubbleSort(array)
			var sortedArray = sortArray(array)
			//console.log('bubbleSortedArray', bubbleSortedArray)
			//console.log('sortedArray', sortedArray)
			//console.log('arraysEqual', arraysEqual(sortedArray, bubbleSortedArray))
			assert.equal(arraysEqual(sortedArray, bubbleSortedArray), true)
		})
	})
	
	describe('InsertionSort()', function(){
		it('Should sort Array with InsertionSort and match the generic sortedArray', function(){
			var array = generateArray(10000)
			
			var insertionSortedArray = cups.InsertionSort(array)
			var sortedArray = sortArray(array)
			/*console.log('insertionSortedArray', insertionSortedArray)
			console.log('sortedArray', sortedArray)
			console.log('arraysEqual', arraysEqual(sortedArray, insertionSortedArray))*/
			assert.equal(arraysEqual(sortedArray, insertionSortedArray), true)
		})
	})
	
	describe('QuickSort()', function(){
		it('Should sort Array with QuickSort and match the generic sortedArray', function(){
			var array = generateArray(10)
			
			var quickSortedArray = cups.QuickSort(array, 0, array.length-1)
			var sortedArray = sortArray(array)
			console.log('array', array)
			console.log('quickSortedArray', quickSortedArray)
			console.log('sortedArray', sortedArray)
			console.log('arraysEqual', arraysEqual(sortedArray, quickSortedArray))
			assert.equal(arraysEqual(sortedArray, quickSortedArray), true)
		})
	})
})