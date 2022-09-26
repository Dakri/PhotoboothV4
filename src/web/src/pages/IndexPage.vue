<template>
  <q-page  style="background-color: #333;">
    <div>
      <q-card>
        <q-card-section>
          <h5>Bitte beachten</h5>
          <q-list>
            <q-item>
              <q-item-section>
              <q-label>
                Kamera Konfiguration
              </q-label>
                <ul>
                  <li>Belichtung / Blitz einstellen</li>
                  <li>Fokus setzen und auf manuell stellen</li>
                </ul>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  Photobooth Einstellungen
                </q-item-label>
                <ul>
                  <li>USB Stick anschließen und für Live-Kopie konfigurieren</li>
                  <li>Eine neue Gallerie erstellen, alte ggf. für mehr Speicherplatz löschen</li>
                  <li>Testfotos machen und ggf. Delay für den Auslöser in den Einstellungen anpassen</li>
                </ul>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  Tipps und Tricks
                </q-item-label>
                <ul>
                  <li>Um im Client-Mode wieder auf Admin-Funktionen zuzugreifen, mehrfach auf Bildschirm tippen</li>
                </ul>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
    <div class="full-width row wrap justify-evenly items-stretch content-stretch q-gutter-md q-pa-md">
      <q-card class="col-grow card-storage">
        <q-card-section class="text-h4">
          Speicherverbrauch
        </q-card-section>
        <q-card-section style="text-align: center">
          <IEcharts :option="barChartOption" :resizable="true" style="height: 220px" />
        </q-card-section>
      </q-card>
      <q-card class="col-grow card-storage">
        <q-card-section class="text-h4">
          Anzahl Fotos
        </q-card-section>
        <q-card-section style="text-align: center">
          <IEcharts :option="fotoBarOptions" :resizable="true" style="height: 220px" />
        </q-card-section>
      </q-card>
      <q-card class="col-grow card-storage">
        <q-card-section class="text-h4">
          Gallerien
        </q-card-section>
        <q-card-section style="text-align: center">
          <IEcharts :option="galleryOptions" :resizable="true" style="height: 220px" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref, computed } from 'vue'
import { useSocketStore } from "stores/socket";
import IEcharts from 'vue3-echarts-v3'
import { format } from 'echarts'

export default {
  name: 'IndexPage',
  components: { IEcharts },
  setup() {
    const socket = useSocketStore()
    const storageSize = ref(300)
    const storageFree = ref(200)

    const barChartOption = computed(() => {
      return {
        backgroundColor: '#2c343c',

        title: {
          text: '',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 80,
          max: 400,
          inRange: {
            colorLightness: [.2, 1]
          }
        },
        series: [
          {
            name: 'Speicher',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              {value: storageSize.value - storageFree.value, name: 'Verbraucht'},
              {value: storageFree.value, name: 'Frei'},
              // {value: 335 , name: 'Frei'},
              // {value: 310 , name: 'Verbraucht'},
            ],
            roseType: 'radius',
            label: {
              color: 'rgba(255,255,255,0.71)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 40
            },
            itemStyle: {
              color: '#44c231',
              shadowBlur: 200,
              shadowColor: 'rgba(255,255,255,0.12)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      }
    })

    const fotoBarOptions = computed(() => {
      const dataCount = 900;


      function generateData(count) {
        var baseValue = Math.random() * 1000;
        var time = +new Date(2011, 0, 1);
        var smallBaseValue;

        function next(idx) {
          smallBaseValue = idx % 30 === 0
            ? Math.random() * 700
            : (smallBaseValue + Math.random() * 500 - 250);
          baseValue += Math.random() * 20 - 10;
          return Math.max(
            0,
            Math.round(baseValue + smallBaseValue) + 3000
          );
        }

        var categoryData = [];
        var valueData = [];

        for (var i = 0; i < count; i++) {
          categoryData.push(format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
          valueData.push(next(i).toFixed(2));
          time += 1000;
        }

        return {
          categoryData: categoryData,
          valueData: valueData
        };
      }

      const data = generateData(dataCount);

      return {
        title: {
          text: format.addCommas(dataCount) + ' Data',
          left: 10
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: false
            },
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          bottom: 90
        },
        dataZoom: [{
          type: 'inside'
        }, {
          type: 'slider'
        }],
        xAxis: {
          data: data.categoryData,
          silent: false,
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          }
        },
        yAxis: {
          splitArea: {
            show: false
          }
        },
        series: [{
          type: 'bar',
          data: data.valueData,
          // Set `large` for large data amount
          large: true
        }]
      };


    })

    const galleryOptions = computed(() => {
      return {
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Kita Fasching'],
            [57.1, 78254, 'Lea Taufe'],
            [74.4, 41032, 'Familien Fest '],
          ]
        },
        grid: {containLabel: true},
        xAxis: {name: 'amount'},
        yAxis: {type: 'category'},
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#D7DA8B', '#E15457']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      }
    })

    return {
      socket,
      barChartOption,
      fotoBarOptions,
      galleryOptions
    }
  }
}
</script>

<style>
.card-storage{
  background-color: #2c343c;
  color: #f0f0f0;
}
</style>
