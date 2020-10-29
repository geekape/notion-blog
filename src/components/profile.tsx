import styles from '../styles/profile.module.css'

const iconStyle = { marginLeft: '20px', cursor: 'pointer' }

export default function Profile() {
  return (
    <section className={styles.profile}>
      <div>
        <h1>钟储兵的博客</h1>
        <p>专注前端开发，努力成为独立开发者</p>
        <p className={styles.follows}>
          <span>Follow me 👉</span>
          <a href="mailto:861013016@qq.com">
            <ion-icon name="mail" style={iconStyle}></ion-icon>
          </a>
          <a href="https://github.com/geekape" target="_blank">
            <ion-icon name="logo-octocat" style={iconStyle}></ion-icon>
          </a>
        </p>
      </div>
      <img className={styles.avatar} src="https://avatars2.githubusercontent.com/u/27131698?s=460&u=b770816425f4dafb1acd3ec94e13b3c96ff76b32&v=4" />
    </section>
  )
}
