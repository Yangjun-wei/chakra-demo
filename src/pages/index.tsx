import styles from './index.less';
import React, { useState } from 'react';
import Login from '@/pages/login';
import Register from '@/pages/register';

export default function IndexPage() {
  const [menu, setMenu] = useState(true);
  return (
    <div className={styles.main}>
      <section className={styles.header}>
        <div
          className={menu ? styles.selectedMenu : undefined}
          onClick={() => setMenu(true)}
        >
          登陆
        </div>
        <b>·</b>
        <div
          className={menu ? undefined : styles.selectedMenu}
          onClick={() => setMenu(false)}
        >
          注册
        </div>
      </section>
      <section className={styles.body}>
        {menu ? <Login /> : <Register />}
      </section>
    </div>
  );
}
