const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
    emitter.emit("change");
}

let _editor={
     "myformColorTheme": {
            id: "myformColorTheme",
            name: "颜色主题",
            emojiType:"text",
            emojiValue:"white",
        },
        "myformBackgroundColor": {
            id: "myformBackgroundColor",
            name: "填充颜色",
            emojiType:"text",
            emojiValue:"#E2E6E4",
        },
        "myformX": {
            id: "myformX",
            name: "左上角的 x 坐标",
            emojiType:"number",
            emojiValue:"10",
        },
        "myformY": {
            id: "myformY",
            name: "左上角的 y 坐标",
            emojiType:"number",
            emojiValue:"10",
        },
        "myformCanvasWidth": {
            id: "myformCanvasWidth",
            name: "画布的宽度",
            emojiType:"number",
            emojiValue:"250",
        },
        "myformCanvasHeight": {
            id: "myformCanvasHeight",
            name: "矩形的高度",
            emojiType:"number",
            emojiValue:"200",
        },
        "myformShadowColor": {
            id: "myformShadowColor",
            name: "阴影颜色",
            emojiType:"text",
            emojiValue:"black",
        },
        "myformShadowBlur": {
            id: "myformShadowBlur",
            name: "阴影模糊度",
            emojiType:"number",
            emojiValue:"8",
        },
        "myformShadowOffsetX": {
            id: "myformShadowOffsetX",
            name: "阴影垂直距离",
            emojiType:"number",
            emojiValue:"10",
        },
        "myformShadowOffsetY": {
            id: "myformShadowOffsetY",
            name: "阴影水平距离",
            emojiType:"number",
            emojiValue:"5",
        },
}

module.exports = {
    // 读方法
    getEditor() {
        return _editor;
    },

    Editor() {
        return _editor;
    },

    // changeEditor(id){
    //     _editor["id"]
    // },

    addChangeListener(callback) {
        // console.log("收到添加监听");
        emitter.addListener("change", callback)
    },

    removeChangeListener(callback) {
        emitter.removeListener("change", callback)
    },
}