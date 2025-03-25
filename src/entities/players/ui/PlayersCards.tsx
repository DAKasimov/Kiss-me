import React, { useEffect, useRef } from "react"
import { PlayerCard } from "../../player/ui/PlayerCard"
import useAppStore from "../../../shared/config/store"
import anime from "animejs"
import Sound from "../../../assets/sounds/Kiss sound.mp3"

export const PlayersCards: React.FC = () => {
  const players = useAppStore((state) => state.players)
  const isStartRotation = useAppStore((state) => state.isStartRotation)
  const currentPlayer = useAppStore((state) => state.currentPlayer)
  const selectedPlayer = useAppStore((state) => state.selectedPlayer)
  const isFinishRotation = useAppStore((state) => state.isFinishRotation)

  const setIsStartRotation = useAppStore((state) => state.setIsStartRotation)
  const setIsFinishRotation = useAppStore((state) => state.setIsFinishRotation)
  const setIsKissBlock = useAppStore((state) => state.setIsKissBlock)
  const setCurrentPlayer = useAppStore((state) => state.setCurrentPlayer)
  const incrementKissCounter = useAppStore(
    (state) => state.incrementKissCounter
  )
  const setIsGameLaunch = useAppStore((state) => state.setIsGameLaunch)

  const currentPlayerRef = useRef<HTMLDivElement>(null)
  const selectedPlayerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isStartRotation) {
      setIsStartRotation(false)
    }
  }, [isStartRotation, currentPlayer, selectedPlayer, setIsStartRotation])

  useEffect(() => {
    if (
      isFinishRotation &&
      currentPlayerRef.current &&
      selectedPlayerRef.current
    ) {
      const sound = new Audio(Sound)
      anime({
        targets: currentPlayerRef.current,
        scale: 1.5,
        left: "40%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
        easing: "easeInOutQuad",
        duration: 1500,
      })

      anime({
        targets: selectedPlayerRef.current,
        scale: 1.5,
        left: "60%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%",
        easing: "easeInOutQuad",
        duration: 1500,
        complete: () => {
          setTimeout(() => {
            sound.play()
            setIsKissBlock(true)
            incrementKissCounter()
            setTimeout(() => {
              setIsKissBlock(false)
              sound.pause()
              anime({
                targets: currentPlayerRef.current,
                scale: 1.0,
                left: currentPlayer.pos.left,
                top: currentPlayer.pos.top,
                translateX: currentPlayer.pos.translateX,
                translateY: currentPlayer.pos.translateY,
                easing: "easeInOutQuad",
                duration: 1000,
              })

              anime({
                targets: selectedPlayerRef.current,
                scale: 1.0,
                left: selectedPlayer.pos.left,
                top: selectedPlayer.pos.top,
                translateX: selectedPlayer.pos.translateX,
                translateY: selectedPlayer.pos.translateY,
                easing: "easeInOutQuad",
                duration: 1000,
                complete: () => {
                  setCurrentPlayer(selectedPlayer)
                  setIsGameLaunch(true)
                },
              })
            }, 2000)
          }, 2000)
        },
      })
      setIsFinishRotation(false)
    }
  }, [
    isFinishRotation,
    currentPlayer,
    selectedPlayer,
    setIsFinishRotation,
    setIsKissBlock,
    incrementKissCounter,
    setCurrentPlayer,
    setIsGameLaunch,
  ])

  return (
    <>
      {players.map((item) => {
        const isCurrent = item.id === currentPlayer?.id
        const isSelected = item.id === selectedPlayer?.id
        return (
          <PlayerCard
            src={item.src}
            pos={item.pos}
            isActive={item.isActive}
            key={item.id}
            ref={
              isCurrent
                ? currentPlayerRef
                : isSelected
                ? selectedPlayerRef
                : null
            }
          />
        )
      })}
    </>
  )
}
