
import { baseUrl } from './env';
import fetchUrl  from './fetchUrl'
//登录

function Request(url='',data = {},method="POST"){
	return new Promise((resolve,reject)=>{
		let user = wx.getStorageSync("loginInfo");
		let token = user.token||null;
		console.log(token)
		wx.request({
			url: baseUrl + url, // 仅为示例，并非真实的接口地址
			method: method,
			data: data,
			header: {
				'content-type': 'application/json', // 默认值
				'Authorization':token
			},
			success: function (res) {
				switch(res.data.code){
					case '200':
						resolve(res.data.params)
						break;
					case '400':
						showMessage(res.data.error);
						console.log(url==fetchUrl.refLogin)
						if(url == fetchUrl.refLogin){
							wx.clearStorageSync();
							setTimeout(()=>{
								const urls = "../login/main";
								console.log('this');
								console.log(mpvue)
								mpvue.redirectTo({url:urls})
							},500)
						}
						break;
				}
			},
			fail: function (res) {
			  reject(res)
			},
			complete: function () {
			}
		  })
	})
}

function showMessage(msg){
	wx.showToast({
		title:msg,
		icon:'none',
		duration:2000
	});
}

function cvsData(data,page,pageSize){
	let tempData = {
		check:"",
		page:page||0,
		pageSize:pageSize|0,
		params:data||null,
		time:(new Date()).getTime(),
		version:"1.0"
	}
	return tempData;
}

export const login = (data)=> Request(fetchUrl.login,cvsData(data)) 

export const getImg = () => Request(fetchUrl.getImg,null,'GET')

export const refLogin = (data) => Request(fetchUrl.refLogin,cvsData(data))

export const logOut = (data) => Request(fetchUrl.logOut,cvsData(data));

export const getRecipe = (data) => Request(fetchUrl.getRecipe,cvsData(data));

export const collectRp = (data) => Request(fetchUrl.collectRp,cvsData(data))