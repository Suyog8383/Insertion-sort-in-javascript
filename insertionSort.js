// Insertion sort
let arr=[16,15,4,13,12,1];
function insertionSort(data){
    let i,j,curr;
    for(i=1;i<data.length;i++){
        curr=data[i]; 
        j=i-1; 
        while(j>=0 && data[j]>curr){
            data[j+1]=data[j];
            j=j-1;//3-1=2
        }
        data[j+1]=curr;
    }
    return data;
}

console.log(insertionSort(arr));
