function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction(name) {
    return function tacos() {
        console.log("confused")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return ""
    }
}