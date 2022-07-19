import request from '@/utils/request'
/**
 *用户登录
 * @param {mobile,password} data
 * @returns
 */
export function login (data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
/** *
 *
 * 获取用户的基本信息  现在写它 完全是为了显示头像
 * **/
export function getUserDetailById (id) {
  return request({
    url: `/sys/user/${id}`
  })
}
/**
 *
 * @returns 获取用户个人资料
 */
export function getInfo () {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}
// 退出
export function logout () {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

// 获取简单列表
export const getSimpleUserList = () => {
  return request({
    url: '/sys/user/simple'
  })
}
