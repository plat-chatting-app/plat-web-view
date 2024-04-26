export interface PaperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Paper = ({ children, ...divProps }: PaperProps) => {
  return <div {...divProps}>{children}</div>
}

export default Paper
