
    //* Maps (Data-Type) -- Map is also an object!
    //Note: Maps remember the relative order of datas entered. It also contains only unique key. Any duplicate key doesn't enters

    const mapName = new Map()

    console.log(typeof mapName); //object

    mapName.set ("IN", "India")
    mapName.set ("USA", "United States of America")
    mapName.set ("I", "India") //gets inserted
    mapName.set ("IN", "abc")//not gets inserted (since "IN" key is being repeated)
    mapName.set ("USA", "United States of America")//same reason. doesn't gets inserted

    console.log(mapName);

    //* for-of on maps

    for (const x of mapName) {
        console.log(x); //prints an array containing key and value
    }

    //! Here we have destructered the array (key and value gets seperated and can be used seperately)
    for (const [key, val] of mapName) {
        console.log(key, ':', val);
    }
