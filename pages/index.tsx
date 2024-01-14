import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getWindowSize } from "@/hooks/getWindowSize";


const inter = Inter({ subsets: ['latin'] })


const nameblock = {
  display: 'flex',
  'flex-wrap': 'wrap',
  'text-align': 'left',
  'justify-content': 'center',
};
const imgblock = {
  display: 'flex',
  'flex-wrap': 'wrap',
  'text-align': 'center',
  'justify-content': 'center',
};
const artstyle = {
  'border-radius': '5%',
  'text-align': 'center',
  margin: 16,
};

const artlist = [
  'yuki39_2024.jpg',
  'ゲーセンNewRecord.jpg',
  'シャボン39.png',
  "シャロ23x'mas.jpg",
];

const snslist = [
  ['X(Twitter)', 'https://twitter.com/mmKreutzef'],
  ['Pixiv', 'https://www.pixiv.net/users/14106360'],
  ['Misskey', 'https://oekakiskey.com/@mmKreutzef'],
  ['Mail', 'mailto:mmkreutzef@gmail.com'],
]

function imglist() {
  let tmp = []
  let j = ""
  for (let i = 0; i < artlist.length; ++i) {
    j = '/arts/' + artlist[i];
    tmp.push(<a href={j} target="_blank"><Image leyout="Intrinsic" src={j} style={artstyle} width={300} height={200} /></a>)
  }
  return (
    tmp
  );
};

function snsList() {
  let tmp = []
  let j = ""
  for (let i = 0; i < snslist.length; ++i) {
    tmp.push(<li><a href={snslist[i][1]} target="_blank">{snslist[i][0]}</a></li>)
  }
  return (
    tmp
  );
};

const iconstyle = {
  'border-radius': '50%',
  'text-align': 'center',
  width: 128,
  margin: 16,
};
const namestyle = {
  'font-size': 64,
  'font-weight': 'bold',
  'text-align': 'left',
  paddingTop: 16,
};
const name_engstyle = {
  'font-size': 32,
};

const footer = {
  position: 'fixed !important',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 64,
  'border-top': 'solid',
  'border-color': 'gray',
  padding: 10,
  'text-align': 'center',
  marginTop: 16,
  paddingTop: 16
}

const copyright_style = {
  'font-size': 8,
  margin: 8
}



export default function Home() {
  const { height, width } = getWindowSize();
  return (
    <>
      <Head>
        <title>えむくろのアトリエ</title>
        <meta name="description" content="えむくろのホームページ。mmKreutzef's homepage. " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gene/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div style={nameblock}>
          <span><Image src={"/mmKreutzef.png"} alt="えむくろ" style={iconstyle} width={128} height={128} /></span>

          <div style={namestyle}>
            <p>えむくろ</p>
            <p style={name_engstyle}>mmKreutzef</p>
          </div>
        </div>
        <div style={imgblock}>{imglist()}</div>

        <div style={footer}>
          <ul>
            {snsList()}
          </ul>
          <p style={copyright_style}>Copyright 2024 mmKreutzef All Rights Reserved.</p>
        </div>
      </main>
    </>
  )
}
