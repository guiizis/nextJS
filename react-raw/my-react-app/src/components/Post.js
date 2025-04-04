export function PostComponent({names}) {
  return (
    <div>
     {
     names.map(arrayItem => {
      return (
        <div key={arrayItem}>
          <h1>{arrayItem}</h1>
          <p>Some text</p>
        </div>
      )
     })}
    </div>
  )
}