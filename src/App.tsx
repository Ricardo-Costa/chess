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
  const [ positions ] = useState<string[]>([]);


  const clickBlock = (blockId: number, position: string) => {
    console.log('Do something...')
    positions.push(position)
    console.log(positions)
  };

  const renderBlocks = () => {
    const el: ReactElement[] | null = [];
    let blockKey = 0;
    for (const fieldPosition in gameStatus.fieldState) {
      blockKey = Date.now() * Math.random()
      el.push(
        <Block
          key={blockKey}
          block={blockKey}
          position={fieldPosition}
          pieceField={Reflect.get(gameStatus.fieldState, fieldPosition)}
          clickBlock={clickBlock}
        />
      )
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
