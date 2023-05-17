/**
 * 喜报插件，需要下载xibao.png图片到Yunzai-bot/plugins/temp文件夹下，图片地址 https://gitee.com/bling_yshs/yunzaiv3-ys-plugin/raw/master/res/%E5%96%9C%E6%8A%A5%E6%95%88%E6%9E%9C%E5%9B%BE.jpg 或者 https://raw.githubusercontent.com/bling-yshs/ys_tuchuang/main/xibao.png
 * 样例: #xb 服务器炸咯！
 * 效果图: https://gitee.com/bling_yshs/yunzaiv3-ys-plugin#%E5%96%9C%E6%8A%A5
 */

import puppeteer from "puppeteer";
import fs from "fs";
import plugin from "../../lib/plugins/plugin.js";
import { segment } from "oicq";

//检测./data/xibao文件夹是否存在，不存在则创建
if (!fs.existsSync("./data/xibao")) {
    fs.mkdirSync("./data/xibao");
}

export class example extends plugin {
    constructor() {
        super({
            name: "喜报",
            dsc: "简单开发示例",
            event: "message",
            priority: 5000,
            rule: [
                {
                    reg: "^#?(喜报|xb)",
                    fnc: "xibao",
                },
            ],
        });
    }
    async xibao(e) {
        let keyword = "";
        let msg = e.message[0].text;
        const pattern = /^#?(喜报|xb)\s*(.*)$/;
        let match = msg.match(pattern);
        if (match) {
            keyword = match[2];
        } else {
            e.reply("字符串不符合格式，请将此截图并反馈给插件作者");
            return;
        }
        const img = fs.readFileSync(`./resources/img/xibao.png`);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setContent(`
        <!DOCTYPE html>
        <html lang="zh_CN">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <style type="text/css">
                    body {
                        background-image: url(data:image/png;base64,${img.toString(
                            "base64"
                        )});
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    p {
                        white-space: nowrap;
                        text-align: center;
                        position: absolute;
                        color: red;
                        font-size: 50px;
                        font-weight: bolder;
                        /* 黄色边框 */
                        text-shadow: -2px -2px 0 yellow, 0 -2px 0 yellow,
                            1px -2px 0 yellow, 1px 0 0 yellow, 1px 1px 0 yellow,
                            0 1px 0 yellow, -2px 1px 0 yellow, -2px 0 0 yellow;
                        left: 0;
                        right: 0;
                        top: 45%;
                        bottom: 0;
                        margin: auto;
                    }
                </style>
            </head>
            <body>
                <p>${keyword}</p>
            </body>
        </html>
        `);

        await page.screenshot({ path: "./data/xibao/temp.png" });
        await browser.close();
        e.reply(segment.image("./data/xibao/temp.png"));
    }
}
