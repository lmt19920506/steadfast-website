// base64转图片
export const getBase64 = (base64) => {
    var changebase64 =
        "data:image/jpg;base64," + base64.replace(/[\r\n]/g, "");
    return changebase64;
}