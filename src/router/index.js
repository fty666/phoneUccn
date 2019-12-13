import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//首页
import indexs from '@/page/index'
//加入我们
import joinme from '@/page/joinMine'
//加盟管理
import tojoin from '@/page/toJoin'
//餐饮系统
import catering from '@/page/catering/cateringIndex'
//餐厅管理
import restaurant from '@/page/catering/restaurant'
import kitchen from '@/page/catering/kitchen'
import customer from '@/page/catering/customer'
import business from '@/page/catering/business'
import wisdom from '@/page/catering/wisdom'
import form from '@/page/catering/form'
import take from '@/page/catering/take'
import market from '@/page/catering/market'

//亮点展示
import lightspot from '@/page/lightspot/lightspotIndex'
import league from '@/page/lightspot/league'
import leagWisdom from '@/page/lightspot/wisdom'
import protrayal from '@/page/lightspot/portrayal'

//特色亮点
import offine from '@/page/feature/offineIndex'
import frm from '@/page/feature/RFM'
import rownumber from '@/page/feature/rowNumber'
import retail from '@/page/feature/retail'
import coupon from '@/page/feature/coupon'
import userportrayal from '@/page/feature/portrayal'
import collMoney from '@/page/feature/collMoney'
import marketing from '@/page/feature/marketing'
//公司简介
import compony from '@/page/company/compony'
import culture from '@/page/company/culture'
import componyWay from '@/page/company/componyWay'
import develop from '@/page/company/develop'
export default new Router({
	routes: [
		{
			path: '/',
			name: 'indexs',
			component: indexs
		},
		{
			path: '/joinme',
			name: 'joinme',
			component: joinme
		},
		{
			path: '/tojoin',
			name: 'tojoin',
			component: tojoin
		},
		{
			path: '/catering',
			name: 'catering',
			component: catering,
			children: [
				{
					path: 'restaurant',
					name: 'restaurant',
					component: restaurant
				},
				{
					path: 'kitchen',
					name: 'kitchen',
					component: kitchen
				},
				{
					path: 'customer',
					name: 'customer',
					component: customer
				},
				{
					path: 'business',
					name: 'business',
					component: business
				},
				{
					path: 'wisdom',
					name: 'wisdom',
					component: wisdom
				},
				{
					path: 'form',
					name: 'form',
					component: form
				},
				{
					path: 'take',
					name: 'take',
					component: take
				},
				{
					path: 'market',
					name: 'market',
					component: market
				},
			]
			
		},
		{
			name: 'lightspot',
			path: '/lightspot',
			component: lightspot
		},
		{
			name: 'league',
			path: '/league',
			component: league
		},
		{
			name: 'leagWisdom',
			path: '/leagWisdom',
			component: leagWisdom
		},
		{
			name: 'protrayal',
			path: '/protrayal',
			component: protrayal
		},
		{
			name: 'offine',
			path: '/offine',
			component: offine
		},
		{
			name: 'frm',
			path: '/frm',
			component: frm
		},
		{
			name: 'rownumber',
			path: '/rownumber',
			component: rownumber
		},
		{
			name: 'retail',
			path: '/retail',
			component: retail
		},
		{
			name: 'coupon',
			path: '/coupon',
			component: coupon
		},
		{
			name: 'userportrayal',
			path: '/userportrayal',
			component: userportrayal
		},
		{
			name: 'collMoney',
			path: '/collMoney',
			component: collMoney
		},
		{
			name:'marketing',
			path:'/marketing',
			component:marketing
		},
		{
			name:'compony',
			path:'/compony',
			component:compony
		},
		{
			name:'culture',
			path:'/culture',
			component:culture
		},
		{
			name:'develop',
			path:'/develop',
			component:develop
		},
		{
			name:'componyWay',
			path:'/componyWay',
			component:componyWay
		}
	]
})
