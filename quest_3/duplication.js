// 面试题3 数组中重复数字
// 题目1 找出数组中重复的数字

// 时间：O(N)
// 空间: O(1)
// 条件：
// 1. 数值介于0~n-1之间

// 测试用例：
// 1. 空数组
// 2. 包含重复数字的数组
// 3. 不包含重复数字的数组

// 思想：
// 值i应出现在下标i中
// 若下标i不是值i,就判断下标i是否等于arr[i]下标的值
// 是则重复，不是则交换，将i下标的值放到值对应的下标arr[i]中，在查询过程中排序
var duplication = (arr, length) => {
    if (length < 0) {
        console.log("Array is empty")
        return false;
    }

    for (let val of arr) {
        if (val < 0 || val > length - 1) {
            console.log("Value is too large or too small")
            return false;
        }
    }
    
    for (let i in arr) {
        // 若下标与内容本身不同
        while (arr[i] != i) {
            // 存在重复数字
            if (arr[i] === arr[arr[i]]) {
                console.log("Find duplication NUmber:", arr[i]);
                return true;
            }

            // 交换数字到正确位置进行排序
            let temp = arr[i];
            arr[i] = arr[temp];
            arr[temp] = temp;
        }
    }
    return false;
}


// 测试
const arr = new Array(0,1,3,2,3);

console.time("COUNT");

if (duplication(arr, arr.length)) {
    console.log("duplication");
}

console.timeEnd("COUNT")


