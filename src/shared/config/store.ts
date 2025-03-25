import { create } from "zustand"
import Players, { Player } from "../../entities/players/utils/players"

type AppState = {
  players: Player[]
  kissCounter: number
  currentPlayer: Player
  selectedPlayer: Player
  isStartRotation: boolean
  isFinishRotation: boolean
  isKissBlock: boolean
  isGameLaunch: boolean
  isTime: boolean
  startGame: boolean
  setStartGame: (value: boolean) => void
  setIsTime: (value: boolean) => void
  setIsGameLaunch: (value: boolean) => void
  setIsKissBlock: (value: boolean) => void
  setIsStartRotation: (value: boolean) => void
  setIsFinishRotation: (value: boolean) => void
  setSelectedPlayer: (player: Player) => void
  setCurrentPlayer: (player: Player) => void
  incrementKissCounter: () => void
}

const useAppStore = create<AppState>((set) => ({
  players: Players,
  currentPlayer: Players[0],
  kissCounter: 0,
  selectedPlayer: {} as Player,
  isStartRotation: false,
  isFinishRotation: false,
  isKissBlock: false,
  isGameLaunch: false,
  isTime: false,
  startGame: false,
  setStartGame: (value: boolean) =>
    set((state) => {
      const startGame = value

      return {
        ...state,
        startGame: startGame,
      }
    }),
  setIsTime: (value: boolean) =>
    set((state) => {
      const isTime = value
      return {
        ...state,
        isTime: isTime,
      }
    }),
  setIsGameLaunch: (value: boolean) =>
    set((state) => {
      const isGameLaunch = value
      return {
        ...state,
        isGameLaunch: isGameLaunch,
      }
    }),
  setIsKissBlock: (value: boolean) =>
    set((state) => {
      const isKissBlock = value
      return {
        ...state,
        isKissBlock: isKissBlock,
      }
    }),
  setIsStartRotation: (value: boolean) =>
    set((state) => {
      const isStartRotation = value
      return {
        ...state,
        isStartRotation: isStartRotation,
      }
    }),
  setIsFinishRotation: (value: boolean) =>
    set((state) => {
      const isFinishRotation = value
      return {
        ...state,
        isFinishRotation: isFinishRotation,
      }
    }),
  setSelectedPlayer: (player: Player) =>
    set((state) => {
      const updatedPlayers = [...state.players]
      updatedPlayers.forEach((item) => {
        if (item.id === player.id) {
          item.isSelected = true
          item.isActive = false
        }
      })
      return {
        ...state,
        players: updatedPlayers,
        selectedPlayer: player,
      }
    }),
  setCurrentPlayer: (player: Player) =>
    set((state) => {
      state.players.forEach((item) => {
        item.isActive = false
        item.isSelected = false
      })
      const updatedPlayers = [...state.players]
      updatedPlayers.forEach((item) => {
        if (item.id === player.id) {
          item.isActive = true
          item.isSelected = false
        }
      })
      return {
        ...state,
        players: updatedPlayers,
        currentPlayer: player,
      }
    }),

  incrementKissCounter: () =>
    set((state) => ({
      kissCounter: state.kissCounter + 1,
    })),
}))

export default useAppStore
