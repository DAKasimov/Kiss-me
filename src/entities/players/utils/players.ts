import player1 from "../../../assets/profile pictures/Regular face 1.png"
import player2 from "../../../assets/profile pictures/Regular face 2.png"
import player3 from "../../../assets/profile pictures/Regular face 3.png"
import player4 from "../../../assets/profile pictures/Regular face 4.png"
import player5 from "../../../assets/profile pictures/Regular face 5.png"
import player6 from "../../../assets/profile pictures/Regular face 6.png"
import player7 from "../../../assets/profile pictures/Regular face 7.png"
import player8 from "../../../assets/profile pictures/Regular face 8.png"
import player9 from "../../../assets/profile pictures/Regular face 9.png"
import player10 from "../../../assets/profile pictures/Regular face 10.png"

export type Player = {
  id: number
  src: string
  isActive: boolean
  isSelected: boolean
  pos: {
    top?: string
    left?: string
    right?: string
    bottom?: string
    translateX?: string
    translateY?: string
  }
}

export const Players: Player[] = [
  {
    id: 1,
    src: player1,
    isActive: true,
    isSelected: false,
    pos: {
      top: "5%",
      left: "50%",
      translateX: "-50%",
      translateY: "0",
    },
  },
  {
    id: 2,
    src: player2,
    isActive: false,
    isSelected: false,
    pos: {
      top: "23%",
      left: "75%",
      translateX: "-50%",
      translateY: "-50%",
    },
  },
  {
    id: 3,
    src: player3,
    isActive: false,
    isSelected: false,
    pos: {
      top: "35%",
      left: "95%",
      translateX: "-50%",
      translateY: "-50%",
    },
  },
  {
    id: 4,
    src: player4,
    isActive: false,
    isSelected: false,
    pos: {
      top: "55%",
      left: "95%",
      translateX: "-50%",
      translateY: "-50%",
    },
  },
  {
    id: 5,
    src: player5,
    isActive: false,
    isSelected: false,
    pos: {
      top: "83%",
      left: "75%",
      translateX: "-50%",
      translateY: "-100%",
    },
  },
  {
    id: 6,
    src: player6,
    isActive: false,
    isSelected: false,
    pos: {
      top: "89%",
      left: "50%",
      translateX: "-50%",
      translateY: "-50%",
    },
  },
  {
    id: 7,
    src: player7,
    isActive: false,
    isSelected: false,
    pos: {
      top: "80%",
      left: "25%",
      translateX: "-50%",
      translateY: "-50%",
    },
  },
  {
    id: 8,
    src: player8,
    isActive: false,
    isSelected: false,
    pos: {
      top: "55%",
      left: "5%",
      translateX: "-50%",
      translateY: "-50%",
    },
  },
  {
    id: 9,
    src: player9,
    isActive: false,
    isSelected: false,
    pos: {
      top: "35%",
      left: "5%",
      translateX: "-50%",
      translateY: "-50%",
    },
  },
  {
    id: 10,
    src: player10,
    isActive: false,
    isSelected: false,
    pos: {
      top: "23%",
      left: "25%",
      translateX: "-50%",
      translateY: "-50%",
    },
  },
]

export default Players
