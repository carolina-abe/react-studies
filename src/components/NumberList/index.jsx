export const NumberList = ({numbers}) => {
  // key - unique identify for each element
  
  return (
   <ul>
    {numbers.map((number, index) => (
      <li key={index}>{number}</li>
    ))}
   </ul>
  )
}
