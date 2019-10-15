#include <stdio.h>

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

int main()
{
    int n,a[1000];
    scanf("%d",&n);
    for(int i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
    quicksort(a,0,n-1);
    for(int i=0;i<n;i++){
        printf("%d ",a[i]);
    }
    return 0;
}