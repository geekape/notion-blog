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
      <img className={styles.avatar} src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0ec6093-e882-4ff5-9fcb-c4c42e5c5c22%2F.jpg?table=block&id=7091c9db-e8de-4601-a4cb-f6b9a8b1a838&width=250&userId=67d077d2-fe1f-4a17-9a2c-8442be308e27&cache=v2" />
    </section>
  )
}
