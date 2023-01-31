import type { ReactNode } from "react"

interface IProps {
    children: ReactNode
}

const Text = ({children}: IProps) => <p>
    {children}
</p>
export default Text
