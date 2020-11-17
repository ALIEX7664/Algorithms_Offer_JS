// 面试题3 数组中重复数字
// 题目2 不修改数组找出重复的数字
// 牺牲时间换取空间O(n)

// 时间：O(nlogn) -- 查找函数被调用logn次 ，执行时间n
// 空间：O(1)

// 测试用例：
// 1. 存在重复值的数组
// 2. 不包含重复值的数组

//条件
// 1. 数值在1~n之间
// 2. 数组中有n+1个数字，即一定存在重复值

//思想：
// 二分查找
// 通过统计范围内数值在数组中的出现次数来判断是否重复
// 出现次数大于范围内个数则重复，否则另一半的范围内出现重复

// 无法查找特定的重复值



function getDuplication(arr, length) {
    if (length <= 0) {
        return -1;
    }
    // 设定开始值和结束值
    let start = 1;
    let end = length - 1;
    while (end >= start) {
        // 取得中间值
        let middle = ((end - start) >> 1) + start;
        // 计算出现次数,仅需计算一半的范围即可
        let count = conuntRange(arr,start,middle);

        // 当范围内只有两个数字时
        if(start == middle){
            if(count > 1){
                return start;
            }else{
                break;
            }
        }

        // 统计数字若超过范围内数值个数，则出现重复
        if(count > (middle - start) + 1){
            end = middle
        }else{
            start = middle+1;
        }
    }

    // 不存在重复值
    return -1;
}

function conuntRange(arr, start, end) {

    let count = 0;

    // 统计范围的数字在数组出现的次数
    for (let val of arr) {

        if (val >= start && val <= end){
            count++;
        }
    }
  
    return count;
}


const arr = new Array(2,3,5,4,3,2,6,7);

console.time("COUNT");
console.log(getDuplication(arr,arr.length))
console.timeEnd("COUNT");