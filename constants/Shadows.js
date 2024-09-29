const lightShadow={
    elevation: 4, // Android shadow level
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow position
    shadowOpacity: 0.1, // iOS shadow opacity
    shadowRadius: 2, // iOS shadow blur radius
  }

  // Medium shadow
  const mediumShadow= {
    elevation: 8, // Android shadow level
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow position
    shadowOpacity: 0.15, // iOS shadow opacity
    shadowRadius: 3.5, // iOS shadow blur radius
  }

  // Heavy shadow
  const heavyShadow= {
    elevation: 12, // Android shadow level
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 6 }, // iOS shadow position
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowRadius: 5, // iOS shadow blur radius
  }


  export { lightShadow, mediumShadow, heavyShadow };