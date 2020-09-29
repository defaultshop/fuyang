export default (url,sendData) => {
    // layer.open({
    //     type:2,
    //     shadeClose:false,
    //     shade: 'background-color: rgba(0,0,0,.3)'
    // });
    const ajax = new Promise(function(resolve, reject){
        var sData = JSON.stringify(sendData);
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            }
            // layer.closeAll();
            if (this.status === 200) {
                var res = JSON.parse(this.response);
                resolve(res);
            } else {
                reject(new Error('访问出错！'));
            }
        };
        const client = new XMLHttpRequest();
        client.open("POST", url);
        client.onreadystatechange = handler;
        client.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        client.setRequestHeader("sendChl", "hzsmk.h5");
        client.setRequestHeader("sendClient", "hellohzsmk");
        client.send(sData);
    });
    return ajax;
    
}