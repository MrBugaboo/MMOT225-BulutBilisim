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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './NewsItem.js';

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <View><Text style={styles.bas}> Haberler </Text></View>
        <ScrollView>
        <NewsItem type='bilim' title='Uzayda Yeni Bir Uydu!' description='ABD XTG-52 uydusunu fırlattı'/>
        <NewsItem type='saglik' title='Doktor Önerileri!' description='Sağlıklı beslenin...'/>
        <NewsItem type='magazin' title='Tarkan Yakalandı!' description='Tarkan kız arkadaşı ile yakalandı!'/>
        <NewsItem type='saglik' title='Elmanın Yararları!' description='Elma içerisinde antioksidanlar barındırıyor.'/>
        <NewsItem type='siyaset' title='Kılıçdaroğlu Artık Başkan!' description='Seçimi CHP kazandı!'/>
        <NewsItem type='spor' title='Beşiktaş Kazandı!' description='Beşiktaş vs Fenerbahçe: 2-1'/>
        <NewsItem type='bilim' title='Elon Musk Harekete Geçti!' description='Tesla yeni modelini piyasaya sürdü.'/>
        <NewsItem type='spor' title='Tenis Maçı Nefesleri Kesti!' description='Andy Murray ve Dominic Thiem berabere.'/>
        <NewsItem type='magazin' title='İvana Sert: Şok İddia' description='Şampuanına asit koyulduğunu öne sürdü.'/>
        <NewsItem type='siyaset' title='Ankara Belediye Başkanı!' description='İl seçimlerinde Binali Yıldırım galip geldi.'/>
        <NewsItem type='bilim' title='Karadeliklerin Gizemi!' description='Karadelikler uzay-zamanı işte böyle büküyor.'/>
        <NewsItem type='spor' title='Galatasaray vs Fenerbahçe' description='Maç büyük beklentiye sahip.'/>
        <NewsItem type='siyaset' title='Erdoğan Hastalandı!' description='Sağlık durumu şimdilik iyi.'/>
        <NewsItem type='magazin' title='Aşk Masalı!' description='Ali ve Ayşe evleniyor!'/>
        <NewsItem type='bilim' title='Uzaylılar mı Keşfedildi!?' description='Bir gezegenin şüpheli hareketleri...'/>
        <NewsItem type='spor' title='Basketbolda Trabzonspor!' description='Trabzonspor vs Beşiktaş: 68-61'/>
        <NewsItem type='saglik' title='Su Zararlı mı?' description='Canan Karatay: Şok iddia!'/>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bas:{
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default App;
