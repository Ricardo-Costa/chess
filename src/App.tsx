import React, { ReactElement, useEffect, useState } from 'react';

import { GameStatus } from './app/types/game-status.type';
import { genereteInitialStatus } from './app/utils/game-status.utils';
import { Block } from './app/components/Block';
import { Footer } from './app/components/Footer';
import './assets/styles.scss';
import 'animate.css';
import AnalizeActions from './app/actions/analize';
import { PieceField } from './app/models/piece-field';
import Player from './app/models/player';
import { Players } from './app/enum/players.enum';

const App = () => {
  const [ gameStatus, setGameStatus ] = useState<GameStatus>(genereteInitialStatus());
  const [ targetPiece, setTargetPiece ] = useState<PieceField|undefined>(undefined);
  const [ highlightAvailableActions, setHighlightAvailableActions ] = useState<string[]>([]);
  const [ positions ] = useState<string[]>([]); // TODO TEMP

  const playerOne = new Player(Players.ONE, "Player One", 0);
  const playerTwo = new Player(Players.TWO, "Player Two", 0);

  const clickBlock = (position: string) => {
    const pieceField: PieceField = Reflect.get(gameStatus.fieldState, position);

    // set target piece
    if (pieceField.getPiece() && !targetPiece) {
      const availableActions = AnalizeActions.identifyOptions(
        pieceField.getPlayerTag(),
        pieceField.getPiece(),
        gameStatus
      );

      setTargetPiece(pieceField);
      setHighlightAvailableActions(availableActions);
    }
    // set new position
    else if (!pieceField.getPiece() && targetPiece) {
      // is a valid new position
      if (highlightAvailableActions.includes(position)) {
        const newGameStatus: GameStatus = targetPiece.setPosition(targetPiece, position, gameStatus);
        setGameStatus(newGameStatus);

        setTargetPiece(undefined);
        setHighlightAvailableActions([]);
      }
    }
    
    positions.push(position);
  };

  const renderBlocks = () => {
    const el: ReactElement[] | null = [];
    for (const fieldPosition in gameStatus.fieldState) {
      el.push(
        <Block
          highlight={highlightAvailableActions.includes(fieldPosition)}
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
