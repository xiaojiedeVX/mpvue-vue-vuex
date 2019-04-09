/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

let baseUrl = ''; 
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {
	imgBaseUrl = 'http://www.quanyongshengxian.com/images/';
	baseUrl = "http://192.168.0.105:8084/xzdplus/";

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = 'http:www.quanyongshengxian.com';
    imgBaseUrl = 'http://www.quanyongshengxian.com/images/';
}

export {
	baseUrl,
	imgBaseUrl,
}