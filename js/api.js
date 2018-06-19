//服务器地址
const mainUrl="https://www.iamxz.net"

/**
* @description 封装Ajax
* @constructor XZ
* @param {string} url - 请求地址
* @param {string} data - 需要发送的数据
* @returns {string/number} callback - 成功返回内容，失败返回0
*/
function request(url,data){
    let callback = 0
    $.ajax({
        url:mainUrl+url,
        type:"post",
        data:data,
        dataType:"json",
        success:function (result) {
            if (result.result == 'success') {
                callback = result.msg
            } else {
                //TODO：判断返回码并alert提示信息
                callback = 0
            }
        }
    })
    return callback
}
