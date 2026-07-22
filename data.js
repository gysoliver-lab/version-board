// 版本数据 - 编辑这个文件来更新版本信息
const VERSION_DATA = [
    {
        version: "v1223",
        date: "2026-05-21",
        content: "1. 优化分析中的两个auto都改为先框再auto\n2. 优化dotblot的auto算法，检测更准确\n3. 优化手动框条带和圆最小宽高半径为0.5mm（之前是1.5mm）\n4. 修复合并图像未根据当前sample、marker亮度对比度情况进行合并的问题",
        isLatest: true
    },
    {
        version: "v1222",
        date: "2026-05-13",
        content: "新增适配AZ序列号的SE模组",
        isLatest: false
    },
    {
        version: "v1221",
        date: "2026-05-06",
        content: "1.新增全程开盖校准将会触发弹窗功能\n2.新增校准marker时边缘60个像素内有小物体不触发弹窗\n3.修复marker校准时灯不亮且采图时灯也不亮不会卡顿的问题\n4.修复异物检查弹窗英文提示",
        isLatest: false
    },
    {
        version: "v1220",
        date: "2026-04-21",
        content: "1.解决日本客户黑白marker设备拍膜自适应窗口发黑问题\n2.解决日本客户彩色marker拍摄名片漆黑无法调整异常问题\n3.解决Pro模组彩色marker偶发性纯黄问题\n4.解决SE模组设备sample图像存在温漂问题\n5.解决同时导出两种类型TIF图不成功问题\n6.解决dotblot删除圆圈崩溃问题\n7.优化：ebt文件内部增加版本号，后续可根据ebt文件判断是哪个版本的软件拍摄的\n8.解决放置标准灯板【重新校正】后，采集marker异常的问题\n9.优化了merge图3d中会显示过曝的问题\n10.新增标准时异物检测提示功能\n11.解决显示3D删除图片后，3d视图中仍然显示图像数据",
        isLatest: false
    },
    {
        version: "v1212",
        date: "2026-02-04",
        content: "适用于Pro、SE等全系列模组的成像仪器\n\n修复项：\n1.修复Pro模组的仪器，断电恢复有机率出现重连失败的问题\n2.修复旋转情况下，导出的8bit Tif图实际是32bit的问题\n3.修复极限高清模式间隔时间下拉框可以选定的问题\n4.修复自定义间隔时间出的5s和auto模式5s差别过大的问题\n5.修复图片旋转1度后导出后的图片出现错位现象\n6.修复Pro模组，auto30s偶发（测试11pcs共发生2次）第30s图对比度异常显示【全黑】的问题\n7.修复Pro模组调整间隔和张数后曝光时间过快问题\n8.修复自定义间隔时间出的5s和auto模式5s差别过大，怀疑多张自定义采集错误\n9.解决Pro模组彩色marker偶发性背景有彩色问题\n10.解决彩色maker图3D显示峰值问题\n11.解决采集偶发性失败的问题\n12.解决了网络适配器禁用状态下，网络设置错误的问题\n\n新增特性：\n1.新增导出界面增加【批量重命名】前缀的功能\n2.优化导出8bit图片dpi图片像素\n3.新增彩色marker的tif图导出仍是彩色图片功能\n4.新增Pro模组支持彩色marker",
        isLatest: false
    },
    {
        version: "v1209",
        date: "2026-01-06",
        content: "适用于Pro、SE等全系列模组的成像仪器\n本次变更适于用（国内版）版本\n\n修复项：\n1.分析页面偶发性出现编号不连续问题（复制粘贴过程中复现）\n2.护眼模式reset按钮少一张灰色图\n3.Pro类型模组电脑IP均置为192.168.234.20，兼容所有Pro模组\n4.Pro模组启动连接、校准偶发性失败问题（频繁重启20次以上）\n5.网络自动配置：对于Pro模组类型的仪器，IP可能设置错误；网络适配器禁用状态，网络自动配置失败\n\n新增特性：\n1.新增Pro彩色marker模组，电脑ip设置192.168.234.27\n2.安装引导新增选项，设置分辨率为1920*1080，缩放比例为100%",
        isLatest: false
    },
    {
        version: "v1206",
        date: "2025-11-28",
        content: "新增功能：\n1.安装过程中，网络配置自动化\n2.软件设置中添加网络重置页面，应对非正常修改\n3.增加采集抛帧数量配置功能\n\n修复BUG：\n1.解决SE模组采集Marker图像波浪状不均问题\n2.修正SE模组上传温度错误问题\n3.修复网络重置过程中可能出现的，因超时而失败的问题\n4.网络重置成功的提示中，追加【请关闭并重新启动软件】\n5.解决SE模组采集崩溃问题\n6.修复切换采集模式无效bug\n7.打开u盘图像翻页崩溃问题\n\n优化功能：\n1.语言选择，软件安装过程中选择了哪个语言，License语言就是哪种语言，首次进入软件后，捕获安装引导过程中使用的语言，软件就使用就是哪种语言，实现两个过程联动\n2.如果在软件中手动切换语言，后续按照新切换的来\n3.优化SE和Pro模组的FPN处理\n4.调整SE模组温漂负值处理",
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
