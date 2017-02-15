var TableSetting = {
	"bScrollCollapse": true, //当显示的数据不足以支撑表格的默认的高度时，依然显示纵向的滚动条。(默认是false) 
	"bPaginate": true, //是否显示分页
	"bLengthChange": true, //每页显示的记录数
	"bFilter": true, //搜索栏
	//"bSort": true, //是否支持排序功能
	"bInfo": true, //显示表格信息
	"bAutoWidth": true, //自适应宽度
	"aaSorting": [
		[1, "asc"]
	], //给列表排序 ，第一个参数表示数组 (由0开始)。1 表示Browser列。第二个参数为 desc或是asc
	"bStateSave": true, //保存状态到cookie *************** 很重要 ， 当搜索的时候页面一刷新会导致搜索的消失。使用这个属性就可避免了
	"sPaginationType": "full_numbers", //分页，一共两种样式，full_numbers和two_button(默认)
	"oLanguage": {
		"sLengthMenu": "每页显示 _MENU_ 条记录",
		"sZeroRecords": "对不起，查询不到任何相关数据",
		"sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
		"sInfoEmpty": "",
		"sInfoFiltered": "数据表中共为 _MAX_ 条记录",
		"sProcessing": "正在加载中...",
		"sSearch": "搜索",
		"sUrl": "", //多语言配置文件，可将oLanguage的设置放在一个txt文件中，例：Javascript/datatable/dtCH.txt
		"oPaginate": {
			"sFirst": "第一页",
			"sPrevious": " 上一页 ",
			"sNext": " 下一页 ",
			"sLast": " 最后一页 "
		}
	}, //多语言配置
	"bJQueryUI": false, //可以添加 jqury的ui theme  需要添加css
	"aLengthMenu": [
			[10, 25, 50, -1 /*, 0*/ ],
			["每页10条", "每页25条", "每页50条", "显示所有数据", "不显示数据"]
		] //设置每页显示记录的下拉菜单
};
//克隆dom
$(".b-clone-dom").click(function(clone) {
	$(this).parent().find('.b-clone-group').append(
		$(this).parent().find('.hidden').clone(true));
	$(this).parent().find('.hidden:first').siblings().removeClass('hidden');
});
//页面加载完成先执行一次克隆
$(document).ready(function() {
	$(".b-clone-dom").each(function(index, element) {
		$(element).parent().find('.b-clone-group').append(
			$(element).parent().find('.hidden').clone(true));
		$(element).parent().find('.hidden:first').siblings().removeClass('hidden');
	});
});

//表格直接编辑功能
$(".b-edit").click(function() {
	str = $(this).html() == "编辑" ? "确定" : "编辑";
	$(this).html(str);
	$(this).parent().siblings("td").each(function() {
		obj_text = $(this).find("input:text");
		if(!obj_text.length) {
			$(this).html("<input type='text' value='" + $(this).text() + "'>")
		} else {
			$(this).html(obj_text.val());
		}
	});
});
//表格行点击颜色
$("table > tbody > tr").mousedown(function () {
	$(this).siblings().removeClass('table-checked');
	$(this).addClass('table-checked');
});
//checkbox tree
//备注：基于bootstrap-treeview配置：https://github.com/jonmiles/bootstrap-treeview
var defaultData = [{
		text: '全部',
	nodes: [{
		text: '深圳 ',
		nodes: [{
		text: '福田 ',
		nodes: [{
		text: '沙河 ',
		nodes: [{
		text: '沙湖豪园 ',
	}]
	}]
	},{
		text:'南山区',
		nodes: [{
		text: '华侨城',
		nodes: [{
		text: '星河盛世 ',
	}]
	}]
	}
	]},{
		text:'广州'
	}]
	}];

var json = '[' +
	'{' +
	'"text": "Parent 1",' +
	'"nodes": [' +
	'{' +
	'"text": "Child 1",' +
	'"nodes": [' +
	'{' +
	'"text": "Grandchild 1"' +
	'},' +
	'{' +
	'"text": "Grandchild 2"' +
	'}' +
	']' +
	'},' +
	'{' +
	'"text": "Child 2"' +
	'}' +
	']' +
	'},' +
	'{' +
	'"text": "Parent 2"' +
	'},' +
	'{' +
	'"text": "Parent 3"' +
	'},' +
	'{' +
	'"text": "Parent 4"' +
	'},' +
	'{' +
	'"text": "Parent 5"' +
	'}' +
']';
