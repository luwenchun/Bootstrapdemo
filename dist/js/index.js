//公共post接口
function postajax(url,data,cb){
  var token=localStorage.getItem('token')
  $.ajax({
      type: 'post',
      url: url+'?token='+token,
      datatype: 'json',
      contentType: 'application/json',
      data:{},
      success: function(res) {
          return typeof cb == 'function' && cb(res);
      }
  })
}
//验证码
postajax('http://api.ekeae.com/eke/backstage/verificodedetect/getListLastTen.do',{},function (res) {
  for (var i = 0; i < res.data.length; i++) {
    $('#data').append("<td>"+res.data[i].sendtime+"</td>")
    $('#consume').append("<td>"+res.data[i].consume+"</td>")
  }
})
// private Integer sys_appemp;//最近7天   √
// private Integer sys_appempall; // √
// private Integer sys_appcust; //最近7天   √
// private Integer sys_appcustall; //√
//
// private Integer count_propertypic;  //房源图数量 √
// private Integer count_estatepic; //楼盘图 数量    √
// private Integer count_property;   //房源数量   √
// private Integer count_estate; //楼盘数量   √
// private Integer count_followrecord; //跟进记录   √
// private Integer count_followtskemp; //跟进任务助理
// private Integer count_followtskguest; //跟进任务客服
// private String count_smszhiqing; //z智晴短信   √
// private Integer count_smsdayu; //大鱼短信
// private Integer count_outbound; //外呼
// private Integer count_incoming; //呼入
// private Integer count_empguide; //助理带看记录√
// private Integer count_imgsize; //图库体积√
//
// private Integer audit_agentupdate; //代理调整   √
// private Integer audit_suggest; //建议   √
// private Integer audit_rentcontactok; //租单合同成交   √
// private Integer audit_rentcontactall; //租单合同总数   √
// private Integer audit_sellcontactok; //售单合同成交   √
// private Integer audit_sellcontactall; //售单合同总数   √
// private Integer audit_agentapply; //助理申请  √
// //private Integer audit_mapping; //待审测绘  2016-06-21去掉 跟待审楼盘 一个意思
// private Integer audit_estate; //待审楼盘
// private Integer audit_estatefind; //楼盘发现  √
// private Integer audit_contractAct; //提现申请  √
// private Integer audit_property_xj; //房源下架
// private Integer audit_property_dx; // 待登房源√
//
// private Integer routine_seatmess; //常务 坐席消息  √
// private Integer routine_empmess; //常务 坐席消息  √
// private Integer routine_follow; //常务 预约未处理  √
// private Integer routine_followAll; //常务 预约所有  √
//
// private Integer error_propertypic; //房源图
// private Integer error_estatepic; //楼盘图
// private Integer error_property; //房源
// private Integer error_follow; //跟进
// private Integer error_appemp; //
// private Integer error_appcust; //
//
// private Integer wechart_user_num; // 微信公众号关注人数
//统计 审核
postajax('http://api.ekeae.com/eke/backstage/public/getSystemConsole.do',{},function (res) {
  console.log(res)
  //统计
  $('#count_propertypic').html(res.data.count_propertypic)
  $('#count_estatepic').html(res.data.count_estatepic)
  $('#count_imgsiz').html(res.data.count_imgsiz)
  $('#count_count_property').html(res.data.count_property)
  $('#count_count_estate').html(res.data.count_estate)
  $('#count_count_smszhiqing').html(res.data.count_smszhiqing)
  $('#count_smsdayu').html(res.data.count_smsdayu)
  $('#count_followrecord').html(res.data.count_followrecord)
  $('#count_followtskemp').html(res.data.count_followtskemp+"/x")
  $('#count_followtskguest').html(res.data.count_followtskguest+"/x")
  //审核
  $('#audit_agentupdate').html(res.data.audit_agentupdate+"/x")
  $('#audit_suggest').html(res.data.audit_suggest)
  $('#audit_rentcontactok').html(res.data.audit_rentcontactok+"/"+res.data.audit_rentcontactall)
  $('#audit_sellcontactok').html(res.data.audit_sellcontactok+"/"+res.data.audit_sellcontactall)
  $('#audit_agentapply').html(res.data.audit_agentapply)
  $('#audit_property_dx').html(res.data.audit_property_dx)
  $('#audit_estatefind').html(res.data.audit_estatefind)
  //系统
  $('#sys_appemp').html(res.data.sys_appemp+"/"+res.data.sys_appempall)
  $('#sys_appcust').html(res.data.sys_appcust+"/"+res.data.sys_appcustall)

  $('#wechart_user_num').html(res.data.wechart_user_num)
  //常务
  $('#routine_seatmess').html(res.data.routine_seatmess)
  $('#routine_follow').html(res.data.routine_follow+"/"+res.data.routine_followAll)
  $('#supplies').html("x")


})
