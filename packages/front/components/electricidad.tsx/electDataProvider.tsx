import React, { useEffect, useRef, useState } from 'react';
import fetcher from '../../lib/swr-fetcher';
import _ from 'lodash';
import { Chart, BarElement, BarController, LinearScale, CategoryScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(BarElement, BarController, CategoryScale, LinearScale);

const EData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const datos = await fetcher();
    return datos;
  };
  const ref = useRef<HTMLCanvasElement>();
  const ctx = ref?.current?.getContext('2d');

  useEffect(() => {
    pintarGrafico();
  }, [ctx]);

  const pintarGrafico = async () => {
    const datos = await getData();
    setData(datos);
    const openValues = data.map((e) => e.value);
    const max = Math.max(...openValues);
    const min = Math.min(...openValues);
    const tramo = (max - min) / 3;
    const colores = openValues.map((e) => {
      if (_.inRange(e, min, min + tramo)) {
        return '#00f46e';
      } else if (_.inRange(e, min - 1 + tramo, max - tramo)) {
        return '#ffd800';
      } else if (_.inRange(e, max - tramo, max + 1)) {
        return '#ff0000';
      } else {
        return '#ffd800';
      }
    });
    Chart.defaults.set('plugins.datalabels', {
      color: '#FE777B',
    });
    if (ctx) {
      const grafico = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [],
          datasets: [
            {
              label: 'horas',
              data: [],
              backgroundColor: colores,
              borderColor: 'rgba(0, 0, 0, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      });

      grafico.data.labels = _.range(openValues.length);
      grafico.data.datasets[0].data = openValues;
      grafico.update();
    }
  };

  return (
    <div className='flex flex-col w-3/4'>
      <h2>PRECIO ELECTRICIDAD HOY</h2>
      <div style={{ height: 500 }}>
        <canvas ref={ref} />
      </div>
    </div>
  );
};

export default EData;
