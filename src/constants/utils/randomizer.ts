const randomizer = <T>(data: readonly T[], total: number): T[] => {
  const max = data.length

  if (total > max) {
    throw new Error('Total requested exceeds the data length.')
  }

  const indices = new Set<number>()

  while (indices.size < total) {
    const randomIndex = Math.floor(Math.random() * max)
    indices.add(randomIndex)
  }

  return Array.from(indices)
    .map(index => data[index])
    .filter((item): item is T => item !== undefined)
}

export default randomizer
