/*
 * @Author: K先生 1346857496@qq.com
 * @Date: 2022-06-16 19:42:47
 * @LastEditors: K先生 1346857496@qq.com
 * @LastEditTime: 2022-06-16 20:41:39
 * @FilePath: \面试题\demo\mianshi\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
const RouterView=(props)=>{
    const {routes}=props
    return <Switch>
        {
            routes.map((item,index)=>
                item.path?<Route
                    key={index}
                    path={item.path}
                    render={(History)=> <item.component routes={item.children?item.children:[]} {...History}>
                        <RouterView routes={item.children?item.children:''}></RouterView>
                    </item.component>  }
                />
                :<Redirect key={index} {...item}/>
            )
        }
    </Switch>
}
export default RouterView