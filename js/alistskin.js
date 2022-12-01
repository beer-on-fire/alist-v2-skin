/*
 * name : Future
 * edition : 2.0.2
 * message : 前端美化样式由星环[Future]提供，程序由Alist创始者友情提供
 * technical support : https://nav.666986.xyz/
 */

var x = true;
var conarr = ["星孤独的键","https://nav.666986.xyz/"];
$("html").click(function() {if (x) {var title = document.title,
// 个人信息编写区域+星环博客提供技术支持+ —————— ON

    // 头像链接地址
    headimg = "https://list.565869.xyz/d/%E5%BE%AE%E8%BD%AF%E4%BA%91%E7%9B%98/%E5%B7%A5%E4%BD%9C/%E8%BF%9B%E9%98%B6/%E4%BB%A3%E7%A0%81/alistskin/img/avatar.png",
    // 博主铭言句子
    motto = "白天搞笑的废物，夜晚抑郁的怪物。",
    // 配置 - 导航内容及链接【注：名称和链接需要一一对应，用英文逗号隔开】
    code = "";

// 个人信息编写区域+星环博客提供技术支持+ —————— END


code += '<h3>'+title+'</h3>';code += '<div id="uxhdimg"><img src="'+headimg+'" alt="['+title+']" /></div>';code += '<p>'+motto+'</p>';
$(".header").append(code);x = false;
console.log('%c '+conarr[0]+' %c '+conarr[1]+' ','padding: 5px 10px; color: #FFF; background-color:#282828; border-radius: 2px 0px 0px 2px;','padding: 5px 10px;color: #FFF; background-image: linear-gradient(to left,#00f2fe,#66ccff); border-radius: 0px 2px 2px 0px;');}})
$(document).on('click', '.buttons>span:eq(1) svg', function() { var $viwe = $(this).attr('viewBox'); })
window.onload = function(){ setTimeout(function() { if($("#uxhdimg").length <= 0){ x = true; } if(x){ $("html").click(); x = false; } }, 200);
setTimeout(function() { if($("#uxhdimg").length <= 0){ x = true; } if(x){ $("html").click(); x = false; } }, 500);
setTimeout(function() { if($("#uxhdimg").length <= 0){ x = true; } if(x){ $("html").click(); x = false; } }, 1000);
setTimeout(function() { if($("#uxhdimg").length <= 0){ x = true; } if(x){ $("html").click(); x = false; } }, 2000);
setTimeout(function() { if($("#uxhdimg").length <= 0){ x = true; } if(x){ $("html").click(); x = false; } }, 5000); }