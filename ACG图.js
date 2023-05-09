import {segment} from "oicq";
import fetch from "node-fetch";
import plugin from "../../lib/plugins/plugin.js";


let CD_Time = 60  //使用CD
let CDT_Time = 150  //使用CD
let Cd = false   //CD开关
let CD = {};    //CD容器，不用管
let maxNum = 10//最大请求图片数量
//第一个为撤回,第二个为获取CD,ture为开启，false为关闭
//关键词已禁用，可搜索打开。
let Groupon = false;
// let withdraw = false;
// let timeout = 7000; //撤回CD单位毫秒
// let Cos_on = false;
let r18 = 0;
//上面的为图片r18开关,0为非R18,1为R18,2为混合
//false为关闭,使用前在resources文件夹创建acg文件夹,acg文件夹会有下载好的图片
// let LocalImg = false;
//是否开启概率回复“过会再chong吧欧尼酱>m<...”
let PrivateSwitch = true;
let Black = [123456789]    //黑名单QQ


//是否禁用私聊
export class SearchACG extends plugin {
    constructor() {
        super({
            name: 'Acg_Search',
            dsc: 'Search',
            event: 'message',
            // 优先级(数值越小优先度越高)
            priority: 1299,
            // 消息匹配规则
            rule: [
                {
                    reg: "^#图图$",//#图图
                    fnc: 'ACG',
                },
                {
                    reg: '^#搜索(.*)$', //#搜索刻晴
                    fnc: 'ACG_Sc'
                }
            ]
        })
    }

    async ACG(e) {
        if (Black.includes(e.user_id)) {
            e.reply("不看图恶意请求，已被拉黑~")
            return true
        }
        if (e.isGroup && Groupon === false && !e.isMaster) {
            e.reply("暂时禁用了噢qwq...");
            return true;
        }
        /**禁用私聊,主人除外*/
        if (!e.isGroup && !e.isMaster) {
            e.reply("禁止私聊！")
            return true;
        }
        /**如果打开了CD开关，获取CD并发送*/
        if (CD[e.user_id] && !e.isMaster && Cd === true) {
            e.reply(`CD:${CD_Time}s...>_<...`)
            return true;
        }
        /**处理获取的图片数*/
        // let requestNum=e.msg.replace(/张|个|图|来|#|/g, '').trim() //替换词语并去掉替换后的空格
        // if(isNaN(requestNum)===true){
        //     e.reply("baka！用数字啊，打数字没有打字轻松吗！")
        //     return true
        // }
        // let requestSum=parseInt(requestNum)
        // console.log(requestSum) //测试一下获取的数量
        //请求为负时
        // if(requestSum<0){
        //     e.reply("敲你！请求一个负数很好玩吗q_q...")
        //     return true;
        // }
        //判断一下最大请求的数量(0-20之间)
        // if(requestSum>0 && requestSum>maxNum){//最大请求数量
        //     e.reply("虽然我知道你是lsp，但是也要有个限度！")
        //     return true;
        // }
        /**处理url*/
        let url = `https://iw233.cn/api.php?&type=json&num=${maxNum}&sort=random`
        const response = await fetch(url);
        let res = await response.json();
        if (res) {
            console.log(res.pic[0])//获取一下第一张图的地址看看有没有
            e.reply(`请求成功${maxNum},张,loading.....`)
            CD[e.user_id] = true;
            let acgList = []
            let bot
            if (e.isPrivate) {
                bot = {nickname: Bot.nickname, user_id: Bot.uin}
            } else {
                console.log("请求者e.member.card:" + `${e.member.card}`)
                bot = {nickname: e.member.card || e.member.nickname, user_id: e.user_id}
            }
            acgList.push(
                {
                    message: [
                        segment.at(e.user_id), "\n",
                        "RequestNum:", 15,
                        "\n", segment.image(res.pic[0]),
                        "\n", segment.image(res.pic[1]),
                        "\n", segment.image(res.pic[2]),
                        "\n", segment.image(res.pic[3]),
                        "\n", segment.image(res.pic[4]),
                        "\n", segment.image(res.pic[5]),
                        "\n", segment.image(res.pic[6]),
                        "\n", segment.image(res.pic[7]),
                        "\n", segment.image(res.pic[8]),
                        "\n", segment.image(res.pic[9]),
                    ],
                    ...bot,
                },
            )
            console.log("装载完毕！")
            try {
                if (e.isGroup)
                    res = await e.group.sendMsg([await e.group.makeForwardMsg(acgList)], false, {anonymous: true, recallMsg: 15 })
                else
                    res = await e.reply([await e.friend.makeForwardMsg(acgList)])
                CD[e.user_id] = setTimeout(() => {
                    if (CD[e.user_id]) {
                        delete CD[e.user_id];
                    }
                }, (CDT_Time) * 1000);
                console.log("发送完成")
                if (!res) {
                    e.reply("太那个了...没发出来，CD重置，>_<....", false, { at: true, recallMsg: 8 })
                    delete CD[e.user_id]
                }
                return true
            } catch (err) {
                let Ni = await e.reply([await e.group.makeForwardMsg(acgList)])
                if (!Ni) {
                    e.reply("太那个了...没发出来，CD重置，>_<....", false, { at: true, recallMsg: 8 })
                    delete CD[e.user_id]
                }
            }

        } else {
            e.reply("获取失败了，让管理看一下后台吧qwq")
            delete CD[e.user_id]
        }
    }

    //搜索模块
    async ACG_Sc(e) {
        if (Black.includes(e.user_id)) {
            e.reply("不看图恶意请求，已被拉黑~")
            return true
        }
        if (e.isGroup && Groupon === false && !e.isMaster) {
            e.reply("暂时禁用了噢qwq...");
            return true;
        }
        /**如果打开了CD开关，获取CD并发送*/
        if (CD[e.user_id] && !e.isMaster && Cd === true) {
            e.reply(`CD:${CD_Time}s...>_<...`)
            return true;
        }
        /**禁用私聊,主人除外*/
        if (e.isPrivate && !e.isMaster && PrivateSwitch === true) {
            return;
        }
        /**解析url*/
        console.log("用户命令：", e.msg);
        let keyword = e.msg.replace("#", "");
        keyword = keyword.replace("搜索", "");
        let url = `https://api.lolicon.app/setu/v2?tag=${keyword}&proxy=i.pixiv.re&r18=${r18}`;
        console.log(url);
        const response = await fetch(url);
        let res = await response.json();
        if (res.data.length === 0) {
            e.reply("没有搜到哦！换个关键词试试吧！", false, { at: true, recallMsg: 8 });
            delete CD[e.user_id];
            return true;
        }
        console.log("pid:" + res.data[0].pid)
        let pid = res.data[0].pid
        // let Img_url = `https://pixiv.re/${pid}.jpg`
        let Img_url=res.data[0].urls.original
        // {"error":"","data":[{"pid":90849486,"p":0,"uid":512849,"title":"夏の思い出♪","author":"刃天","r18":false,"width":2940,"height":1654,"tags":["原神","Genshin Impact","パイモン(原神)","派蒙（原神）","蛍(原神)","萤（原神）","アンバー(原神)","安柏（原神）","ノエル(原神)","诺艾尔（原神）","フィッシュル(原神)","菲谢尔（原神）","尻神様","尻神样","裸足","赤脚","水着","泳装"],"ext":"png","aiType":0,"uploadDate":1624787144000,"urls":{"original":"https://i.pixiv.re/img-original/img/2021/06/27/18/45/44/90849486_p0.png"}}]}
        /**图片描述*/
        let TagNumber = res.data[0].tags.length;
        let tags, tags_two
        let number = 0;
        while (TagNumber--) {
            tags = res.data[0].tags[TagNumber];
            if (number === 0) {
                tags_two = "";
            }
            tags_two = tags_two + " " + tags;
            number++;
        }
        console.log(tags_two);
        /**开始封装消息*/
        e.reply("已获取到图片，loading...", false, { at: true, recallMsg: 8 })
        /**将消息封装进合并消息*/
        let msgList = []
        let bot
        if (e.isPrivate) {
            bot = {nickname: Bot.nickname, user_id: Bot.uin}
        } else {
            console.log("请求者e.member.card:" + `${e.member.card}`)
            // const bot = { nickname: Bot.nickname, user_id: Bot.uin }
            bot = {nickname: e.member.card || e.member.nickname, user_id: e.user_id}
        }

        CD[e.user_id] = true;
        CD[e.user_id] = setTimeout(() => {
            if (CD[e.user_id]) {
                delete CD[e.user_id];
            }
        }, CD_Time * 1000);
        msgList.push(
            {
                message: [
                    segment.at(e.user_id), "\n",
                    "Title：", res.data[0].title,
                    "\nAuthor：", res.data[0].author,
                    "\nKeyWords：", tags_two,
                    "\n", "Website:", Img_url,
                    "\n", segment.image(Img_url),
                ],
                ...bot,
            },
        )
        if (e.isGroup)
            res = await e.reply([await e.group.makeForwardMsg(msgList)])
        else
            res = await e.reply([await e.friend.makeForwardMsg(msgList)])
        if (!res) {
            e.reply("可能太那个了...没发出来，再试一下吧>_<....", false, { at: true, recallMsg: 8 })
            delete CD[e.user_id];
        }
        return true

        // if (withdraw === true) {
        //     let msgRes = await e.reply(msg);
        //     await this.Che(msgRes, e, Img_url)
        // } else {
        //     await e.reply(msg);
        // }
    }

    //添加CD
    // async SetCD(e){
    //     let nowTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    //     let lastTime = await redis.get(`Yz:wcplus:${this.e.group_id}`);
    //     if (lastTime && (!e.isMaster || (e.isMaster && masterCD))) {
    //         let seconds = moment(nowTime).diff(moment(lastTime), 'seconds')
    //         this.e.reply(`cd中，请等待${ACG_CD - seconds}秒后再使用`)
    //     }
    // }
    //剩余CD
    // async RemainCD(e){
    //      nowTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    //     await redis.set(`Yz:ACG_CD:${this.e.group_id}`, currentTime, {
    //         EX: ACG_CD
    //     })
    // }
}

//撤回模块
// async Che(msgRes, e, imgurl) {
//     let msg = [
//         segment.at(e.user_id),
//         "\n",
//         imgurl, "\n",
//         "感兴趣请复制去浏览器Open",
//     ];
//     if (timeout !== 0 && msgRes && msgRes.message_id) {
//         let target = null;
//         if (e.isGroup) {
//             target = e.group;
//         } else {
//             target = e.friend;
//         }
//         if (target != null) {
//             setTimeout(() => {
//                 target.recallMsg(msgRes.message_id);
//                 e.reply(msg);
//             }, timeout);
//         }
//     }
// }
// st:"获取随机二次元图片(涩一点)"
// acgs:"搜索随机二次元图片"
// acg:"获取随机二次元图片"
// cos:"获取随机cos"
