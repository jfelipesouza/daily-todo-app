import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import NotFoundImage from '../assets/images/404.svg'

import { Container, ImageContainer, Message } from '../styles/pages/404'

const NotFoundScreen: React.FC = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Container>
        <Message href="/">Oh no! Essa pagina não existe</Message>
        <ImageContainer>
          <Image
            alt="not found image"
            src={NotFoundImage}
            fill
            loading="lazy"
          />
        </ImageContainer>

        <div className="custom-shape-divider-bottom-1669585819">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 600"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
            data-name="Layer 1"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,600 C 0,600 0,400 0,400 C 75.31100478468898,415.444976076555 150.62200956937795,430.8899521531101 246,411 C 341.37799043062205,391.1100478468899 456.82296650717706,335.8851674641148 550,342 C 643.1770334928229,348.1148325358852 714.0861244019138,415.56937799043067 810,448 C 905.9138755980862,480.43062200956933 1026.8325358851675,477.8373205741627 1136,464 C 1245.1674641148325,450.1626794258373 1342.5837320574162,425.08133971291863 1440,400 C 1440,400 1440,600 1440,600 Z"
              stroke="none"
              stroke-width="0"
              fill="url(#gradient)"
              fill-opacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="75%" y1="7%" x2="25%" y2="93%">
                <stop offset="5%" stop-color="#5625c0"></stop>
                <stop offset="95%" stop-color="#8903d7"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,600 C 0,600 0,200 0,200 C 71.46411483253587,226.0956937799043 142.92822966507174,252.19138755980862 252,238 C 361.07177033492826,223.80861244019138 507.7511961722488,169.33014354066987 605,166 C 702.2488038277512,162.66985645933013 750.0669856459331,210.48803827751195 833,226 C 915.9330143540669,241.51196172248805 1033.980861244019,224.7177033492823 1141,215 C 1248.019138755981,205.2822966507177 1344.0095693779904,202.64114832535887 1440,200 C 1440,200 1440,600 1440,600 Z"
              stroke="none"
              stroke-width="0"
              fill="url(#gradient)"
              fill-opacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="75%" y1="7%" x2="25%" y2="93%">
                <stop offset="5%" stop-color="#2d6c93"></stop>
                <stop offset="95%" stop-color="#7e10bd"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,600 C 0,600 0,400 0,400 C 98.14354066985646,363.02392344497605 196.28708133971293,326.04784688995215 283,337 C 369.7129186602871,347.95215311004785 444.9952153110048,406.83253588516754 543,423 C 641.0047846889952,439.16746411483246 761.7320574162678,412.62200956937795 872,415 C 982.2679425837322,417.37799043062205 1082.0765550239234,448.6794258373206 1175,451 C 1267.9234449760766,453.3205741626794 1353.9617224880383,426.6602870813397 1440,400 C 1440,400 1440,600 1440,600 Z"
              stroke="none"
              stroke-width="0"
              fill="url(#gradient)"
              fill-opacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>
          </svg>
        </div>
      </Container>
    </>
  )
}

export default NotFoundScreen
