import React, { useState } from 'react';
import headerPng from '@/assets/header.png';
import { Button, Modal } from 'antd';

import styles from './index.less';
import request from 'umi-request';

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <section className={styles.register}>
      <div>
        <img src={headerPng} alt={'头像'} />
        <input
          placeholder="你的昵称"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <img src={headerPng} alt={'头像'} />
        <input
          placeholder="手机号"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <img src={headerPng} alt={'头像'} />
        <input
          placeholder="设置密码"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <Button
        className={styles.button}
        onClick={() => {
          setLoading(true);
          request(' https://conduit.productionready.io/api/users', {
            method: 'POST',
            data: {
              user: {
                username: name,
                email: phone,
                password: pwd,
              },
            },
          })
            .then(() => {
              window.location.reload();
              Modal.success({ content: '注册成功' });
            })
            .catch(() => {
              Modal.warn({ content: '注册失败' });
            })
            .finally(() => setLoading(false));
        }}
      >
        注册
      </Button>
    </section>
  );
};

export default Register;
