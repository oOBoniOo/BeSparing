import React, { useEffect, useRef, useState } from 'react';
import fetcher from '../../lib/swr-fetcher';
import _ from 'lodash';
import { Chart, BarElement, BarController, LinearScale, CategoryScale } from 'chart.js';
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
    const putamierda = await getData();
    console.log('peticion', putamierda);
    setData(putamierda);
    console.log('ESTADO', data);
    const openValues = data.map((e) => e.value);
    console.log('VALUES', openValues);
    const grafico = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'horas',
            data: [],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
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
    console.log(data);

    console.log('open', openValues);
    grafico.data.labels = _.range(openValues.length);
    grafico.data.datasets[0].data = openValues;
    grafico.update();
  };

  return (
    <div>
      <h2>PRECIO ELECTRICIDAD HOY</h2>
      <div style={{ height: 500 }}>
        <canvas ref={ref} />
      </div>
    </div>
  );
};

export default EData;
