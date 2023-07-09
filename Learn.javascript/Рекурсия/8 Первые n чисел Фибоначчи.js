const fibbo = (n) => {
    if (n === 2) return [0, 1];

    let nums = fibbo(n-1)
    nums.push(nums.at(-2) + nums.at(-1))

    return nums
}





/*
Получить первые n чисел Фибоначчи
Напишите программу на JavaScript, чтобы получить первые n чисел Фибоначчи.

Примечание: Последовательность Фибоначчи - это последовательность чисел: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,... Каждое последующее число является суммой двух предыдущих.
*/