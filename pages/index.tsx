import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityIcon from '../public/images/unity_icon.svg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>TRAVE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.top_main}>
        <Header />
        <section className={styles.image_section}>

        </section>
        <section className={styles.what_is_trave}>

        </section>
        <section className={styles.downloads}>
          <div className={styles.downloads_title}>
            Downloads
          </div>
          <div className={styles.card_grid}>
            <div className={styles.grid_component}>
              <a href="https://github.com/krocky-cooky/TRAVE_unity">
              <div className={styles.card_wrapper}>
                <div className={styles.card}>
                  <div className={styles.img_wrap}>
                    <div><UnityIcon className={styles.card_img} width={200} height={100}/></div>
                  </div>
                  <div className={styles.card_content}>
                    <p className={styles.card_title}>TRAVE_unity</p>
                    <p className={styles.card_text}>TRAVE筋トレデバイスのUnityからの簡単な操作を実現。筋トレ×VRゲーム開発をより簡単に。</p>
                  </div>
                  <div className={styles.card_link}>
                    詳細
                  </div> 
                  
                </div>
              </div>
              </a>
            </div>
            <div className={styles.grid_component}>
              <a href="https://github.com/krocky-cooky/TRAVE_unity">
              <div className={styles.card_wrapper}>
                <div className={styles.card}>
                  <div className={styles.img_wrap}>
                    <div><UnityIcon className={styles.card_img} width={200} height={100}/></div>
                  </div>
                  <div className={styles.card_content}>
                    <p className={styles.card_title}>筋トレデバイスOSH(Open Source Hardware)</p>
                    <p className={styles.card_text}>TRAVE筋トレデバイスのUnityからの簡単な操作を実現。筋トレ×VRゲーム開発をより簡単に。</p>
                  </div>
                  <div className={styles.card_link}>
                    詳細
                  </div> 
                  
                </div>
              </div>
              </a>
            </div>
            <div className={styles.grid_component}>
              <a href="https://github.com/krocky-cooky/2022mito-training-world">
              <div className={styles.card_wrapper}>
                <div className={styles.card}>
                  <div className={styles.img_wrap}>
                    <div><img className={styles.card_img} width={300} height={200} src={"../images/thumbnails.png"}/></div>
                  </div>
                  <div className={styles.card_content}>
                    <p className={styles.card_title}>デモ筋トレコンテンツ</p>
                    <p className={styles.card_text}>TRAVE筋トレデバイスのUnityからの簡単な操作を実現。筋トレ×VRゲーム開発をより簡単に。</p>
                  </div>
                  <div className={styles.card_link}>
                    詳細
                  </div> 
                  
                </div>
              </div>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.contact}>
          
        </section>
        
      </main>
      <Footer />
    </>
  )
}
