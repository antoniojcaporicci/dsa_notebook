type Cracker = {
  size: number;
  surfaceTension: number;
}

type CrackerDictionary = {
  [name: string]: Cracker;
}

const crackerDictionary: CrackerDictionary = {
  "Ritz": {
    size: 12,
    surfaceTension: 4
  },
  "Triscuit": {
    size: 14,
    surfaceTension: 5
  },
  "Wheat Thins": {
    size: 10,
    surfaceTension: 3
  },
  "Cheez-It": {
    size: 8,
    surfaceTension: 2
  },
  "Saltines": {
    size: 15,
    surfaceTension: 6
  }
}

const numberOfCrackerCrumbs = (cracker: Cracker): number => {
  const helper = (size: number, tension: number, crumbs: number): number => {
    if (size <= tension) {
      return crumbs
    }

    crumbs += helper(size / 2, tension, crumbs + 1)

    return crumbs
  }

  return helper(cracker.size, cracker.surfaceTension, 0)
}


console.log(numberOfCrackerCrumbs(crackerDictionary.Saltines))