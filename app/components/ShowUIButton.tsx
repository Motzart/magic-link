"use client"
import { useMagic } from "../context/MagicProvider"

const ShowUIButton = () => {
  const { magic } = useMagic()

  // Define the event handler for the button click
  const handleShowUI = async () => {
    try {
      // Try to show the magic wallet user interface
      await magic?.wallet.showUI()
    } catch (error) {
      // Log any errors that occur during the process
      console.error("handleShowUI:", error)
    }
  }

  return (
    <button
      className="w-auto border border-white font-bold p-2 rounded-md"
      onClick={handleShowUI}
    >
      After register you can press this button to show the magic wallet user interface
    </button>
  )
}

export default ShowUIButton
