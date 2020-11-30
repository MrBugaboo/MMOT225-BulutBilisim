/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let marmara = [
{
  ad:"İstanbul",
  plaka:34,
  nufus:"15.519.267",
  bolge:"marmara"
},
{
  ad:"Bursa",
  plaka:16,
  nufus:"3.056.120",
  bolge:"marmara"
},
{
  ad:"Kocaeli",
  plaka:41,
  nufus:"1.953.035",
  bolge:"marmara"
},
{
  ad:"Balıkesir",
  plaka:10,
  nufus:"1.228.620",
  bolge:"marmara"
},
{
  ad:"Çanakkale",
  plaka:17,
  nufus:"542.157",
  bolge:"marmara"
},
{
  ad:"Sakarya",
  plaka:54,
  nufus:"1.029.650",
  bolge:"marmara"
},
{
  ad:"Tekirdağ",
  plaka:59,
  nufus:"1.055.412",
  bolge:"marmara"
},
{
  ad:"Edirne",
  plaka:22,
  nufus:"413.903",
  bolge:"marmara"
},
{
  ad:"Kırklareli",
  plaka:39,
  nufus:"361.836",
  bolge:"marmara"
},
{
  ad:"Yalova",
  plaka:77,
  nufus:"270.976",
  bolge:"marmara"
},
{
  ad:"Bilecik",
  plaka:11,
  nufus:"219.427",
  bolge:"marmara"
}
];

let ege = [
{
  ad:"İzmir",
  plaka:35,
  nufus:"4.367.251",
  bolge:"ege"
},
{
  ad:"Manisa",
  plaka:45,
  nufus:"1.440.611",
  bolge:"ege"
},
{
  ad:"Aydın",
  plaka:9,
  nufus:"1.110.972",
  bolge:"ege"
},
{
  ad:"Denizli",
  plaka:20,
  nufus:"1.037.208",
  bolge:"ege"
},
{
  ad:"Muğla",
  plaka:48,
  nufus:"983.142",
  bolge:"ege"
},
{
  ad:"Afyonkarahisar",
  plaka:3,
  nufus:"729.483",
  bolge:"ege"
},
{
  ad:"Kütahya",
  plaka:43,
  nufus:"579.257",
  bolge:"ege"
},
{
  ad:"Uşak",
  plaka:64,
  nufus:"370.509",
  bolge:"ege"
}
];

let icanadolu = [
{
  ad:"Ankara",
  plaka:6,
  nufus:"5.639.076",
  bolge:"icanadolu"
},
{
  ad:"Konya",
  plaka:42,
  nufus:"2.232.374",
  bolge:"icanadolu"
},
{
  ad:"Kayseri",
  plaka:38,
  nufus:"1.407.409",
  bolge:"icanadolu"
},
{
  ad:"Eskişehir",
  plaka:26,
  nufus:"887.475",
  bolge:"icanadolu"
},
{
  ad:"Sivas",
  plaka:58,
  nufus:"638.956",
  bolge:"icanadolu"
},
{
  ad:"Yozgat",
  plaka:66,
  nufus:"421.200",
  bolge:"icanadolu"
},
{
  ad:"Aksaray",
  plaka:68,
  nufus:"416.367",
  bolge:"icanadolu"
},
{
  ad:"Niğde",
  plaka:51,
  nufus:"362.861",
  bolge:"icanadolu"
},
{
  ad:"Nevşehir",
  plaka:50,
  nufus:"303.010",
  bolge:"icanadolu"
},
{
  ad:"Kırıkkale",
  plaka:71,
  nufus:"283.017",
  bolge:"icanadolu"
},
{
  ad:"Karaman",
  plaka:70,
  nufus:"253.279",
  bolge:"icanadolu"
},
{
  ad:"Kırşehir",
  plaka:40,
  nufus:"242.938",
  bolge:"icanadolu"
},
{
  ad:"Çankırı",
  plaka:18,
  nufus:"195.789",
  bolge:"icanadolu"
}
];

let akdeniz = [
{
  ad:"Antalya",
  plaka:7,
  nufus:"2.511.700",
  bolge:"akdeniz"
},
{
  ad:"Adana",
  plaka:1,
  nufus:"2.237.940",
  bolge:"akdeniz"
},
{
  ad:"Mersin",
  plaka:33,
  nufus:"1.840.425",
  bolge:"akdeniz"
},
{
  ad:"Hatay",
  plaka:31,
  nufus:"1.628.894",
  bolge:"akdeniz"
},
{
  ad:"Kahramanmaraş",
  plaka:46,
  nufus:"1.154.102",
  bolge:"akdeniz"
},
{
  ad:"Osmaniye",
  plaka:80,
  nufus:"538.759",
  bolge:"akdeniz"
},
{
  ad:"Isparta",
  plaka:32,
  nufus:"444.914",
  bolge:"akdeniz"
},
{
  ad:"Burdur",
  plaka:15,
  nufus:"270.796",
  bolge:"akdeniz"
}
];

let doguanadolu = [
{
  ad:"Malatya",
  plaka:44,
  nufus:"800.165",
  bolge:"doguanadolu"
},
{
  ad:"Van",
  plaka:65,
  nufus:"1.136.757",
  bolge:"doguanadolu"
},
{
  ad:"Erzurum",
  plaka:25,
  nufus:"762.062",
  bolge:"doguanadolu"
},
{
  ad:"Elazığ",
  plaka:23,
  nufus:"591.098",
  bolge:"doguanadolu"
},
{
  ad:"Ağrı",
  plaka:4,
  nufus:"536.199",
  bolge:"doguanadolu"
},
{
  ad:"Şırnak",
  plaka:73,
  nufus:"529.615",
  bolge:"doguanadolu"
},
{
  ad:"Muş",
  plaka:49,
  nufus:"408.809",
  bolge:"doguanadolu"
},
{
  ad:"Bitlis",
  plaka:13,
  nufus:"348.115",
  bolge:"doguanadolu"
},
{
  ad:"Kars",
  plaka:36,
  nufus:"285.410",
  bolge:"doguanadolu"
},
{
  ad:"Bingöl",
  plaka:12,
  nufus:"279.812",
  bolge:"doguanadolu"
},
{
  ad:"Erzincan",
  plaka:24,
  nufus:"234.747",
  bolge:"doguanadolu"
},
{
  ad:"Iğdır",
  plaka:76,
  nufus:"199.442",
  bolge:"doguanadolu"
},
{
  ad:"Hakkari",
  plaka:30,
  nufus:"280.991",
  bolge:"doguanadolu"
},
{
  ad:"Ardahan",
  plaka:75,
  nufus:"97.319",
  bolge:"doguanadolu"
},
{
  ad:"Tunceli",
  plaka:62,
  nufus:"84.660",
  bolge:"doguanadolu"
}
];

let guneydoguanadolu = [
{
  ad:"Şanlıurfa",
  plaka:63,
  nufus:"2.073.614",
  bolge:"guneydoguanadolu"
},
{
  ad:"Gaziantep",
  plaka:27,
  nufus:"2.069.364",
  bolge:"guneydoguanadolu"
},
{
  ad:"Diyarbakır",
  plaka:21,
  nufus:"1.756.353",
  bolge:"guneydoguanadolu"
},
{
  ad:"Mardin",
  plaka:47,
  nufus:"838.778",
  bolge:"guneydoguanadolu"
},
{
  ad:"Adıyaman",
  plaka:2,
  nufus:"626.465",
  bolge:"guneydoguanadolu"
},
{
  ad:"Batman",
  plaka:72,
  nufus:"608.659",
  bolge:"guneydoguanadolu"
},
{
  ad:"Siirt",
  plaka:56,
  nufus:"330.280",
  bolge:"guneydoguanadolu"
},
{
  ad:"Kilis",
  plaka:79,
  nufus:"142.490",
  bolge:"guneydoguanadolu"
}
];


let karadeniz = [
  {
    ad:"Samsun",
    plaka:55,
    nufus:"1.348.542",
    bolge:"karadeniz"
  },
  {
    ad:"Trabzon",
    plaka:61,
    nufus:"808.974",
    bolge:"karadeniz"
  },
  {
    ad:"Ordu",
    plaka:52,
    nufus:"754.198",
    bolge:"karadeniz"
  },
  {
    ad:"Tokat",
    plaka:60,
    nufus:"612.747",
    bolge:"karadeniz"
  },
  {
    ad:"Zonguldak",
    plaka:67,
    nufus:"596.053",
    bolge:"karadeniz"
  },
  {
    ad:"Çorum",
    plaka:19,
    nufus:"530.864",
    bolge:"karadeniz"
  },
  {
    ad:"Giresun",
    plaka:28,
    nufus:"448.400",
    bolge:"karadeniz"
  },
  {
    ad:"Düzce",
    plaka:81,
    nufus:"392.166",
    bolge:"karadeniz"
  },
  {
    ad:"Kastamonu",
    plaka:37,
    nufus:"379.405",
    bolge:"karadeniz"
  },
  {
    ad:"Rize",
    plaka:53,
    nufus:"343.212",
    bolge:"karadeniz"
  },
  {
    ad:"Amasya",
    plaka:5,
    nufus:"337.800",
    bolge:"karadeniz"
  },
  {
    ad:"Bolu",
    plaka:14,
    nufus:"316.126",
    bolge:"karadeniz"
  },
  {
    ad:"Karabük",
    plaka:78,
    nufus:"248.458",
    bolge:"karadeniz"
  },
  {
    ad:"Sinop",
    plaka:57,
    nufus:"218.243",
    bolge:"karadeniz"
  },
  {
    ad:"Bartın",
    plaka:74,
    nufus:"198.249",
    bolge:"karadeniz"
  },
  {
    ad:"Artvin",
    plaka:8,
    nufus:"170.875",
    bolge:"karadeniz"
  },
  {
    ad:"Gümüşhane",
    plaka:29,
    nufus:"164.521",
    bolge:"karadeniz"
  },
  {
    ad:"Bayburt",
    plaka:69,
    nufus:"84.843",
    bolge:"karadeniz"
  }
];

let getirilenListe = [];

function MarmaraGetir() {
  getirilenListe = marmara;
}
function EgeGetir() {
  getirilenListe = ege;
}
function IcAnadoluGetir() {
  getirilenListe = icanadolu;
}
function KaradenizGetir() {
  getirilenListe = karadeniz;
}
function AkdenizGetir() {
  getirilenListe = akdeniz;
}
function GuneyDoguAnadoluGetir() {
  getirilenListe = guneydoguanadolu;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liste: getirilenListe };
  }

  DoguAnadoluGetir() {
    this.setState({liste:doguanadolu});
  }
  EgeGetir() {
    this.setState({liste:ege});
  }
  AkdenizGetir() {
    this.setState({liste:akdeniz});
  }
  KaradenizGetir() {
    this.setState({liste:karadeniz});
  }
  IcAnadoluGetir() {
    this.setState({liste:icanadolu});
  }
  GuneyDoguAnadoluGetir() {
    this.setState({liste:guneydoguanadolu});
  }
  MarmaraGetir() {
    this.setState({liste:marmara});
  }

  render(){

  return (
    <>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.ust}>
          <TouchableOpacity onPress={() => this.MarmaraGetir()}>
            <Text style={styles.bolgeler}>Marmara Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.EgeGetir()}>
            <Text style={styles.bolgeler}>Ege Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.AkdenizGetir()}>
            <Text style={styles.bolgeler}>Akdeniz Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.IcAnadoluGetir()}>
            <Text style={styles.bolgeler}>İç Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.DoguAnadoluGetir()}>
            <Text style={styles.bolgeler}>Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.GuneyDoguAnadoluGetir()}>
            <Text style={styles.bolgeler}>Güney Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.KaradenizGetir()}>
            <Text style={styles.bolgeler}>Karadeniz Bölgesi</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.alt}>
          <FlatList
            data={this.state.liste}
            renderItem={({item}) => (
              <ScrollView>
              <View>
                <Text style={styles.listelenmisyazilar}>{item.plaka} - {item.ad} - {item.nufus}</Text>
              </View>
              </ScrollView>
              )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
};

const styles = StyleSheet.create({
    bolgeler:{
      fontSize: 25,
      fontWeight: "bold"
    },
    listelenmisyazilar:{
      fontSize: 20,
      fontWeight: "bold"
    },
    safearea:{
      flex:1
    },
    ust:{
      flex:1,
      borderWidth:1,
      backgroundColor: 'steelblue',
    },
    alt:{
      flex:1,
      borderWidth:1,
      backgroundColor: 'blue'
    }
});

export default App;
