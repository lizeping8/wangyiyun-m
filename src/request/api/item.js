import service from '../index';
//获取歌单详情页
export function getMusicItemList(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}
//获取歌单歌曲列表
export function getItemList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}&limit=10&offset=1`
    })
}
//获取歌单歌曲歌词
export function getItemLyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}