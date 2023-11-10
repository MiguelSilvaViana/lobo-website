'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';

/* 
 style={{
          willChange: 'transform',
          transform:
            'perspective(1000px) rotateX(8.77deg) rotateY(9.35deg) scale3d(1, 1, 1)',
          transition: 'all 300ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
        }}

*/

const CreditCard3d = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Inicialize o efeito de inclinação no elemento quando o componente for montado

    // 1 Define o ângulo máximo de inclinação
    // 2 Define a velocidade da animação
    // 3 Ativa o efeito de brilho
    // 4 Define a intensidade do brilho
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }

    // Certifique-se de limpar a instância do VanillaTilt quando o componente for desmontado
    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div id='block-volticard-visual'>
      <div ref={tiltRef} data-tilt id='block-volticard-visual-card'>
        <div className='logo'>
          <Image
            src='/img/credit-logo.png'
            alt='Volt Inu'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full'
          />
        </div>

        <div className='name'>Volt Inu</div>

        <div className='chip'>
          <div className='chip-line'></div>
          <div className='chip-line'></div>
          <div className='chip-line'></div>
          <div className='chip-line'></div>
          <div className='chip-main'></div>
        </div>

        <svg
          className='wave'
          viewBox='0 3.71 26.959 38.787'
          width='26.959'
          height='38.787'
          fill='white'>
          <path d='M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z'></path>
          <path d='M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z'></path>
          <path d='M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z'></path>
        </svg>

        <div className='card-number'>
          <div className='section'>3690</div>
          <div className='section'>0369</div>
          <div className='section'>0306</div>
          <div className='section'>0090</div>
        </div>

        <div className='expires'>
          <span className='end-text'>exp. end:</span>
          <span className='end-date'> 11/26</span>
        </div>

        <div className='card-holder'>Mr Voltoshi</div>

        <div className='visa'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='-74.7 -40.204 647.4 241.224'>
            <defs>
              <linearGradient
                x1='0'
                y1='0'
                x2='1'
                y2='0'
                gradientUnits='userSpaceOnUse'
                gradientTransform='scale(89.72793 -89.72793) rotate(-20.218 .966 -.457)'
                spreadMethod='pad'
                id='b'>
                <stop offset='0' stopColor='#ffffff'></stop>
                <stop offset='1' stopColor='#ffffff'></stop>
              </linearGradient>
              <clipPath clipPathUnits='userSpaceOnUse' id='a'>
                <path d='M413.742 90.435c-.057-4.494 4.005-7.002 7.065-8.493 3.144-1.53 4.2-2.511 4.188-3.879-.024-2.094-2.508-3.018-4.833-3.054-4.056-.063-6.414 1.095-8.289 1.971l-1.461-6.837c1.881-.867 5.364-1.623 8.976-1.656 8.478 0 14.025 4.185 14.055 10.674.033 8.235-11.391 8.691-11.313 12.372.027 1.116 1.092 2.307 3.426 2.61 1.155.153 4.344.27 7.959-1.395l1.419 6.615c-1.944.708-4.443 1.386-7.554 1.386-7.98 0-13.593-4.242-13.638-10.314m34.827 9.744c-1.548 0-2.853-.903-3.435-2.289l-12.111-28.917h8.472l1.686 4.659h10.353l.978-4.659h7.467l-6.516 31.206h-6.894m1.185-8.43l2.445-11.718h-6.696l4.251 11.718m-46.284 8.43l-6.678-31.206h8.073l6.675 31.206h-8.07m-11.943 0l-8.403-21.24-3.399 18.06c-.399 2.016-1.974 3.18-3.723 3.18h-13.737l-.192-.906c2.82-.612 6.024-1.599 7.965-2.655 1.188-.645 1.527-1.209 1.917-2.742l6.438-24.903h8.532l13.08 31.206h-8.478'></path>
              </clipPath>
            </defs>
            <g
              clipPath='url(#a)'
              transform='matrix(4.98469 0 0 -4.98469 -1804.82 502.202)'>
              <path
                d='M0 0l98.437 36.252 22.394-60.809-98.436-36.252'
                fill='url(#b)'
                transform='translate(351.611 96.896)'></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CreditCard3d;
