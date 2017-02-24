function BubbleSort(array){
	var swapped = true;
	//var iterations = 0;
	while(swapped){
		//iterations++
		swapped = false;
		var arrayLength = array.length - 1;
		for(var i = 0; i < arrayLength; i++){
			var left = array[i];
			var right = array[i+1];
			
			if(right < left) {
				swapped = true;
				array[i] = right;
				array[i+1] = left;
			}
		}
	}
	//console.log('BubbleSort Iteration Count', iterations)
	return array;
}

function InsertionSort(array){
	var arrayLength = array.length-1;
	for(var i = 0; i < arrayLength; i++){
		var endIndex = i+1
		for(var j = endIndex; j >= 0; j--){
			var left = array[j-1]
			var right = array[j]
			if(right < left){
				array[j-1] = right
				array[j] = left
			} else {
				break;
			}
		}
	}
	return array;
}

function swap(array, i, j){
	var left = array[i];
	var right = array[j];
	array[j] = left
	array[i] = right
	
	return array
}

function QuickSortPartition(array, low, high){
    // [5,8,2,9,4]
	var pivot = array[low] // 5
	var i = low // 5
	var j = high + 1 // 8
	
	
	while(array[i] < pivot){
		i = i + 1
	}
	
	while(array[j] > pivot){
		j = j -1
	}
	
	if(i >= j) return j
	swap(array,i,j)
}

function QuickSort(array, low, high){
	if(low < high){
		var partition = QuickSortPartition(array, low, high)
		QuickSort(array, low, partition)
		QuickSort(array, partition+1, high)
	}
	return array
}

function MergeSort(array){
	return null;
}

function ShellSort(array){
	return null;
}

function BinarySearch(array){
	return null;
}

function LinearSearch(array){
	return null;
}

function StrassenMatrixMultiplication(array){
	return null;
}

function ClosestPair(array){
	return null;
}

function InterpolationSearch(array){
	return null;
}

function HashTable(array){
	return null;
}

// sorting algorithms
module.exports.QuickSort = QuickSort;
module.exports.MergeSort = MergeSort;
module.exports.InsertionSort = InsertionSort;
module.exports.BubbleSort = BubbleSort;
module.exports.ShellSort = ShellSort;
module.exports.StrassenMatrixMultiplication = StrassenMatrixMultiplication;
module.exports.ClosestPair = ClosestPair;

// search algorithms
module.exports.BinarySearch = BinarySearch;
module.exports.LinearSearch = LinearSearch;
module.exports.InterpolationSearch = InterpolationSearch;

// data structures
module.exports.HashTable = HashTable;
