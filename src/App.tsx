import React, { ReactElement, useEffect, useState } from 'react';

import { GameStatus } from './app/types/game-status.type';
import { genereteInitialStatus } from './app/utils/game-status.utils';
import { Block } from './app/components/Block';
import { Footer } from './app/components/Footer';
import './assets/styles.scss';
import 'animate.css';
import AnalizeActions from './app/actions/analize';
import { PieceField } from './app/models/piece-field';

const App = () => {
  const [ gameStatus, setGameStatus ] = useState<GameStatus>(genereteInitialStatus());
  const [ targetPiece, setTargetPiece ] = useState<PieceField|undefined>(undefined);
  const [ positions ] = useState<string[]>([]);

  const clickBlock = (position: string) => {
    const pieceField: PieceField = Reflect.get(gameStatus.fieldState, position);

    // set target piece
    if (pieceField.getPiece() && !targetPiece) {
      // TODO varificar se posição válida
      // const availableActions = AnalizeActions.identifyOptions(
      //   piece,
      //   gameStatus
      // );

      setTargetPiece(pieceField);
    }
    // set new position
    else if (!pieceField.getPiece() && targetPiece) {

      // TODO varificar se posição válida
      // const availableActions = AnalizeActions.identifyOptions(
      //   piece,
      //   gameStatus
      // );
      
      const newGameStatus: GameStatus = targetPiece.setPosition(targetPiece, position, gameStatus);
      setGameStatus(newGameStatus);
      setTargetPiece(undefined);
    }
    
    positions.push(position);
  };

  const renderBlocks = () => {
    const el: ReactElement[] | null = [];
    for (const fieldPosition in gameStatus.fieldState) {
      el.push(
        <Block
          key={fieldPosition}
          position={fieldPosition}
          pieceField={Reflect.get(gameStatus.fieldState, fieldPosition)}
          clickBlock={clickBlock}
        />
      )
    }
    return el;
  }

  // const startGame = () => {
  //   console.log('Start game...')
  // }

  // // on start
  // useEffect(() => {
  //     startGame();
  //   },
  //   []
  // );

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
