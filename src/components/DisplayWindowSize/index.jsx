import useWindowSize from '../../hooks/useWindowSize'

export const DisplayWindowSize = () => {
  const { height, width } = useWindowSize()
  return (
    <div>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </div>
  )
}
