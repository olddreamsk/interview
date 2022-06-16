/*
 * @Author: K先生 1346857496@qq.com
 * @Date: 2022-06-16 19:25:24
 * @LastEditors: K先生 1346857496@qq.com
 * @LastEditTime: 2022-06-16 21:39:46
 * @FilePath: \面试题\demo\mianshi\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './App.css';
import RouterView from './router';
import routes from './router/config';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Input, Button } from 'antd';
import React from 'react';
const { Content, Sider } = Layout;

function App() {
  const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="bodyBox">
        <Layout
                style={{
                  padding: '0 24px 24px',
                }}
              >
          <div className="left_menu">
         
              <Sider width={200} className="site-layout-background">
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{
                    height: '100%',
                    borderRight: 0,
                  }}
                  items={items2}
                />
              </Sider>
            
          </div>
          <div className="right_content">
            <RouterView routes={routes}>
            </RouterView>
          </div>
          </Layout>
        </div>
      </div>

    </div>
  );
}

export default App;
