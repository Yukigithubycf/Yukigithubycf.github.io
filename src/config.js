const config = {
	//网页元数据
	metaData: {
		title: 'YukiYCF的个人主页',
		description: '欢迎来到YukiYCF的奇妙世界！',
		keywords: 'YukiYCF,yukiycf,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/avatar.jpg", // 头像
	welcometitle: "Welcome to YukiYCF's Profile", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['随和亲切', '冷静沉着', '才思敏捷'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "bg-1",
				"preview": "/img/wallpaper/static/bg-1/image-pre.jpg",
				"url": "/img/wallpaper/static/bg-1/image.jpg",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "bg-2",
				"preview": "/img/wallpaper/static-mobile/bg-2/image-pre.png",
				"url": "/img/wallpaper/static-mobile/bg-2/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['RAG', 'Agent', 'Skills', 'Java', 'Python', 'MySQL', 'Redis', 'Elasticsearch', 'Spring', 'Git', 'Docker'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/Yukigithubycf" },
		{ icon: "mdi-email", link: "https://mail.163.com/" },
		// { icon: "mdi-qqchat", link: "https://im.qq.com/" },
		// { icon: "mdi-wechat", link: "https://wx.qq.com/" },
		// { icon: "mdi-youtube", link: "https://www.youtube.com" },
		// { icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	//打字机
	typeWriterStrings: [
		"别慌，月亮也在大海某处迷茫，你慢慢发光就好。",
		"生活可以普通，但你要自带光芒，顺便把烦恼晃晕。",
		"与焦虑同行，一切都会好起来的。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "bg-1", "preview": "/img/wallpaper/static/bg-1/image-pre.jpg", "url": "/img/wallpaper/static/bg-1/image.jpg" },
		],
		picMobile: [
			{ "title": "bg-2", "preview": "/img/wallpaper/static-mobile/bg-2/image-pre.png", "url": "/img/wallpaper/static-mobile/bg-2/image.png" },
		],
		video: [
			// {
			// 	"title": "尼尔：机械纪元 团队",
			// 	"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
			// 	"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			// },
			// {
			// 	"title": "向往航天的女孩",
			// 	"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
			// 	"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			// },
			// {
			// 	"title": "世界很温柔《龙族》上杉绘梨衣",
			// 	"preview": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
			// 	"url": "https://www.leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			// },
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/projects/proj-a.jpg", title: "RAG", subtitle: "", text: "一个面向企业内部知识管理场景的私有知识库问答平台.", url: "https://github.com/Yukigithubycf/enterprise-private-rag-qa", show: true },
		{ go: "🗂️ 前往", img: "/img/projects/proj-b.jpg", title: "AstraFlow", subtitle: "", text: "一个面向复杂任务的智能体工作流编排平台.", url: "https://github.com/Yukigithubycf/agent-workflow-orchestrator", show: true },
		// { go: "📝 前往", img: "/img/projects/proj-c.jpg", title: "学习笔记", subtitle: "", text: "一些学习笔记.", url: "", show: false },
		// { go: "👍 前往", img: "/img/sunshine.jpg", title: "Project 4", subtitle: "4,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		// { go: "🗃 前往", img: "/img/sunshine.jpg", title: "Project 5", subtitle: "5,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		// { go: "🎨 前往", img: "/img/sunshine.jpg", title: "Project 6", subtitle: "6,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		// { go: "💍 前往", img: "/img/sunshine.jpg", title: "Project 7", subtitle: "7,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
		// { go: "🔍 前往", img: "/img/sunshine.jpg", title: "Project 8", subtitle: "8,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://leleo.top", show: false },
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Leleo"],
}

export default config
