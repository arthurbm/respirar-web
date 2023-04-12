import React from 'react'

import { Icon } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = any

export const IconBase: React.FC<Props> = ({ children, ...props }) => (
	<Icon viewBox="0 0 24 24" fill="none" {...props}>
		{children}
	</Icon>
)
