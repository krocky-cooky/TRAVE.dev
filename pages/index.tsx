import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import UnityIcon from '../public/images/unity_icon.svg';
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [windowSize, setWindowSize] = useState<{width:number, height:number}>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width:
           window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

    
  return (
    <>
      <Head>
        <title>TRAVE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/TRAVE_Symbol.svg" />
      </Head>
      <main className={styles.top_main}>
        <Header />
        <section className={styles.image_section}>
          <div className={styles.circle_container}>
            <img src={"/images/circleclopped.png"} className={styles.circle_content} />
          </div>
          <div className={styles.image_container}>
          <img src={"/images/world_thumbnails.png"} className={styles.image_content}/>
          </div>
        </section>
        <section className={styles.what_is_trave}>
          <div className={styles.downloads_title}>
            TRAVEとは？
          </div>
          <div style={{width:"100%"}}>
          <div className={styles.youtube_wrapper}><YouTube videoId={"mAJBqyg3tq4"} /></div>
          </div>
          <div className={styles.what_is_trave_content}>
            <div>
              <div className={styles.what_is_trave_line}>
                VR空間において、
              </div>
              <div style={{display: "flex", flexDirection:"row"}} className={styles.what_is_trave_line}>
                <div style={{fontWeight: "bold"}}>
                  強力で
                </div>
                <div style={{width: "20px"}}></div>
                <div style={{fontWeight: "bold"}}>
                  多様な
                </div>
              </div>
              <div className={styles.what_is_trave_line}>
                力覚演出を実現し、筋トレの
              </div>
              <div style={{display: "flex"}} className={styles.what_is_trave_line}>
                <div style={{color: "red",fontWeight: "bold"}}>
                  視
                </div>
                <div style={{width: "20px"}}></div>
                <div style={{color: "green",fontWeight: "bold"}}>
                  聴
                </div>
                <div style={{width: "20px"}}></div>
                <div style={{color: "blue",fontWeight: "bold"}}>
                  力覚体験
                </div>
              </div>
              <div className={styles.what_is_trave_line}>
                を拡張します。
              </div>
              <div style={{marginTop: "50px",fontSize: "35px"}} >
                筋トレをより楽しく、高効率に。
              </div>
            </div>
            <div className={styles.training_image_container}>
              <img src={"/images/training_image.JPG"} className={styles.training_image}/>
            </div>
          </div>
          
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
              <a href="/images/TRAVE_device_schematic_beta.pdf" download="TRAVE_device_schematic.pdf">
              <div className={styles.card_wrapper}>
                <div className={styles.card}>
                  <div className={styles.img_wrap}>
                    <div><UnityIcon className={styles.card_img} width={200} height={100}/></div>
                  </div>
                  <div className={styles.card_content}>
                    <p className={styles.card_title}>筋トレデバイス回路図(pdf)</p>
                    <p className={styles.card_text}>TRAVE筋トレデバイスのUnityからの簡単な操作を実現。筋トレ×VRゲーム開発をより簡単に。</p>
                  </div>
                  <div className={styles.card_link}>
                    ダウンロード
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
          <div className={styles.contact_wrap}>
          <div className={styles.downloads_title} >
            Contact
          </div>
          <div className={styles.contact_flex}>
          <div className={styles.contact_title}>
            メールアドレス
          </div>
          <div className={styles.contact_content}>
            trave.training@gmail.com
          </div>
          </div>
          <div className={styles.contact_flex}>
          <div className={styles.contact_title}>
            Twitter
          </div>
          <div className={styles.contact_content}>
            <a href="https://twitter.com">https://twitter.com</a>
          </div>
          </div>
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  )
}
