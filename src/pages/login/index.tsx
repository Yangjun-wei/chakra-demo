import React, { useState } from 'react';
import headerPng from '@/assets/header.png';
import request from 'umi-request';

import styles from './index.less';
import { Button, Modal } from 'antd';
import { Simulate } from 'react-dom/test-utils';

const Login = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <section className={styles.login}>
      <div>
        <img src={headerPng} alt={'头像'} />
        <input
          placeholder="手机号或邮箱"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <img src={headerPng} alt={'头像'} />
        <input
          placeholder="密码"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div className={styles.question}>
        <div>
          <input type="checkbox" />
          <span>记住我</span>
        </div>
        <div>登陆遇到问题?</div>
      </div>
      <Button
        loading={loading}
        className={styles.button}
        onClick={() => {
          setLoading(true);
          request(' https://conduit.productionready.io/api/users/login', {
            method: 'POST',
            data: {
              user: {
                email: name,
                password: pwd,
              },
            },
          })
            .then(() => Modal.success({ content: '登陆成功' }))
            .catch(() => {
              Modal.warn({ content: '登录失败' });
            })
            .finally(() => setLoading(false));
        }}
      >
        登陆
      </Button>
    </section>
  );
};

export default Login;
