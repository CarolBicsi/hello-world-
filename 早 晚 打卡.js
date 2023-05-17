
import plugin from '../../lib/plugins/plugin.js'
import { segment } from "oicq";
import fetch from "node-fetch";
import moment from 'moment';
let sum = 4; //限制打卡等次数避免刷屏
let dateTime='YYYY-MM-DD 00:00:00';
const _path = process.cwd();


// 插件作者群号.666345141

export class example extends plugin {
  constructor () {
    super({
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          reg: "^打卡$", 
          fnc: 'daka'
        },
        {
          reg: "^(|早|早安|早喵|早安喵|早上好)$", 
          fnc: 'zao'
        },
      {
          reg: "^(|晚安|晚安啦|晚安喵|晚安呐)$", 
          fnc: 'wan'
        },
       
      ]
    })
  }

 
  



 async daka(e) {
      console.log("用户命令：", e.msg);
	let data_redis = await redis.get(`daka${e.user_id}_qiandao`);
	var new_sum = 1;
	if (data_redis) {
		if (JSON.parse(data_redis)[0].num == sum) {
			e.reply(`你今天已经打卡过${sum}次了请明天再来~`)
			return;
		}
		new_sum += JSON.parse(data_redis)[0].num; 
	}
	var time = moment(Date.now()).add('days', 1).format(dateTime)
	var new_date = (new Date(time).getTime() - new Date().getTime()) / 1000
	console.log(new_date)
	let redis_data = [{
		num: new_sum, //次数
	}]
	// console.log(redis_data)
	redis.set(`daka${e.user_id}_qiandao`, JSON.stringify(redis_data), { 
		EX: parseInt(new_date)
	});
    //执行的逻辑功能
    let url = `http://api.caonm.net/api/dm/index.php? `;
    let msg = [
       "打卡成功纳西妲成功帮你点赞!\n",
        segment.image(url),
    ];
   let qun = [
       segment.at(e.user_id),
       " 打卡成功!这是给你的奖励!\n",
        segment.image(url),
    ];
   let type = e.message_type;
    if (type == 'private') {   //私聊
        e.friend.thumbUp(e.user_id,20);
        e.reply(msg);
    } else if (type == 'group' && !e.isMaster) {    //群聊
    e.group.sendMsg(qun);
    }
if (e.isMaster) {
e.reply(["唔…主人今天看起来非常有精神呢！\n",
segment.image(`http://api.caonm.net/api/dm/index.php?`),
segment.image(`https://xiaobai.klizi.cn/API/getImage-master/out_image.php?`)]);
}
  return true; //返回true 阻挡消息不再往下
};

async zao(e) {
console.log("用户命令：", e.msg);
        	let data_redis = await redis.get(`daka:${e.user_id}_zao`); 
	var new_sum = 1;
	if (data_redis) {
		if (JSON.parse(data_redis)[0].num == sum) {
			e.reply([segment.at(e.user_id),`你今天已经早安过${sum}次了请明天再来~`])
			return;
		}
		new_sum += JSON.parse(data_redis)[0].num; //次数累加
	}
var time = moment(Date.now()).add('days', 1).format(dateTime)
	var new_date = (new Date(time).getTime() - new Date().getTime()) / 1000 
	console.log(new_date)
	let redis_data = [{
		num: new_sum, 
	}]
	redis.set(`daka:${e.user_id}_zao`, JSON.stringify(redis_data), { 
		EX: parseInt(new_date)
	});
    let ural = `http://api.caonm.net/api/dm/index.php?`;
    let msge = [
       "美好的一天又开始啦!纳西妲给你点了小小的赞以示鼓励!\n",
        segment.image(ural),
    ];
   let qun1 = [
       segment.at(e.user_id),
       " 早上好!阁下昨晚睡得还好吗?\n",
        segment.image(ural),
    ];
   let type = e.message_type;
    if (type == 'private') {   //私聊
        e.friend.thumbUp(e.user_id,5);
        e.reply(msge);
    } else if (type == 'group') {    //群聊
    e.group.sendMsg(qun1);

    }
return true; //返回true 阻挡消息不再往下
};
async wan(e) {
console.log("用户命令：", e.msg);
let data_redis = await redis.get(`daka:${e.user_id}_wan`); 
	var new_sum = 1;
	if (data_redis) {
		if (JSON.parse(data_redis)[0].num == sum) {
			e.reply([segment.at(e.user_id),`你今天已经晚安过${sum}次了请明天再来~`])
			return;
		}
		new_sum += JSON.parse(data_redis)[0].num; //次数累加
	}
var time = moment(Date.now()).add('days', 1).format(dateTime)
	var new_date = (new Date(time).getTime() - new Date().getTime()) / 1000 
	console.log(new_date)
	let redis_data = [{
		num: new_sum, 
	}]
	redis.set(`daka:${e.user_id}_wan`, JSON.stringify(redis_data), { 
		EX: parseInt(new_date)
	});
    let msg2 = [
       "祝阁下好梦!纳西妲已经帮你点赞了哟!\n",
        segment.image(`https://dev.iw233.cn/api.php?sort=random`),
    ];
   let qun2 = [
       segment.at(e.user_id),
       " 祝阁下好梦!\n",
        segment.image(`https://dev.iw233.cn/api.php?sort=random`),
    ];
   let type = e.message_type;
    if (type == 'private') {   //私聊
        e.friend.thumbUp(e.user_id,5);
        e.reply(msg2);
    } else if (type == 'group') {    //群聊
    e.group.sendMsg(qun2);
    }
return true; //返回true 阻挡消息不再往下
}


}

