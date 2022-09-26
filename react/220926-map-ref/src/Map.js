function Map() {
    let list = ['a', 'b', 'c'];

    let newList = list.map((value, index, arr) => {
        console.log( value );
        console.log( index );
        console.log( arr );
        return value + index;
    })

    console.log(newList);
}

export default Map;