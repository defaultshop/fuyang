import { Maidian } from "./com";
;(function () {
  var _ua = navigator.userAgent.toLowerCase();
  if (_ua.indexOf("smkversion") > 0) {
    // 获取设备信息
    window.yl.call("getDeviceInfo", {}, {
      onSuccess: function (a) {
        var _equipment = false;
        if (a.errorCode == 0) {
          var v = a.param.osVersion.split('.')[0]
          if (a.param.terminal == 'Android' && Number(v) >= 8) {
            _equipment = true
          }else if (a.param.terminal == 'iOS' && Number(v) >= 10)
          {
            _equipment = true
          }
          if (_equipment) {
            window.yl.call("setTitleBarRightButton", {
              rightButtonShow: true,
              rightButtonTextOpen: false,
              rightButtonText: "",
              rightButtonIcon: "icon_more",
              loadingList: true,
              itemList: [
                {
                  itemIcon: "icon_user",
                  itemText: "添加到桌面"
                }
              ]
            }, {
              onSuccess: function (a) {
                if (a.param.itemid == 0) {
                  Maidian({ element_id: "M32nl" })
                  window.yl.call("saveDesktop", {
                    id: "smk_hzrcm", //业务id确认唯一性
                    name: "杭州人才码",//业务名称
                    iconId: "smk_code",//图标id 确认使用哪一种图标
                    url: selfURL
                  },
                    {
                      onSuccess: function (a) {
                        console.log('添加桌面成功了')
                      },
                      onFail: function (a) {
                        console.log(a)
                      }
                    })
                }
              },
              onFail: function (a) {
                console.log(a)
              }
            })
          }
        }
      },
      onFail: function (a) {
        console.log(a)
      }
    })
  } else {
    return
  }
})()
