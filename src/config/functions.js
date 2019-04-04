
import { baseUrl } from './env';
import fetchUrl  from './fetchUrl'
//登录

function Request(url='',data = {},method="POST",fnError){
	return new Promise((resolve,reject)=>{
		let user = wx.getStorageSync("loginInfo");
		let token = user.token||null;
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
						resolve(res.data)
						break;
					case '400':
						showMessage(res.data.error);
						fnError&&fnError();
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

export function formatDate(date){
	const year = date.getFullYear();
	const month = date.getMonth()+1;
	const day = date.getDate();
	return [year,month,day].map(formatNumber).join('-')
}

export function getWeekDay(){
	var new_Date = new Date()
    var timesStamp = new_Date.getTime();
    var currenDay = new_Date.getDay();
    var dates = [];
    for(var i = 0; i < 5; i++) {
		let date =  new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7));
		const year = date.getFullYear();
		const month = date.getMonth()+1;
		const day = date.getDate();
        dates.push([year,month,day].map(formatNumber).join('-'));
    }
    return dates
}
const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  




export const login = (data)=> Request(fetchUrl.login,cvsData(data)) 

export const getImg = () => Request(fetchUrl.getImg,null,'GET')

export const refLogin = (data) => Request(fetchUrl.refLogin,cvsData(data))

export const logOut = (data) => Request(fetchUrl.logOut,cvsData(data));

export const getRecipe = (data) => Request(fetchUrl.getRecipe,cvsData(data));

export const collectRp = (data) => Request(fetchUrl.collectRp,cvsData(data));

export const getRpDetail = (data) => Request(fetchUrl.getRpDetail,cvsData(data));

export const getUserInfo = (data) => Request(fetchUrl.getUserInfo,cvsData(data)) 

export const getParentInfo = (data) => Request(fetchUrl.getParentInfo,cvsData(data))

export const getStutentInfo = (data) => Request(fetchUrl.getStutentInfo,cvsData(data));

export const setDefaultStudent = (data) => Request(fetchUrl.setDefaultStudent,cvsData(data));

export const getBanner = (data) => Request(fetchUrl.getBanner,cvsData(data))

export const getRpCollect = (data) => Request(fetchUrl.getRpCollect,cvsData(data))

export const getRpCollectDet = (data) =>Request(fetchUrl.getRpCollectDet,cvsData(data))

export const getHomeGood = (data,page,pageSize) => Request(fetchUrl.getHomeGood,cvsData(data,page,pageSize))

export const upDatePw = (data,fnError) => Request(fetchUrl.upDatePw,cvsData(data),'POST',fnError)

export const getGoodDet = (data) => Request(fetchUrl.getGoodDet,cvsData(data))