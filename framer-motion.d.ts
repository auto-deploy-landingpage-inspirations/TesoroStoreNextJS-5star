import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import * as React from "react"
import { Hydrate } from "react-query/hydration"

declare module "framer-motion" {
  export default interface AnimatePresenceProps {
    children?: React.ReactNode
  }
  export {motion} from "framer-motion/types"
  export {AnimatePresence} from "framer-motion/types"
}



// declare module "motion" {
//   export * from "framer-motion/types"
// }