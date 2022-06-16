/*
 * @Author: K先生 1346857496@qq.com
 * @Date: 2022-06-16 19:42:42
 * @LastEditors: K先生 1346857496@qq.com
 * @LastEditTime: 2022-06-16 20:59:24
 * @FilePath: \面试题\demo\mianshi\src\router\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from '../pages/Home'
const routes=[
    {
        path:'/home',
        component:Home
    },
    
    {
        from:'/',
        to:'/home'
    }
]
export default routes