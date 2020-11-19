// 面试题4 二维数组查找

// 测试用例：
// 1. 包含查找数字的数组
// 2. 不包含查找数字的数组
// 3. 空数组

// 条件：
// 1. 数组中每一行都按从左到右递增顺序排序
// 2. 数组中每一列都按从上到下递增顺序排序

// 思想：
// 将二维数组画成矩阵形式
// 取矩阵左下角或右上角的数字,使每次判断后矩阵行列改变的方向只有一个
// 若取右上角，当数字大于查找的值时，则将矩阵排除最高列，小于则排除最低行
// 重新获取右上角的数字，反复执行上一步，直到找到相等的数字为止



// 将二维数组转为一维数组
function changeMartix(martix) {
    return martix.reduce((pre, cur) => {
        return pre.concat(cur);
    })
}


// 查找函数
function find(arr, rows, cols, number) {

    if (arr != null && rows > 0 && cols > 0) {
        let col = cols - 1;
        let row = 0;
        while (col >= 0 && row < rows) {
            // 获取矩阵右上角的数字进行比较
            if (arr[row * cols + col] == number) {
               return true;
            } else if (arr[row * cols + col] > number) {
                col--;
            } else {
                row++;
            }
        }
    }

    return false;

}

let martix = new Array([1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]);

martix = changeMartix(martix);
console.time('COUNT');
let found = find(martix,4,4,7);
console.timeEnd("COUNT");
console.log(found);


