// 版本数据 - 编辑这个文件来更新版本信息
const VERSION_DATA = [
     {
        version: "v1223",
        date: "2026-07-10",
        content: "1. 优化分析中的两个auto都改为先框再auto\n2. 优化dotblot的auto算法，检测更准确\n3. 优化手动框条带和圆最小宽高半径为0.5mm（之前是1.5mm）\n4. 修复合并图像未根据当前sample、marker亮度对比度情况进行合并的问题",
        isLatest: true
    },
    {
        version: "v1.2.27",
        date: "2026-07-15",
        content: "bbbb ccc eee",
        isLatest: false
    },
    {
        version: "v1.2.28",
        date: "2026-07-21",
        content: "cccc ddd fff",
        isLatest: false
    }
];

// 获取最新版本
function getLatestVersion() {
    return VERSION_DATA.find(v => v.isLatest) || VERSION_DATA[VERSION_DATA.length - 1];
}

// 获取版本总数
function getVersionCount() {
    return VERSION_DATA.length;
}

// 获取所有版本（按时间倒序）
function getAllVersions() {
    return [...VERSION_DATA].reverse();
}