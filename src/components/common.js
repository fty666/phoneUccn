//页面返回顶部
const menu = function () {
	window.scrollTo(0, 0)
};
const reg =/^1([358][0-9]|4[5789]|66|7[0135678]|9[89])[0-9]{8}$/;
export default {
	menu,
	reg
}