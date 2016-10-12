const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
    emitter.emit("change");
}

let _pictures={
      "airplane-1": {
            id: "airplane-1",
            name: "airplane",
            imagePath: "images/airplane-1.jpg",
        },

        "airplane-2": {
            id: "airplane-2",
            name: "airplane",
            imagePath: "images/airplane-2.jpg",
        },

        "airplane-3": {
            id: "airplane-3",
            name: "airplane",
            imagePath: "images/airplane-3.jpg",
        },

        "airplane-4": {
            id: "airplane-4",
            name: "airplane",
            imagePath: "images/airplane-4.jpg",
        },

        "baozou-1": {
            id: "baozou-1",
            name: "baozou",
            imagePath: "images/baozou-1.jpeg",
        },
        "baozou-2": {
            id: "baozou-2",
            name: "baozou",
            imagePath: "images/baozou-2.png",
        },
        "baozou-3": {
            id: "baozou-3",
            name: "baozou",
            imagePath: "images/baozou-3.jpg",
        },
        "baozou-4": {
            id: "baozou-4",
            name: "baozou",
            imagePath: "images/baozou-4.jpeg",
        },

        "Breakfast-1": {
            id: "Breakfast-1",
            name: "Breakfast",
            imagePath: "images/Breakfast-1.jpg",
        },
}

module.exports = {
    // 读方法
    getPictures() {
        return _pictures;
    },

    pictures() {
        return _pictures;
    },

    addChangeListener(callback) {
        // console.log("收到添加监听");
        emitter.addListener("change", callback)
    },

    removeChangeListener(callback) {
        emitter.removeListener("change", callback)
    },
}