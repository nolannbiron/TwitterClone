import {
    extendTheme,
    withDefaultColorScheme,
    theme as baseTheme,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

const colors = {
    ...baseTheme.colors,
	borderColor: "rgb(47, 51, 54)"
}

const components = {
	Button: {
		baseStyle: {
			borderRadius: '9999px',
			minHeight: 10,
			"_hover": {
				"_disabled":{
					bg: '',
				}
			}
		},
		variants:{
			primary:{
				bg:'blue.500',
				color:'white',
				"_hover": {
					"_disabled":{
						bg: 'blue.500',
					}
				}
			},
		},
	},
	Textarea: {
		baseStyle: {
			borderBottom: "solid 1px",
			borderColor: "transparent"
		},
		variants:{
			newPost: {
				fontSize: "1.3rem",
				border: "none",
				resize: "none",
				background: "transparent",
				borderRadius: 0,
				"_focus": {
					outline: 0,
					borderBottom: "solid 1px",
					borderColor: "blue.500",
				}
			}
		}
	}
}

const config = {
    initialColorMode: 'dark',
}

const customTheme = extendTheme({
    colors,
    components,
    config,
    styles: {
        global: () => ({
          body: {
            bg: "rgb(0,0,0)",
		  },
		  "*": {
				borderColor: "rgb(47, 51, 54)"
			}
        })
      },
})

export default customTheme;