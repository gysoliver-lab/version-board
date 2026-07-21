// 版本数据 - 编辑这个文件来更新版本信息
const VERSION_DATA = [
    {
        version: "v1.2.26",
        date: "2026-07-10",
        content: "aaaa sss ddd",
        isLatest: false
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
        isLatest: true
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