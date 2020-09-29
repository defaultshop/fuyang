
function getUrl(name){
        var arr_last = window.location.href.split("?")[1];
        if(typeof(arr_last) != "undefined"){
            var items = arr_last.split("&");
            for(var i=0; i < items.length; i++){
                if(items[i].split("=")[0] == name && items[i].split("=")[1]){
                  var value =  items[i].split("=")[1];
                  return value;
                }
            }
        }
      }
function Maidian(obj){
				// 埋点统计
				// const env_type = 'test'
        // 进行埋点
				Analyze({
					env_type: env_type,
					business_id: obj.business_id || 'Y31nc',
					event_type: obj.event_type || 'click',
					element_id: obj.element_id || '',
					element_type: obj.element_type || 'page',
					element_content: obj.element_content || '',
					current_page_name: '杭州人才卡',
					current_page_url: location.href,
					service_zone:'',
				});
		}


export
{
  getUrl,
  Maidian,
}
