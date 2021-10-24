$(window).on('load', function () {
  "use strict";
  /*=========================================================================
          Preloader
  =========================================================================*/
  $("#preloader").delay(750).fadeOut('slow');
});

/*=========================================================================
            Home Slider
=========================================================================*/
$(document).ready(function () {
  "use strict";

  /*=========================================================================
          Slick sliders
  =========================================================================*/
  $('.post-carousel-lg').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  $('.post-carousel-featured').slick({
    dots: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        }
      }
      ,
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  $('.post-carousel-twoCol').slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ]
  });
  // Custom carousel nav
  $('.carousel-topNav-prev').click(function () {
    $('.post-carousel-twoCol').slick('slickPrev');
  });
  $('.carousel-topNav-next').click(function () {
    $('.post-carousel-twoCol').slick('slickNext');
  });


  $('.post-carousel-widget').slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        }
      }
    ]
  });
  // Custom carousel nav
  $('.carousel-botNav-prev').click(function () {
    $('.post-carousel-widget').slick('slickPrev');
  });
  $('.carousel-botNav-next').click(function () {
    $('.post-carousel-widget').slick('slickNext');
  });

  /*=========================================================================
          Sticky header
  =========================================================================*/
  var $header = $(".header-default, .header-personal nav, .header-classic .header-bottom"),
    $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function () {
    var fromTop = $(window).scrollTop();
    $('body').toggleClass("down", (fromTop > 300));
  });

});






$(function () {
  "use strict";

  /*=========================================================================
          Sticky Sidebar
  =========================================================================*/
  $('.sidebar').stickySidebar({
    topSpacing: 80,
    bottomSpacing: 30,
    containerSelector: '.main-content',
  });

  /*=========================================================================
          Vertical Menu
  =========================================================================*/
  $(".submenu").before('<i class="czs-angle-down-l switch"></i>');

  $(".vertical-menu li i.switch").on('click', function () {
    var $submenu = $(this).next(".submenu");
    $submenu.slideToggle(300);
    $submenu.parent().toggleClass("openmenu");
  });

  /*=========================================================================
          Canvas Menu
  =========================================================================*/
  $("button.burger-menu").on('click', function () {
    $(".canvas-menu").toggleClass("open");
    $(".main-overlay").toggleClass("active");
  });

  $(".canvas-menu .btn-close, .main-overlay").on('click', function () {
    $(".canvas-menu").removeClass("open");
    $(".main-overlay").removeClass("active");
  });

  /*=========================================================================
          Popups
  =========================================================================*/
  $("button.search").on('click', function () {
    $(".search-popup").addClass("visible");
  });

  $(".search-popup .btn-close").on('click', function () {
    $(".search-popup").removeClass("visible");
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
      $(".search-popup").removeClass("visible");
    }
  });

  /*=========================================================================
          Tabs loader
  =========================================================================*/
  $('button[data-bs-toggle="tab"]').on('click', function () {
    $("#postsTab .tab-pane").addClass("loading");
    $('#postsTabContent .lds-dual-ring').addClass("loading");
    setTimeout(function () {
      $("#postsTab .tab-pane").removeClass("loading");
      $('#postsTabContent .lds-dual-ring').removeClass("loading");
    }, 500);
  });
  

  /*=========================================================================
          Social more toggle
  =========================================================================*/
  $('.post button.toggle-button').each(function () {
    $(this).on('click', function (e) {      
      $(this).prev('.social-more .icons').toggleClass("visible");
      $(this).toggleClass('czs-close-l').toggleClass('czs-more');
    });
  });

  /*=========================================================================
  Spacer with Data Attribute
  =========================================================================*/
  var list = document.getElementsByClassName('spacer');

  for (var i = 0; i < list.length; i++) {
    var size = list[i].getAttribute('data-height');
    list[i].style.height = "" + size + "px";
  }

  /*=========================================================================
  Background Image with Data Attribute
  =========================================================================*/
  var list = document.getElementsByClassName('data-bg-image');

  for (var i = 0; i < list.length; i++) {
    var bgimage = list[i].getAttribute('data-bg-image');
    list[i].style.backgroundImage = "url('" + bgimage + "')";
  }

});


/* 切换夜间模式 */
function switchNightMode() {
  var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0";
  if (night == "0") {
    document.body.classList.add("dark-mode");
    document.body.style.backgroundColor = "#212529";
    document.cookie = "night=1;path=/";
    console.log("夜间模式开启")
  } else {
    document.body.classList.remove("dark-mode");
    document.body.style.backgroundColor = "#fff";
    document.cookie = "night=0;path=/";
    console.log("夜间模式关闭")
  }
} (function () {
  if (document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === "") {
    if (new Date().getHours() > 21 || new Date().getHours() < 6) {
      document.body.classList.add("dark-mode");
      document.body.style.backgroundColor = "#212529";
      document.cookie = "night=1;path=/";
      console.log("夜间模式开启")
    } else {
      document.body.classList.remove("dark-mode");
      document.body.style.backgroundColor = "#fff";
      document.cookie = "night=0;path=/";
      console.log("夜间模式关闭")
    }
  } else {
    var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0";
    if (night == "0") {
      document.body.classList.remove("dark-mode")
      document.body.style.backgroundColor = "#fff";
    } else {
      if (night == "1") {
        document.body.classList.add("dark-mode")
        document.body.style.backgroundColor = "#212529";
      }
    }
  }
})();

//js出始化lazyload并设置图片显示方式
$(function () { $("section.lazy,img.lazy").lazyload({ effect: "fadeIn", effectspeed: 1000, failure_limit: 0, threshold: 50 }); });
//pjax开启后的pjax回调
$(document).on('pjax:complete', function () {
  $("section.lazy,img.lazy").lazyload({
    effect: "fadeIn",
    effectspeed: 1000,
    failure_limit: 20,
    threshold: 200
  });
});

//点赞
$('.post-suport').on('click', function () {
  let cid = $(this).data('cid');
  $.ajax({
    url: `/?action=support`,
    type: 'POST',
    data: {
      cid: cid
    },
    dataType: 'json',
    success: res => {
      if (res.success) {
        $(this).removeClass('czs-heart-l').addClass('czs-heart')
        $(this).text(' ' + res.count + ' ' + ' ')
        $.notify({
          // options
          message: '感谢支持！'
        }, {
          // settings
          element: 'body',
          position: "fixed",
          type: "success",
          placement: {
            from: "top",
            align: "right"
          },
          offset: 90,
          spacing: 10,
          z_index: 1031,
          delay: 1000,
          timer: 1000,
          animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
          },
          template: '<div data-notify="container" class="col-xs-6 col-sm-6 alert alert-{0}" role="alert" style="right:0;width:10rem;background:rgb(71 183 76);color: white;box-shadow:rgb(71 183 76 / 50%) 0px 0px 30px 0px; ">' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '</div>'
        });
      } else {
        $.notify({
          // options
          message: '你已经点过赞了哦~'
        }, {
          // settings
          element: 'body',
          position: "fixed",
          type: "info",
          placement: {
            from: "top",
            align: "right"
          },
          offset: 90,
          spacing: 10,
          z_index: 1031,
          delay: 1000,
          timer: 1000,
          animate: {
            enter: 'animated wobble',
            exit: 'animated fadeOutUp'
          },
          template: '<div data-notify="container" class="col-xs-6 col-sm-6 alert alert-{0}" role="alert" style="right:0;width:12rem;background:#ff9800;color: white;box-shadow:rgb(255 152 0 / 43%) 0px 0px 30px 0px;">' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '</div>'
        });
      }
    }
  });
});

//点击加载更多
jQuery(document).ready(function ($) {
  //点击下一页的链接(即那个a标签)
  $('.next').click(function () {
    $this = $(this);
    $this.addClass('loading').text('正在努力加载'); //给a标签加载一个loading的class属性，用来添加加载效果
    var href = $this.attr('href'); //获取下一页的链接地址
    if (href != undefined) { //如果地址存在
      $.ajax({ //发起ajax请求
        url: href,
        //请求的地址就是下一页的链接
        type: 'get',
        //请求类型是get
        error: function (request) {
          //如果发生错误怎么处理
        },
        success: function (data) { //请求成功
          $this.removeClass('loading').text('加载更多'); //移除loading属性
          var $res = $(data).find('.post_list'); //从数据中挑出文章数据，请根据实际情况更改
          $('.article_list').append($res.fadeIn(500)); //将数据加载加进posts-loop的标签中。
          var newhref = $(data).find('.next').attr('href'); //找出新的下一页链接
          if (newhref != undefined) {
            $('.next').attr('href', newhref);
          } else {
            $('.page_load_more').remove(); //如果没有下一页了，隐藏
          }

          //懒加载
          $("section.lazy,img.lazy").lazyload({
            effect: "fadeIn",
            threshold: 200
          });

          //点赞
          $('.post-suport').on('click', function () {
            let cid = $(this).data('cid');
            $.ajax({
              url: `/?action=support`,
              type: 'POST',
              data: {
                cid: cid
              },
              dataType: 'json',
              success: res => {
                if (res.success) {
                  $(this).removeClass('czs-heart-l').addClass('czs-heart')
                  $(this).text(' ' + res.count + ' ' + ' ')
                  $.notify({
                    // options
                    message: '感谢支持！'
                  }, {
                    // settings
                    element: 'body',
                    position: "fixed",
                    type: "success",
                    placement: {
                      from: "top",
                      align: "right"
                    },
                    offset: 90,
                    spacing: 10,
                    z_index: 1031,
                    delay: 1000,
                    timer: 1000,
                    animate: {
                      enter: 'animated fadeInDown',
                      exit: 'animated fadeOutUp'
                    },
                    template: '<div data-notify="container" class="col-xs-6 col-sm-6 alert alert-{0}" role="alert" style="right:0;width:10rem;background:rgb(71 183 76);color: white;box-shadow:rgb(71 183 76 / 50%) 0px 0px 30px 0px; ">' +
                      '<span data-notify="title">{1}</span> ' +
                      '<span data-notify="message">{2}</span>' +
                      '</div>'
                  });
                } else {
                  $.notify({
                    // options
                    message: '你已经点过赞了哦~'
                  }, {
                    // settings
                    element: 'body',
                    position: "fixed",
                    type: "info",
                    placement: {
                      from: "top",
                      align: "right"
                    },
                    offset: 90,
                    spacing: 10,
                    z_index: 1031,
                    delay: 1000,
                    timer: 1000,
                    animate: {
                      enter: 'animated wobble',
                      exit: 'animated fadeOutUp'
                    },
                    template: '<div data-notify="container" class="col-xs-6 col-sm-6 alert alert-{0}" role="alert" style="right:0;width:12rem;background:#ff9800;color: white;box-shadow:rgb(255 152 0 / 43%) 0px 0px 30px 0px;">' +
                      '<span data-notify="title">{1}</span> ' +
                      '<span data-notify="message">{2}</span>' +
                      '</div>'
                  });
                }
              }
            });
          });


          $.notify({
            // options
            message: '加载成功'
          }, {
            // settings
            element: 'body',
            position: "fixed",
            type: "success",
            placement: {
              from: "top",
              align: "right"
            },
            offset: 90,
            spacing: 10,
            z_index: 1031,
            delay: 1000,
            timer: 1000,
            animate: {
              enter: 'animated fadeInDown',
              exit: 'animated fadeOutUp'
            },
            template: '<div data-notify="container" class="col-xs-6 col-sm-6 alert alert-{0}" role="alert" style="right:0;width:10rem;background:rgb(71 183 76);color: white;box-shadow:rgb(71 183 76 / 50%) 0px 0px 30px 0px; ">' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '</div>'
          });

          /*=========================================================================
                  Social more toggle
          =========================================================================*/
          $('.post button.toggle-button').each(function () {
            $(this).on('click', function (e) {      
              $(this).prev('.social-more .icons').toggleClass("visible");
              $(this).toggleClass('czs-close-l').toggleClass('czs-more');
            });
          });
  
        }
      });
    }
    return false;
  });
});

/* 私密回复 */
let holder = $('.comment-respond textarea').attr('placeholder');
$('#secret-button').click(function () {
    let textareaDom = $('.comment-respond textarea');
    if ($(this).is(':checked')) {
        textareaDom.attr('placeholder', '开启悄悄话~')
        $(".comment-respond textarea").addClass("secret-textarea");
    } else {
        textareaDom.attr('placeholder', holder)
        $(".comment-respond textarea").removeClass("secret-textarea");
    }
})


	/* 侧边栏人生倒计时功能 */
	{
		if ($('.aside__item.timelife').length) {
			let timelife = [
				{ title: '今日已经过去', endTitle: '小时', num: 0, percent: '0%' },
				{ title: '这周已经过去', endTitle: '天', num: 0, percent: '0%' },
				{ title: '本月已经过去', endTitle: '天', num: 0, percent: '0%' },
				{ title: '今年已经过去', endTitle: '个月', num: 0, percent: '0%' }
			];
			{
				let nowDate = +new Date();
				let todayStartDate = new Date(new Date().toLocaleDateString()).getTime();
				let todayPassHours = (nowDate - todayStartDate) / 1000 / 60 / 60;
				let todayPassHoursPercent = (todayPassHours / 24) * 100;
				timelife[0].num = parseInt(todayPassHours);
				timelife[0].percent = parseInt(todayPassHoursPercent) + '%';
			}
			{
				let weeks = { 0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 };
				let weekDay = weeks[new Date().getDay()];
				let weekDayPassPercent = (weekDay / 7) * 100;
				timelife[1].num = parseInt(weekDay);
				timelife[1].percent = parseInt(weekDayPassPercent) + '%';
			}
			{
				let year = new Date().getFullYear();
				let date = new Date().getDate();
				let month = new Date().getMonth() + 1;
				let monthAll = new Date(year, month, 0).getDate();
				let monthPassPercent = (date / monthAll) * 100;
				timelife[2].num = date;
				timelife[2].percent = parseInt(monthPassPercent) + '%';
			}
			{
				let month = new Date().getMonth() + 1;
				let yearPass = (month / 12) * 100;
				timelife[3].num = month;
				timelife[3].percent = parseInt(yearPass) + '%';
			}
			let htmlStr = '';
			timelife.forEach((item, index) => {
				htmlStr += `
						<div class="item">
							<div class="title">
								${item.title}
								<span class="text">${item.num}</span>
								${item.endTitle}
							</div>
							<div class="progress">
								<div class="progress-bar">
									<div class="progress-bar-inner progress-bar-inner-${index}" style="width: ${item.percent}"></div>
								</div>
								<div class="progress-percentage">${item.percent}</div>
							</div>
						</div>`;
			});
			$('.aside__item.timelife .aside__item-contain').html(htmlStr);
		}
	}

  if($(".aside__item.timelife").length){let e=[{title:"今日已经过去",endTitle:"小时",num:0,percent:"0%"},{title:"这周已经过去",endTitle:"天",num:0,percent:"0%"},{title:"本月已经过去",endTitle:"天",num:0,percent:"0%"},{title:"今年已经过去",endTitle:"个月",num:0,percent:"0%"}];{let t=+new Date,o=new Date((new Date).toLocaleDateString()).getTime(),a=(t-o)/1e3/60/60,n=a/24*100;e[0].num=parseInt(a),e[0].percent=parseInt(n)+"%"}{let t={0:7,1:1,2:2,3:3,4:4,5:5,6:6},o=t[(new Date).getDay()],a=o/7*100;e[1].num=parseInt(o),e[1].percent=parseInt(a)+"%"}{let t=(new Date).getFullYear(),o=(new Date).getDate(),a=(new Date).getMonth()+1,n=new Date(t,a,0).getDate(),i=o/n*100;e[2].num=o,e[2].percent=parseInt(i)+"%"}{let t=(new Date).getMonth()+1,o=t/12*100;e[3].num=t,e[3].percent=parseInt(o)+"%"}let t="";e.forEach((e,o)=>{t+=`\n\t\t\t\t\t\t<div class="item">\n\t\t\t\t\t\t\t<div class="title">\n\t\t\t\t\t\t\t\t${e.title}\n\t\t\t\t\t\t\t\t<span class="text">${e.num}</span>\n\t\t\t\t\t\t\t\t${e.endTitle}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="progress">\n\t\t\t\t\t\t\t\t<div class="progress-bar">\n\t\t\t\t\t\t\t\t\t<div class="progress-bar-inner progress-bar-inner-${o}" style="width: ${e.percent}"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="progress-percentage">${e.percent}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>`}),$(".aside__item.timelife .aside__item-contain").html(t)}if($(".aside__item.weather").length){const e=$(".aside__item.weather").attr("data-key"),t=$(".aside__item.weather").attr("data-style"),o={1:"FFFFFF",2:"4A4A4A",3:"FFFFFF"};window.WIDGET={CONFIG:{layout:2,width:"220",height:"270",background:t,dataColor:o[t],language:"zh",key:e}},$.getScript("https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0")}if($(".aside__item.tags").length){const e=[],t=["#F8D800","#0396FF","#EA5455","#7367F0","#32CCBC","#F6416C","#28C76F","#9F44D3","#F55555","#736EFE","#E96D71","#DE4313","#D939CD","#4C83FF","#F072B6","#C346C2","#5961F9","#FD6585","#465EFB","#FFC600","#FA742B","#5151E5","#BB4E75","#FF52E5","#49C628","#00EAFF","#F067B4","#F067B4","#ff9a9e","#00f2fe","#4facfe","#f093fb","#6fa3ef","#bc99c4","#46c47c","#f9bb3c","#e8583d","#f68e5f"],o=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e);$(".aside__item-contain .list li").each((a,n)=>{e.push({label:$(n).attr("data-label"),url:$(n).attr("data-url"),target:"_blank",fontColor:t[o(0,t.length-1)],fontSize:15})}),$(".aside__item-contain .tag").svg3DTagCloud({entries:e,width:220,height:220,radius:"65%",radiusMin:75,bgDraw:!1,fov:800,speed:.5,fontWeight:500})}
