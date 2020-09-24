function $(id) {
    return document.getElementById(id);
}

function $create(str) {
    return document.createElement(str);
}

let jsonArr = [{ time: "8:00", speed: 20 },
    { time: "9:00", speed: 35 },
    { time: "10:00", speed: 55 },
    { time: "11:00", speed: 80 },
    { time: "12:00", speed: 90 }
];

function getMaxspeed(jsonArr) {
    let max = jsonArr[0].speed;
    for (let i = 1; i < jsonArr.length; i++) {
        if (jsonArr[i].speed > max) {
            max = jsonArr[i].speed;
        }
    }
    return max;
}

function showData(jsonArr) {
    $("chartbox").innerHTML = "";
    //最大速度
    let maxspeed = getMaxspeed(jsonArr);
    //大容器的宽度-30；
    let maxWidth = 464 - 30;
    //比例（速度像素比）
    let rate = maxWidth / maxspeed;
    //留白的宽度
    let speedHeight = 305 / (jsonArr.length * 2 + 1);
    if (speedHeight > 30) {
        speedHeight = 30;
    }
    //柱子的高度
    let zhuHeight = 664 / (jsonArr.length * 2 + 1);
    if (zhuHeight > 20) {
        zhuHeight = 20;
    }
    for (let i = 0; i < jsonArr.length; i++) {
        //放置速度，颜色柱子，年份的容器
        let contentDom = $create("div")
        let left = (i + 1) * speedHeight + i * zhuHeight; //
        contentDom.style.cssText = "position: absolute;	bottom: 0;height:" + left + "px;z-index:" + (100 - i) + ";";
        $("chartbox").appendChild(contentDom);

        //颜色柱子
        let colorPillDom = $create("div")
        let width = jsonArr[i].speed * rate;
        colorPillDom.style.cssText = "width: " + width + "px;height: " + zhuHeight + "px;background-color:lightblue;";
        contentDom.appendChild(colorPillDom);
        //放置速度的span元素
        let speedSpanDom = $create("span");
        speedSpanDom.innerHTML = jsonArr[i].speed;
        speedSpanDom.style.cssText = "display: block;height: 20px;width: 30px;text-align: center;position:absolute;left:" + (width - 15) + "px;bottom:-30px;";
        contentDom.appendChild(speedSpanDom);
        //放置时间的span元素
        let timeSpanDom = $create("span");
        timeSpanDom.innerHTML = jsonArr[i].time;
        timeSpanDom.style.cssText = "display: block;height: 20px;width: 50px;text-align: center;position:absolute;left:-50px;bottom:" + (left - 20) + "px;";
        contentDom.appendChild(timeSpanDom);
        //放置背景线条
        let lineSpanDom = $create("span");
        lineSpanDom.style.cssText = "display: block;height: 1px;width: 450px;position:absolute;left:-5px;bottom:" + (left + 15) + "px;border-bottom: 1px solid rgb(47, 66, 142);";
        contentDom.appendChild(lineSpanDom);

    }
}