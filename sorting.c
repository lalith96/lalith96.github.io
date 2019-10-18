#include <stdio.h>
#define parent(i) (i-1)/2
#define left(i) (2*i)+1
#define right(i) (2*i)+2

int swap(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b =temp;
}

int insertionsort(int n,int a[]){
    int key,j=0;
    for(int i=1;i<n;i++){
        key = a[i];
        j=i-1;
        while(j>=0 && key<a[j]){
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = key;
    }
}

int merge(int a[],int start,int mid,int end){
    int n1,n2,i,j,k;
    n1 = mid-start+1;
    n2 = end-mid;
    int left[n1],right[n2];
    for(int i=0;i<n1;i++){
        left[i] = a[start+i];
    }
    for(int i=0;i<n2;i++){
        right[i] = a[mid+i+1];
    }
    i=0;    
    j=0;    
    k=start;    
    while(i<n1 && j<n2){    
        if(left[i]<=right[j]){  
            a[k++] = left[i++]; 
        }   
        else {  
            a[k++] = right[j++];    
        }   
    }   
    while(i<n1){    
        a[k++] = left[i++]; 
    }   
    while(j<n2){    
        a[k++] = right[j++];    
    }   
}   

int mergesort(int a[],int start,int end){   
    int mid;    
    if(start<end){  
        mid = (start + end)/2;  
        mergesort(a,start,mid); 
        mergesort(a,mid+1,end); 
        merge(a,start,mid,end); 
    }   
}   

int partition(int a[],int start,int end){   
    int i,j,pivot;  
    pivot = a[end]; 
    j=start-1;  
    for(int i=start;i<end;i++){ 
        if(a[i]<pivot){ 
            j++;    
            swap(&a[j],&a[i]);  
        }   
    }   
    swap(&a[j+1],&a[end]);  
    return j+1; 
}   

int quicksort(int a[],int start,int end){   
    if(start<end){  
        int p = partition(a,start,end); 
        quicksort(a,start,p-1); 
        quicksort(a,p+1,end);   
    }   
}   

maxheapify(int *a,int i,int length){   
    int left = left(i);
    int right = right(i);
    int largest = i;
    if(left<length && a[i]<a[left]){
        largest = left;
    }else if(right<length && a[largest]<a[right]){
        largest = right;
    }
    if(largest!=i){
        swap(&a[i],&a[largest]);
        maxheapify(a,largest,length);
    }
}

buildmaxheap(int *a,int n){
    for(int i = n/2;i>=0;i--){
        maxheapify(a,i,n);
    }
}

heapsort(int a[],int n){
    buildmaxheap(a,n);
    for(int i=n;i>0;i--){
        swap(&a[0],&a[i]);
        maxheapify(a,0,i);
    }
}

countingsort(int *a,int n,int max){
    static int *b,*c,i;
    b = (int *)calloc(n+1,sizeof(int));
    c = (int *)calloc(max+1,sizeof(int));
    for(i=0;i<n;i++){
        c[a[i]]++;
    }
    for(i=1;i<=max;i++){
        c[i] += c[i-1]; 
    }
    for(i=n-1;i>=0;i--){
        b[c[a[i]]] = a[i];
        c[a[i]]--;
    }
    return b;
}

int main()
{
    int n,a[1000],max=0;
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&a[i]);
        if(max<a[i]){
            max=a[i];
        }
    }
    int *b = countingsort(a,n,max);
    for(int i=1;i<=n;i++){
        printf("%d ",b[i]);
    }
    return 0;
}
