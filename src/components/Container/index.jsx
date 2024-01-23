export const Container = ({ children }) => {
  return (
    <div className="container">
      <h2>Container header</h2>
      <div style={{ color: '#FFB0F1' }}>{children}</div>
      <p>Container text</p>
    </div>
  )
}
