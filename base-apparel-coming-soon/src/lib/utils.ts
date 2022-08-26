export let screenWidth = 0;

const windowCalc = async () => {
    screenWidth = window.innerWidth
    console.log(screenWidth)
}

export const checkWindowRef = () => {
    if (typeof window !== "undefined") {
        windowCalc()
      }
      console.log(screenWidth)
}

checkWindowRef()

