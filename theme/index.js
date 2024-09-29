
const pallete = [
    // neongreen
    {
        text: '#e6e6e6', 
        bgColor: opacity=> `rgba(156, 255, 0, ${opacity})`,
        bgColor2: opacity=> `rgba(0, 0, 0, ${opacity})`,
    },
    {
        text: '#000', 
        homeText:'#013320',
        bgColor: opacity=> `rgba(210, 222, 50, ${opacity})`,
        bgColor2: opacity=> `rgba(0, 0, 0, ${opacity})`,
        bgWhite:opacity=> `rgba(255, 255, 255, ${opacity})`,
        bgBlack:opacity=> `rgba(0, 0, 0, ${opacity})`,
    },
    {   // orange
        text: '#f97316', 
        bgColor: opacity=> `rgba(251, 146, 60, ${opacity})`,
        bgColor2: opacity=> `rgba(0, 0, 0, ${opacity})`,
    },
    {   // dark gray
        text: '#334155', 
        bgColor: opacity=> `rgba(30, 41, 59, ${opacity})`,
        bgColor2: opacity=> `rgba(0, 0, 0, ${opacity})`,
    },
    {   // purple
        text: '#7c3aed', 
        bgColor: opacity=> `rgba(167, 139, 250, ${opacity})`,
        bgColor2: opacity=> `rgba(1, 1, 0, ${opacity})`,
    },
    {   // green
        text: '#009950', 
        bgColor: opacity=> `rgba(0, 179, 89, ${opacity})`,
        bgColor2: opacity=> `rgba(0, 0, 0, ${opacity})`,
    },
    {
        // teal
        text: '#14b8a6',
        bgColor: opacity=> `rgba(45, 212, 191, ${opacity})`,
        bgColor2: opacity=> `rgba(0, 0, 0, ${opacity})`,
    },
    {
        // red
        text: '#dc2626',
        bgColor: opacity=> `rgba(248, 113, 113, ${opacity})`,
        bgColor2: opacity=> `rgba(0, 0, 0, ${opacity})`,
    }

]
export const themeColors = {
    ...pallete[1]
}