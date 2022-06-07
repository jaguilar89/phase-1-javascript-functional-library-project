function helper(collection) {
    return collection instanceof Array ? collection.slice() : Object.values(collection);
};

function myEach(collection, callback) {
    const newCollection = helper(collection);

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection;
};

function myMap(collection, callback) {
    const newCollection = helper(collection);

    for (let i = 0; i < newCollection.length; i++) {
        newCollection[i] = callback(newCollection[i])
    };
    return newCollection;
};

function myReduce(collection, callback, accumulator) {
    const newCollection = helper(collection);

    for (let i = 0; i < newCollection.length; i++) {
        if (!accumulator) {
         accumulator = newCollection[0];
         i = 1;
     }
    accumulator = callback(accumulator, newCollection[i], newCollection)
    }
    return accumulator;
};

function myFind(collection, predicate) {
    const newCollection = helper(collection);

    for (let i = 0; i < newCollection.length; i++) {
       if (predicate(newCollection[i])) {
           return newCollection[i]
       }
    }
    return undefined;
};

function myFilter(collection, predicate) {
    const truthyArray = [];

    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            truthyArray.push(collection[i])
        }
    }
    return truthyArray;
};

function mySize(collection) {
    const newCollection = helper(collection);
    return newCollection.length;
};

function myFirst(array, num) {
    return !num ? array[0] : array.slice(0, num);
};

function myLast(array, num) {
    return !num ? array[array.length - 1] : array.slice(-num)
};

function myKeys(object) {
    const keys = [];

    for (let key in object) {
        keys.push(key)
    }
    return keys
};

function myValues(object) {
    const values = [];

    for (let key in object) {
        values.push(object[key])
    }
    return values;
};