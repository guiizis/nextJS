export function PostComponent() {
  const names = ['test', 'test 2'];

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