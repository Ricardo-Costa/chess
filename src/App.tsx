import React, { ReactElement, useEffect, useState } from 'react';

import { GameStatus } from './app/types/game-status.type';
import { genereteInitialStatus } from './app/utils/game-status.utils';
import { Block } from './app/components/Block';
import { Footer } from './app/components/Footer';
import './assets/styles.scss';
import 'animate.css';
import { TOTAL_BLOCKS } from './app/configs';

const App = () => {
  const [ gameStatus ] = useState<GameStatus>(genereteInitialStatus());
  const [ blocks ] = useState<number>(TOTAL_BLOCKS);

  const clickBlock = (blockId: number) => {
    console.log('Do something...')
  };

  const renderBlocks = () => {
    const el: ReactElement[] | null = [];
    for (let block=0; block < blocks; block++) {
      el.push(<Block key={block} block={block} clickBlock={clickBlock}/>)
    }
    return el;
  }

  const startGame = () => {
    console.log('Start game...')
  }

  // on start
  useEffect(() => {
      startGame();
    },
    []
  );

  // on unmount
  // useEffect(() => {
  //   return () => {
  //     // Anything in here...
  //   }
  // }, [])

  return (
    <div>
      <div id="main">
        <div id="title"><span>CHESS</span></div>
        <div id="header">{renderBlocks()}</div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
