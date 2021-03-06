// function with takes a classification and returns the singular version of each
export const nonPlural = (classification) => {
  switch (classification) {
    case 'kingdoms':
      return 'kingdom'
    case 'phyla':
      return 'phylum'
    case 'classes':
      return 'class'
    case 'orders':
      return 'order'
    case 'families':
      return 'family'
    case 'genera':
      return 'genus'
  }
}
