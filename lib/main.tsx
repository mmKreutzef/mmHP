
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
        tmp.push(<a href={j} target="_blank"><Image src={j} style={artstyle} width={300} height={200} /></a>)
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